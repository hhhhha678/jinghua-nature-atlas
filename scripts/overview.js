const monthButtons = Array.from(document.querySelectorAll('.month-button'));
const monthSummary = document.getElementById('monthSummary');
const monthMapLink = document.getElementById('monthMapLink');
const todayButton = document.getElementById('todayButton');
const categoryItems = Array.from(document.querySelectorAll('.category-item'));
const categoryGuide = document.querySelector('.category-guide');
const exhibitionMode = document.getElementById('exhibitionMode');
const carouselImages = document.getElementById('overviewCarouselImages');
const carouselTitle = document.getElementById('overviewCarouselTitle');

const implementedCategories = [
  { href: 'yulan.html?from=home', delay: 0 },
  { href: 'eryuelan.html?from=home', delay: 5200 },
  { href: 'species.html?species=yueji&from=home', delay: 10400 },
  { href: 'species.html?species=luwei&from=home', delay: 15600 },
  { href: 'species.html?species=yuyan&from=home', delay: 20800 },
  { href: 'species.html?species=zhonghuaqiushaya&from=home', delay: 26000 },
  { href: 'species.html?species=yinxing&from=home', delay: 31200 },
  { href: 'species.html?species=cebai&from=home', delay: 36400 },
  { href: 'species.html?species=xiangshanhongye&from=home', delay: 41600 },
  { href: 'species.html?species=yongdinghe&from=home', delay: 46800 },
];

const carouselSlides = [
  { slug: 'yulan', index: '01', title: '早春玉兰', images: ['01-yulan-line.jpeg', '01-yulan-transition.jpeg', '01-yulan-full.jpeg'] },
  { slug: 'eryuelan', index: '02', title: '林下二月兰', images: ['02-eryuelan-line.jpeg', '02-eryuelan-transition.jpeg', '02-eryuelan-full.jpeg'] },
  { slug: 'yueji', index: '03', title: '城市月季', images: ['03-yueji-line.jpg', '03-yueji-transition.jpg', '03-yueji-full.jpg'] },
  { slug: 'luwei', index: '04', title: '湿地芦苇', images: ['04-luwei-line.jpg', '04-luwei-transition.jpg', '04-luwei-full.jpg'] },
  { slug: 'yuyan', index: '05', title: '城楼雨燕', images: ['05-yuyan-line.jpeg', '05-yuyan-transition.jpeg', '05-yuyan-full.jpeg'] },
  { slug: 'zhonghuaqiushaya', index: '06', title: '清流秋沙鸭', images: ['06-zhonghuaqiushaya-line.jpg', '06-zhonghuaqiushaya-transition.jpg', '06-zhonghuaqiushaya-full.jpg'] },
  { slug: 'yinxing', index: '07', title: '秋日银杏', images: ['07-yinxing-line.jpeg', '07-yinxing-transition.jpeg', '07-yinxing-full.jpeg'] },
  { slug: 'cebai', index: '08', title: '古柏森然', images: ['08-cebai-line.jpg', '08-cebai-transition.jpg', '08-cebai-full.jpg'] },
  { slug: 'xiangshanhongye', index: '09', title: '香山秋色', images: ['09-xiangshanhongye-line.jpeg', '09-xiangshanhongye-transition.jpeg', '09-xiangshanhongye-full.jpeg'] },
  { slug: 'yongdinghe', index: '10', title: '永定河脉', images: ['10-yongdinghe-line.jpeg', '10-yongdinghe-transition.jpeg', '10-yongdinghe-full.jpeg'] },
];

function updateProgress() {
  const visited = JSON.parse(localStorage.getItem('jinghua-visited') || '[]');
  categoryItems.forEach((item) => {
    const pathname = new URL(item.href, location.href).pathname.replace(/^\//, '');
    item.classList.toggle('is-visited', visited.includes(pathname));
  });
}

let carouselSlideIndex = 0;
let carouselTimers = [];
let carouselInterval;
let carouselRenderToken = 0;
let carouselStarted = false;

/* 每一阶段的展示间隔：线稿 → 过渡版 → 完整版 */
const STAGE_INTERVAL = 1300;

/** 把某一组的三张图提前塞进浏览器缓存，切换时才不会"空一拍" */
function preloadSlide(slideIndex) {
  const slide = carouselSlides[slideIndex % carouselSlides.length];
  slide.images.forEach((name) => {
    const image = new Image();
    image.src = `material/shouye/${name}`;
  });
}

function showCarouselSlide(slideIndex) {
  carouselTimers.forEach((timer) => window.clearTimeout(timer));
  carouselTimers = [];
  carouselSlideIndex = slideIndex;
  const slide = carouselSlides[slideIndex % carouselSlides.length];
  carouselTitle.textContent = slide.title;

  // 旧的一组先留在原地，新的一组盖在它上面淡入。
  // 直接清空容器的话，换主题时会"旧图瞬间消失 → 空白 → 新图出现"，看着就是一卡。
  // 同时必须立刻摘掉旧的 is-active：否则旧图会一直停在 0.8，
  // 在新图彼此交替的间隙里透出来，看起来就是两层图糊在一起。
  const previous = Array.from(carouselImages.querySelectorAll('img'));
  previous.forEach((image) => image.classList.remove('is-active'));

  // 这里刻意不给第一张加 is-active：
  // 带着 is-active 建出来的元素，浏览器首次计算样式就是 opacity 0.8，
  // 而 CSS 过渡不会在初始样式上触发——线稿会"啪"地出现，而不是淡入。
  const images = slide.images.map((name) => {
    const image = document.createElement('img');
    image.className = 'overview-carousel-image';
    image.alt = '';
    image.src = `material/shouye/${name}`;
    carouselImages.appendChild(image);
    return image;
  });

  const token = ++carouselRenderToken;

  // 关键：等三张图都加载完再走时序。
  // 否则过渡版/完整版会在图片还没到的时候就开始淡入，看上去就是一跳一跳的跳变。
  Promise.all(images.map((image) => (
    image.complete ? Promise.resolve() : new Promise((resolve) => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    })
  ))).then(() => {
    if (token !== carouselRenderToken) return;
    images.forEach((image, index) => {
      carouselTimers.push(window.setTimeout(() => {
        if (token !== carouselRenderToken) return;
        images.forEach((item) => item.classList.remove('is-active'));
        image.classList.add('is-active');
      }, index * STAGE_INTERVAL));
    });
    // 旧的这一组已经淡出（CSS 过渡 1500ms），等它彻底透明后再摘掉
    if (previous.length) {
      carouselTimers.push(window.setTimeout(() => {
        previous.forEach((image) => image.remove());
      }, STAGE_INTERVAL + 300));
    }
    // 趁这一组还在展示，把下一组预热进缓存
    preloadSlide(slideIndex + 1);
  });
}

function startCarousel(index) {
  carouselStarted = true;
  showCarouselSlide(index);
  window.clearInterval(carouselInterval);
  carouselInterval = window.setInterval(() => {
    carouselSlideIndex = (carouselSlideIndex + 1) % carouselSlides.length;
    showCarouselSlide(carouselSlideIndex);
  }, 5200);
}

/** 年历联动：按月份筛出主题，并让轮播停在当月第一个主题上 */
function applyMonth(month) {
  const calendar = JinghuaCalendar;
  const visibleSlugs = new Set(calendar.themesInMonth(month).map((item) => item.slug));
  const isThisMonth = calendar.isCurrentMonth(month);

  monthButtons.forEach((button) => {
    const isActive = Number(button.dataset.month) === month;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
    // 当月的那个月份按钮额外标出来，让"为什么默认停在这个月"一眼可见
    button.classList.toggle('is-today', isThisMonth && isActive);
  });

  categoryItems.forEach((item) => {
    const inMonth = calendar.isInMonth(item.dataset.slug, month);
    item.hidden = !inMonth;
    // "本月"角标只在看当月、且这个主题确实当月可赏时出现
    item.classList.toggle('is-current', isThisMonth && inMonth);
  });
  categoryGuide.classList.toggle('is-filtered', Boolean(month));

  todayButton.classList.toggle('is-active', isThisMonth);
  todayButton.setAttribute('aria-pressed', String(isThisMonth));
  todayButton.setAttribute(
    'aria-label',
    isThisMonth ? '当前展示的就是本月可赏主题' : '回到本月可赏主题',
  );

  const count = month ? visibleSlugs.size : calendar.THEMES.length;
  monthSummary.textContent = month
    ? `${calendar.monthScopeText(month)} · ${calendar.seasonText(month)} · ${count} 个主题可赏`
    : `全年 · ${count} 个主题`;
  monthMapLink.href = calendar.mapHref('', month);
  monthMapLink.setAttribute('aria-label', month ? `在观赏地图上查看 ${calendar.monthText(month)}的观赏地点` : '在观赏地图上查看全部观赏地点');

  if (month) {
    const firstIndex = carouselSlides.findIndex((slide) => visibleSlugs.has(slide.slug));
    if (firstIndex >= 0) startCarousel(firstIndex);
  }
}

/* ---------- 今天的京华自然 ----------
 * 打开首页默认就落在"当月"，而不是全年：月份按钮、主题筛选、轮播与
 * "在地图上查看"的深链会一起对齐到同一个月份。
 * 用户在本次会话里手动选过月份的话优先尊重他的选择（sessionStorage，
 * 关掉标签页即失效），这样从主题页返回首页不会把筛选重置掉。 */
const HOME_MONTH_KEY = 'jinghua-home-month';

function readPreferredMonth() {
  try {
    const stored = window.sessionStorage.getItem(HOME_MONTH_KEY);
    if (stored !== null) return JinghuaCalendar.normalizeMonth(stored);
  } catch (error) {
    /* 隐私模式下 sessionStorage 可能不可用，退回当月 */
  }
  return JinghuaCalendar.currentMonth();
}

function rememberMonth(month) {
  try {
    window.sessionStorage.setItem(HOME_MONTH_KEY, String(month));
  } catch (error) {
    /* 忽略 */
  }
}

/** 给每个主题条目挂一个"本月"角标，位置由 .category-item 的第三列负责 */
categoryItems.forEach((item) => {
  if (item.querySelector('.category-now')) return;
  const badge = document.createElement('span');
  badge.className = 'category-now';
  badge.textContent = '本月';
  item.appendChild(badge);
});

/* 「今天的京华自然」初始化。
   万一 theme-calendar.js 没就绪（被拦、加载失败、解析出错等），
   这里退化成"全年"而不是让整段脚本中断，标题栏与主题列表照常可用。 */
try {
  todayButton.textContent = `今天 · ${JinghuaCalendar.todayLabel()}`;

  monthButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const month = JinghuaCalendar.normalizeMonth(button.dataset.month);
      rememberMonth(month);
      applyMonth(month);
    });
  });

  todayButton.addEventListener('click', () => {
    const month = JinghuaCalendar.currentMonth();
    rememberMonth(month);
    applyMonth(month);
  });

  /** 首屏对齐到当月（或本会话里用户自己选的月份）。
      当月有可赏主题时，applyMonth 会顺手把轮播开到该主题上。 */
  applyMonth(readPreferredMonth());
} catch (error) {
  console.error('自然年历初始化失败，首页退化为全年视图', error);
}

/* 轮播兜底。正常路径下 applyMonth 已经把它开好了，这里绝不能再启动一次：
   重复调用会重建 <img>，把上一次还在飞行中的图片请求丢掉重来，
   首屏会白闪一下、再从当前主题跳回第一个主题。 */
if (!carouselStarted) startCarousel(0);

exhibitionMode.addEventListener('click', () => {
  exhibitionMode.classList.add('is-playing');
  exhibitionMode.textContent = '展览播放中';
  JinghuaCalendar.startExhibition('yulan');
  window.location.href = implementedCategories[0].href;
});

updateProgress();

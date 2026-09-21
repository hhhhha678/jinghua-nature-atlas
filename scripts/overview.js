const monthButtons = Array.from(document.querySelectorAll('.month-button'));
const monthSummary = document.getElementById('monthSummary');
const monthMapLink = document.getElementById('monthMapLink');
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

function showCarouselSlide(slideIndex) {
  carouselTimers.forEach((timer) => window.clearTimeout(timer));
  carouselTimers = [];
  carouselSlideIndex = slideIndex;
  const slide = carouselSlides[slideIndex % carouselSlides.length];
  carouselTitle.textContent = slide.title;
  carouselImages.innerHTML = slide.images.map((name, index) => (
    `<img class="overview-carousel-image ${index === 0 ? 'is-active' : ''}" src="material/shouye/${name}" alt="" />`
  )).join('');

  const images = Array.from(carouselImages.querySelectorAll('img'));
  images.forEach((image, index) => {
      carouselTimers.push(window.setTimeout(() => {
        images.forEach((item) => item.classList.remove('is-active'));
        image.classList.add('is-active');
      }, index * 1300));
  });
}

function startCarousel(index) {
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

  monthButtons.forEach((button) => {
    const isActive = Number(button.dataset.month) === month;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  categoryItems.forEach((item) => {
    item.hidden = !calendar.isInMonth(item.dataset.slug, month);
  });
  categoryGuide.classList.toggle('is-filtered', Boolean(month));

  const count = month ? visibleSlugs.size : calendar.THEMES.length;
  monthSummary.textContent = month
    ? `${calendar.monthText(month)} · ${calendar.seasonText(month)} · ${count} 个主题可赏`
    : `全年 · ${count} 个主题`;
  monthMapLink.href = calendar.mapHref('', month);
  monthMapLink.setAttribute('aria-label', month ? `在观赏地图上查看 ${month} 月的观赏地点` : '在观赏地图上查看全部观赏地点');

  if (month) {
    const firstIndex = carouselSlides.findIndex((slide) => visibleSlugs.has(slide.slug));
    if (firstIndex >= 0) startCarousel(firstIndex);
  }
}

startCarousel(0);

monthButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyMonth(JinghuaCalendar.normalizeMonth(button.dataset.month));
  });
});

exhibitionMode.addEventListener('click', () => {
  exhibitionMode.classList.add('is-playing');
  exhibitionMode.textContent = '展览播放中';
  JinghuaCalendar.startExhibition('yulan');
  window.location.href = implementedCategories[0].href;
});

updateProgress();

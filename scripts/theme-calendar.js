/* 京华自然 · 自然年历数据源
 *
 * 十个主题的观赏月份取自 scripts/guide.js 中 atlasThemes 的 time 字段，
 * 由首页年历、观赏地图与各物种页共用。这是全站唯一的"观赏月份"数据源，
 * 调整花期只需修改这里。
 */
(function () {
  // covers 取自 material/ 中「首页与分类页都没有出现过、但主题二级页展示过」的照片。
  // culture（自然文脉）与 history（发展之路）各用一张，两页之间不重复。
  const THEMES = [
    { slug: 'yulan', name: '早春玉兰', index: '01', months: [3, 4], category: 'flower',
      covers: { culture: 'material/yulan/garden-color.jpeg', history: 'material/yulan/culture-color-bloom.jpeg' } },
    { slug: 'eryuelan', name: '林下二月兰', index: '02', months: [3, 4, 5], category: 'flower',
      covers: { culture: 'material/eryuelan/city-color.jpeg', history: 'material/eryuelan/ground-color.jpeg' } },
    { slug: 'yueji', name: '城市月季', index: '03', months: [5, 6, 7, 8, 9, 10], category: 'flower',
      covers: { culture: 'material/yueji/rose-city-flower-identity-full.jpg', history: 'material/yueji/rose-life-symbols-full.jpg' } },
    { slug: 'luwei', name: '湿地芦苇', index: '04', months: [6, 7, 8, 9, 10, 11], category: 'wetland',
      covers: { culture: 'material/luwei/reed-beijing-water-full.jpg', history: 'material/luwei/reed-shoreline-full.jpg' } },
    { slug: 'yuyan', name: '城楼雨燕', index: '05', months: [5, 6, 7], category: 'bird',
      covers: { culture: 'material/yuyan/swift-heritage-nest-full.jpeg', history: 'material/yuyan/swift-migration-journey-full.jpeg' } },
    { slug: 'zhonghuaqiushaya', name: '清流秋沙鸭', index: '06', months: [12, 1, 2], category: 'bird',
      covers: { culture: 'material/zhonghuaqiushaya/merganser-beijing-record-full.jpg', history: 'material/zhonghuaqiushaya/merganser-ecological-indicator-full.jpg' } },
    { slug: 'yinxing', name: '秋日银杏', index: '07', months: [10, 11], category: 'tree',
      covers: { culture: 'material/yinxing/ginkgo-seasonal-change-full.jpeg', history: 'material/yinxing/ginkgo-ancient-tree-value-full.jpeg' } },
    { slug: 'cebai', name: '古柏森然', index: '08', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], category: 'tree',
      covers: { culture: 'material/cebai/cedar-ancient-tree-full.jpg', history: 'material/cebai/cedar-habitat-meaning-full.jpg' } },
    { slug: 'xiangshanhongye', name: '香山秋色', index: '09', months: [10, 11], category: 'mountain',
      covers: { culture: 'material/xiangshanhongye/xiangshan-mountain-space-full.jpeg', history: 'material/xiangshanhongye/xiangshan-urban-seasonality-full.jpeg' } },
    { slug: 'yongdinghe', name: '永定河脉', index: '10', months: [9, 10, 11, 12, 1, 2, 3], category: 'wetland',
      covers: { culture: 'material/yongdinghe/yongdinghe-river-identity-full.jpeg', history: 'material/yongdinghe/yongdinghe-vegetation-habitat-full.jpeg' } },
  ];

  const SEASON_BY_MONTH = {
    1: 'winter', 2: 'winter', 3: 'spring', 4: 'spring', 5: 'spring',
    6: 'summer', 7: 'summer', 8: 'summer',
    9: 'autumn', 10: 'autumn', 11: 'autumn', 12: 'winter',
  };
  const SEASON_LABEL = { spring: '春季', summer: '夏季', autumn: '秋季', winter: '冬季' };

  const bySlug = new Map(THEMES.map((item) => [item.slug, item]));

  function theme(slug) {
    return bySlug.get(slug) || null;
  }

  function monthsOf(slug) {
    const item = bySlug.get(slug);
    return item ? item.months.slice() : [];
  }

  /** 0 表示全年 */
  function normalizeMonth(value) {
    const month = Number.parseInt(value, 10);
    return Number.isInteger(month) && month >= 1 && month <= 12 ? month : 0;
  }

  function themesInMonth(month) {
    if (!month) return THEMES.slice();
    return THEMES.filter((item) => item.months.includes(month));
  }

  function isInMonth(slug, month) {
    if (!month) return true;
    const item = bySlug.get(slug);
    return Boolean(item) && item.months.includes(month);
  }

  function seasonOfMonth(month) {
    return month ? SEASON_BY_MONTH[month] : '';
  }

  function seasonLabelOf(month) {
    return SEASON_LABEL[seasonOfMonth(month)] || '';
  }

  function monthText(month) {
    return month ? `${month}月` : '全年';
  }

  function seasonText(month) {
    const season = seasonOfMonth(month);
    return season ? SEASON_LABEL[season] : '';
  }

  /* ---------- 今天 ----------
   * 「今天的京华自然」整套逻辑都从本地时区的当前日期出发，不写死任何常量，
   * 首页年历与观赏地图共用这三个函数，保证两边永远指的"当月"是同一个。 */
  function currentMonth() {
    return new Date().getMonth() + 1;
  }

  function todayLabel() {
    const now = new Date();
    return `${now.getMonth() + 1}月${now.getDate()}日`;
  }

  function isCurrentMonth(month) {
    return Boolean(month) && month === currentMonth();
  }

  /** 「本月 / 3月」这类给界面用的月份说法：当月说"本月"，其余说"3月" */
  function monthScopeText(month) {
    if (!month) return '全年';
    return isCurrentMonth(month) ? '本月' : monthText(month);
  }

  /** 观赏地图 → 物种页 */
  function speciesHref(slug) {
    if (slug === 'yulan') return 'yulan.html';
    if (slug === 'eryuelan') return 'eryuelan.html';
    return `species.html?species=${slug}`;
  }

  /** 物种页 → 观赏地图；带 theme 时地图只保留该主题的观赏地点 */
  function mapHref(slug, month) {
    const params = new URLSearchParams();
    if (slug && bySlug.has(slug)) params.set('theme', slug);
    if (month) params.set('month', String(month));
    const query = params.toString();
    return `guide.html${query ? `?${query}` : ''}`;
  }

  /** 在主题首页（玉兰 / 二月兰 / species.html）挂载"观赏月份"与三个延伸入口 */
  function mountSpeciesLinks(slug) {
    const scene = document.getElementById('magnoliaScene');
    const item = bySlug.get(slug);
    if (!scene || !item || scene.querySelector('.scene-links')) return;

    const links = document.createElement('div');
    links.className = 'scene-links';
    links.innerHTML = [
      `<a class="scene-link" href="${mapHref(slug)}">在地图上查看<span aria-hidden="true">↗</span></a>`,
      `<a class="scene-link" href="culture.html?theme=${slug}">自然文脉<span aria-hidden="true">↗</span></a>`,
      `<a class="scene-link" href="history.html?theme=${slug}">发展之路<span aria-hidden="true">↗</span></a>`,
    ].join('');

    const calendar = document.createElement('div');
    calendar.className = 'scene-calendar';
    calendar.id = 'speciesCalendar';

    const title = document.createElement('span');
    title.className = 'scene-calendar-title';
    title.textContent = '观赏月份';

    const track = document.createElement('div');
    track.className = 'scene-calendar-track';
    for (let month = 1; month <= 12; month += 1) {
      const active = item.months.includes(month);
      const cell = active ? document.createElement('a') : document.createElement('span');
      cell.className = `scene-calendar-month${active ? ' is-active' : ''}`;
      cell.textContent = String(month);
      if (active) {
        cell.href = mapHref(slug, month);
        cell.setAttribute('aria-label', `在地图上查看 ${month} 月的${item.name}`);
      } else {
        cell.setAttribute('aria-hidden', 'true');
      }
      track.appendChild(cell);
    }

    calendar.appendChild(title);
    calendar.appendChild(track);
    scene.appendChild(links);
    scene.appendChild(calendar);
  }

  /** 主题切换标签（纯链接，无 JS 也可用，且可分享） */
  function themeTabsHtml(activeSlug, pageHref) {
    return THEMES.map((item) => {
      const isActive = item.slug === activeSlug;
      return `<a class="topic-tab${isActive ? ' is-active' : ''}" href="${pageHref}?theme=${item.slug}"`
        + `${isActive ? ' aria-current="page"' : ''}>`
        + `<span class="topic-tab-index">${item.index}</span>`
        + `<span class="topic-tab-name">${item.name}</span>`
        + '</a>';
    }).join('');
  }

  /** 给主题页铺上该主题的封面图与色系；pageKey 决定用哪一页专属的封面 */
  function applyTopicTheme(slug, pageKey) {
    const item = bySlug.get(slug);
    const page = document.querySelector('.topic-page');
    if (!item || !page) return;

    // 主题色挂在 html 上，页面外的阅读滑轨与进度条也能继承
    document.documentElement.dataset.category = item.category || '';

    const covers = item.covers || {};
    const image = covers[pageKey] || covers.culture || '';
    if (!image) return;

    let cover = page.querySelector('.topic-cover');
    if (!cover) {
      cover = document.createElement('div');
      cover.className = 'topic-cover';
      cover.setAttribute('aria-hidden', 'true');
      page.insertBefore(cover, page.firstChild);
    }
    cover.style.backgroundImage = `url("${image}")`;
  }

  /* ---------- 展览模式（自动巡展） ----------
   * 旧实现把状态写进 localStorage，一旦中途中断就永久残留，
   * 之后每次打开对应主题页都会在 6.2 秒后被自动跳走。
   * 现在改为：① 只记在本标签页（sessionStorage），关掉标签即失效；
   *           ② 用户任何一次操作都立刻取消这次跳转，绝不把人从当前页带走；
   *           ③ 启动时顺手清掉历史遗留的 localStorage 键。 */
  const EXHIBITION_KEY = 'jinghua-exhibition';

  try {
    window.localStorage.removeItem(EXHIBITION_KEY);
  } catch (error) {
    /* 隐私模式下 localStorage 可能不可用，忽略 */
  }

  function readExhibition() {
    try {
      return window.sessionStorage.getItem(EXHIBITION_KEY) || '';
    } catch (error) {
      return '';
    }
  }

  function writeExhibition(value) {
    try {
      if (value) window.sessionStorage.setItem(EXHIBITION_KEY, value);
      else window.sessionStorage.removeItem(EXHIBITION_KEY);
    } catch (error) {
      /* 忽略 */
    }
  }

  function startExhibition(slug) {
    writeExhibition(slug);
  }

  function stopExhibition() {
    writeExhibition('');
  }

  /** 本页若在巡展队列里就安排跳转；用户一旦碰了页面，立即取消 */
  function scheduleExhibitionAdvance(slug, delay) {
    if (readExhibition() !== slug) return;

    const timer = window.setTimeout(() => {
      const index = THEMES.findIndex((item) => item.slug === slug);
      const next = index >= 0 ? THEMES[index + 1] : null;
      if (next) {
        writeExhibition(next.slug);
        window.location.href = `${next.slug}.html`;
        return;
      }
      stopExhibition();
      window.location.href = 'index.html';
    }, delay || 6200);

    const cancel = () => {
      window.clearTimeout(timer);
      stopExhibition();
    };
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((type) => {
      window.addEventListener(type, cancel, { once: true, passive: true });
    });
  }

  window.JinghuaCalendar = {
    THEMES,
    theme,
    monthsOf,
    normalizeMonth,
    themesInMonth,
    isInMonth,
    seasonOfMonth,
    seasonLabelOf,
    seasonText,
    monthText,
    monthScopeText,
    currentMonth,
    todayLabel,
    isCurrentMonth,
    mapHref,
    speciesHref,
    themeTabsHtml,
    mountSpeciesLinks,
    applyTopicTheme,
    startExhibition,
    stopExhibition,
    scheduleExhibitionAdvance,
  };
})();

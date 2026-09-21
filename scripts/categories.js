const groups = [
  {
    label: '花木',
    title: '花木与花卉',
    note: '春夏 · 花期与城市色彩',
    lead: '从早春先花后叶的玉兰，到花期贯穿夏秋的月季，花木用颜色与时间标记北京的季节。',
    themes: [
      { name: '早春玉兰', slug: 'yulan', href: 'yulan.html', panels: ['form', 'season', 'garden', 'culture'], entries: ['花期与形态', '栽植环境', '城市分布', '物种特征'] },
      { name: '林下二月兰', slug: 'eryuelan', href: 'eryuelan.html', panels: ['form', 'season', 'ground', 'city'], entries: ['花期与形态', '林下生境', '观赏分布', '群落特征'] },
      { name: '城市月季', slug: 'yueji', entries: ['市花身份', '花形与色彩', '花期分布', '观赏特征'] },
    ],
  },
  {
    label: '湿地',
    title: '湿地与水系',
    note: '水岸 · 生态廊道',
    lead: '芦苇与水系把城市和水岸连在一起，河岸的形态也记录着城市与水相处的方式。',
    themes: [
      { name: '湿地芦苇', slug: 'luwei', entries: ['水岸形态', '湿地角色', '北京水系', '群落特征'] },
      { name: '永定河脉', slug: 'yongdinghe', entries: ['河流身份', '生态廊道', '植被与栖息', '水系连通'] },
    ],
  },
  {
    label: '鸟类',
    title: '城市鸟类',
    note: '古建 · 迁徙与共生',
    lead: '从城楼上的雨燕到清流里的秋沙鸭，鸟类让城市的天空与水面多了一种读法。',
    themes: [
      { name: '城楼雨燕', slug: 'yuyan', entries: ['飞行形态', '古建巢址', '迁徙旅程', '城市共生'] },
      { name: '清流秋沙鸭', slug: 'zhonghuaqiushaya', entries: ['识别特征', '保护等级', '北京记录', '生态指示'] },
    ],
  },
  {
    label: '古树',
    title: '古树名木',
    note: '年轮 · 历史空间',
    lead: '古柏用年轮记录时间，也在城市的历史空间里持续生长。',
    themes: [
      { name: '古柏森然', slug: 'cebai', entries: ['市树身份', '树形与四季', '古树价值', '生境意义'] },
    ],
  },
  {
    label: '山地',
    title: '山地季相',
    note: '秋色 · 城市记忆',
    lead: '银杏与香山的秋色，把季节变化写成城市可以走进的山地记忆。',
    themes: [
      { name: '秋日银杏', slug: 'yinxing', entries: ['树种特征', '城市分布', '古树价值', '季相变化'] },
      { name: '香山秋色', slug: 'xiangshanhongye', entries: ['景观识别', '山地空间', '城市季相', '色叶组成'] },
    ],
  },
];

const pad = (value) => String(value).padStart(2, '0');
const themeHome = (theme) => (
  theme.href ? `${theme.href}?from=category` : `species.html?species=${theme.slug}&from=category`
);
const entryHref = (theme, index) => (
  theme.href
    ? `${theme.href}?direct=1&from=category&panel=${theme.panels[index]}`
    : `species.html?species=${theme.slug}&direct=1&from=category&panel=${index}`
);

function resolveGroupIndex() {
  const requested = Number.parseInt(new URLSearchParams(location.search).get('group'), 10);
  if (Number.isInteger(requested) && requested >= 1 && requested <= groups.length) return requested - 1;
  const hash = location.hash.match(/category-group-(\d+)/);
  if (hash) {
    const hashIndex = Number.parseInt(hash[1], 10);
    if (hashIndex >= 1 && hashIndex <= groups.length) return hashIndex - 1;
  }
  return 0;
}

const groupIndex = resolveGroupIndex();
const group = groups[groupIndex];

document.title = `${group.title} · 京华自然`;
document.querySelectorAll('#categoryNav [data-group]').forEach((link) => {
  link.classList.toggle('is-active', Number(link.dataset.group) === groupIndex + 1);
});
document.getElementById('categoryEdition').textContent = `BEIJING NATURE CHRONICLE / ${pad(groupIndex + 1)} CATEGORIES`;
document.getElementById('categoryKicker').textContent = `京华自然志 · ${pad(groupIndex + 1)}`;
document.getElementById('categoryNote').textContent = group.note;
document.getElementById('categoryTitle').textContent = group.title;
document.getElementById('categoryLead').textContent = group.lead;
document.getElementById('categoryFooterIndex').textContent = `${pad(groupIndex + 1)} / ${pad(groups.length)}`;

document.getElementById('categoryThemes').innerHTML = group.themes.map((theme, index) => `
  <article class="theme-card">
    <div class="theme-card-head">
      <span class="theme-card-index">${pad(index + 1)}</span>
      <h2 class="theme-card-title">${theme.name}</h2>
    </div>
    <div class="theme-entry-grid">
      ${theme.entries.map((entry, entryIndex) => (
        `<a href="${entryHref(theme, entryIndex)}">${entry}<span aria-hidden="true">↗</span></a>`
      )).join('')}
    </div>
    <a class="theme-card-enter" href="${themeHome(theme)}">进入主题首页</a>
  </article>
`).join('');

// 每个主题另取一套线稿 / 过渡 / 完整版，与首页轮播的配图不重复。
const carouselArt = {
  yulan: ['yulan/season-line.jpeg', 'yulan/season-transition.jpeg', 'yulan/season-color.jpeg'],
  eryuelan: ['eryuelan/city-bloom-line.jpeg', 'eryuelan/city-bloom-transition.jpeg', 'eryuelan/city-bloom-color.jpeg'],
  yueji: ['yueji/rose-city-bloom-line.jpg', 'yueji/rose-city-bloom-transition.jpg', 'yueji/rose-city-bloom-full.jpg'],
  luwei: ['luwei/reed-wetland-role-line.jpg', 'luwei/reed-wetland-role-transition.jpg', 'luwei/reed-wetland-role-full.jpg'],
  yuyan: ['yuyan/swift-urban-coexistence-line.jpeg', 'yuyan/swift-urban-coexistence-transition.jpeg', 'yuyan/swift-urban-coexistence-full.jpeg'],
  zhonghuaqiushaya: ['zhonghuaqiushaya/merganser-protection-status-line.jpg', 'zhonghuaqiushaya/merganser-protection-status-transition.jpg', 'zhonghuaqiushaya/merganser-protection-status-full.jpg'],
  yinxing: ['yinxing/ginkgo-city-distribution-line.jpeg', 'yinxing/ginkgo-city-distribution-transition.jpeg', 'yinxing/ginkgo-city-distribution-full.jpeg'],
  cebai: ['cebai/cedar-seasonal-form-line.jpg', 'cebai/cedar-seasonal-form-transition.jpg', 'cebai/cedar-seasonal-form-full.jpg'],
  xiangshanhongye: ['xiangshanhongye/xiangshan-landscape-recognition-line.jpeg', 'xiangshanhongye/xiangshan-landscape-recognition-transition.jpeg', 'xiangshanhongye/xiangshan-landscape-recognition-full.jpeg'],
  yongdinghe: ['yongdinghe/yongdinghe-water-connectivity-line.jpeg', 'yongdinghe/yongdinghe-water-connectivity-transition.jpeg', 'yongdinghe/yongdinghe-water-connectivity-full.jpeg'],
};

const carouselImages = document.getElementById('categoryCarouselImages');
const carouselTitle = document.getElementById('categoryCarouselTitle');
let carouselRevealTimers = [];
let carouselIndex = 0;

function showCarouselSlide(slideIndex) {
  carouselRevealTimers.forEach((timer) => window.clearTimeout(timer));
  carouselRevealTimers = [];
  const theme = group.themes[slideIndex % group.themes.length];
  const files = carouselArt[theme.slug] || [];
  carouselTitle.textContent = theme.name;
  carouselImages.innerHTML = files.map((name, index) => (
    `<img class="overview-carousel-image${index === 0 ? ' is-active' : ''}" src="material/${name}" alt="" />`
  )).join('');

  const images = Array.from(carouselImages.querySelectorAll('img'));
  images.forEach((image, index) => {
    carouselRevealTimers.push(window.setTimeout(() => {
      images.forEach((item) => item.classList.remove('is-active'));
      image.classList.add('is-active');
    }, index * 1300));
  });
}

showCarouselSlide(carouselIndex);
if (group.themes.length > 1) {
  window.setInterval(() => {
    carouselIndex = (carouselIndex + 1) % group.themes.length;
    showCarouselSlide(carouselIndex);
  }, 5200);
}

const pageParams = new URLSearchParams(location.search);
const slug = pageParams.get('species') || location.pathname.split('/').pop().replace('.html', '') || 'luwei';

const SPECIES = {
  luwei: {
    name: '湿地芦苇',
    latin: 'Phragmites australis',
    loc: '北京水岸 · 芦苇',
    desc: '一片芦苇，划出水与陆地的柔软边界。',
    hero: 'reed-hero.jpg',
    card: 'reed-card.jpeg',
    panels: [
      { title: '水岸形态', lead: '芦苇常生长在河湖湿地、浅水边缘和潮湿地带。高而直的秆、狭长的叶片和轻盈的穗，让它在水岸形成明显的垂直线条。', images: ['reed-shoreline-line.jpg', 'reed-shoreline-transition.jpg', 'reed-shoreline-full.jpg'] },
      { title: '湿地角色', lead: '芦苇群落是湿地生态系统中常见的植物群落之一。它们可以稳固岸线、提供隐蔽空间，也为鸟类、昆虫和其他小型动物提供觅食与栖息环境。', images: ['reed-wetland-role-line.jpg', 'reed-wetland-role-transition.jpg', 'reed-wetland-role-full.jpg'] },
      { title: '北京水系', lead: '在北京湿地、公园湖岸和河道生态修复空间中，芦苇常承担从水面到陆地的过渡作用。它让人工水岸变得柔和，也让生态空间更适合生命停留。', images: ['reed-beijing-water-line.jpg', 'reed-beijing-water-transition.jpg', 'reed-beijing-water-full.jpg'] },
      { title: '群落特征', lead: '芦苇的美来自风、光和群落。清晨有雾，傍晚有金色逆光，秋冬则有干枯后的银灰质感，是湿地植物中很有辨识度的一类。', images: ['shouye/04-luwei-line.jpg', 'shouye/04-luwei-transition.jpg', 'shouye/04-luwei-full.jpg'] },
    ],
  },
  xiangshanhongye: {
    name: '香山秋色',
    latin: 'Acer truncatum landscape',
    loc: '北京西山 · 香山红叶',
    desc: '山地色彩从叶脉开始，铺展成秋天的城市记忆。',
    hero: 'xiangshan-hero.jpeg',
    card: 'xiangshan-card.jpeg',
    panels: [
      { title: '景观识别', lead: '香山红叶是北京极具代表性的秋季自然景观。每到深秋，山地植被逐渐变色，红、橙、黄、褐交织在山坡和沟谷之间，形成层次丰富的秋色。', images: ['xiangshan-landscape-recognition-line.jpeg', 'xiangshan-landscape-recognition-transition.jpeg', 'xiangshan-landscape-recognition-full.jpeg'] },
      { title: '山地空间', lead: '香山的红叶并非单一平面景观，而是随着海拔、坡向、光照和树种差异呈现出不同变化。登高远望时看山色铺展，近处则能看到叶片纹理和林下光影。', images: ['xiangshan-mountain-space-line.jpeg', 'xiangshan-mountain-space-transition.jpeg', 'xiangshan-mountain-space-full.jpeg'] },
      { title: '城市季相', lead: '对北京人来说，去香山看红叶是一种很有辨识度的季节活动。它把城市生活从街巷引向山地，也让秋天成为一次可以被行走、眺望和等待的体验。', images: ['xiangshan-urban-seasonality-line.jpeg', 'xiangshan-urban-seasonality-transition.jpeg', 'xiangshan-urban-seasonality-full.jpeg'] },
      { title: '色叶组成', lead: '香山秋色可以从一枚变红的叶片切入，逐步扩展到整片山坡。它展示的是树种、坡地和光照共同作用下的色叶变化。', images: ['shouye/09-xiangshanhongye-line.jpeg', 'shouye/09-xiangshanhongye-transition.jpeg', 'shouye/09-xiangshanhongye-full.jpeg'] },
    ],
  },
  yinxing: {
    name: '秋日银杏',
    latin: 'Ginkgo biloba',
    loc: '北京街巷 · 银杏',
    desc: '金色叶片记录城市时间，也记录每一次经过。',
    hero: 'ginkgo-hero.jpeg',
    card: 'ginkgo-card.jpeg',
    panels: [
      { title: '树种特征', lead: '银杏是非常古老的树种，叶片呈扇形，叶脉放射状展开。秋季叶色转黄后，树冠会形成明亮的金色景观，是北京秋天最容易被记住的植物之一。', images: ['shouye/07-yinxing-line.jpeg', 'shouye/07-yinxing-transition.jpeg', 'shouye/07-yinxing-full.jpeg'] },
      { title: '城市分布', lead: '北京多处街道、公园和单位院落都能见到银杏。成排种植时，银杏会形成强烈的空间秩序；落叶铺地时，地面也成为景观的一部分。', images: ['ginkgo-city-distribution-line.jpeg', 'ginkgo-city-distribution-transition.jpeg', 'ginkgo-city-distribution-full.jpeg'] },
      { title: '古树价值', lead: '银杏寿命长，许多古银杏与寺庙、古建和老城空间相关。它们不只提供秋色，也以年轮和树形记录城市变迁。', images: ['ginkgo-ancient-tree-value-line.jpeg', 'ginkgo-ancient-tree-value-transition.jpeg', 'ginkgo-ancient-tree-value-full.jpeg'] },
      { title: '季相变化', lead: '银杏适合用“金色、扇形叶、落叶、时间”来概括。它从新叶、浓绿到金黄的变化，构成了非常清晰的秋季季相。', images: ['ginkgo-seasonal-change-line.jpeg', 'ginkgo-seasonal-change-transition.jpeg', 'ginkgo-seasonal-change-full.jpeg'] },
    ],
  },
  cebai: {
    name: '古柏森然',
    latin: 'Platycladus orientalis',
    loc: '北京古建 · 侧柏',
    desc: '它四季常青，守在坛庙、陵寝与古建旁，把时间站成一棵树。',
    hero: 'cedar-hero.jpg',
    card: 'cedar-card.jpg',
    panels: [
      { title: '市树身份', lead: '侧柏是北京市树之一，也是北京古都风貌中极具代表性的常绿树种。它常出现在坛庙、陵寝、公园和古建周边，与庄重、稳定的空间气质相互呼应。', images: ['shouye/08-cebai-line.jpg', 'shouye/08-cebai-transition.jpg', 'shouye/08-cebai-full.jpg'] },
      { title: '树形与四季', lead: '侧柏树冠紧密，枝叶常绿，叶片呈鳞片状贴伏枝条。与落叶树相比，它的季相变化不剧烈，却在四季中保持稳定的绿色背景。', images: ['cedar-seasonal-form-line.jpg', 'cedar-seasonal-form-transition.jpg', 'cedar-seasonal-form-full.jpg'] },
      { title: '古树价值', lead: '北京不少侧柏已成为古树名木资源。古柏的树皮、枝干和树形记录着漫长生长过程，也让自然生命与城市历史形成可见的连接。', images: ['cedar-ancient-tree-line.jpg', 'cedar-ancient-tree-transition.jpg', 'cedar-ancient-tree-full.jpg'] },
      { title: '生境意义', lead: '侧柏以常绿树冠和稳定树形构成北京历史空间的背景层。它不像花卉那样以盛放吸引视线，而是以长久、沉静和守望构成城市自然的底色。', images: ['cedar-habitat-meaning-line.jpg', 'cedar-habitat-meaning-transition.jpg', 'cedar-habitat-meaning-full.jpg'] },
    ],
  },
  yongdinghe: {
    name: '永定河脉',
    latin: 'Yongding River',
    loc: '北京西部 · 永定河',
    desc: '一条河流，连接山地、城市与更远的湿地。',
    hero: 'yongdinghe-hero.jpeg',
    card: 'yongdinghe-card.jpeg',
    panels: [
      { title: '河流身份', lead: '永定河是北京重要河流之一，长期参与塑造北京西部和南部的地貌、聚落与城市记忆。它既是自然水系，也是北京历史地理叙事中的关键线索。', images: ['yongdinghe-river-identity-line.jpeg', 'yongdinghe-river-identity-transition.jpeg', 'yongdinghe-river-identity-full.jpeg'] },
      { title: '生态廊道', lead: '河流不只是水面本身，还包括岸线、滩地、湿地、植被和动物活动空间。永定河生态修复让河道逐渐从单一工程空间转向更完整的生态廊道。', images: ['shouye/10-yongdinghe-line.jpeg', 'shouye/10-yongdinghe-transition.jpeg', 'shouye/10-yongdinghe-full.jpeg'] },
      { title: '植被与栖息', lead: '永定河连接山地、平原、村镇、公园和城市边缘空间。沿河植被和湿地为鸟类、昆虫及其他生物提供了活动空间。', images: ['yongdinghe-vegetation-habitat-line.jpeg', 'yongdinghe-vegetation-habitat-transition.jpeg', 'yongdinghe-vegetation-habitat-full.jpeg'] },
      { title: '水系连通', lead: '永定河可以从一段岸线、一片湿地，到一条贯通城市的河流来理解。它展示的是水、岸、植物和生境之间的连续关系。', images: ['yongdinghe-water-connectivity-line.jpeg', 'yongdinghe-water-connectivity-transition.jpeg', 'yongdinghe-water-connectivity-full.jpeg'] },
    ],
  },
  yueji: {
    name: '城市月季',
    latin: 'Rosa chinensis',
    loc: '北京城市 · 月季',
    desc: '北京的市花，以漫长花期回应每一段城市生活。',
    hero: 'rose-hero.jpg',
    card: 'rose-card.jpg',
    panels: [
      { title: '市花身份', lead: '月季是北京市市花之一，常出现在道路绿化、公园花境、庭院和公共空间。它不只是一种观赏花卉，也代表北京城市景观中稳定、亲切的花色记忆。', images: ['rose-city-flower-identity-line.jpg', 'rose-city-flower-identity-transition.jpg', 'rose-city-flower-identity-full.jpg'] },
      { title: '花形与色彩', lead: '月季品种众多，花色覆盖红、粉、黄、白、复色等多种类型。重瓣、单瓣、杯状、盘状等不同花形，让它适合承担从花坛主景到路边点缀的多种角色。', images: ['shouye/03-yueji-line.jpg', 'shouye/03-yueji-transition.jpg', 'shouye/03-yueji-full.jpg'] },
      { title: '花期分布', lead: '相比许多只在短时间集中开放的春花，月季观赏期更长。春末至秋季，北京的公园和道路绿化中常能看到持续开放的月季花。', images: ['rose-city-bloom-line.jpg', 'rose-city-bloom-transition.jpg', 'rose-city-bloom-full.jpg'] },
      { title: '观赏特征', lead: '月季很接近日常生活：它可以出现在宏大的花展里，也可以开在居民区的围栏旁。它的美不神秘，而是稳定、热烈、反复回到人的视线中。', images: ['rose-life-symbols-line.jpg', 'rose-life-symbols-transition.jpg', 'rose-life-symbols-full.jpg'] },
    ],
  },
  yuyan: {
    name: '城楼雨燕',
    latin: 'Apus apus pekinensis',
    loc: '北京古建 · 雨燕',
    desc: '雨燕掠过城楼，在古建缝隙中与城市共同生活。',
    hero: 'swift-hero.jpeg',
    card: 'swift-card.jpeg',
    panels: [
      { title: '飞行形态', lead: '北京雨燕身形修长，翅膀呈镰刀状，飞行速度快，常在天空中成群盘旋。它们大部分时间在空中活动，捕食飞行昆虫，给北京夏季天空留下极具辨识度的剪影。', images: ['shouye/05-yuyan-line.jpeg', 'shouye/05-yuyan-transition.jpeg', 'shouye/05-yuyan-full.jpeg'] },
      { title: '古建巢址', lead: '北京雨燕常与古建筑空间联系在一起，城楼、宫殿、庙宇等高大建筑的缝隙与檐部空间，为它们提供了适合筑巢和繁殖的地点。', images: ['swift-heritage-nest-line.jpeg', 'swift-heritage-nest-transition.jpeg', 'swift-heritage-nest-full.jpeg'] },
      { title: '迁徙旅程', lead: '北京雨燕具有长距离迁徙特征，繁殖季来到北京，之后离开城市南迁越冬。它们把北京的夏天与更广阔的迁飞路线连接起来。', images: ['swift-migration-journey-line.jpeg', 'swift-migration-journey-transition.jpeg', 'swift-migration-journey-full.jpeg'] },
      { title: '城市共生', lead: '雨燕提醒人们：城市里的老建筑不仅保存历史，也可能保存生命的通道。保护雨燕，需要关注建筑修缮、巢址保留和城市生物多样性。', images: ['swift-urban-coexistence-line.jpeg', 'swift-urban-coexistence-transition.jpeg', 'swift-urban-coexistence-full.jpeg'] },
    ],
  },
  zhonghuaqiushaya: {
    name: '清流秋沙鸭',
    latin: 'Mergus squamatus',
    loc: '北京清流 · 中华秋沙鸭',
    desc: '清澈河流的冬日来客，是水生态的敏感指示者。',
    hero: 'merganser-hero.jpg',
    card: 'merganser-card.jpg',
    panels: [
      { title: '识别特征', lead: '中华秋沙鸭体形修长，喙窄而尖，适合捕食鱼类等水生动物。雄鸟头部深色并有羽冠，雌鸟头部偏棕色，整体姿态轻捷，常在水面游弋或潜水觅食。', images: ['shouye/06-zhonghuaqiushaya-line.jpg', 'shouye/06-zhonghuaqiushaya-transition.jpg', 'shouye/06-zhonghuaqiushaya-full.jpg'] },
      { title: '保护等级', lead: '中华秋沙鸭已被列为国家一级保护野生动物。它对栖息水域、食物资源和岸线环境要求较高，因此种群记录常受到鸟类调查和自然保护工作的关注。', images: ['merganser-protection-status-line.jpg', 'merganser-protection-status-transition.jpg', 'merganser-protection-status-full.jpg'] },
      { title: '北京记录', lead: '在北京，中华秋沙鸭多与冬季或迁徙季的河湖水域观察联系在一起。清洁、开阔且食物充足的河段，更可能成为它们短暂停留的空间。', images: ['merganser-beijing-record-line.jpg', 'merganser-beijing-record-transition.jpg', 'merganser-beijing-record-full.jpg'] },
      { title: '生态指示', lead: '中华秋沙鸭适合作为“河流健康”的指示物种。它的出现不只是一次鸟类观察，也提示城市水环境、湿地修复和生物多样性之间的关系。', images: ['merganser-ecological-indicator-line.jpg', 'merganser-ecological-indicator-transition.jpg', 'merganser-ecological-indicator-full.jpg'] },
    ],
  },
};

const speciesSlug = slug === 'gubai' ? 'cebai' : (SPECIES[slug] ? slug : 'luwei');
const d = SPECIES[speciesSlug];
const scene = document.getElementById('magnoliaScene');

const groupBySpecies = {
  yulan: 1, eryuelan: 1, yueji: 1,
  luwei: 2, yongdinghe: 2,
  yuyan: 3, zhonghuaqiushaya: 3,
  cebai: 4,
  yinxing: 5, xiangshanhongye: 5,
};
const activeGroupLink = document.querySelector(`#speciesNav a[href="categories.html?group=${groupBySpecies[speciesSlug]}"]`);
if (activeGroupLink) activeGroupLink.classList.add('is-active');
const backToCategory = document.getElementById('backToCategory');
backToCategory.href = `categories.html?group=${groupBySpecies[speciesSlug]}`;
if (pageParams.get('from') === 'home') {
  backToCategory.textContent = '返回首页';
  backToCategory.href = 'index.html';
}
if (pageParams.get('direct') === '1') {
  document.getElementById('subpageClose').textContent = '返回分类页面';
}

const base = d.base === '' ? '' : `material/${speciesSlug}/`;
const assetUrl = (filename) => new URL(filename.includes('/') ? `material/${filename}` : `${base}${filename}`, document.baseURI).href;

document.title = `${d.name} · 京华自然`;
// 编号取全站统一的主题序号（01–10），不再按 SPECIES 的声明顺序推
const themeMeta = JinghuaCalendar.theme(speciesSlug);
document.querySelector('.edition').textContent = `BEIJING NATURE CHRONICLE / ${themeMeta ? themeMeta.index : '--'}`;
document.querySelector('.location').textContent = d.loc;
document.querySelector('.scene-copy h1').textContent = d.name;
document.querySelector('.scene-copy p').textContent = d.desc;
document.querySelector('.caption').textContent = d.latin;
document.querySelector('.drawer-heading span').textContent = `${d.name}分节`;
document.querySelector('.drawer-heading strong').textContent = d.name;
document.querySelector('.drawer-place').textContent = `北京 · ${d.name}分类`;

JinghuaCalendar.mountSpeciesLinks(speciesSlug);

const stageHero = assetUrl(d.hero);
const stageCard = assetUrl(d.card);
document.querySelectorAll('.stage-image').forEach((img) => {
  img.src = stageHero;
});
const infoCard = document.querySelector('.subpage-inner');
infoCard.style.setProperty('--card', `url("${stageCard}")`);

const links = document.querySelector('.drawer-links');
const els = {
  panel: document.getElementById('subpagePanel'),
  stage: document.getElementById('subpageStage'),
  images: document.getElementById('subpageImages'),
  info: document.getElementById('subpageInfo'),
  scrub: document.getElementById('subpageScrubber'),
};

links.innerHTML = d.panels.map((panel, index) => `<button data-panel="p${index}"><span>0${index + 1}</span><strong>${panel.title}</strong></button>`).join('');

let subpageOpenToken = 0;
let readyTimer;
let autoTimer;
const panelIds = ['form', 'season', 'garden', 'culture'];

function renderPanel(index) {
  const panel = d.panels[index];
  const panelId = panelIds[index] || `p${index}`;
  document.getElementById('subpageIndex').textContent = `0${index + 1}`;
  document.getElementById('subpageTitle').textContent = panel.title;
  document.getElementById('subpageInfoIndex').textContent = `0${index + 1}`;
  document.getElementById('subpageInfoTitle').textContent = panel.title;
  document.getElementById('subpageLead').textContent = panel.lead;
  document.getElementById('subpageContent').innerHTML = (panel.content || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
  els.images.innerHTML = panel.images.map((filename, imageIndex) => `<img class="subpage-image subpage-image-${imageIndex + 1}" src="${assetUrl(filename)}" alt="">`).join('');
  els.stage.dataset.panel = panelId;
  els.stage.classList.toggle('is-culture', panelId === 'culture');
  els.stage.classList.remove('is-loaded', 'is-ready', 'is-revealed', 'is-scrubbing');
  els.info.setAttribute('aria-hidden', 'true');
  els.scrub.value = '0';
  els.stage.style.setProperty('--scrub-progress', '0');
  els.panel.classList.add('is-active');

  subpageOpenToken += 1;
  const currentToken = subpageOpenToken;
  window.clearTimeout(readyTimer);
  window.clearInterval(autoTimer);

  const loadedImages = [...els.images.querySelectorAll('img')];
  Promise.all(loadedImages.map((image) => (
    image.complete ? Promise.resolve() : new Promise((resolve) => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    })
  ))).then(() => {
    if (currentToken !== subpageOpenToken) return;
    els.stage.classList.add('is-loaded');
    startAutoScrub(currentToken);
    readyTimer = window.setTimeout(() => {
      if (currentToken !== subpageOpenToken) return;
      els.stage.classList.add('is-ready');
    }, 1700);
  });
}

links.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  const index = Number(button.dataset.panel.slice(1));
  renderPanel(index);
});

const initialPanelParam = pageParams.get('panel');
const initialPanelIndex = initialPanelParam === null ? Number.NaN : Number(initialPanelParam);
if (Number.isInteger(initialPanelIndex) && d.panels[initialPanelIndex]) {
  document.documentElement.classList.add('is-direct-entry');
  renderPanel(initialPanelIndex);
}

function closeSubpage() {
  if (document.documentElement.classList.contains('is-direct-entry')) {
    window.location.href = backToCategory.href;
    return;
  }
  document.documentElement.classList.remove('is-direct-entry');
  subpageOpenToken += 1;
  window.clearTimeout(readyTimer);
  window.clearInterval(autoTimer);
  els.panel.classList.remove('is-active');
  els.panel.setAttribute('aria-hidden', 'true');
  els.stage.classList.remove('is-loaded', 'is-ready', 'is-revealed', 'is-culture', 'is-scrubbing');
  els.info.setAttribute('aria-hidden', 'true');
  els.images.innerHTML = '';
}

document.getElementById('subpageReveal').onclick = () => {
  if (!els.stage.classList.contains('is-ready')) return;
  const isRevealed = els.stage.classList.toggle('is-revealed');
  els.info.setAttribute('aria-hidden', String(!isRevealed));
};
document.getElementById('subpageClose').onclick = closeSubpage;

function setProgress(value) {
  const progress = Math.max(0, Math.min(1, value));
  els.scrub.value = Math.round(progress * 100);
  els.stage.style.setProperty('--scrub-progress', progress);
}

function scrubImages(value) {
  const progress = Math.max(0, Math.min(1, value));
  els.scrub.value = Math.round(progress * 100);
  els.stage.style.setProperty('--scrub-progress', progress);
  const images = [...els.images.querySelectorAll('img')];
  const step = 1 / Math.max(images.length - 1, 1);
  images.forEach((img, index) => {
    const distance = Math.abs(progress - index * step) / step;
    img.style.opacity = String(Math.max(0, 1 - distance));
    img.style.filter = `blur(${Math.min(distance * 4, 4)}px) saturate(${0.82 + progress * 0.16})`;
  });
}

function startAutoScrub(token) {
  window.clearInterval(autoTimer);
  const started = performance.now();
  autoTimer = window.setInterval(() => {
    if (token !== subpageOpenToken) {
      window.clearInterval(autoTimer);
      return;
    }
    const progress = Math.min((performance.now() - started) / 4300, 1);
    setProgress(progress);
    if (progress >= 1) window.clearInterval(autoTimer);
  }, 40);
}

els.scrub.addEventListener('input', () => {
  window.clearInterval(autoTimer);
  els.stage.classList.add('is-scrubbing');
  scrubImages(Number(els.scrub.value) / 100);
});

scene.classList.add('is-colored', 'is-open');
document.getElementById('detailDrawer').setAttribute('aria-hidden', 'false');

// 展览模式：仅当本标签页主动开启过巡展时才安排跳转，且用户一有操作即取消
JinghuaCalendar.scheduleExhibitionAdvance(speciesSlug);

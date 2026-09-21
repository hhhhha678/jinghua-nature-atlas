const scene = document.getElementById('magnoliaScene');
const drawer = document.getElementById('detailDrawer');
const subpagePanel = document.getElementById('subpagePanel');
const subpageStage = document.getElementById('subpageStage');
const subpageImages = document.getElementById('subpageImages');
const subpageClose = document.getElementById('subpageClose');
const subpageReveal = document.getElementById('subpageReveal');
const subpageInfo = document.getElementById('subpageInfo');
const subpageIndex = document.getElementById('subpageIndex');
const subpageTitle = document.getElementById('subpageTitle');
const subpageInfoIndex = document.getElementById('subpageInfoIndex');
const subpageInfoTitle = document.getElementById('subpageInfoTitle');
const subpageLead = document.getElementById('subpageLead');
const subpageContent = document.getElementById('subpageContent');
const detailLinks = Array.from(document.querySelectorAll('[data-panel]'));
const scrubber = document.getElementById('subpageScrubber');
const backToCategory = document.getElementById('backToCategory');
const searchParams = new URLSearchParams(location.search);
const directEntry = searchParams.get('direct') === '1';
if (searchParams.get('from') === 'home') {
  backToCategory.textContent = '返回首页';
  backToCategory.href = 'index.html';
}
if (directEntry) subpageClose.textContent = '返回分类页面';
const visited = JSON.parse(localStorage.getItem('jinghua-visited') || '[]');
if (!visited.includes('yulan.html')) {
  visited.push('yulan.html');
  localStorage.setItem('jinghua-visited', JSON.stringify(visited));
}
let subpageOpenToken = 0;
let readyTimer;
let scrubTimer;

const asset = (name) => (name.includes('/') ? `material/${name}` : `material/yulan/${name}`);

const panels = {
  form: {
    index: '01',
    title: '花期与形态',
    revealDelay: 1700,
    lead: '北京地区玉兰多在早春进入观赏期，花朵常先于叶片开放。花被片洁白厚实，开放时向上舒展，枝条还未完全返青，花色已经先把春天点亮。',
    images: [
      asset('shouye/01-yulan-line.jpeg'),
      asset('shouye/01-yulan-transition.jpeg'),
      asset('shouye/01-yulan-full.jpeg'),
    ],
    content: [],
  },
  season: {
    index: '02',
    title: '栽植环境',
    revealDelay: 1700,
    lead: '玉兰适合栽植在庭院、园路和建筑前后。老树花开时，枝形、院墙和檐线共同构成层次，植物本身也成为观察季节变化的对象。',
    images: [
      asset('season-line.jpeg'),
      asset('season-transition.jpeg'),
      asset('season-color.jpeg'),
    ],
    content: [],
  },
  garden: {
    index: '03',
    title: '城市分布',
    revealDelay: 1700,
    lead: '玉兰是北京春季较早形成观赏热点的花木。公园、庭院和古建空间里的玉兰常与灰墙、红墙、屋檐同框，是北京春日里常见的花木分布。',
    images: [
      asset('garden-half-open-line.jpeg'),
      asset('garden-bloom-line.jpeg'),
      asset('garden-half-color-transition.jpeg'),
      asset('garden-color.jpeg'),
    ],
    content: [],
  },
  culture: {
    index: '04',
    title: '物种特征',
    revealDelay: 1700,
    lead: '白玉兰常被赋予明净、高洁、端正的意味。它的花形向上，颜色素净，在北京环境中既柔和又挺拔，是春季最容易辨认的花木之一。',
    images: [
      asset('culture-line-bud.jpeg'),
      asset('culture-line-bloom.jpeg'),
      asset('culture-color-bloom.jpeg'),
    ],
    content: [],
  },
};

detailLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const panel = panels[link.dataset.panel];
    if (!panel) return;

    subpageIndex.textContent = panel.index;
    subpageTitle.textContent = panel.title;
    subpageInfoIndex.textContent = panel.index;
    subpageInfoTitle.textContent = panel.title;
    subpageLead.textContent = panel.lead;
    subpageLead.hidden = !panel.lead;
    subpageContent.innerHTML = panel.content.map((paragraph) => `<p>${paragraph}</p>`).join('');
    subpageImages.innerHTML = panel.images.map((src, index) => (
      `<img class="subpage-image subpage-image-${index + 1}" src="${src}" alt="" />`
    )).join('');
    subpageStage.dataset.panel = link.dataset.panel;
    subpageStage.classList.toggle('is-culture', link.dataset.panel === 'culture');
    subpageStage.classList.remove('is-loaded', 'is-ready', 'is-revealed');
    subpageInfo.setAttribute('aria-hidden', 'true');
    scrubber.value = '0';
    subpageStage.style.setProperty('--scrub-progress', '0');
    subpagePanel.classList.add('is-active');
    subpagePanel.setAttribute('aria-hidden', 'false');

    subpageOpenToken += 1;
    const currentToken = subpageOpenToken;
    window.clearTimeout(readyTimer);
    const loadedImages = Array.from(subpageImages.querySelectorAll('img'));
    Promise.all(loadedImages.map((image) => (
      image.complete ? Promise.resolve() : new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      })
    ))).then(() => {
      if (currentToken !== subpageOpenToken) return;
      subpageStage.classList.add('is-loaded');
      const startedAt = performance.now();
      window.clearInterval(scrubTimer);
      scrubTimer = window.setInterval(() => {
        const progress = Math.min((performance.now() - startedAt) / 4300, 1);
        scrubber.value = String(Math.round(progress * 100));
        subpageStage.style.setProperty('--scrub-progress', progress);
        if (progress >= 1) window.clearInterval(scrubTimer);
      }, 40);
      readyTimer = window.setTimeout(() => {
        if (currentToken !== subpageOpenToken) return;
        subpageStage.classList.add('is-ready');
      }, panel.revealDelay);
    });
  });
});

const initialPanel = new URLSearchParams(location.search).get('panel');
if (initialPanel && panels[initialPanel]) {
  const initialLink = detailLinks.find((link) => link.dataset.panel === initialPanel);
  if (initialLink) initialLink.click();
}

scene.classList.add('is-open');
drawer.setAttribute('aria-hidden', 'false');

window.setTimeout(() => {
  scene.classList.add('is-colored');
}, 2600);

// 展览模式：仅当本标签页主动开启过巡展时才安排跳转，且用户一有操作即取消
JinghuaCalendar.scheduleExhibitionAdvance('yulan');

function closeSubpage() {
  if (document.documentElement.classList.contains('is-direct-entry')) {
    window.location.href = backToCategory.href;
    return;
  }
  document.documentElement.classList.remove('is-direct-entry');
  subpageOpenToken += 1;
  window.clearTimeout(readyTimer);
  subpagePanel.classList.remove('is-active');
  subpagePanel.setAttribute('aria-hidden', 'true');
  subpageStage.classList.remove('is-loaded', 'is-ready', 'is-revealed');
  subpageStage.classList.remove('is-culture');
  subpageInfo.setAttribute('aria-hidden', 'true');
  subpageImages.innerHTML = '';
  subpageStage.classList.remove('is-scrubbing');
  window.clearInterval(scrubTimer);
}

subpageClose.addEventListener('click', closeSubpage);
subpageReveal.addEventListener('click', () => {
  if (!subpageStage.classList.contains('is-ready')) return;
  const isRevealed = subpageStage.classList.toggle('is-revealed');
  subpageInfo.setAttribute('aria-hidden', String(!isRevealed));
});

scrubber.addEventListener('input', () => {
  window.clearInterval(scrubTimer);
  const progress = Number(scrubber.value) / 100;
  subpageStage.style.setProperty('--scrub-progress', progress);
  subpageStage.classList.add('is-scrubbing');
  const images = Array.from(subpageImages.querySelectorAll('img'));
  const step = 1 / Math.max(images.length - 1, 1);
  images.forEach((image, index) => {
    const distance = Math.abs(progress - index * step) / step;
    image.style.opacity = String(Math.max(0, 1 - distance));
    image.style.filter = `blur(${Math.min(distance * 4, 4)}px) saturate(${0.82 + progress * 0.16})`;
  });
});
subpageStage.addEventListener('click', (event) => {
  if (
    !subpageStage.classList.contains('is-ready')
    || event.target.closest('button')
    || subpageStage.classList.contains('is-revealed')
  ) return;
  subpageStage.classList.add('is-revealed');
  subpageInfo.setAttribute('aria-hidden', 'false');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (subpageStage.classList.contains('is-revealed')) {
      subpageStage.classList.remove('is-revealed');
      subpageInfo.setAttribute('aria-hidden', 'true');
      return;
    }
    if (subpagePanel.classList.contains('is-active')) {
      closeSubpage();
      return;
    }
    scene.classList.remove('is-open');
    scene.classList.remove('is-colored');
    drawer.setAttribute('aria-hidden', 'true');
  }
});

JinghuaCalendar.mountSpeciesLinks('yulan');

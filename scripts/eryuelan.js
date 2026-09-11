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
if (!visited.includes('eryuelan.html')) {
  visited.push('eryuelan.html');
  localStorage.setItem('jinghua-visited', JSON.stringify(visited));
}
let subpageOpenToken = 0;
let readyTimer;
let scrubTimer;

const asset = (name) => (name.includes('/') ? `material/${name}` : `material/eryuelan/${name}`);

const panels = {
  form: {
    index: '01',
    title: '花期与形态',
    revealDelay: 1700,
    lead: '二月兰为十字花科诸葛菜属一年或二年生草本，花朵多为蓝紫色，也可见淡红或白色。小花四瓣，成片开放时并不靠单朵取胜，而是用密集的色彩把地面铺成花海。',
    images: [
      asset('shouye/02-eryuelan-line.jpeg'),
      asset('shouye/02-eryuelan-transition.jpeg'),
      asset('shouye/02-eryuelan-full.jpeg'),
    ],
    content: [],
  },
  season: {
    index: '02',
    title: '林下生境',
    revealDelay: 1700,
    lead: '二月兰适应性较强，耐寒、耐阴，常见于林下、路边、草地和公园绿地。北京许多公园会利用它形成自然感很强的春季地被景观，让树下空间也拥有明亮的花色。',
    images: [
      asset('ground-line.jpeg'),
      asset('ground-transition.jpeg'),
      asset('ground-color.jpeg'),
    ],
    content: [],
  },
  ground: {
    index: '03',
    title: '观赏分布',
    revealDelay: 1700,
    lead: '北京二月兰观赏期多集中在 3 月至 5 月。天坛公园、将府公园、圆明园遗址公园、汉石桥湿地公园等地都可见二月兰景观，其中成片开放的蓝紫花海最具识别度。',
    images: [
      asset('city-bloom-line.jpeg'),
      asset('city-bloom-transition.jpeg'),
      asset('city-bloom-color.jpeg'),
    ],
    content: [],
  },
  city: {
    index: '04',
    title: '群落特征',
    revealDelay: 1700,
    lead: '二月兰的气质质朴而轻盈。它常在大树、古建、绿道和滨水空间旁自然铺展，不像高大乔木那样塑造天际线，却能改变人的步行视线，让早春的北京从地面开始变柔软。',
    images: [
      asset('city-line.jpeg'),
      asset('city-transition.jpeg'),
      asset('city-color.jpeg'),
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
    subpageStage.classList.toggle('is-culture', link.dataset.panel === 'city');
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

window.setTimeout(() => {
  scene.classList.add('is-colored', 'is-open');
  drawer.setAttribute('aria-hidden', 'false');
}, 2600);

if (localStorage.getItem('jinghua-exhibition') === 'eryuelan') {
  window.setTimeout(() => {
    localStorage.setItem('jinghua-exhibition', 'yueji');
    window.location.href = 'yueji.html';
  }, 6200);
}

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

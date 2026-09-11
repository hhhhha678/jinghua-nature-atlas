const seasonButtons = Array.from(document.querySelectorAll('.season-button'));
const categoryItems = Array.from(document.querySelectorAll('.category-item'));
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
  { index: '01', title: '早春玉兰', images: ['01-yulan-line.jpeg', '01-yulan-transition.jpeg', '01-yulan-full.jpeg'] },
  { index: '02', title: '林下二月兰', images: ['02-eryuelan-line.jpeg', '02-eryuelan-transition.jpeg', '02-eryuelan-full.jpeg'] },
  { index: '03', title: '城市月季', images: ['03-yueji-line.jpg', '03-yueji-transition.jpg', '03-yueji-full.jpg'] },
  { index: '04', title: '湿地芦苇', images: ['04-luwei-line.jpg', '04-luwei-transition.jpg', '04-luwei-full.jpg'] },
  { index: '05', title: '城楼雨燕', images: ['05-yuyan-line.jpeg', '05-yuyan-transition.jpeg', '05-yuyan-full.jpeg'] },
  { index: '06', title: '清流秋沙鸭', images: ['06-zhonghuaqiushaya-line.jpg', '06-zhonghuaqiushaya-transition.jpg', '06-zhonghuaqiushaya-full.jpg'] },
  { index: '07', title: '秋日银杏', images: ['07-yinxing-line.jpeg', '07-yinxing-transition.jpeg', '07-yinxing-full.jpeg'] },
  { index: '08', title: '古柏森然', images: ['08-cebai-line.jpg', '08-cebai-transition.jpg', '08-cebai-full.jpg'] },
  { index: '09', title: '香山秋色', images: ['09-xiangshanhongye-line.jpeg', '09-xiangshanhongye-transition.jpeg', '09-xiangshanhongye-full.jpeg'] },
  { index: '10', title: '永定河脉', images: ['10-yongdinghe-line.jpeg', '10-yongdinghe-transition.jpeg', '10-yongdinghe-full.jpeg'] },
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

function showCarouselSlide(slideIndex) {
  carouselTimers.forEach((timer) => window.clearTimeout(timer));
  carouselTimers = [];
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

showCarouselSlide(carouselSlideIndex);
window.setInterval(() => {
  carouselSlideIndex = (carouselSlideIndex + 1) % carouselSlides.length;
  showCarouselSlide(carouselSlideIndex);
}, 5200);

seasonButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const season = button.dataset.season;
    seasonButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    categoryItems.forEach((item) => {
      const seasons = item.dataset.season || 'all';
      item.hidden = season !== 'all' && !seasons.split(' ').includes(season);
    });
  });
});

exhibitionMode.addEventListener('click', () => {
  exhibitionMode.classList.add('is-playing');
  exhibitionMode.textContent = '展览播放中';
  localStorage.setItem('jinghua-exhibition', 'yulan');
  window.location.href = implementedCategories[0].href;
});

updateProgress();

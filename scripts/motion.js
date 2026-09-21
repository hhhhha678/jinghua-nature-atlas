/* 京华自然 · 主级页面动效
 *
 * 按页面上实际存在的选择器自动挂载，所以同一份脚本可以给首页、分类页、
 * 观赏攻略、自然文脉、发展之路共用，不需要在各页写配置。
 *
 * · 浮动：给成块的文字与卡片加极慢的上下浮动，逐个错开相位
 * · 悬浮：一道柔光掠过 + 飘出几片花瓣/叶片（主题页会取当前主题色）
 */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  // 会做「自然浮动」的块
  const FLOAT_TARGETS = [
    '.overview-copy',
    '.category-item',
    '.theme-card',
    '.poem-card',
    '.book-item',
    '.fact-item',
    '.atlas-legend',
    '.atlas-detail',
  ];

  // 会在悬浮时出现柔光与花瓣的卡片
  const CARD_TARGETS = [
    '.category-item',
    '.theme-card',
    '.poem-card',
    '.book-item',
    '.fact-item',
    '.atlas-legend-item',
  ];

  const FALLBACK_PALETTE = ['#caa875', '#8ba36f', '#d9b96a'];

  function accentOf(element) {
    const accent = window.getComputedStyle(element).getPropertyValue('--topic-accent').trim();
    return accent || '';
  }

  function spawnPetals(card) {
    const accent = accentOf(card);
    const palette = accent ? [accent, '#8ba36f', '#d9b96a'] : FALLBACK_PALETTE;
    const count = 4;

    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement('span');
      petal.className = 'motion-petal';
      petal.setAttribute('aria-hidden', 'true');
      petal.style.left = `${16 + Math.random() * 66}%`;
      petal.style.background = palette[i % palette.length];
      petal.style.setProperty('--dx', `${(Math.random() * 46 - 23).toFixed(1)}px`);
      petal.style.setProperty('--rot', `${(Math.random() * 300 - 150).toFixed(0)}deg`);
      petal.style.animationDelay = `${i * 90}ms`;
      card.appendChild(petal);
      window.setTimeout(() => petal.remove(), 1700 + i * 90);
    }
  }

  // 只对命中的元素动手，避免在不需要的页面上留下空壳
  FLOAT_TARGETS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add('motion-float');
      // 相位错开，避免所有块同频上下
      element.style.setProperty('--float-duration', `${8.5 + (index % 4) * 1.2}s`);
      element.style.setProperty('--float-delay', `${-(index % 7) * 1.1}s`);
    });
  });

  CARD_TARGETS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('motion-card');
    });
  });

  let current = null;

  document.addEventListener(
    'pointerenter',
    (event) => {
      const card = event.target.closest ? event.target.closest('.motion-card') : null;
      if (!card || card === current) return;
      current = card;
      spawnPetals(card);
    },
    true,
  );

  document.addEventListener(
    'pointerleave',
    (event) => {
      const card = event.target.closest ? event.target.closest('.motion-card') : null;
      if (card && card === current) current = null;
    },
    true,
  );
})();

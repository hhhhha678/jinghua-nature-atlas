/* 京华自然 · 长页面阅读滑轨
 *
 * 两个主题页（自然文脉 / 发展之路）各自有一到五个版块，正文很长。
 * 这里自动读取已渲染的 .topic-section，生成右侧竖向滑轨：
 *   · 轨道填充 = 整页阅读进度
 *   · 章节圆点 = 锚点导航，滚动时自动高亮当前章节
 *   · 窄屏隐藏滑轨，改为顶部细进度条
 * 因为章节是从 DOM 里读的，两个页面共用同一份逻辑，不需要各自配置。
 */
(function () {
  const content = document.getElementById('topicContent');
  if (!content) return;

  // 滚动发生在 .topic-page 内部（与「观赏攻略」一致），不是视口
  const scroller = document.querySelector('.topic-page') || document.documentElement;

  const sections = Array.from(content.querySelectorAll('.topic-section'));
  if (!sections.length) return;

  const rail = document.createElement('nav');
  rail.className = 'topic-rail';
  rail.id = 'topicRail';
  rail.setAttribute('aria-label', '本页章节导航');

  const track = document.createElement('span');
  track.className = 'topic-rail-track';
  track.setAttribute('aria-hidden', 'true');
  const fill = document.createElement('span');
  fill.className = 'topic-rail-fill';
  track.appendChild(fill);

  const list = document.createElement('ol');
  list.className = 'topic-rail-list';

  const entries = sections.map((section, index) => {
    const id = `topic-sec-${index + 1}`;
    section.id = id;

    const heading = section.querySelector('.topic-section-head h2');
    const label = heading && heading.textContent.trim() ? heading.textContent.trim() : `第 ${index + 1} 节`;

    const item = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'topic-rail-link';
    link.href = `#${id}`;

    const labelEl = document.createElement('span');
    labelEl.className = 'topic-rail-label';
    labelEl.textContent = label;

    const dot = document.createElement('span');
    dot.className = 'topic-rail-dot';
    dot.setAttribute('aria-hidden', 'true');

    link.appendChild(labelEl);
    link.appendChild(dot);
    item.appendChild(link);
    list.appendChild(item);
    return { section, link };
  });

  const inner = document.createElement('div');
  inner.className = 'topic-rail-inner';
  inner.appendChild(track);
  inner.appendChild(list);
  rail.appendChild(inner);
  document.body.appendChild(rail);

  const bar = document.createElement('span');
  bar.className = 'topic-progress-bar';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  let activeIndex = -1;

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;
    entries.forEach((entry, i) => {
      const isActive = i === index;
      entry.link.classList.toggle('is-active', isActive);
      if (isActive) entry.link.setAttribute('aria-current', 'true');
      else entry.link.removeAttribute('aria-current');
    });
  }

  function update() {
    const max = scroller.scrollHeight - scroller.clientHeight;
    const progress = max > 0 ? Math.min(Math.max(scroller.scrollTop / max, 0), 1) : 0;
    fill.style.height = `${(progress * 100).toFixed(2)}%`;
    bar.style.transform = `scaleX(${progress.toFixed(4)})`;

    // 当前章节 = 最后一个已经越过滚动容器顶部的版块
    const threshold = scroller.getBoundingClientRect().top + 120;
    let index = 0;
    entries.forEach((entry, i) => {
      if (entry.section.getBoundingClientRect().top <= threshold) index = i;
    });
    setActive(index);
  }

  let ticking = false;
  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  }

  scroller.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();

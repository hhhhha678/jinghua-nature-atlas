/* 京华自然 · 发展之路页
   数据来自 scripts/history-data.js，主题清单来自 scripts/theme-calendar.js */
(function () {
  const calendar = window.JinghuaCalendar;
  const data = window.JinghuaHistory || {};
  const params = new URLSearchParams(location.search);
  const requested = params.get('theme');
  const slug = data[requested] ? requested : calendar.THEMES[0].slug;
  const entry = data[slug] || {};
  const meta = calendar.theme(slug) || { name: '' };

  const esc = (value) => String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const tabs = document.getElementById('topicTabs');
  const content = document.getElementById('topicContent');
  tabs.innerHTML = calendar.themeTabsHtml(slug, 'history.html');
  document.title = `${meta.name} · 发展之路 · 京华自然`;
  calendar.applyTopicTheme(slug, 'history');

  function sectionHead(title, note) {
    return `<div class="topic-section-head"><h2>${esc(title)}</h2><span>${esc(note)}</span></div>`;
  }

  const eras = entry.eras || [];
  const facts = entry.facts || [];
  const sources = entry.sources || [];

  const timeline = eras.length ? `
    <section class="topic-section">
      ${sectionHead('时间线', `${eras.length} 个节点`)}
      <div class="timeline">
        ${eras.map((era) => `
          <article class="timeline-item">
            <span class="timeline-period">${esc(era.period)}</span>
            <h3 class="timeline-title">${esc(era.title)}</h3>
            <p class="timeline-detail">${esc(era.detail)}</p>
            ${era.source && era.source.url
              ? `<a class="timeline-source" href="${esc(era.source.url)}" target="_blank" rel="noopener noreferrer">来源：${esc(era.source.label || era.source.url)}</a>`
              : ''}
          </article>
        `).join('')}
      </div>
    </section>
  ` : `
    <section class="topic-section">
      ${sectionHead('时间线', '暂无节点')}
      <p class="topic-empty">这一主题的时间线正在整理中。</p>
    </section>
  `;

  const factBlock = facts.length ? `
    <section class="topic-section">
      ${sectionHead('关键数据', `${facts.length} 项`)}
      <dl class="fact-grid">
        ${facts.map((fact) => `
          <div class="fact-item">
            <dt>${esc(fact.label)}</dt>
            <dd>${esc(fact.value)}</dd>
          </div>
        `).join('')}
      </dl>
    </section>
  ` : '';

  const sourceBlock = sources.length ? `
    <section class="topic-section">
      ${sectionHead('资料来源', `${sources.length} 条`)}
      <ul class="topic-sources">
        ${sources.map((item) => `<li><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)} — ${esc(item.url)}</a></li>`).join('')}
      </ul>
    </section>
  ` : '';

  content.innerHTML = `
    <section class="topic-section">
      ${sectionHead(`${meta.name}在北京的历程`, '总述')}
      <p class="topic-lead">${esc(entry.summary || '')}</p>
    </section>
    ${timeline}
    ${factBlock}
    ${sourceBlock}
    <p class="topic-crosslink">
      继续了解「${esc(meta.name)}」：
      <a href="culture.html?theme=${esc(slug)}">自然文脉</a>
      <a href="${esc(calendar.speciesHref(slug))}">主题首页</a>
      <a href="${esc(calendar.mapHref(slug))}">观赏地图</a>
    </p>
  `;
})();

/* 京华自然 · 自然文脉页
   数据来自 scripts/culture-data.js，主题清单来自 scripts/theme-calendar.js */
(function () {
  const calendar = window.JinghuaCalendar;
  const data = window.JinghuaCulture || {};
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
  tabs.innerHTML = calendar.themeTabsHtml(slug, 'culture.html');
  document.title = `${meta.name} · 自然文脉 · 京华自然`;
  calendar.applyTopicTheme(slug, 'culture');

  function sectionHead(title, note) {
    return `<div class="topic-section-head"><h2>${esc(title)}</h2><span>${esc(note)}</span></div>`;
  }

  function sourceList(list) {
    if (!list.length) return '';
    return `
      <section class="topic-section">
        ${sectionHead('资料来源', `${list.length} 条`)}
        <ul class="topic-sources">
          ${list.map((item) => `<li><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)} — ${esc(item.url)}</a></li>`).join('')}
        </ul>
      </section>
    `;
  }

  function poemSection(poems) {
    if (!poems.length) {
      return `
        <section class="topic-section">
          ${sectionHead('诗咏', '没有留下句子的主题')}
          <p class="topic-empty">${esc(entry.poemsEmpty || '这一主题在古代诗文中没有留下可以确指的作品，它的来路写在近现代的记录里。')}</p>
        </section>
      `;
    }
    return `
      <section class="topic-section">
        ${sectionHead('诗咏', entry.poemsNote || `${poems.length} 首`)}
        <div class="poem-grid">
          ${poems.map((poem) => `
            <article class="poem-card">
              <div class="poem-head">
                <span class="poem-title">${esc(poem.title)}</span>
                <span class="poem-meta">${esc([poem.dynasty, poem.author].filter(Boolean).join(' · '))}</span>
              </div>
              <p class="poem-text">${esc(poem.text)}</p>
              <p class="poem-note">${esc(poem.note)}</p>
              ${poem.caveat ? `<p class="poem-caveat">名物辨析：${esc(poem.caveat)}</p>` : ''}
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  function noteSection(notes) {
    if (!notes.length) return '';
    return `
      <section class="topic-section">
        ${sectionHead('其他文化线索', `${notes.length} 条`)}
        <div class="book-list">
          ${notes.map((note, index) => `
            <article class="book-item">
              <span class="book-index">${String(index + 1).padStart(2, '0')}</span>
              <div>
                <div class="book-title">${esc(note.title)}</div>
                <p class="book-reason">${esc(note.text)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  function bookSection(books) {
    if (!books.length) return '';
    return `
      <section class="topic-section">
        ${sectionHead('延伸阅读', `${books.length} 本`)}
        <div class="book-list">
          ${books.map((book, index) => `
            <article class="book-item">
              <span class="book-index">${String(index + 1).padStart(2, '0')}</span>
              <div>
                <div class="book-title">《${esc(book.title)}》</div>
                <div class="book-meta">${esc([book.author, book.publisher, book.year].filter(Boolean).join(' · '))}</div>
                <p class="book-reason">${esc(book.reason)}</p>
                ${book.url ? `<a class="book-link" href="${esc(book.url)}" target="_blank" rel="noopener noreferrer">书目信息</a>` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  content.innerHTML = `
    <section class="topic-section">
      ${sectionHead(`${meta.name}的文化脉络`, '导言')}
      <p class="topic-lead">${esc(entry.intro || '')}</p>
    </section>
    ${poemSection(entry.poems || [])}
    ${noteSection(entry.notes || [])}
    ${bookSection(entry.books || [])}
    ${sourceList(entry.sources || [])}
    <p class="topic-crosslink">
      继续了解「${esc(meta.name)}」：
      <a href="history.html?theme=${esc(slug)}">发展之路</a>
      <a href="${esc(calendar.speciesHref(slug))}">主题首页</a>
      <a href="${esc(calendar.mapHref(slug))}">观赏地图</a>
    </p>
  `;
})();

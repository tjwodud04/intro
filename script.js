(function () {
  // Highlight active section (optional)
  const links = Array.from(document.querySelectorAll('.toc a'));
  const map = new Map(links.map(a => [document.querySelector(a.getAttribute('href')), a]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const a = map.get(entry.target);
      if (!a) return;
      if (entry.isIntersecting) {
        links.forEach(l => (l.style.fontWeight = '500'));
        a.style.fontWeight = '800';
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
  map.forEach((_, el) => el && observer.observe(el));

  // Language toggle + persistence
  function showLang(lang) {
    const showEN = lang === 'en';
    document.querySelector('[data-name="en"]').style.display = showEN ? 'inline' : 'none';
    document.querySelector('[data-name="ko"]').style.display = showEN ? 'none' : 'inline';
    document.querySelector('[data-cv="en"]').style.display = showEN ? '' : 'none';
    document.querySelector('[data-cv="ko"]').style.display = showEN ? 'none' : '';

    document.querySelectorAll('.btn-lang').forEach(b => b.classList.toggle('active', b.dataset.toggleLang === lang));

    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    history.replaceState({}, '', url);

    const tocTitle = document.querySelector('.toc h4');
    const tocLinks = document.querySelectorAll('.toc a');
    const labels = showEN
      ? { title: 'NAV', about: 'About me', experience: 'Experience', publications: 'Publications', projects: 'Projects' }
      : { title: '바로가기', about: '소개', experience: '경력', publications: '논문/발표', projects: '프로젝트' };
    tocTitle.textContent = labels.title;
    tocLinks[0].textContent = labels.about;
    tocLinks[1].textContent = labels.experience;
    tocLinks[2].textContent = labels.publications;
    tocLinks[3].textContent = labels.projects;

    const subMeta = Array.from(document.querySelectorAll('#publications .item .meta')).find(m =>
      /submitted to|제출/.test(m.textContent)
    );
    if (subMeta)
      subMeta.textContent = showEN
        ? 'submitted to ProActLLM 2025 (CIKM Workshop)'
        : 'ProActLLM 2025 (CIKM 워크숍) 에 제출';

    const kccMeta = Array.from(document.querySelectorAll('#publications .item .meta'));
    kccMeta.forEach(el => {
      if (/Korea Computer Congress|한국컴퓨터종합학술대회/.test(el.textContent)) {
        el.textContent = showEN
          ? 'Korea Computer Congress (KCC) 2023, pp. 286-288'
          : '한국컴퓨터종합학술대회 (KCC) 2023, pp. 286-288';
      }
    });
  }

  document.querySelectorAll('[data-toggle-lang]').forEach(btn =>
    btn.addEventListener('click', () => showLang(btn.dataset.toggleLang))
  );

  const params = new URLSearchParams(location.search);
  showLang(params.get('lang') === 'ko' ? 'ko' : 'en');
})();

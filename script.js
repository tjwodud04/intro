(function () {
  // Highlight active section in toc
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

  function showLang(lang) {
    const showEN = lang === 'en';

    // Name & CV toggle
    const nameEN = document.querySelector('[data-name="en"]');
    const nameKO = document.querySelector('[data-name="ko"]');
    const cvEN = document.querySelector('[data-cv="en"]');
    const cvKO = document.querySelector('[data-cv="ko"]');
    if (nameEN && nameKO) { nameEN.style.display = showEN ? 'inline' : 'none'; nameKO.style.display = showEN ? 'none' : 'inline'; }
    if (cvEN && cvKO) { cvEN.style.display = showEN ? '' : 'none'; cvKO.style.display = showEN ? 'none' : ''; }

    // Body content toggle (About/Experience/Projects)
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = (el.dataset.lang === lang) ? '' : 'none';
    });

    // Buttons active state
    document.querySelectorAll('.btn-lang').forEach(b => b.classList.toggle('active', b.dataset.toggleLang === lang));

    // TOC labels
    const tocTitle = document.querySelector('.toc h4');
    const tocLinks = document.querySelectorAll('.toc a');
    if (tocTitle && tocLinks.length >= 4) {
      const labels = showEN
        ? { title: 'NAV', about: 'About me', experience: 'Experience', publications: 'Publications', projects: 'Projects' }
        : { title: '바로가기', about: '소개', experience: '경력', publications: '논문/발표', projects: '프로젝트' };
      tocTitle.textContent = labels.title;
      tocLinks[0].textContent = labels.about;
      tocLinks[1].textContent = labels.experience;
      tocLinks[2].textContent = labels.publications;
      tocLinks[3].textContent = labels.projects;
    }

    // Publications localization lines
    const acceptedMetas = Array.from(document.querySelectorAll('#publications .item .meta'))
      .filter(m => /Accepted to|채택됨/.test(m.textContent));

    acceptedMetas.forEach(meta => {
      if (/PPoGA/.test(meta.parentElement.textContent)) {
        meta.textContent = showEN
          ? 'Accepted to GMLLM 2025 (Frontiers in Graph Machine Learning for the Large Model Era), CIKM 2025 Workshop'
          : 'GMLLM 2025 (그래프 머신러닝의 대규모 모델 시대 최전선), CIKM 2025 워크숍 에 채택됨';
      } else if (/Emotion-Aware Proactive/.test(meta.parentElement.textContent)) {
        meta.textContent = showEN
          ? 'Accepted to ProActLLM 2025 (CIKM Workshop)'
          : 'ProActLLM 2025 (CIKM 워크숍) 에 채택됨';
      }
    });
    document.querySelectorAll('#publications .item .meta').forEach(el => {
      if (/Korea Computer Congress|한국컴퓨터종합학술대회/.test(el.textContent)) {
        el.textContent = showEN
          ? 'Korea Computer Congress (KCC) 2023, pp. 286-288'
          : '한국컴퓨터종합학술대회 (KCC) 2023, pp. 286-288';
      }
    });

    // Update URL (?lang=)
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    history.replaceState({}, '', url);
  }

  // Bind language buttons after DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-toggle-lang]').forEach(btn =>
      btn.addEventListener('click', () => showLang(btn.dataset.toggleLang))
    );
    const initLang = new URLSearchParams(location.search).get('lang') === 'ko' ? 'ko' : 'en';
    showLang(initLang);
  });
})();

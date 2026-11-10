(() => {
  const KEY = 'dv_transition_v1';
  const wipe = document.getElementById('dvWipe');
  if (!wipe) return;

  const icon = wipe.querySelector('.dv-wipe__icon');
  const kicker = wipe.querySelector('.dv-wipe__kicker');
  const title = wipe.querySelector('.dv-wipe__title');
  const sub = wipe.querySelector('.dv-wipe__sub');
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  let leaving = false;

  const paint = (mode) => {
    const toQuiz = mode === 'quiz';
    icon.textContent = toQuiz ? '🧩' : '🏝️';
    kicker.textContent = toQuiz ? 'Giải mã ký ức' : 'Hòn đảo kho báu';
    title.textContent = toQuiz ? 'Mở kho ký ức' : 'Trở về đảo';
    sub.textContent = toQuiz ? '7 mảnh ghép · 1965 – 1968' : 'Rương báu đang chờ bạn';
  };

  const leave = (url, mode) => {
    if (leaving) return;
    leaving = true;
    paint(mode);
    try { sessionStorage.setItem(KEY, mode); } catch (err) { /* chế độ riêng tư */ }
    wipe.classList.add('is-on');
    wipe.setAttribute('aria-hidden', 'false');
    void wipe.offsetWidth;
    wipe.classList.add('is-visible');
    setTimeout(() => { window.location.href = url; }, reduce ? 140 : 780);
  };

  let incoming = null;
  try { incoming = sessionStorage.getItem(KEY); } catch (err) { /* chế độ riêng tư */ }
  if (incoming === 'quiz' || incoming === 'island') {
    try { sessionStorage.removeItem(KEY); } catch (err) { /* chế độ riêng tư */ }
    paint(incoming);
    wipe.style.transition = 'none';
    wipe.style.opacity = '1';
    wipe.classList.add('is-on', 'is-visible');
    wipe.setAttribute('aria-hidden', 'false');
    const hold = reduce ? 140 : 720;
    setTimeout(() => {
      wipe.style.transition = 'opacity 0.5s ease';
      void wipe.offsetWidth;
      wipe.style.opacity = '0';
    }, hold);
    setTimeout(() => {
      wipe.classList.remove('is-on', 'is-visible');
      wipe.style.transition = '';
      wipe.style.opacity = '';
      wipe.setAttribute('aria-hidden', 'true');
    }, hold + (reduce ? 200 : 580));
  }

  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    leaving = false;
    wipe.classList.remove('is-on', 'is-visible');
    wipe.style.transition = '';
    wipe.style.opacity = '';
    wipe.setAttribute('aria-hidden', 'true');
  });

  const back = document.getElementById('btn-back-top');
  if (back) {
    back.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      leave(back.getAttribute('href'), 'island');
    });
  }

  window.__islandExitToQuiz = (url) => leave(url, 'quiz');
})();

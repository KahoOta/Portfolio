const fadeElems = document.querySelectorAll('.fade-in');

const onScroll = () => {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', onScroll);


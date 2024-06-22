
const toggleNavSection = () => {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  const toggleNavOnScroll = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > lastScrollTop && scroll > 100) {
      navbar.classList.add("hide");
    } else if (scroll < lastScrollTop) {
      navbar.classList.remove("hide");
    }

    lastScrollTop = scroll <= 0 ? 0 : scroll;
  };

  if (navbar) {
    window.removeEventListener("scroll", toggleNavOnScroll);
    window.addEventListener("scroll", toggleNavOnScroll);
  }
};

toggleNavSection();

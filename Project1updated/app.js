function myFunction(x) {
    x.classList.toggle("change");
  }
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("bgnav", window.scrollY >= 694);
    nav.classList.toggle("bgnav1", window.scrollY > 100 && window.scrollY < 694);

  });

  // const counters = document.querySelectorAll(".num");

  // counters.forEach((counter) => {
  //   counter.innerText = "0";

  //   const updateCounter = () => {
  //     const target = +counter.getAttribute("data-target");
  //     const c = +counter.innerText;

  //     const increment = target / 200;

  //     if (c < target) {
  //       counter.innerText = `${Math.ceil(c + increment)}`;
  //       setTimeout(updateCounter, 1);
  //     } else {
  //       counter.innerText = target;
  //     }
  //   };

  //   updateCounter();
  // });  
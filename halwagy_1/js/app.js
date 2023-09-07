let choicesIcon = document.querySelector(".choicesIcon");
let bars = document.querySelectorAll(".bar");
let menu = document.querySelector(".menu");
let Layout = document.querySelector(".nav-layout");
choicesIcon.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("animate");
  });
  menu.classList.toggle("menu-resposive");
  Layout.classList.toggle("layout-appear");
});
Layout.addEventListener("click", () => {
  menu.classList.remove("menu-resposive");
  Layout.classList.remove("layout-appear");
  bars.forEach((bar) => {
    bar.classList.remove("animate");
  });
});
// ######
// let arrows = document.querySelectorAll(".unique-arrows");
// let partiners = document.querySelectorAll(".partiners-slider-container");

// let itemsNumber = partiners[0].querySelectorAll(".empty-slider-item").length;
// let clickCount = 0;
// let autoSlideInterval; // Variable to store the interval timer

// const handleNotAllowed = () => {
//   if (clickCount <= 0) {
//     arrows[0].classList.add("not-allowed");
//   } else {
//     arrows[0].classList.remove("not-allowed");
//   }
// };

// const moveRight = () => {
//   console.log(Math.floor(partiners[0].offsetWidth / 220));
//   clickCount++;
//   handleNotAllowed();
//   if (
//     itemsNumber - (4 + clickCount) + (4 - partiners[0].offsetWidth / 220) >=
//     0
//   ) {
//     partiners[0].style.transform = `translateX(${
//       partiners[0].computedStyleMap().get("transform")[0].x.value +
//       getSlideAmount()
//     }px)`;
//   } else {
//     partiners[0].style.transform = "translateX(0)";
//     clickCount = 0;
//     handleNotAllowed();
//   }
// };

// const moveLeft = () => {
//   clickCount--;
//   handleNotAllowed();
//   if (clickCount >= 0) {
//     partiners[0].style.transform = `translateX(${
//       partiners[0].computedStyleMap().get("transform")[0].x.value -
//       getSlideAmount()
//     }px)`;
//   } else {
//     partiners[0].style.transform = "translateX(0)";
//     clickCount = 0;
//   }
// };

// const startAutoSlide = () => {
//   autoSlideInterval = setInterval(moveRight, 1000); // Slide every 1 second (adjust as needed)
// };

// const stopAutoSlide = () => {
//   clearInterval(autoSlideInterval);
// };

// const getSlideAmount = () => {
//   const containerWidth = partiners[0].offsetWidth;
//   const itemWidth = 220; // Adjust item width as needed
//   const gapWidth = 12; // Adjust gap width as needed
//   const maxVisibleItems = 4; // Adjust maximum visible items as needed

//   const visibleItems = Math.min(
//     maxVisibleItems,
//     Math.floor(containerWidth / (itemWidth + gapWidth))
//   );
//   const slideAmount = visibleItems * (itemWidth + gapWidth);

//   return slideAmount;
// };

// const handleWindowResize = () => {
//   stopAutoSlide();
//   partiners[0].style.transform = "translateX(0)";
//   clickCount = 0;
//   handleNotAllowed();
//   startAutoSlide();
// };

// handleNotAllowed();

// arrows[1].addEventListener("click", () => {
//   moveRight();
//   stopAutoSlide(); // Stop auto sliding when manual navigation occurs
// });

// arrows[0].addEventListener("click", () => {
//   moveLeft();
//   stopAutoSlide(); // Stop auto sliding when manual navigation occurs
// });

// // startAutoSlide(); // Start auto sliding on page load

// window.addEventListener("resize", handleWindowResize);

// ##########
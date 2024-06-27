////////////////////////////slide-right-linking-link///////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(function (tabLink, index) {
    tabLink.addEventListener("click", function (event) {
      event.preventDefault();
      showTab(index);
    });
  });

  function showTab(index) {
    tabContents.forEach(function (tabContent, contentIndex) {
      if (contentIndex === index) {
        tabContent.classList.add("active");
      } else {
        tabContent.classList.remove("active");
      }
    });
  }
});

////////////////////////////FAQ PAGE DROPDOWN///////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const tabMainContents = document.querySelectorAll(".tab-mav-main-content");

  tabMainContents.forEach(function (tabMainContent) {
    tabMainContent.addEventListener("click", function () {
      const contentMav = tabMainContent.nextElementSibling;
      const arrowIcon = tabMainContent.querySelector("img");

      // Close all open tabs
      const allContentMav = document.querySelectorAll(".content-mav");
      allContentMav.forEach(function (content) {
        if (content !== contentMav) {
          content.style.display = "none";
        }
      });

      // Reset all arrow icons
      const allArrowIcons = document.querySelectorAll(".arrow-icon");
      allArrowIcons.forEach(function (icon) {
        if (icon !== arrowIcon) {
          icon.style.transform = "rotate(-90deg)";
        }
      });

      // Toggle the display property of content-mav
      if (
        contentMav.style.display === "" ||
        contentMav.style.display === "none"
      ) {
        contentMav.style.display = "block";
        arrowIcon.style.transform = "rotate(-0deg)"; // Rotate the image by -90 degrees
      } else {
        contentMav.style.display = "none";
        arrowIcon.style.transform = "rotate(-90deg)"; // Reset the rotation of the image
      }
    });
  });
});

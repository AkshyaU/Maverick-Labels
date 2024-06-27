/////////////////////////swiper-1(bottle) for pdp page////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Swiper initialization code here
  var swiper = new Swiper("#swiper-dots", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper("#swiper1", {
    spaceBetween: 10,
    navigation: {
      nextEl: "#next-button",
      prevEl: "#previous-button",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});

/////////////////////// swiper-2 (colors) for pdp page////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper("#swiper2", {
    // Optional configurations
    slidesPerView: 12, // Number of slides per view
    spaceBetween: 30, // Space between slides
    navigation: {
      nextEl: "#next-button1",
      prevEl: "#previous-button2",
    },
    pagination: {
      el: "#bullet-dots",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      900: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 2,
      },
      380: {
        slidesPerView: 2,
      },
    },
  });

  // Add click event listener to each image
  var images = document.querySelectorAll(".colors-inner-wrapper img");
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      swiper.slideNext(); // Advance to the next slide
    });
  });
});

/////////////////////// swiper-3 (product-details) for pdp page////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper("#swiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: "#next-button3", // Next button selector
      prevEl: "#previous-button3", // Previous button selector
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      initialSlide: 0,
    },
    breakpoints: {
      // Responsive breakpoints for different screen sizes
      1200: { slidesPerView: 3 },
      900: { slidesPerView: 3 },
      768: { slidesPerView: 2.3 },
      480: { slidesPerView: 2.3 },
      380: { slidesPerView: 2 },
    },
  });

  // Add click event listener to each image within the specified selector ".section6-main-flex img".
  var images = document.querySelectorAll(".section6-main-flex img");
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      swiper.slideNext();
    });
  });
});

////////////////////////////foil labels  dropDown///////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    const toggleContent = item.querySelector(".toggle-content");
    const content = item.querySelector(".content");
    const arrowIcon = toggleContent.querySelector(".arrow-icon");
    toggleContent.addEventListener("click", () => {
      const isCurrentlyOpen = content.classList.contains("show");
      // Close all dropdown items
      dropdownItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector(".content");
        const otherArrowIcon = otherItem.querySelector(".arrow-icon");
        setTimeout(() => {
          console.log("hello");
          if (otherContent !== content) {
            otherContent.classList.remove("show");
            otherArrowIcon.classList.remove("rotate");
          }
        }, 300);
      });
      // Toggle the visibility of the content
      content.classList.toggle("show");
      // Rotate the arrow icon
      arrowIcon.classList.toggle("rotate", !isCurrentlyOpen);
    });
  });
});

////////////////////////////foil label instant quotes dropdown///////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const boxRows = document.querySelectorAll(".box-row");

  boxRows.forEach(function (boxRow) {
    const dropdownToggle = boxRow.querySelector(".dropdown-toggle");
    const arrowIcon = boxRow.querySelector(".arrow");
    const dropdownContentId = dropdownToggle.getAttribute("data-dropdown-id");
    const dropdownContent = document.querySelector(`.${dropdownContentId}`);
    const correctIcons = dropdownContent.querySelectorAll(".correct-icon");

    // Initially hide correct icons
    correctIcons.forEach(function (icon) {
      icon.style.display = "none";
    });

    boxRow.addEventListener("click", function () {
      if (dropdownContent.classList.contains("selected")) {
        // Close the dropdown if already opened
        dropdownContent.style.display = "none";
        dropdownContent.classList.remove("selected");
        arrowIcon.classList.remove("rotate");

        // Hide correct icons when closing dropdown
        correctIcons.forEach(function (icon) {
          icon.style.display = "none";
        });
      } else {
        // Hide all dropdowns and remove selected class
        document
          .querySelectorAll(".dropdown-content")
          .forEach(function (dropdown) {
            dropdown.style.display = "none";
            dropdown.classList.remove("selected");
            const arrow = dropdown.parentElement.querySelector(".arrow");
            if (arrow) arrow.classList.remove("rotate");
          });

        // Show the selected dropdown
        dropdownContent.style.display = "flex"; // Set display to flex
        dropdownContent.classList.add("selected");
        arrowIcon.classList.add("rotate");

        // Show correct icons if previously selected
        correctIcons.forEach(function (icon) {
          if (icon.parentElement.classList.contains("selected-option")) {
            icon.style.display = "inline-block";
          }
        });

        // Rotate the arrow of all other dropdowns back to its original position
        const allArrows = document.querySelectorAll(".arrow");
        allArrows.forEach(function (otherArrow) {
          if (otherArrow !== arrowIcon) {
            otherArrow.classList.remove("rotate");
          }
        });
      }
    });

    const dropdownOptions = dropdownContent.querySelectorAll("p");
    dropdownOptions.forEach(function (option) {
      option.addEventListener("click", function (event) {
        event.stopPropagation();

        const selectedValue = this.textContent;
        const dropdownId = this.parentElement.classList[1];
        const dropdownToggle = document.querySelector(
          `[data-dropdown-id="${dropdownId}"]`
        );

        dropdownToggle.textContent = selectedValue;

        // Remove correct icon from all options
        dropdownOptions.forEach(function (opt) {
          const correctIcon = opt.querySelector(".correct-icon");
          if (correctIcon) {
            correctIcon.style.display = "none";
          }
        });

        // Add correct icon to the selected option
        const correctIcon = this.querySelector(".correct-icon");
        if (correctIcon) {
          correctIcon.style.display = "inline-block";
        }

        // Add border to the newly selected item
        this.classList.add("selected-option");

        // Remove border from all previously selected items except the most recent one
        const allSelectedOptions =
          dropdownContent.querySelectorAll("p.selected-option");
        allSelectedOptions.forEach(function (selectedOption) {
          if (selectedOption !== option) {
            selectedOption.classList.remove("selected-option");
          }
        });

        // Hide all dropdowns
        document
          .querySelectorAll(".dropdown-content")
          .forEach(function (dropdown) {
            dropdown.style.display = "none";
            dropdown.classList.remove("selected");
          });

        // Rotate the arrow back to its original position
        arrowIcon.classList.remove("rotate");
      });
    });
  });
});

// ////////////////////////foil labels instant quotes inside popup///////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Get the popup element, the trigger element, and the close button
  var popup = document.getElementById("popup");
  var popupTrigger = document.getElementById("popupTrigger");
  var closeButton = document.querySelector(".popup .close");

  // Function to toggle the visibility of the popup
  function togglePopup() {
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }

  // Add event listener to trigger element
  popupTrigger.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the body click event from firing
    togglePopup();
  });

  // Add event listener to close button to close the popup
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the body click event from firing
    togglePopup();
  });

  // Prevent clicks inside the popup from closing it
  popup.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the body click event from firing
  });
});

// ////////////////////////foil labels instant quotes inside extra content 0f quantity/////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Define the event listener for toggling hidden rows
  document.getElementById("toggleRows").addEventListener("click", function () {
    const hiddenRows = document.getElementById("hiddenRows");
    hiddenRows.classList.toggle("hidden");
    const toggleButton = document.getElementById("toggleRows");
    const hiddenRowsVisible = !hiddenRows.classList.contains("hidden");
    toggleButton.textContent = hiddenRowsVisible
      ? "Hide more popular quantities -"
      : "See more popular quantities +";
  });

  // Get all elements with the class name 'select-box1'
  const selectBoxes = document.querySelectorAll(".select-box1");

  // Define the event listener for each select box
  selectBoxes.forEach((box) => {
    const icon = box.querySelector(".fa-circle");

    box.addEventListener("click", () => {
      const clickedIcon = box.querySelector(".fa-circle");

      // If the row is already selected, deselect it
      if (clickedIcon.classList.contains("red")) {
        clickedIcon.classList.remove("red");
      } else {
        // Remove 'red' class from all icons
        const icons = document.querySelectorAll(".fa-circle");
        icons.forEach((icon) => {
          icon.classList.remove("red");
        });

        // Add 'red' class to the clicked icon
        clickedIcon.classList.add("red");
      }
    });
  });
});

// foil labels instant quotes inside input text enable
document.addEventListener("DOMContentLoaded", function () {
  const iconToggle = document.getElementById("iconToggle");
  const customInput = document.getElementById("customInput");
  const icon = iconToggle.querySelector("i");

  iconToggle.addEventListener("click", function () {
    if (icon.classList.contains("red")) {
      icon.classList.remove("red");
      customInput.disabled = true;
    } else {
      icon.classList.add("red");
      customInput.disabled = false;
    }
  });
});

// foil labels instant quotes inside enabling checkbox
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("emboss-checkbox");
  const checkboxLabel = document.getElementById("checkbox-label");

  // Add event listener to the label
  checkboxLabel.addEventListener("click", function () {
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
  });

  // Add event listener to the row2 container
  const row2Container = document.querySelector(".row2");
  row2Container.addEventListener("click", function () {
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
  });
});

// Enable checkbox on clicking the label
document
  .getElementById("checkbox-label")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("emboss-checkbox");
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
  });

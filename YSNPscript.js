// Call the function when the page is loaded
window.addEventListener('load', adjustImageHeight);

// Call the function when the window is resized
window.addEventListener('resize', adjustImageHeight)

// Call the function when the images are loaded
window.addEventListener('load', adjustContainerHeight);

// Call the function when the window is resized
window.addEventListener('resize', adjustContainerHeight);

// Call the function when the page is loaded
window.addEventListener('load', setActiveLink);

// Call the function when the page is loaded
window.addEventListener('load', adjustMarginTop);

// Call the function when the window is resized
window.addEventListener('resize', adjustMarginTop);

// A function that adjusts the top margin of the rest of the screen
// depending on the height of the nav bar at the time
function adjustMarginTop() {
    const flexContainer = document.querySelector('.flex-container');
    const flexFullscreen = document.querySelector('.flex-fullscreen');
  
    const flexContainerHeight = flexContainer.offsetHeight;
    flexFullscreen.style.marginTop = `${flexContainerHeight}px`;
  }

// This adjusts the size of the image at the top of the screen (with text over it)
function adjustImageHeight() {
    const textWrapper = document.getElementById('titleWrapper');
    const image = document.getElementById('topimage');
  
    const textWrapperHeight = textWrapper.offsetHeight;
    image.style.height = `${textWrapperHeight}px`;
  }

// A function that adjusts the dimensions of the images in the cells
  function adjustContainerHeight() {
    const containers = document.querySelectorAll('.image-container');
  
    containers.forEach(container => {
      const image = container.querySelector('img');
      const width = container.offsetWidth;
      const height = width * 0.75;
  
      container.style.height = `${height}px`;
    });
  }

// A function that shows and closes content from the drop-down button
// Also controls animation for drop down arrow
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const arrow = content.parentElement.querySelector(".arrow");
    if (content.style.display === "none") {
      content.style.display = "block";
      arrow.style.transform = "rotate(-135deg)"; // Change arrow to point up
    } else {
      content.style.display = "none";
      arrow.style.transform = "rotate(45deg)"; // Change arrow to point down
    }
  }

  // A function that sets classes based on whether an option in the navigation
  // bar is the page the user is currently on
  function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const flexItems = document.querySelectorAll('.flex-item');
  
    flexItems.forEach(item => {
      const link = item.querySelector('a');
      const href = link.getAttribute('href');
  
      if (href === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }



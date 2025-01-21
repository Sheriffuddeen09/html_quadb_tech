// JavaScript to handle interactivity
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const layoutToggle = document.getElementById('layoutToggle');
    const logoutButton = document.getElementById('logoutButton');
    const largeSidebarToggle = document.getElementById('largeSidebarToggle');
    const smallSidebarToggle = document.getElementById('smallSidebarToggle');
  
    let currentTheme = 'light'; // Default theme
    let layoutMode = 'flex'; // Default layout mode
  
    // Toggle search bar visibility
    searchButton.addEventListener('click', () => {
      if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
      } else {
        searchInput.classList.add('hidden');
      }
    });
  
    // // Toggle layout mode
    // layoutToggle.addEventListener('click', () => {
    //   layoutMode = layoutMode === 'flex' ? 'grid' : 'flex';
    //   console.log(`Layout mode switched to ${layoutMode}`);
    // });
  
    // Logout button functionality
    logoutButton.addEventListener('click', () => {
      alert('Logged out successfully!');
      // Perform any logout logic here
    });
  
    // Sidebar toggle functionality
    largeSidebarToggle.addEventListener('click', () => {
      console.log('Large sidebar toggle clicked');
    });
  
    smallSidebarToggle.addEventListener('click', () => {
      console.log('Small sidebar toggle clicked');
    });
  });
  
  // script.js

// Handle sidebar toggle
const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menuButton');
const menuButtons = document.getElementById('menuButtons');

// Function to toggle visibility and adjust button opacity
function toggleSidebar() {
  sidebar.classList.toggle('hidden'); // Toggle the sidebar visibility

  // If the sidebar is hidden, show the menuButtons
  if (sidebar.classList.contains('hidden')) {
    menuButtons.style.opacity = '1'; // Make menuButtons visible
    menuButtons.style.pointerEvents = 'auto'; // Enable interaction with the button
  } else {
    menuButtons.style.opacity = '0'; // Make menuButtons invisible
    menuButtons.style.pointerEvents = 'none'; // Disable interaction with the button
  }
}

// Initial state: menuButtons should be hidden
menuButtons.style.opacity = '0';
menuButtons.style.pointerEvents = 'none';

// Add event listeners to the menuButton and menuButtons
menuButton.addEventListener('click', toggleSidebar);
menuButtons.addEventListener('click', toggleSidebar);

// Handle theme (example of applying a theme class)
const theme = 'dark'; // Example: Set your theme (e.g., 'dark' or 'light')

// Add theme class to the sidebar
if (theme) {
  sidebar.classList.add(theme);
}



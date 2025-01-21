
const openModalButton = document.getElementById('openModalButton');
const openModalButtons = document.getElementById('openModalButtons');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Show the modal when clicking the "Add Weather" button
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
openModalButtons.addEventListener('click', () => {
    modal.style.display = 'block';
  });

// Close the modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement; // Refers to <html>

// Check and apply saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  rootElement.classList.add('dark'); // Apply dark mode
} else {
  rootElement.classList.remove('dark'); // Default to light mode
}

// Add click event listener to the button
themeToggle.addEventListener('click', () => {
  // Toggle the 'dark' class on the <html> element
  const isDarkMode = rootElement.classList.toggle('dark');

  // Save the theme preference
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});


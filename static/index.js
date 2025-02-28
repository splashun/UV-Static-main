"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
function autofill(url) {
  address.value = url;
  form.requestSubmit(); // Automatically submit the form
}
function toggleFullscreen() {
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  
  // Check if we are currently in fullscreen mode
  if (isFullscreen()) {
      // If in fullscreen, exit fullscreen and update button
      fullscreenBtn.classList.remove('fa-compress');
      fullscreenBtn.classList.add('fa-expand');
      document.exitFullscreen();
  } else {
      // If not in fullscreen, enter fullscreen and update button
      fullscreenBtn.classList.remove('fa-expand');
      fullscreenBtn.classList.add('fa-compress');
      document.documentElement.requestFullscreen();
  }
}

// Helper function to check if we're in fullscreen mode
function isFullscreen() {
  return (
      document.fullscreenElement ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.webkitFullscreenElement
  );
}

// Initialize the button's state when the page loads
document.addEventListener('DOMContentLoaded', function() {
  if (isFullscreen()) {
      document.getElementById('fullscreen-btn').classList.add('fa-compress');
  } else {
      document.getElementById('fullscreen-btn').classList.add('fa-expand');
  }
});
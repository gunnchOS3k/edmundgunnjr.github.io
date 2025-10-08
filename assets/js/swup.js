// Swup.js implementation for smooth page transitions
// Respects prefers-reduced-motion setting

(function() {
  'use strict';

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Only initialize swup if user doesn't prefer reduced motion
  if (prefersReducedMotion) {
    return;
  }

  // Check if swup is available
  if (typeof Swup === 'undefined') {
    console.warn('Swup not loaded, skipping page transitions');
    return;
  }

  // Initialize swup with fade transition
  const swup = new Swup({
    containers: ['#main'],
    animationSelector: '[data-swup]',
    cache: true,
    plugins: [
      new SwupFadeTheme({
        duration: 300,
        timing: 'ease-in-out'
      })
    ]
  });

  // Handle page transitions
  swup.on('animationInStart', function() {
    document.body.classList.add('swup-transitioning');
  });

  swup.on('animationInEnd', function() {
    document.body.classList.remove('swup-transitioning');
  });

  // Handle video elements during transitions
  swup.on('contentReplaced', function() {
    // Pause all videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    // Re-initialize any interactive elements
    initializeInteractiveElements();
  });

  // Initialize interactive elements
  function initializeInteractiveElements() {
    // Initialize video hover effects
    const projectVideos = document.querySelectorAll('.project-video-element');
    projectVideos.forEach(video => {
      const container = video.closest('.project-card');
      if (container) {
        container.addEventListener('mouseenter', () => {
          if (!prefersReducedMotion) {
            video.play();
          }
        });
        
        container.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });

    // Initialize tag filters
    const tagFilters = document.querySelectorAll('.tag-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    tagFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const tag = filter.dataset.tag;
        
        // Update active filter
        tagFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          if (tag === 'all' || card.dataset.tags?.includes(tag)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', initializeInteractiveElements);
  
  // Re-initialize after swup navigation
  swup.on('contentReplaced', initializeInteractiveElements);

  // Add CSS for fade animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .swup-transitioning {
      overflow: hidden;
    }
    
    [data-swup] {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    
    [data-swup].swup-transition-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

})();

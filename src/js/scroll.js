import { parallaxEffect, reveal, debounce } from './misc';

window.addEventListener('scroll', function(e) {
  parallaxEffect('[data-parallax]');
});
window.addEventListener('scroll', debounce(reveal));
export function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export function parallaxEffect(selector) {
  let scroll = document.scrollingElement.scrollTop;
  let speed = 0.6;
  const scrollers = document.querySelectorAll(selector);
  if( scrollers.length > 0 ) {
    for( let scroller of scrollers ) {
      let offsetTop = scroller.offsetTop;
      let parentHeight = scroller.parentElement.offsetHeight;
      let parallaxSize = (scroll - offsetTop) * speed;
  
      if(scroll > offsetTop + parentHeight) {
        return;
      }
  
      scroller.style.transform = scroll >= offsetTop ? ('translateY(' + parallaxSize + 'px)' ) : '';
    }
  }
}

export function reveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if( revealElements.length > 0 ) {
    for( let revealEl of revealElements ) {
      let revealAt = (window.scrollY + window.innerHeight) - revealEl.offsetHeight / 2;
      let revealElBottom = revealEl.offsetTop + revealEl.offsetHeight;
      const isInViewport = revealAt > revealEl.offsetTop;
      const isPastRevealEl = window.scrollY < revealElBottom;
      if( isInViewport && isPastRevealEl ) {
        revealEl.setAttribute('data-reveal-active', '');
      }
      // else {
      //   revealEl.removeAttribute('data-reveal-active');
      // }
    }
  }
}
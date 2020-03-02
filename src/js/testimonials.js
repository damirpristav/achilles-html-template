const testimonialsWrapper = document.querySelectorAll('.dp_testimonials');
if( testimonialsWrapper.length > 0 ) {
  for( let testimonials of testimonialsWrapper ) {
    const body = testimonials.querySelector('.dp_testimonials_body');
    const nav = testimonials.querySelector('.dp_testimonials_nav');
    const author = testimonials.querySelector('.dp_testimonials_author');
    if( body !== null && nav !== null ) {
      const items = body.querySelectorAll('[data-testimonial]');
      const lis = nav.querySelectorAll('li');
      if( lis.length > 0 && items.length > 0 ) {
        for( let i = 0; i < lis.length; i++ ) {
          lis[i].addEventListener('click', () => {
            const name = lis[i].dataset.name;
            removeActiveClass(lis);
            if(!lis[i].classList.contains('active')) {
              lis[i].classList.add('active');
            }
            body.style.transform = `translateX(${-i*100}%)`;
            author.innerHTML = name;
            // for( let item of items ) {
            //   if( item.dataset.testimonial !== testimonialID ) {
            //     item.style.display = 'none';
            //   }else {
            //     item.style.display = 'block';
            //   }
            // }
          });
        }
      }
    }
  }
}

function removeActiveClass(items) {
  for( let item of items ) {
    if( item.classList.contains('active') ) {
      item.classList.remove('active');
    }
  }
}
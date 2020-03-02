const modalTriggers = document.querySelectorAll('[data-modal-target]');
if(modalTriggers.length > 0) {
  for(let trigger of modalTriggers) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(`[data-modal="${trigger.dataset.modalTarget}"]`);
      if( target !== null ) {
        target.classList.add('opened');
        document.querySelector('body').style.overflow = 'hidden';
      }
    });
  }
}

const closeModalTriggers = document.querySelectorAll('[data-modal-close]');
if( closeModalTriggers.length > 0 ) {
  for(let trigger of closeModalTriggers) {
    trigger.addEventListener('click', (e) => {
      const modal = trigger.closest('[data-modal]');
      if( modal !== null ) {
        modal.classList.remove('opened');
        document.querySelector('body').style.overflow = 'visible';
      }
    });
  }
}
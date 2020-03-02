const menuTriggers = document.querySelectorAll('.dp_mobile_menu_trigger');
const mobileMenu = document.querySelector('.dp_mobile_menu');
const closeMenu = document.querySelectorAll('.dp_mobile_menu_close');
if( menuTriggers.length > 0 && mobileMenu !== null ) {
  for( let trigger of menuTriggers ) {  
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if(!trigger.classList.contains('active')) {
        trigger.classList.add('active');
        document.querySelector('body').style.overflowY = 'hidden';
        mobileMenu.classList.add('active');
      }else {
        trigger.classList.remove('active');
        document.querySelector('body').style.overflowY = 'visible';
        mobileMenu.classList.remove('active');
      }
    });
  }
}
if( closeMenu.length > 0 && mobileMenu !== null ) {
  for( let close of closeMenu ) {
    close.addEventListener('click', (e) => {
      mobileMenu.classList.remove('active');
      for( let trigger of menuTriggers ) { 
        trigger.classList.remove('active');
        document.querySelector('body').style.overflowY = 'visible';
      }
    });
  }
}
const portfolio = document.querySelector('.dp_portfolio');
if(portfolio !== null) {
  const filters = portfolio.querySelector('.dp_portfolio_filters');
  const itemsWrap = portfolio.querySelector('.dp_portfolio_items');
  if(filters !== null && itemsWrap !== null) {
    const filterItems = filters.querySelectorAll('[data-filter]');
    const items = itemsWrap.querySelectorAll('[data-filter]');
    if(filterItems.length > 0 && items.length > 0) {
      for(let filterItem of filterItems) {
        filterItem.addEventListener('click', (e) => {
          const filter = filterItem.getAttribute('data-filter');
          console.log(filter);
          removeActiveClass(filterItems);
          filterItem.classList.add('active');
          for( let item of items ) {
            if( item.getAttribute('data-filter') !== filter && filter !== 'all' ) {
              item.classList.add('filtered');
            }else {
              item.classList.remove('filtered');
            }
          }
        });
      }
    }
  }
}

function removeActiveClass(items) {
  for(let item of items) {
    if(item.classList.contains('active')) {
      item.classList.remove('active');
    }
  }
}
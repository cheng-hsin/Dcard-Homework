import React from 'react';

const Menu_18 = ({ items }) => {
  console.log('items', items);

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {
          Name,
          Picture,
          TicketInfo,
          Description,
          Address,
          ID,
        } = menuItem;
        return (
          <article key={ID} className='menu-item'>
            <img src={Picture.PictureUrl1} alt={Name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>
                  {Address.substr(0, 3)}
                  <u>{Name}</u>
                </h4>
              </header>
              <h4 className='price'>${TicketInfo}</h4>
              <p className='item-text'>{Description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu_18;

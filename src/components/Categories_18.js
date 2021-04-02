import React from 'react';
//hooks

const Categories_18 = ({ categories, filterItems }) => {
  // console.log('categories', categories);

  return (
    <div>
      <div className='btn-container'>
        {categories.map((county, index) => {
          return (
            <button
              key={index}
              type='button'
              className='filter-btn'
              onClick={() => filterItems(county)}
            >
              {county}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories_18;

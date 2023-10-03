import React from 'react';

function Navigation({value, onClickItem}) {

  const categories = ['All', 'Bouquets','Round', 'Compositions', 'Wedding'];

  return(
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li key={i} onClick={() => onClickItem(item)} className={value === item ? 'active' : ''}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation;
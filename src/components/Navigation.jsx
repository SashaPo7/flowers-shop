import React from 'react';

function Navigation() {

  const categories = ['All', 'Bouquets', 'Round', 'Compositions', 'Wedding'];

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const togglerActive = (index) => {
    setActiveIndex(index)
  } ;

  return(
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li key={i} onClick={() => togglerActive(i)} className={activeIndex === i ? 'active' : ''}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation;
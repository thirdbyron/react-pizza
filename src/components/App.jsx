import '../scss/app.scss';
import { Categories } from './Categories';
import { Header } from './Header';
import { Item } from './Item';
import { Sort } from './Sort';

import pizzas from '../assets/pizzas.json';
import { CATEGORIES_TYPE } from '../lib/const';
import { useState } from 'react';
import { AppContext } from '../AppContext';

function App() {

  const [activeCategory, setActiveCategory] = useState(CATEGORIES_TYPE.all);

  const filterPizzas = () => {
    if (activeCategory !== CATEGORIES_TYPE.all) {
      return pizzas.filter((pizza) => pizza.category === activeCategory);
    } else {
      return pizzas;
    }
  };

  return (
    <AppContext.Provider>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories setActiveCategory={setActiveCategory} />
              <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
              {filterPizzas().map((pizza) => (
                <Item
                  key={pizza.id}
                  {...pizza}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

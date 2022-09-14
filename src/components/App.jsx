import { Categories } from './Categories';
import { Header } from './Header';
import { Item } from './Item';
import { Sort } from './Sort';
import { CATEGORIES_TYPE, SORT_TYPE } from '../lib/const';
import { useState } from 'react';
import { AppContext } from '../AppContext';

import '../scss/app.scss';
import pizzas from '../assets/pizzas.json';

function App() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES_TYPE.all);
  const [activeSortType, setActiveSortType] = useState(SORT_TYPE.pop);

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
              <Sort
                activeSortType={activeSortType}
                setActiveSortType={setActiveSortType}
              />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
              {filterPizzas().sort().map((pizza) => (
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

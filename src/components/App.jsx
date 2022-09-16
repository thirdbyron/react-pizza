import Categories from './Categories';
import Header from './Header';
import { Item } from './Item';
import Sort from './Sort';

import { useSelector, useDispatch } from 'react-redux';

import '../scss/app.scss';
import pizzas from '../assets/pizzas.json';
import { CATEGORIES_TYPE } from '../lib/const';
import { useEffect } from 'react';
import { setSizes, setTypes } from '../redux/slices/optionSlice';
import { sortPizzasByType } from '../lib/sort';

function App() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const activeSortType = useSelector((state) => state.filter.activeSortType);
  const searchValue = useSelector((state) => state.search.value);

  const usePizzaOptions = () => {
    useEffect(() => {
      const types = pizzas.map((pizza) => ({ id: pizza.id, activeType: 0 }));
      const sizes = pizzas.map((pizza) => ({ id: pizza.id, activeSize: 0 }));
      dispatch(setTypes(types));
      dispatch(setSizes(sizes));
    }, []);
  };

  usePizzaOptions();

  const filterBySearchValue = () => {
    if (searchValue !== '') {
      return pizzas.filter((pizza) =>
        pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    } else {
      return pizzas;
    }
  };

  const filterPizzas = () => {
    sortPizzasByType(activeSortType, pizzas);

    if (activeCategory !== CATEGORIES_TYPE.all) {
      return filterBySearchValue().filter(
        (pizza) => pizza.category === activeCategory,
      );
    } else {
      return filterBySearchValue();
    }
  };

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
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
  );
}

export default App;

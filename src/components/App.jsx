import '../scss/app.scss';
import { Categories } from './Categories';
import { Header } from './Header';
import { Item } from './Item';
import { Sort } from './Sort';

function App() {
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
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

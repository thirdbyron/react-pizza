import '../scss/app.scss';
import { Categories } from './Categories';
import { Header } from './Header';
import { Item } from './Item';
import { Sort } from './Sort';

function App() {
  return (
    <div class='wrapper'>
      <Header />
      <div class='content'>
        <div class='container'>
          <div class='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 class='content__title'>Все пиццы</h2>
          <div class='content__items'>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

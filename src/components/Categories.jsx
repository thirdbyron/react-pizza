import { useEffect, useState, useRef } from 'react';
import { CATEGORIES_TYPE } from '../lib/const';

export const Categories = ({ setActiveCategory }) => {
  const ref = useRef();
  const [activeType, setActiveType] = useState(ref.current);

  useEffect(() => {
    ref.current.className = 'active';
  }, [activeType]);

  const onChangeCategorie = (evt) => {
    if (evt.target !== ref.current && evt.target !== evt.currentTarget) {
      ref.current.className = '';
      ref.current = evt.target;
      setActiveType(ref.current);
      setActiveCategory(ref.current.dataset.type);
    }
  };

  return (
    <div className='categories'>
      <ul onClick={onChangeCategorie}>
        <li
          ref={ref}
          data-type={CATEGORIES_TYPE.all}
        >
          Все
        </li>
        <li data-type={CATEGORIES_TYPE.meat}>Мясные</li>
        <li data-type={CATEGORIES_TYPE.veg}>Вегетарианская</li>
        <li data-type={CATEGORIES_TYPE.grill}>Гриль</li>
        <li data-type={CATEGORIES_TYPE.hot}>Острые</li>
        <li data-type={CATEGORIES_TYPE.closed}>Закрытые</li>
      </ul>
    </div>
  );
};

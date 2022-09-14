import { useEffect, useState, useRef } from 'react';

export const Categories = () => {
  const ref = useRef();
  const [activeType, setActiveType] = useState(ref.current);

  useEffect(() => {
    ref.current.className = 'active';
  }, [activeType]);

  const onChangeCategorie = (evt) => {
    ref.current.className = '';
    ref.current = evt.target;
    setActiveType(ref.current);
  };

  return (
    <div className='categories'>
      <ul onClick={onChangeCategorie}>
        <li ref={ref}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
};

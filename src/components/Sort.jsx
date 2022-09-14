import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { SORT_TYPE } from '../lib/const';

export const Sort = ({ activeSortType, setActiveSortType }) => {
  const refSort = useRef();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(refSort.current);

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('click', onClosePopup);
    }
    return () => {
      document.removeEventListener('click', onClosePopup);
    };
  }, [isPopupOpen]);

  useEffect(() => {
    refSort.current.className = 'active';
  }, [activeSort]);

  const onClosePopup = (evt) => {
    setIsPopupOpen(false);
  };

  const onSortClick = (evt) => {
    evt.stopPropagation();
    setIsPopupOpen(!isPopupOpen);
  };

  const onChangeSort = (evt) => {
    if (evt.target !== refSort.current) {
      refSort.current.className = '';
      refSort.current = evt.target;
      setActiveSort(refSort.current);
      setActiveSortType(refSort.current.dataset.type);
    }
  };

  return (
    <div className='sort'>
      <div className='sort__label'>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={isPopupOpen ? {} : { transform: 'rotate(180deg)' }}
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={onSortClick}>{`${activeSortType}`}</span>
      </div>
      <div
        className='sort__popup'
        style={isPopupOpen ? {} : { display: 'none' }}
      >
        <ul onClick={onChangeSort}>
          <li
            ref={refSort}
            data-type={SORT_TYPE.pop}
          >
            популярности
          </li>
          <li data-type={SORT_TYPE.price}>цене</li>
          <li data-type={SORT_TYPE.ab}>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

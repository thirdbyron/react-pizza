import { useEffect, useRef, useState } from 'react';

export const Item = ({ title, price, imageUrl, types, sizes }) => {
  const refType = useRef();
  const refSize = useRef();

  const [activeType, setActiveType] = useState(refType.current);
  const [activeSize, setActiveSize] = useState(refSize.current);

  useEffect(() => {
    refType.current.className = 'active';
  }, [activeType]);

  useEffect(() => {
    refSize.current.className = 'active';
  }, [activeSize]);

  const onChangePizzaType = (evt) => {
    
    if (evt.target !== refType.current && evt.target !== evt.currentTarget) {
      refType.current.className = '';
      refType.current = evt.target;
      
      setActiveType(refType.current);
    }
  };

  const onChangePizzaSize = (evt) => {
    if (evt.target !== refSize.current && evt.target !== evt.currentTarget) {
      refSize.current.className = '';
      refSize.current = evt.target;
      setActiveSize(refSize.current);
    }
  };

  return (
    <div className='pizza-block'>
      <img
        className='pizza-block__image'
        src={imageUrl}
        alt='Pizza'
      />
      <h4 className='pizza-block__title'>{title}</h4>
      <div className='pizza-block__selector'>
        <ul onClick={onChangePizzaType}>
          {types.map((type, index) =>
            index === 0 ? (
              <li
                key={index}
                ref={refType}
                data-type={type}
              >
                {type}
              </li>
            ) : (
              <li
                key={index}
                data-type={type}
              >
                {type}
              </li>
            ),
          )}
        </ul>
        <ul onClick={onChangePizzaSize}>
          {sizes.map((size, index) =>
            index === 0 ? (
              <li
                key={index}
                ref={refSize}
                data-type={size}
              >
                {size}
              </li>
            ) : (
              <li key={index}>{size}</li>
            ),
          )}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>{`от ${price} ₽`}</div>
        <div className='button button--outline button--add'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

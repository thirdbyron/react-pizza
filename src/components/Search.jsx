import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../redux/slices/searchSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.search.value);

  const onChangeInputValue = (evt) => {
    dispatch(setSearchValue(evt.target.value))
  }

  return (
  <div className="search">
    <Icon icon="bi:search" style={{color: 'gray'}}/>
    <input className="search__input" value={searchValue} type="text" placeholder="Поиск пиццы..." onChange={onChangeInputValue}/>
  </div>
  );
};

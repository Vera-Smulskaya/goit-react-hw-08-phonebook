import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterTerm } from '../../redux/filter/filter.selector';
import { setFilterTerm } from '../../redux/filter/filter.reducer';

const Filter = () => {
  const filterTerm = useSelector(selectFilterTerm);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilterTerm(event.target.value));
  };
  return (
    <form className={css.filterContainer}>
      <label className={css.filterLabel}>
        <p className={css.filterLabelText}>Find contacts by name: </p>
        <input
          type="text"
          className={css.filterInput}
          name="filter"
          value={filterTerm}
          onChange={changeFilter}
        ></input>
      </label>
    </form>
  );
};

export default Filter;

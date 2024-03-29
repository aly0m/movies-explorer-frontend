import "./FilterCheckbox.css";
import React from "react";

const FilterCheckbox = (props) => {
  const { isChecked, onCheckboxClick } = props;

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__content">
        <input 
          className="filter-checkbox__box" 
          type="checkbox"
          checked={isChecked ?? false}
          onChange={onCheckboxClick}
        />
        <span className="filter-checkbox__tumbler" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
import React from 'react';

const CategoryList = (props) => {
  const {categories} = props;
  return (
    categories
      ? categories.categories.map(s => (
        <option key={s.name} value={s.name}>{s.name}</option>
      ))
      : null
  );
};

export default CategoryList;
import React from 'react';

const CategoryList = (props) => {
  const {categories} = props;
  return (
    categories
      ? categories.categories.map(s => (
        <option className='text-capitalize' key={s.name} value={s.name}>{s.name}</option>
      ))
      : null
  );
};

export default CategoryList;

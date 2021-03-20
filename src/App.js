import React, { useState, useCallback } from 'react';
import Categories from './news-viewer/components/Categories';
import NewsList from './news-viewer/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;

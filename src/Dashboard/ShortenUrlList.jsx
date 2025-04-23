import React from 'react';
import ShortenItem from './ShortenItem';

const ShortenUrlList = ({ data }) => {
  const items = data || []; // Fallback to empty array if data is falsy
  return (
    <div className='my-6 space-y-4'>
      {items.map((item, index) => (
        <ShortenItem 
          key={item.id || index}
          {...item}
        />
      ))}
    </div>
  );
}

export default ShortenUrlList;

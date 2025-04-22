import React from 'react';
import ShortenItem from './ShortenItem';

const ShortenUrlList = ({ data }) => {
  return (
    <div className='my-6 space-y-4'>
      {data.map((item, index) => (
        <ShortenItem 
          key={item.id || index} // Fallback to index if item.id is null or undefined
          {...item}
        />
      ))}
    </div>
  );
}

export default ShortenUrlList;

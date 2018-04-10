import React from 'react';
import { Link } from 'react-router-dom';

const CapList = ({ items, type }) => {
  const renderCap = items.map(item =>
    <Link style={{ marginRight: '12px' }} key={item.id} to={`/${type}/${item.id}`}>{item.name}</Link>
  );

  return (
    <div>
      {renderCap}
    </div>
  );
};

export default CapList;

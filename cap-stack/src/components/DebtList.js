import React from 'react';
import { Link } from 'react-router-dom';

const DebtList = ({ debts }) => {
  const renderDebt = debts.map(debt =>
    <Link style={{ marginRight: '12px' }} key={debt.id} to={`/debts/${debt.id}`}>{debt.name}</Link>
  );

  return (
    <div>
      {renderDebt}
    </div>
  );
};

export default DebtList;

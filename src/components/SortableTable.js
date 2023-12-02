import React, { useState } from 'react';

const data = [
  { id: 1, campaigns: 'Cosmetic', clicks: 712, cost: 'USD 4,272', conversions: 8, revenue : 'USD 16,568' },
  { id: 2, campaigns: 'Serums', clicks: 3961, cost: 'USD 27,272', conversions: 115, revenue : 'USD 362,58' },
  { id: 3, campaigns: 'Facewash', clicks: 9462, cost: 'USD 76,272', conversions: 123, revenue : 'USD 16,58' },
  { id: 1, campaigns: 'Shampoos', clicks: 439, cost: 'USD 2,272', conversions: 5, revenue : 'USD 16,58' },
  { id: 2, campaigns: 'Conditioners', clicks: 1680, cost: 'USD 3,84', conversions: 49, revenue : 'USD 16,58' },
  { id: 3, campaigns: 'Facewash 2', clicks: 4978, cost: 'USD 29,272', conversions: 189, revenue : 'USD 16,58' },
  { id: 3, campaigns: 'Total', clicks: 26510, cost: 'USD 1,43,272', conversions: 489, revenue : 'USD 15,73,580' },

];

const headCells = [
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'clicks', label: 'Clicks' },
  { id: 'cost', label: 'Cost' },
  { id: 'conversions', label: 'Conversions' },
  { id: 'revenue', label: 'Revenue' },

];

const SortableTable = () => {
  const [orderBy, setOrderBy] = useState('campaigns');
  const [order, setOrder] = useState('asc');

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
      : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
  };

  return (
    <table>
      <thead>
        <tr>
          {headCells.map((headCell) => (
            <th key={headCell.id} onClick={() => handleSortRequest(headCell.id)}>
              {headCell.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stableSort(data, getComparator(order, orderBy)).map((row) => (
          <tr key={row.id}>
            <td>{row.campaigns}</td>
            <td>{row.clicks}</td>
            <td>{row.cost}</td>
            <td>{row.conversions}</td>
            <td>{row.revenue}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;

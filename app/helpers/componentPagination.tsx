import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';

const pageSize: any = 10;
export default function ComponentPagination(data: any) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  setPagination({ ...pagination, count: data.length });

  const handlePageChange = (event: any, page: any) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };
  return (
    <Pagination
      count={Math.ceil(pagination.count / pageSize)}
      onChange={handlePageChange}
    />
  );
}

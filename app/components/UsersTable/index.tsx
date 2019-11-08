import * as React from 'react';
import ReactTable from 'react-table';
import { allColumns } from './columns';

interface UsersTableProps {
  users: UserData[];
  loading: boolean;
}

const UsersTable: React.FC<UsersTableProps> = React.memo(
  ({ users, loading }) => (
    <ReactTable
      data={users}
      loading={loading}
      columns={allColumns}
      filterable
      showPagination={false}
    />
  ),
);

export default UsersTable;

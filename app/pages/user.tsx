import * as React from 'react';
import Head from 'next/head';
import { useQuery, Action } from 'react-fetching-library';
import httpService from 'config/http-service';
import { apiEndpoints } from 'config/constants';
import ErrorLabel from 'components/ErrorLabel';
import UsersTable from 'components/UsersTable';
import AppBar from 'components/AppBar';
import AppBarButton from 'components/AppBar/partials/AppBarButton';
import PageContent from 'components/PageContent';

const action: Action = {
  method: 'GET',
  endpoint: apiEndpoints.user,
};

const User = () => {
  const { loading, payload: users, error, query } = useQuery<UserData[]>(
    action,
  );

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <main>
        <AppBar>
          <AppBarButton href="/">Home</AppBarButton>
          <AppBarButton onClick={query}>Refresh Table</AppBarButton>
        </AppBar>
        <PageContent>
          {error && <ErrorLabel />}
          {users && <UsersTable users={users} loading={loading} />}
        </PageContent>
      </main>
    </>
  );
};

User.getInitialProps = async () => {
  await httpService.query(action);

  return {};
};

export default User;

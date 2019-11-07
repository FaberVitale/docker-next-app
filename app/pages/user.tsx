import * as React from 'react';
import Head from 'next/head';
import { useQuery, Action } from 'react-fetching-library';
import httpService from 'config/http-service';
import { apiEndpoints } from 'config/constants';
import ErrorLabel from 'components/ErrorLabel';

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
      <div>
        {loading && <span>Loading</span>}
        {error && <ErrorLabel />}
        {!loading &&
          users &&
          users.map((user: UserData) => (
            <span key={user.id}>{JSON.stringify(user)}</span>
          ))}
        <button type="button" onClick={query}>
          Reload
        </button>
      </div>
    </>
  );
};

User.getInitialProps = async () => {
  await httpService.query(action);

  return {};
};

export default User;

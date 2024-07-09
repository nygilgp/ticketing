import React from 'react';
import buildClient from '../api/build-client';

const App = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <h1>You are signed in.</h1>
      ) : (
        <h1>You are not signed in.</h1>
      )}
    </div>
  );
};

App.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('api/users/currentuser');
  console.log('Landing page', data);
  return data;
};

export default App;

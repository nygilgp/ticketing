import React from 'react';
import axios from 'axios';

const App = ({ currentUser }) => {
  console.log(currentUser);
  return <div>App???</div>;
};

App.getInitialProps = async () => {
  if (typeof window === undefined) {
    console.log('in server');
  } else {
    console.log('in browser');
    const response = await axios.get(
      'https://ticketing.dev/api/users/currentuser'
    );
    return response.data;
  }

  // try {
  //   // ingress-nginx-controller
  //   // ingress-nginx
  //   const response = await axios.get(
  //     'https://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser'
  //   );
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }
  return {};
};

export default App;

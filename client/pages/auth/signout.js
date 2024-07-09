import Router from 'next/router';
import { useEffect } from 'react';
import { useRequest } from '../../hooks/use-request';

const Signout = () => {
  const { doRequest } = useRequest({
    url: 'https://ticketing.dev/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: (data) => {
      Router.push('/');
    },
  });
  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out.</div>;
};

export default Signout;

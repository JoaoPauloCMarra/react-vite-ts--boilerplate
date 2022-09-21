import { useQuery } from '@tanstack/react-query';

import { MOCK_USER_INFO } from './mocks';

const userInfoFetch = async () => {
  if (process.env.NODE_ENV === 'test') {
    return MOCK_USER_INFO;
  }

  const request = await fetch('https://joaopaulocmarra.npkn.net/sandbox/me');
  return await request.json();
};

const useUserInfo = () => useQuery(['userInfo'], userInfoFetch);

export default useUserInfo;

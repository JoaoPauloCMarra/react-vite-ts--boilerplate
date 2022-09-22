import { useQuery } from '@tanstack/react-query';

import { apiGet } from '~/utils';

import { MOCK_USER_INFO } from './mocks';

const useUserInfo = () => useQuery(['userInfo'], () => apiGet({ route: '/me', mock: MOCK_USER_INFO }));

export default useUserInfo;

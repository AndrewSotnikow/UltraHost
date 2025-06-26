import { USERS_API } from '@/const/apiConst';

export const getUser = async (username) => {
  const response = await fetch(`${USERS_API}/${username}`, { method: 'get' });

  return await response.json();
};

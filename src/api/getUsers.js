import { USERS_API } from '@/const/apiConst';

export const getUsers = async () => {
  const response = await fetch(USERS_API, { method: 'get' });
  const users = await response.json();

  if (!users.length) return [];

  return users;
};

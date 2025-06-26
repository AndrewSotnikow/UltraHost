import { getUsers } from '@/api/getUsers';
import { UserList } from '@/app/components/UserList';

export default async function Home() {
  const usersList = await getUsers();

  if (!usersList) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center overflow-auto">
      <UserList usersList={usersList} />
    </div>
  );
}

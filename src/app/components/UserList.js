'use client';

import { User } from './User';
import { FilterBar } from '@/app/components/FilterBar';
import { useMemo, useState } from 'react';

export const UserList = ({ usersList }) => {
  const [filteredUsers, setFilteredUsers] = useState(usersList);

  const handleFilter = useMemo(
    () => (query) => {
      const lowerQuery = query.toLowerCase();
      const result = usersList.filter((user) => user.login.toLowerCase().includes(lowerQuery));
      setFilteredUsers(result);
    },
    [usersList],
  );

  if (!usersList.length) return <p>No users available.</p>;

  return (
    <div className="flex flex-col gap-4">
      <FilterBar onFilter={handleFilter} />
      {filteredUsers.map((user) => (
        <User key={user.id} avatar={user.avatar_url} username={user.login} />
      ))}
    </div>
  );
};

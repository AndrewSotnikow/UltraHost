'use client';
import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

export const FilterBar = ({ onFilter }) => {
  const [currentUserName, setCurrentUserName] = useState('');

  const debouncedFilter = useMemo(() => debounce(onFilter, 300), [onFilter]);

  useEffect(() => {
    debouncedFilter(currentUserName);

    return () => {
      debouncedFilter.cancel();
    };
  }, [currentUserName, debouncedFilter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Find user"
        value={currentUserName}
        onChange={(e) => setCurrentUserName(e.target.value)}
      />
    </div>
  );
};

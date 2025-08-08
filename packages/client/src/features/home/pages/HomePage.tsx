import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { UserCard } from '@client/features/home/components/UserCard';

const HomePage = () => {
  const { user, loading } = useUser('1');

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found.</div>;

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default HomePage;

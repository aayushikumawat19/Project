import React from 'react';
import { useUser } from '@client/hooks/useUser';
import { UserCard } from '@client/features/home/components/UserCard';

const HomePage: React.FC = () => {
  const { user, loading } = useUser(1); // number, not '1'

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found.</div>;

  return <UserCard user={user} />;
};

export default HomePage;

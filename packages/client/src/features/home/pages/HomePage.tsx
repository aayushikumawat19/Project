import React from "react";
import { useUser } from "@client/hooks/useUser";
import { UserCard } from "@client/features/home/components/UserCard";
import styles from "@client/features/home/pages/HomePage.module.css";

const HomePage: React.FC = () => {
  const { user, loading } = useUser(1);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!user) return <div className={styles.noUser}>No user found.</div>;

  return (
    <div className={styles.container}>
      <UserCard user={user} />
    </div>
  );
};

export default HomePage;

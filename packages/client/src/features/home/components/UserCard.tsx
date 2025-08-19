import type { IUserDto } from '@domains/dtos/interface/IUserDTO';
import styles from '@client/features/home/components/UserCard.module.css';

export const UserCard = ({ user }: { user: IUserDto }) => (
  <div className={styles.container}>
    <p>User ID: {user.userId}</p>
    <h3 className={styles.title}>{user.title}</h3>
    <p className={styles.body}>{user.body}</p>
  </div>
);

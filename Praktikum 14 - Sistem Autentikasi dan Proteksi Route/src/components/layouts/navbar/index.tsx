import styles from './navbar.module.css'
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const {data} = useSession();
  return (
    <div className={styles.navbar}>
        <div className="big">
          navbar
        </div>
        {data ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
    </div>
  );
};

export default Navbar;
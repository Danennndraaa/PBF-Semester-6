import Link from "next/link";
import styles from './register.module.css';

const TampilanRegister = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Register</h1>
      <Link href="/auth/login" style={{ color: 'blue', textDecoration: 'underline' }}>
        Sudah punya akun? Ke Halaman Login
      </Link>
    </div>
  );
};

export default TampilanRegister;
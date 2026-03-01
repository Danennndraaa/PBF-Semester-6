import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const halamanLogin = () => {
    const { push } = useRouter();

  const handlerLogin = () => {
    // Simulasi proses login di sini...
    // Setelah selesai, pindah ke halaman produk secara imperatif
    push('/produk');
  };

  return (
    <div className={styles.login}>
      <h1>Halaman Login</h1>
      
      {/* Navigasi imperatif memanggil fungsi */}
      <button onClick={() => handlerLogin()} style={{ padding: '10px', marginBottom: '10px' }}>
        Login
      </button> 
      <br />

      {/* Navigasi deklaratif */}
      <Link href="/auth/register" style={{ color: 'blue' }}>
        Belum punya akun? Ke Halaman Register
      </Link>
    </div>
  );
}

export default halamanLogin;
import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

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
      <h1 style={{ color: "red",borderRadius: "10px",padding: "10px",}}>Belum punya akun?</h1>
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
}

export default halamanLogin;
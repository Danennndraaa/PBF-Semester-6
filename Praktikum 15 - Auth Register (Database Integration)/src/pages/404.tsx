// src/pages/404.tsx
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      
      <div className={styles.error}>
        {/* Gambar Ilustrasi (Tugas 1) */}
        <img 
          src="/page-not-found.png" 
          alt="404 Illustration" 
          className={styles.error_image} 
        />
        
        {/* Judul dan Deskripsi (Tugas 1) */}
        <h1 className={styles.error_title}>Oops! Halaman Tidak Ditemukan</h1>
        <p className={styles.error_desc}>
          Maaf, halaman yang Anda cari mungkin telah dihapus atau URL-nya salah.
        </p>

        {/* Tombol Kembali ke Home dengan Link (Tugas 3) */}
        <Link href="/" className={styles.error_button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Custom404;
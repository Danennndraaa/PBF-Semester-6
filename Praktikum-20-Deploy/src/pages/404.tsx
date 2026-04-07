// src/pages/404.tsx
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      
      <div className={styles.error}>
        {/* <img src="/page-not-found.png" alt="404 Illustration" className={styles.error_image} /> */}
        <Image 
          src="/page-not-found.png" 
          alt="404 Illustration" 
          width={400}
          height={200}
          className={styles.error_image} 
          />
        <h1 className={styles.error_title}>Oops! Halaman Tidak Ditemukan</h1>
        <p className={styles.error_desc}>
          Maaf, halaman yang Anda cari mungkin telah dihapus atau URL-nya salah.
        </p>
        <Link href="/" className={styles.error_button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Custom404;
import Link from "next/link";

const halamanRegister = () => {
    return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Register</h1>
      {/* Navigasi deklaratif menggunakan Link */}
      <Link href="/auth/login" style={{ color: 'blue' }}>
        Ke Halaman Login
      </Link>
    </div>
  );
}

export default halamanRegister;
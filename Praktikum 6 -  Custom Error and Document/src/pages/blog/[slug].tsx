import { useRouter } from "next/router";

export default function BlogPost() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Detail Blog</h1>
      {/* Menampilkan nilai slug dari URL */}
      <p>Judul Artikel (Slug): <strong>{query.slug}</strong></p>
    </div>
  );
}
import { useRouter } from "next/router";

export default function CategoryPage() {
  const { query } = useRouter();

  // Memastikan slug adalah array sebelum di-map
  const slugs = Array.isArray(query.slug) ? query.slug : [];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Kategori</h1>
      <p>Parameter URL yang ditangkap:</p>
      <ul>
        {slugs.map((segment, index) => (
          <li key={index}>Segmen {index + 1}: <strong>{segment}</strong></li>
        ))}
      </ul>
    </div>
  );
}
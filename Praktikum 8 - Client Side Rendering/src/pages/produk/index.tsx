import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori = () => {
  // Menambahkan tipe data ke useState agar TypeScript lebih akurat
  const [products, setProduct] = useState<ProductType[]>([]);

  // 1. Ekstrak logika fetch ke dalam fungsi terpisah
  const fetchData = () => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        // console.log(responsedata.data);
        setProduct(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  // 2. Panggil fetchData saat komponen pertama kali di-mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      
      {/* 3. Tambahkan tombol Refresh yang memanggil fungsi fetchData */}
      <button 
        onClick={fetchData} 
        style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}
      >
        Refresh Data
      </button>

      {products.map((product: ProductType) => (
        <div key={product.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
          <h2>{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Kategori;



// const produk = () => {
//   // const [isLogin, setIsLogin] = useState(false); 
//   // const { push } = useRouter();

//   // useEffect(() => {
//   //   if (!isLogin) {
//   //     push("/auth/login");
//   //   }
//   // }, []);
//   return (
//     <div style={{ padding: '20px' }}>
//         Produk User Page
//     </div>
//   );
// };

// export default produk;

// import ProductView from "../views/product";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function ProdukPage() {
//   const [isLogin, setIsLogin] = useState(true); // Ubah ke true agar bisa melihat halaman
//   const { push } = useRouter();

//   useEffect(() => {
//     if (!isLogin) {
//       push("/auth/login");
//     }
//   }, [isLogin, push]);

//   return <ProductView />;
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const kategori = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        //console.log(responsedata.data);
        setProduct(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Produk</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: {product.harga}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;



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
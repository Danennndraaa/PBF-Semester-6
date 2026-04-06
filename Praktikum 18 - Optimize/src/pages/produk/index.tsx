import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);
  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  //   },[]);

  // useEffect(() => {
  //   fetch("/api/produk")
  //     .then((response) => response.json())
  //     .then((responsedata) => {
  //       setProducts(responsedata.data);
  //       // console.log("Data produk:", responsedata.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching produk:", error);
  //     });
  // }, []);
  
  const { data, error,isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);


  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

export default Kategori;

// const Kategori = () => {
//   // Menambahkan tipe data ke useState agar TypeScript lebih akurat
//   const [products, setProduct] = useState([]);

//   // 1. Ekstrak logika fetch ke dalam fungsi terpisah
//   const fetchData = () => {
//     fetch("/api/produk")
//       .then((response) => response.json())
//       .then((responsedata) => {
//         // console.log(responsedata.data);
//         setProduct(responsedata.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   };

//   // 2. Panggil fetchData saat komponen pertama kali di-mount
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <TampilanProduk products={products} />
//     </div>
//   );
// };

// export default Kategori;



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
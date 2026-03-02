// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const produk = () => {
//   const [isLogin, setIsLogin] = useState(false); 
//   const { push } = useRouter();

//   useEffect(() => {
//     if (!isLogin) {
//       push("/auth/login");
//     }
//   }, []);
//   return (
//     <div style={{ padding: '20px' }}>
//         Produk User Page
//     </div>
//   );
// };

// export default produk;

import ProductView from "../views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProdukPage() {
  const [isLogin, setIsLogin] = useState(true); // Ubah ke true agar bisa melihat halaman
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  return <ProductView />;
}
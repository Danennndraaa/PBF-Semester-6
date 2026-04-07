import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/Product.type";


const HalamanProduk = ({ product }: { product: ProductType }) => {
  // Digunakan client-side rendering
//   const router = useRouter();
//   console.log(router);

  //   const { query } = useRouter();
  //   const { data, error, isLoading } = useSWR(`/api/products/${query.produk}`, fetcher);
  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data?.data} />
  //   </div>
  // );

  return(
    <div>
      <DetailProduk products={product}/>
    </div>
  )
};

export default HalamanProduk; 

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
// digunakan server-side rendering

export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/products/${params?.produk}`);
  const responce = await res.json();
  return {
    props: {
      product: responce.data,
    },
  };
}

// digunakan static site generation

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/products`);
//   const responce = await res.json();

//   const paths = responce.data.map((product: ProductType) => ({
//     params: { produk: product.id },
//   }));

//   return { 
//     paths, 
//     fallback: false 
//   };
// }

// export async function getStaticProps({ params }: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/products/${params?.produk}`);
//   const responce: { data: ProductType[] } = await res.json();

//   return {
//     props: {
//       product: responce.data,
//     },
//   };
// }
import styles from "../../pages/produk/produk.module.scss";
import Link from "next/link";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type TampilanProdukProps = {
  products: ProductType[];
  isLoading?: boolean;
  error?: any;
};

const TampilanProduk = ({ products, isLoading, error }: TampilanProdukProps) => {
  if (error) return <div>Terjadi kesalahan saat memuat data produk.</div>;

  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      
      <div className={styles.produk__content}>
        {isLoading ? (
          [...Array(4)].map((_, index) => (
            <div key={index} className={`${styles.produk__content__skeleton} ${styles.animatePulse}`}>
              <div className={styles.produk__content__skeleton__image}></div>
              <div className={styles.produk__content__skeleton__name}></div>
              <div className={styles.produk__content__skeleton__category}></div>
              <div className={styles.produk__content__skeleton__price}></div>
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((product: ProductType) => (
          <Link href ={`/produk/${product.id}`} key={product.id} className={styles.produk__content__item}>
           <div key={product.id} className={styles.produk__content__item}>
              <div className={styles.produk__content__item__image}>
                <img src={product.image} alt={product.name} width={200} />
              </div>
              <h4 className={styles.produk__content__item__name}>
                {product.name}
              </h4>
              <p className={styles.produk__content__item__category}>
                {product.category}
              </p>
              <p className={styles.produk__content__item__price}>
                {/* Menambahkan locale agar format rupiahnya benar */}
                Rp {product.price} 
              </p>
            </div>
          </Link>
          ))
        ) : (
          <div className={styles.produk__empty}>Tidak ada produk yang tersedia.</div>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;
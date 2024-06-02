import { useFetchProducts } from "@/app/hooks/useFetchProducts";
import ProductItem from "../ProductItem";
import Skeleton from "../SkeletonCard";
import styles from './ProductList.module.scss';

export default function ProductList() {

  const { isLoading, error, data: products } = useFetchProducts();

  return (
    <>
      {isLoading ?
      <div className={styles['product-list-container']}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
        :
        <div className={styles['product-list-container']}>
          {products?.map((product: Product) => (
              <ProductItem key={product.id} product={product} />
          ))}
        </div>}
    </>
  );
};
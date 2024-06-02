import Image from 'next/image';
import styles from './ProductItem.module.scss';
import { formatValue } from '@/app/utils/formatValue';
import { useContext } from 'react';
import { CartContext } from '@/app/providers';

interface ProductItemProps {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  const { addItem } = useContext(CartContext);

  const addToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className={styles['product-container']}>
      <div className={styles['product-container__wrapper']}>
      <Image className={styles['product-container__image']} src={product.photo} width={300} height={100} alt={`${product.name} image`} />
      <div className='flex justify-between items-center'>
        <span className={styles['product-container__title']}>{product.name}</span>
        <span className={styles['product-container__price']}>{formatValue(product.price)}</span>
      </div>
      <span className={styles['product-container__description']}>{product.description}</span>
      </div>
      <button className={styles['product-container__footer-btn']} onClick={() => addToCart(product)}>
        <Image
          className={styles['product-container__footer__icon']}
          src="/assets/img/shopping-bag.svg"
          alt="Cart Image"
          width={19}
          height={19} />
        <span className={styles['product-container__footer__text']}>Comprar</span>
      </button>
    </div>
  );
};
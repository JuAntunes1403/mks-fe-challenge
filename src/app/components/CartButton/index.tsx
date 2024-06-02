'use client'

import Image from 'next/image';
import styles from './CartButton.module.scss';
import { useContext, useEffect, useState } from 'react';
import { formatValue } from '@/app/utils/formatValue';
import { CartContext } from '@/app/providers';

import { motion } from "framer-motion"

export default function CartButton() {
  let { items, quantity, totalValue, addQuantity, removeQuantity, removeItem } = useContext(CartContext);

  const [openedCart, setOpenedCart] = useState(false);

  const toggleCart = () => {
    setOpenedCart(!openedCart);
  }

  const inDevelopmentFeature = () => {
    alert('Funcionalidade indisponível no momento');
    toggleCart();
  };

  const variants = {
    open: { opacity: 1, x: 0, y: 0},
    closed: { opacity: 0, x: "100%", y: 0, type: ''},
  }
  
  useEffect(() => {
    if(items.length === 0) {
      toggleCart();
    }
  }, [items]);

  return (
    <>

      <button className={styles['cart']} onClick={() => toggleCart()}>
        <Image className={styles['cart__icon']} src="/assets/img/cart-icon.svg" id="cart-icon" alt="Cart Image" width={19} height={19} />
        <span className={styles['cart__quantity']}>{quantity}</span>
      </button>

      <motion.nav
        initial={{opacity: 0}}
        className={styles['nav']}
        animate={!openedCart ? "open" : "closed"}
        variants={variants}
        transition={{
          x: {type: 'spring', bounce: .1, duration: .7}
        }}>
      <div className={`${styles['sidebar-container']}`}>
        <div className={styles['sidebar-container__header']}>
          <p className={styles['sidebar-container__title']}>
            Carrinho <br />
            de compras
          </p>
          <button className={styles['sidebar-container__close']} onClick={() => toggleCart()}>
            X
          </button>
        </div>

        <ul className={styles['sidebar-container__products']}>
          {items.map((item: Product) => (
            <li key={item.id} className={styles['sidebar-container__products__item']}>
              <Image src={item.photo} alt="text" width={75} height={50}/>
              <button className={styles['sidebar-container__products__item__close']} onClick={() => removeItem(item)}>
                X
              </button>
              <span>{item.name}</span>
              <div className={styles['sidebar-container__quantity']}>
                <span className={styles['sidebar-container__quantity__label']}>Qtd:</span>
                <div className={styles['sidebar-container__quantity__wrapper']}>
                <button onClick={() => removeQuantity(item)}>-</button>
                {item.quantity}
                <button onClick={() => addQuantity(item)}>+</button>
                </div>
              </div>
              <span>{formatValue(item.price)}</span>
            </li>
          ))}
        </ul>

        <div className={styles['sidebar-container__footer']}>
          <div className={styles['sidebar-container__footer__price-container']}>
            <p>
              Total:
            </p>
            <p>
              {formatValue(totalValue)}
            </p>
          </div>
          <button className={styles['sidebar-container__footer__finish-btn']} onClick={() => inDevelopmentFeature()}>
            Finalizar Compra
          </button>
        </div>
      </div>
      </motion.nav>
    </>

  );
}
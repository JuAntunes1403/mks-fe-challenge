
import CartButton from '../CartButton';
import styles from './Header.module.scss';

export default function Header() {
  
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__company-name']}>
        MKS
        <small>Sistemas</small>
      </h1>

      <CartButton />
    </header>
  )
}
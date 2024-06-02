import { motion } from 'framer-motion';
import styles from './SkeletonCard.module.scss';

const Skeleton = () => {
  return (
    <div className={styles['skeleton-container']}>
      <motion.div
        className={styles['image']}
        animate={{ scaleX: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <div className={styles['text']}>
        <motion.div
          className={styles['title']}
          animate={{ scaleX: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <motion.div
          className={styles['description']}
          animate={{ scaleX: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    </div>
  );
};

export default Skeleton;

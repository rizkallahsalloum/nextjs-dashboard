import Image from 'next/image';
import styles from './paymentAndTransaction.module.scss';
import upArrow from '../../../public/arrow-up-icon.svg';
import downArrow from '../../../public/arrow-down-icon.svg';
export default function PaymentAndTransactions() {
  return (
    <>
      <div className={styles.payment__transactions}>
        <h3 className={styles.component__title}>Payment and Transactions</h3>
        <div className={styles.payment__transactions_list}>
          <div className={styles.payment__transactions_list_item}>
            <figure>
              <Image src={upArrow} alt="Up arrow icon" />
              <figcaption> Target</figcaption>
            </figure>
            <div className={styles.payment__transactions_list_item_number}>
              $12.4k
            </div>
          </div>
          <div className={styles.payment__transactions_list_item}>
            <figure>
              <Image src={downArrow} alt="Up arrow icon" />
              <figcaption> Target</figcaption>
            </figure>
            <div className={styles.payment__transactions_list_item_number}>
              $2.4k
            </div>
          </div>
          <div className={styles.payment__transactions_list_item}>
            <figure>
              <Image src={upArrow} alt="Up arrow icon" />
              <figcaption> Target</figcaption>
            </figure>
            <div className={styles.payment__transactions_list_item_number}>
              $35.4k
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

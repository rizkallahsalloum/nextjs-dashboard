import Image from 'next/image';
import Link from 'next/link';
import userCardIcon from '../../assets/user-icon.svg';
import earningsCardIcon from '../../assets/net-earnings-icon.svg';
import expenseCardIcon from '../../assets/expenses-icon.svg';
import projectsCardIcon from '../../assets/folder-icon.svg';

import tasksCardIcon from '../../assets/tasksquare-icon.svg';
import balanceCardIcon from '../../assets/diagram-icon.svg';
import statsCardIcon from '../../assets/view-stats-icon.svg';
import statsRateIcon from '../../assets/stats-rate-icon.svg';
import styles from './usercards.module.scss';
import {
  earningsCard,
  totalProjectsCard,
  totalTasksCard,
  totalClientsCard,
} from '../../data';

export default function UserCards({ data }) {
  // let data;
  // const amount = 100;
  // const diff = 20;
  // switch (type) {
  //   case 'earnings':
  //     data = {
  //       title: 'Net Earnings',
  //       isMoney: true,
  //       icon: <Image src={earningsCardIcon} alt="Your Net Earnings icon" />,
  //     };
  //     break;
  //   case 'expenses':
  //     data = {
  //       title: 'Your Expenses',
  //       isMoney: false,
  //       icon: <Image src={expenseCardIcon} alt="Expenses icon" />,
  //     };
  //     break;
  //   case 'projects':
  //     data = {
  //       title: 'Total Projects',
  //       isMoney: false,
  //       icon: <Image src={projectsCardIcon} alt="Total Projects icon" />,
  //     };
  //     break;
  //   case 'tasks':
  //     data = {
  //       title: 'Total Tasks',
  //       isMoney: false,
  //       icon: <Image src={tasksCardIcon} alt="Total Tasks icon" />,
  //     };
  //     break;
  //   case 'balance':
  //     data = {
  //       title: 'Your Balance',
  //       isMoney: true,
  //       icon: <Image src={balanceCardIcon} alt="Your Balance icon" />,
  //     };
  //     break;
  //   case 'clients':
  //     data = {
  //       title: 'Total Clients',
  //       isMoney: false,
  //       icon: <Image src={userCardIcon} alt="Total Clients icon" />,
  //     };

  //     break;

  //   default:
  //     break;
  // }
  console.log(data.title);
  const cx = (...classNames) => classNames.join(' ');
  return (
    <>
      <div className={`${styles.user__card} `}>
        <div className={cx(`${styles.user__card_info}`)}>
          <div className={`${styles.display__flex} ${styles.flex__center}`}>
            <span className={styles.cart__user_icon}>{data.icon}</span>
            <span className={`${styles.card__user_type} ${styles.ml_1}`}>
              {data.title}
            </span>
          </div>
          <div className={styles.amount}>
            <span className={styles.card__user_amount}>
              {data.isMoney && '$'}
              {amount}
            </span>
          </div>
          <Link href="/" className={styles.link}>
            View all
          </Link>
        </div>
        <div className={styles.user__card_chart}>
          <div className={styles.card__user_rate}>
            {/* <div class={styles.triangle}></div> */}
            <Image
              className={`${styles.stats__percentage} ${styles.positive}`}
              src={statsRateIcon}
              alt="Stats rate icon"
            />
            {diff}%
          </div>
          <Image src={statsCardIcon} alt="Statistics icon" />
        </div>
      </div>
    </>
  );
}

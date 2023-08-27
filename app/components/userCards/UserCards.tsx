'use client';

import Image from 'next/image';
import Link from 'next/link';
import userCardIcon from '../../../public/user-icon.svg';
import earningsCardIcon from '../../../public/net-earnings-icon.svg';
import expenseCardIcon from '../../../public/expenses-icon.svg';
import projectsCardIcon from '../../../public/folder-icon.svg';

import tasksCardIcon from '../../../public/tasksquare-icon.svg';
import balanceCardIcon from '../../../public/diagram-icon.svg';
import statsCardIcon from '../../../public/view-stats-icon.svg';
import statsRateIcon from '../../../public/stats-rate-icon.svg';
import styles from './usercards.module.scss';

import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const UserCards = (props: Props) => {
  const cx = (...classNames) => classNames.join(' ');
  return (
    <>
      <div className={`${styles.user__card} `}>
        <div className={cx(`${styles.user__card_info}`)}>
          <div className={`${styles.display__flex} ${styles.flex__center}`}>
            <span className={styles.cart__user_icon}>
              <Image
                src={props.icon}
                alt="Total Projects icon"
                width={22}
                height={22}
              />
            </span>
            <span className={`${styles.card__user_type} ${styles.ml_1}`}>
              {props.title}
            </span>
          </div>
          <div className={styles.amount}>
            <span className={styles.card__user_amount}>{props.amount}</span>
          </div>
          <Link href="/" className={styles.link}>
            View all
          </Link>
        </div>
        <div className={styles.user__card_chart}>
          <div className={styles.chart}>
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 20, y: 70 }}
                />
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.card__user_rate}>
            <span
              style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
            >
              {props.percentage}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCards;

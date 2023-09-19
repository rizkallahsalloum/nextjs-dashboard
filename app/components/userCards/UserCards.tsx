'use client';

import Image from 'next/image';
import styles from './usercards.module.scss';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  amount: number;
  percentage: number;
  chartData: object[];
};
interface CustomTooltipProps {
  active: boolean;
  payload: any[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    if (data) {
      const valueKey = Object.keys(data).find((key) => key !== 'name');

      if (valueKey) {
        const value = data[valueKey];

        return (
          <div className={styles.custom_tooltip}>
            <p className={styles.custom_tooltip_title}>{data.name}</p>
            <p className={styles.custom_tooltip_label}>
              {valueKey}: {value}
            </p>
          </div>
        );
      }
    }
  }

  return null;
};

const UserCards = (props: Props) => {
  const cx = (...classNames: string[]) => classNames.join(' ');
  return (
    <>
      <div className={`${styles.user__card} `}>
        <div className={cx(`${styles.user__card_info}`)}>
          <div className={`${styles.display__flex} ${styles.flex__center}`}>
            <span className={`${styles.card__user_type}`}>{props.title}</span>
          </div>
          <div className={styles.amount}>
            <span className={styles.card__user_amount}>{props.amount}</span>
          </div>
        </div>
        <div className={styles.card__user_rate}>
          <span className={styles.card__user_icon}>
            <Image
              src={props.icon}
              alt="Total Projects icon"
              width={20}
              height={20}
            />
          </span>
          <span style={{ color: props.percentage < 0 ? '#d32d41' : '#6ab187' }}>
            {props.percentage}%
          </span>
        </div>
      </div>
    </>
  );
};

export default UserCards;

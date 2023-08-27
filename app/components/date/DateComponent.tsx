import Image from 'next/image';
import styles from './dateComponent.module.scss';
import calendarIcon from '../../../public/calendar-2.svg';

export default function DateComponent() {
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString([], {
    month: 'short',
  });
  const currYear = new Date().getFullYear();

  return (
    <div className={`${styles.date}`}>
      <Image
        src={calendarIcon}
        alt="Search icon"
        width={15}
        height={15}
        className={styles.calendar__icon}
      />
      {currDay} {currMonth}
    </div>
  );
}

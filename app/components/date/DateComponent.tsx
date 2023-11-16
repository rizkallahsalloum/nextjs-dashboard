import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './dateComponent.module.scss';
import calendarIcon from '../../../public/calendar-2.svg';

interface DateProps {
  className?: string;
}

const DateComponent: React.FC<DateProps> = ({ className = '' }) => {
  const [currDay, setCurrDay] = useState<number | null>(null);
  const [currMonth, setCurrMonth] = useState<string | null>(null);
  // const [currYear, setCurrYear] = useState<number | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    setCurrDay(currentDate.getDate());
    setCurrMonth(currentDate.toLocaleString([], { month: 'short' }));
    // setCurrYear(currentDate.getFullYear());
  }, []);

  return (
    <div className={`${styles.date} ${className}`}>
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
};

export default DateComponent;

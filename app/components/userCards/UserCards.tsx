'use client';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';

import { db } from '../../firebase';
import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import Image from 'next/image';
import styles from './usercards.module.scss';

interface CardItem {
  id: number;
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  amount: string | number;
  percentage: number;
  chartData: object[];
}

const UserCards = () => {
  const [cardItems, setCardItems] = useState<CardItem[]>([]);
  const cx = (...classNames: string[]) => classNames.join(' ');

  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(query(collection(db, 'user_cards')));
    const data: CardItem[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      data.push({
        id: docData.id,
        title: docData.title,
        icon: docData.icon,
        dataKey: docData.dataKey,
        amount: docData.amount,
        percentage: docData.percentage,
        chartData: docData.chartData,
        color: '',
      });
    });
    return data;
  };

  useEffect(() => {
    async function fetchCardsData() {
      const data = await fetchDataFromFirestore();
      setCardItems(data);
    }

    fetchCardsData();
  }, []);

  // Check if the cardItems array is defined before rendering it
  if (cardItems) {
    return (
      <>
        {cardItems.map((item, index) => (
          <div key={index} className={`${styles.user__card} `}>
            <div className={cx(`${styles.user__card_info}`)}>
              <div className={`${styles.display__flex} ${styles.flex__center}`}>
                <span className={`${styles.card__user_type}`}>
                  {item.title}
                </span>
              </div>
              <div className={styles.amount}>
                <span className={styles.card__user_amount}>{item.amount}</span>
              </div>
            </div>
            <div className={styles.card__user_rate}>
              <span className={styles.card__user_icon}>
                <Image
                  src={item.icon || '/no-image.png'}
                  alt="Total Projects icon"
                  width={20}
                  height={20}
                />
              </span>
              <span
                style={{ color: item.percentage < 0 ? '#d32d41' : '#6ab187' }}
              >
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </>
    );
  }

  return <div>Loading...</div>;
};

export default UserCards;

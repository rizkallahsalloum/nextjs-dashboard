'use client';
import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  collectionGroup,
} from 'firebase/firestore';
import { db } from '../../firebase';
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
  const [loading, setLoading] = useState(true);

  const cx = (...classNames: string[]) => classNames.join(' ');

  useEffect(() => {
    async function fetchData() {
      const collectionRef = collectionGroup(db, 'user_cards');
      const q = query(collectionRef);
      const cards = await getDocs(q);
      const cardData: CardItem[] = [];

      cards.forEach((card) => {
        cardData.push(card.data() as CardItem);
      });

      setCardItems(cardData);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Check if the cardItems array is defined before rendering it
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(cardItems);
  return (
    <>
      {cardItems.map((item, index) => (
        <div key={index} className={`${styles.user__card} `}>
          <div className={cx(`${styles.user__card_info}`)}>
            <div className={`${styles.display__flex} ${styles.flex__center}`}>
              <span className={`${styles.card__user_type}`}>{item.title}</span>
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
};

export default UserCards;

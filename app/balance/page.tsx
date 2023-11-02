import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import styles from './balance.module.scss';

export default function BalancePage() {
  return (
    <div className={styles.balance}>
      BalancePage
      <Accordion title="Accordion 1zaz">
        <p>This is the content of the first accordion.</p>
      </Accordion>
      <Accordion title="Accordion 2">
        <p>This is the content of the second accordion.</p>
      </Accordion>
    </div>
  );
}

import styles from './customTooltip.module.scss';

export default function CustomTooltip({ text, children }) {
  return (
    <div className={styles.tooltip_container}>
      {children}
      <div className={styles.tooltip_text}>{text}</div>
    </div>
  );
}

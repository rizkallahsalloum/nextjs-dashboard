import styles from './customTooltip.module.scss';

interface Props {
  text: string;
  children: React.ReactNode;
}

export default function CustomTooltip({ text, children }: Props) {
  return (
    <div className={styles.tooltip_container}>
      {children}
      <div className={styles.tooltip_text}>{text}</div>
    </div>
  );
}

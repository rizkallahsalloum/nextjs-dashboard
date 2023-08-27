import styles from './completedTasks.module.scss';
function CompletedTasks() {
  return (
    <div className={styles.completed__tasks}>
      <h3 className={styles.component__title}> Completed Tasks</h3>
    </div>
  );
}

export default CompletedTasks;

import ClientsRequestsTable from './ClientsRequestsTable'; // Import the component
import styles from './clients.module.scss';

export default function ClientsPage() {
  return (
    <div className={styles.clients}>
      <ClientsRequestsTable pageSize={10} />
    </div>
  );
}

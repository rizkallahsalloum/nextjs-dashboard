import ClientsRequestsTable from './ClientsRequestsTable';
import styles from './clients.module.scss';
import { ClientsRequests } from '../data';

export default function ClientsPage() {
  return (
    <div className={styles.clients}>
      ClientsPage
      <ClientsRequestsTable data={ClientsRequests} pageSize={10} />
    </div>
  );
}

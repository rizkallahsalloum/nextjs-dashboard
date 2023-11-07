'use client';
import React, { useState, useEffect } from 'react';
import ClientsRequestsTable from './ClientsRequestsTable';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import styles from './clients.module.scss';
interface Comment {
  title: string;
  tag: string;
  comment: string;
}
interface Client {
  id: number | string;
  pageSize: number;
  img: string;
  name: string;
  requests: string;
  priority: string;
  hours: number | string;
  comments: Comment[];
}

interface DocData {
  [key: string]: Client;
}

export default function ClientsPage() {
  const [data, setData] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getRequests(id: string) {
      try {
        const requestsCol = collection(db, 'clients_requests');
        const requestsSnapshot = await getDocs(
          query(requestsCol, where('id', '==', id))
        );
        const requests = requestsSnapshot.docs.map((doc) => {
          const docData = doc.data() as DocData;
          return Object.values(docData).map(
            (clientData) => clientData as Client
          );
        });
        setData(requests.flat());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    // Pass the id when calling getRequests function
    getRequests('1');
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return data ? (
    <div className={styles.clients}>
      <ClientsRequestsTable pageSize={10} />
    </div>
  ) : null;
}

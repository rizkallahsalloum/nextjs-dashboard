'use client';
import React, { useState, useEffect } from 'react';
import ClientsRequestsTable from './ClientsRequestsTable';
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

export default function ClientsPage() {
  const [data, setData] = useState<Client | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/ClientsRequests')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data ? (
    <div className={styles.clients}>
      <ClientsRequestsTable
        pageSize={10}
        id={data.id}
        img={data.img}
        name={data.name}
        requests={data.requests}
        priority={data.priority}
        hours={data.hours}
        comments={data.comments}
      />
    </div>
  ) : null;
}

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './table.module.scss';
import Link from 'next/link';

interface Client {
  id: number | string;
  pageSize: number;
  img: string;
  name: string;
  requests: string;
  priority: string;
  hours: number | string;
  comments: string;
}

async function getRequests() {
  const res = await fetch('http://localhost:4000/ClientsRequests', {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default function TableWithPagination({ pageSize }: Client) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const requests = await getRequests();
      setData(requests);
    };
    fetchData();
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div>
      <div className={styles.table}>
        <div className={`${styles.table__header} ${styles.display__flex}`}>
          <div className={`${styles.table__title}`}>
            <h3 className="component__title">Clients Notes</h3>
            <span className={`${styles.table__data_length}`}>
              {data.length} total
            </span>
          </div>
          <div className={`${styles.table__pages}`}>
            <div className={styles.table__navigation}>
              <span
                className={styles.mr_2}
              >{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                className={styles.left__arrow}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <Image
                  src="/arrow-left.svg"
                  width={15}
                  height={15}
                  alt="previous"
                />
              </button>
              <button
                className={`${styles.right__arrow} ${
                  currentPage === totalPages ? styles.disabled__button : ''
                }`}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <Image
                  src="/arrow-right.svg"
                  width={15}
                  height={15}
                  alt="next"
                />
              </button>
            </div>

            <Link href={'/clients'} className={styles.table__see_all_btn}>
              See all
              <Image
                src="/arrow-right.svg"
                width={15}
                height={15}
                alt="see all"
              />
            </Link>
          </div>
        </div>
        <hr className={styles.separator} />
        <table>
          <tbody>
            {currentData.map((client: Client) => (
              <tr key={client.id}>
                <td className={styles.flex}>
                  <Image
                    src={client.img}
                    alt="Client Photo"
                    width={50}
                    height={50}
                    className={styles.table__client_img}
                  />
                  {client.name}
                </td>
                <td>{client.requests} requests</td>
                <td>
                  <Image
                    src={'./timer.svg'}
                    alt="timer"
                    width={22}
                    height={22}
                  />
                  {client.hours}
                </td>
                <td>{client.priority}</td>
                <td>
                  <Link href={`/`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`${styles.table__pages_mobile}`}>
          <div className={styles.table__navigation}>
            <span
              className={styles.mr_2}
            >{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              className={styles.left__arrow}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <Image
                src="/arrow-left.svg"
                width={15}
                height={15}
                alt="previous"
              />
            </button>
            <button
              className={`${styles.right__arrow} ${
                currentPage === totalPages ? styles.disabled__button : ''
              }`}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <Image src="/arrow-right.svg" width={15} height={15} alt="next" />
            </button>
          </div>
          <Link href={'/clients'} className={styles.table__see_all_btn}>
            See all
            <Image
              src="/arrow-right.svg"
              width={15}
              height={15}
              alt="see all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

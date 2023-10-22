'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './clients.module.scss';
import Link from 'next/link';

interface Client {
  id?: number | string;
  pageSize?: number;
  img?: string;
  name?: string;
  requests?: string;
  priority?: string;
  hours?: number | string;
  comments?: Comment[];
}
type Comment = {
  title: string;
  tag: string;
  comment: string;
};
async function getRequests() {
  const res = await fetch('http://localhost:4000/ClientsRequests', {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default function ClientsRequestsTable({ pageSize }: Client) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();

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
  const startIndex = (currentPage - 1) * (pageSize || 10); // 10 is the default value
  const endIndex = startIndex + (pageSize || 10);
  const currentData = data.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / (pageSize || 10));

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
                className={`${styles.left__arrow} ${
                  currentPage === 1 ? styles.disabled__button : ''
                }`}
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

            {pathname !== '/clients' && (
              <Link href={'/clients'} className={styles.table__see_all_btn}>
                See all
                <Image
                  src="/arrow-right.svg"
                  width={15}
                  height={15}
                  alt="see all"
                />
              </Link>
            )}
          </div>
        </div>
        <hr className={styles.separator} />
        <table>
          <tbody>
            {currentData?.map((client: Client) => (
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
                {/* <td>
                  <ul className={styles.client__tags_list}>
                    {client.comments
                      .slice(0, 2) // selects the first two comments
                      .map((comment: Comment, index: number) => (
                        <li key={index}>
                          <span>{comment.tag}</span>
                        </li>
                      ))}
                  </ul>
                </td> */}
                <td>
                  <span className={`pill pill__${client.priority}`}>
                    {client.priority}
                  </span>
                </td>
                <td>
                  <Link
                    href={`clients/${client.id}`}
                    className={styles.client__details_btn}
                  >
                    Details
                  </Link>
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
              className={`${styles.left__arrow} ${
                currentPage === 1 ? styles.disabled__button : ''
              }`}
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
          {pathname !== '/clients' && (
            <Link href={'/clients'} className={styles.table__see_all_btn}>
              See all
              <Image
                src="/arrow-right.svg"
                width={15}
                height={15}
                alt="see all"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

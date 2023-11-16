'use client';
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import DateComponent from '../date/DateComponent';
import styles from './dashboardHeader.module.scss';
import Image from 'next/image';
import searchIcon from '../../../public/search-icon.svg';
import notificationIcon from '../../../public/notification-icon.svg';
import UserIcon from '../../../public/user-icon.svg';
import TasksIcon from '../../../public/tasksquare-icon.svg';
import SettingsIcon from '../../../public/filter-icon.svg';
import DropdownModal from '../dropdownModal/DropdownModal';

interface Item {
  hours: string | number;
  id: string;
  img: string;
  name: string;
  comments?: Comment[];
  title: string;
}
interface Comment {
  title: string;
  tags: [];
  comment: string;
}

export default function DashboardHeader() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'clients_requests');
        const q = query(collectionRef, limit(4), orderBy('hours')); // Retrieve only four documents

        const querySnapshot = await getDocs(q);
        const documentsData: any[] = [];

        querySnapshot.forEach((doc) => {
          documentsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setData(documentsData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className={`${styles.header}  display__flex flex__wrap`}>
        <div className={`${styles.header__info_welcome}`}>
          <div className={styles.header__welcome_username}>
            <h1>Hello, John</h1>
          </div>
        </div>
        <div className={`${styles.header__utils}  ${styles.display__flex} `}>
          <div className={`${styles.header__utils_search} ${styles.mr_2} `}>
            <label htmlFor="" className={styles.header__utils_search_bar}>
              <span className={styles.icon}>
                <Image
                  src={searchIcon}
                  alt="Search icon"
                  width={15}
                  height={15}
                  className={styles.logo__desktop}
                />
              </span>
              <input type="search" placeholder="Search" />
            </label>
          </div>
          <div
            className={`${styles.header__utils_user_info} ${styles.md_mb_2}`}
          >
            <DateComponent />
            <div className={styles.user__info_notification}>
              <DropdownModal
                trigger={
                  <Link href="#" className={styles.user__info_notification_btn}>
                    <span
                      className={styles.user__info_notification_icon}
                    ></span>
                    <Image
                      src={notificationIcon}
                      alt="notification icon"
                      width={15}
                      height={19}
                      className={styles.bell_icon}
                    />
                  </Link>
                }
              >
                <div
                  className={`${styles.display__flex_column} ${styles.dropdown_modal_notifications}`}
                >
                  <h3 className={styles.dropdown_modal_notifications_title}>
                    Notifications
                  </h3>
                  {data.map((item) => (
                    <Link
                      href="#"
                      key={item.id}
                      className={styles.dropdown_modal_notifications_link}
                    >
                      <div
                        className={`${styles.dropdown_modal_notifications_list} ${styles.display__flex}`}
                      >
                        <div>
                          <Image
                            src={item.img}
                            alt="Client Photo"
                            width={50}
                            height={50}
                            className={styles.dropdown_modal_notifications_img}
                          />
                        </div>
                        <div
                          className={
                            styles.dropdown_modal_notifications_content
                          }
                        >
                          <div
                            className={styles.dropdown_modal_notifications_name}
                          >
                            {item.name}
                          </div>
                          {item.comments
                            ?.slice(0, Math.ceil(item.comments.length / 3))
                            .map((comment: Comment, index: number) => (
                              <div
                                key={index}
                                className={`${styles.dropdown_modal_notifications_list_item}`}
                              >
                                <p>{comment.title}</p>
                              </div>
                            ))}

                          <div
                            className={
                              styles.dropdown_modal_notifications_hours
                            }
                          >
                            {' '}
                            {item.hours}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </DropdownModal>
            </div>
            <div className={styles.user_info_image}>
              <DropdownModal
                trigger={
                  <button>
                    <Image
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt="User Profile"
                      width={50}
                      height={50}
                      className={styles.user_info_image_img}
                    />
                  </button>
                }
              >
                <div
                  className={`${styles.display__flex_column} ${styles.dropdown_modal_links}`}
                >
                  <Link href="#">
                    <figure>
                      <Image
                        className={styles.sidebar__icon}
                        src={UserIcon}
                        alt="User icon"
                      />
                      <figcaption> Profile</figcaption>
                    </figure>
                  </Link>
                  <Link href="#">
                    <figure>
                      <Image
                        className={styles.sidebar__icon}
                        src={TasksIcon}
                        alt="Tasks icon"
                      />
                      <figcaption> Tasks</figcaption>
                    </figure>
                  </Link>
                  <Link href="#">
                    <figure>
                      <Image
                        className={styles.sidebar__icon}
                        src={SettingsIcon}
                        alt="Settings icon"
                      />
                      <figcaption> Settings</figcaption>
                    </figure>
                  </Link>
                </div>
                <button type="button" className={`${styles.btn_logout}`}>
                  Logout
                </button>
              </DropdownModal>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

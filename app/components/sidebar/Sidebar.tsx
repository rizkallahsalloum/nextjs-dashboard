'use client';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

import { useState, useEffect } from 'react';
import 'firebase/firestore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import logoIcon from '../../../public/logo-icon.svg';
import LogoutIcon from '../../../public/logout-icon.svg';
import ThemeIcon from '../../../public/theme-icon.svg';
import navbarIcon from '../../../public/navbar-icon.svg';
import styles from './sidebar.module.scss';

interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon: string;
}

// type DataItem = {
//   id: string;
//   title: string;
//   url: string;
//   icon: string;
// };

export default function Sidebar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const cx = (...classNames: string[]) => classNames.join(' ');

  const handleToggle = (): any => {
    document.body.style.overflow =
      document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
  };
  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, 'menu'), orderBy('id'))
    );
    const data: MenuItem[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      data.push({
        id: docData.id,
        title: docData.title,
        url: docData.url,
        icon: docData.icon,
      });
    });
    return data;
  };

  useEffect(() => {
    async function fetchMenuData() {
      const data = await fetchDataFromFirestore();
      setMenuItems(data);
    }

    fetchMenuData();
  }, []);

  return (
    <>
      <aside
        className={cx(
          `${styles.sidebar}`,
          isOpen
            ? `${styles.sidebar} ${styles.sidebar__open}`
            : `${styles.sidebar}`
        )}
      >
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <Image
            src={logo}
            alt="Dashboard Logo"
            width={146}
            height={40}
            className={styles.logo__desktop}
          />
          <Image
            src={logoIcon}
            alt="Dashboard Logo"
            width={40}
            height={40}
            className={styles.logo__mobile}
          />
        </Link>
        <nav className={styles.sidebar__nav}>
          {menuItems.map((item) => (
            <Link
              href={item.url}
              onClick={() => setIsOpen(false)}
              className={cx(
                styles.sidebar__nav_link,
                pathname === item.url ? 'active ' : ''
              )}
              key={item.id}
            >
              <figure>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={16}
                  height={16}
                />
                <figcaption> {item.title}</figcaption>
              </figure>
            </Link>
          ))}
        </nav>
        <hr className={styles.sidebar__separator} />
        <nav className={styles.sidebar__nav_bottom}>
          <a href="#" className={styles.sidebar__nav_link}>
            <figure>
              <Image
                className={styles.sidebar__icon}
                src={ThemeIcon}
                alt="Theme icon"
              />
              <figcaption> Theme</figcaption>
            </figure>
          </a>
          <a href="#" className={styles.sidebar__nav_link}>
            <figure>
              <Image
                className={styles.sidebar__icon}
                src={LogoutIcon}
                alt="Logout icon"
              />
              <figcaption> Logout</figcaption>
            </figure>
          </a>
        </nav>
      </aside>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          handleToggle();
        }}
        className={styles.sidebar__toggle}
      >
        <Image src={navbarIcon} alt="navbar icon" />
      </button>
    </>
  );
}

{
}

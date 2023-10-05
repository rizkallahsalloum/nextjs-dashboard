import Link from 'next/link';
import DateComponent from '../date/DateComponent';
import styles from './dashboardHeader.module.scss';
import Image from 'next/image';
import searchIcon from '../../../public/search-icon.svg';
import notificationIcon from '../../../public/notification-icon.svg';
import navbarIcon from '../../../public/navbar-icon.svg';

export default function DashboardHeader({ handleToggle }: any) {
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
            <Link href="#" className={styles.user__info_notification}>
              <span className={styles.user__info_notification_icon}></span>
              <Image
                src={notificationIcon}
                alt="notification icon"
                width={15}
                height={19}
                className={styles.bell_icon}
              />
            </Link>
            <Link href="#" className={styles.user_info_image}>
              <Image
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="User "
                width={56}
                height={56}
              />
            </Link>
            <button onClick={handleToggle} className={styles.sidebar__menu_btn}>
              <Image src={navbarIcon} alt="navbar icon" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

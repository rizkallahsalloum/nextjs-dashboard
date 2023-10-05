import Image from 'next/image';
import styles from './singleClient.module.scss';

async function getRequest(id: number | string) {
  const res = await fetch(`http://localhost:4000/ClientsRequests/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

interface SingleClientProps {
  params: {
    id: number;
  };
}
interface Comment {
  title: string;
  tags: [];
  comment: string;
}

async function SingleClient({ params }: SingleClientProps) {
  const singleRequest = await getRequest(params.id);
  return (
    <>
      <header
        className={styles.single__client_header}
        style={{
          backgroundImage: `url(${singleRequest.wallpaper}), linear-gradient(rgba(35, 40, 45, 0.2),rgba(35, 40, 45, 0.3))`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30vh',
          borderRadius: '2.8rem',
        }}
      >
        <div className={styles.single__client_header_info}>
          <Image
            src={singleRequest.img}
            alt="Client Photo"
            width={100}
            height={100}
            className={styles.single__client_img}
          />
          <h2>{singleRequest.name}</h2>
        </div>
        <div className={styles.single__client_header_info_data}>
          <div className={`${styles.display__flex_column} `}>
            Client from <span>{singleRequest.startingDate}</span>
          </div>
          <div className={`${styles.display__flex_column} `}>
            Number of Projects
            <span>{singleRequest.totalProjects} Projects</span>
          </div>
        </div>
      </header>
      <div className={styles.single__client_comments}>
        <div className={styles.single__client_comments_list}>
          {singleRequest.comments.map((comment: Comment, index: number) => (
            <div
              key={index}
              className={styles.single__client_comments_list_item}
            >
              <h3>{comment.title}</h3>
              <p>{comment.comment}</p>
              <hr />
              <ul className={styles.single__client_comments_list_item_tag}>
                {comment.tags.map((tag: string, tagIndex: number) => (
                  <li key={tagIndex} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleClient;

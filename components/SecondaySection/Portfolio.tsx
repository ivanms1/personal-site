import Image from 'next/image';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';

import Spinner from '../Spinner';

import QUERY_GET_BLOG from './queryGetBlog.graphql';

import { spring } from '../../helpers/animations';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { data, loading } = useQuery(QUERY_GET_BLOG);

  const { user } = data ?? {};
  return (
    <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={spring}>
      <h1 className={styles.Title}>Blog</h1>
      <div className={styles.MainContainer}>
        <div className={styles.Posts}>
          {loading ? (
            <Spinner />
          ) : (
            user?.publication?.posts.map((post: any) => (
              <a
                href={`https://ivanms1.hashnode.dev/${post.slug}`}
                key={post._id}
                target='_blank'
                rel='noreferrer'
                className={styles.Post}
              >
                <div className={styles.TitleAndImage}>
                  <p>{post.title}</p>
                  <div className={styles.ImageContainer}>
                    <Image
                      className={styles.Image}
                      width={200}
                      height={120}
                      src={post.coverImage}
                      alt={post.title}
                    />
                  </div>
                </div>
                <div className={styles.Summary}>{post.brief}</div>
              </a>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;

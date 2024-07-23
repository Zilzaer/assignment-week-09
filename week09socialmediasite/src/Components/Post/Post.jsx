import Link from 'next/link'

import styles from './styles.module.css'

const Post = ({ id, title, author, content, timestamp }) => {
  return (
    <div className={`${styles.post}`}>
      <Link href={`/posts/${id}`}>{ title }</Link>
      <h2>{ author } | { timestamp }</h2>
      <p>{ content }</p>
    </div>
  );
};

export default Post;
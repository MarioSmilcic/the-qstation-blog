import React from "react";
import PostAuthor from "./PostAuthor";
import PostMoment from "./PostMoment";
import EmojiButton from "./EmojiButton";
import { Link } from "react-router-dom";
import styles from "./Post.module.scss";

interface IsPost {
  title: string;
  body: string;
  id: number;
  userId: number;
  date: string;
  timeAdded: string;
  reactions: string;
}

interface IProp {
  post: IsPost;
}

const Post: React.FC<IProp> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p className={styles.postSummary}>{post.body.substring(0, 100)}</p>
      <p className={styles.postCredit}>
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <PostMoment timeAdded={post.date} />
      </p>
      <EmojiButton post={post} />
    </div>
  );
};

export default Post;

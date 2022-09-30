import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import styles from "./PostsList.module.scss";

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

const PostsList = () => {
  const posts = useSelector((state: any) => state.posts.posts);

  return (
    <div className={styles.postsList}>
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;

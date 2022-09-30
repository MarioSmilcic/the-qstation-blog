import PostAuthor from "../../components/posts/PostAuthor";
import PostMoment from "../../components/posts/PostMoment";
import EmojiButton from "../../components/posts/EmojiButton";
import { useAppSelector } from "../../store/reduxHooks";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./FullPostPage.module.scss";
import PageNotFound from "../pageNotFound/PageNotFound";

const FullPostPage = () => {
  const { postId } = useParams<{ postId: any }>();

  const posts = useAppSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id.toString() === postId.toString());

  if (!post) {
    return <PageNotFound />;
  }

  return (
    <div className={styles.singlePost}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className={styles.postCredit}>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <PostMoment timeAdded={post.date} />
      </p>
      <EmojiButton post={post} />
    </div>
  );
};

export default FullPostPage;

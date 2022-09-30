import { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost, deletePost } from "../../store/posts-slice";
import Button from "../../components/button/Button";
import styles from "./Form.module.scss";

const EditPostForm = () => {
  const { postId } = useParams<{ postId: any }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.users);
  const posts = useAppSelector((state) => state.posts.posts);
  const post: any = posts.find(
    (post) => post.id.toString() === postId.toString()
  );

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [author, setAuthor] = useState(post?.userId);

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) =>
    setAuthor(e.target.value);

  const enableEdit = title && content && author;

  const editedPost = {
    id: post.id,
    title,
    body: content,
    userId: author,
    reactions: post.reactions,
    date: new Date().toISOString(),
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    enableEdit && dispatch(updatePost(editedPost));
    navigate(`/post/${postId}`);
  };

  const deletePostHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(deletePost({ id: post.id }));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2>Edit Post</h2>
      <form
        onSubmit={onSubmitHandler}
        className={`${styles.form} ${!enableEdit && styles.formInvalid}`}
      >
        <label>Post Title:</label>
        <input type="text" value={title} onChange={onTitleChanged} />
        <label>Author:</label>
        <select value={author} onChange={onAuthorChanged}>
          <option value=""></option>
          {users.map((user: any) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label>Content:</label>
        <textarea value={content} onChange={onContentChanged} />

        <Button text="Save Post" type="submit" disabled={!enableEdit} />
        <Button text="Delete Post" onClick={deletePostHandler} type="submit" />
      </form>
    </div>
  );
};

export default EditPostForm;

import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "../../store/posts-slice";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./Form.module.scss";

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) =>
    setAuthor(e.target.value);

  const newPost = {
    id: nanoid(),
    title,
    body: content,
    date: new Date().toISOString(),
    userId: author,
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      clapping: 0,
      heart: 0,
      grinning: 0,
      beaming: 0,
      winking: 0,
      tong: 0,
      zany: 0,
      shushing: 0,
    },
  };

  const enableSave = (title && content && author).trim().length !== 0;

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    enableSave && dispatch(addPost(newPost));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2>Add a New Post</h2>
      <form
        onSubmit={onSubmitHandler}
        className={`${styles.form} ${!enableSave && styles.formInvalid}`}
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
        <Button type="submit" text="Save Post" disabled={!enableSave} />
      </form>
    </div>
  );
};

export default AddPostForm;

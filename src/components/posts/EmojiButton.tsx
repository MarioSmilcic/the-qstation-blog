import { useDispatch } from "react-redux";
import { addReaction } from "../../store/posts-slice";

import styles from "./Emoji.module.scss";

interface IsPost {
  title: string;
  body: string;
  id: number;
  userId: any;
  date: string;
  timeAdded?: string;
  reactions: any;
}

interface IProp {
  post: IsPost;
}

const reactionEmoji = {
  thumbsUp: "ð",
  thumbsDown: "ð",
  clapping: "ð",
  heart: "âĪïļïļ",
  grinning: "ð",
  beaming: "ð",
  winking: "ð",
  tong: "ð",
  zany: "ðĪŠ",
  shushing: "ðĪŦ",
};

const EmojiButton: React.FC<IProp> = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className={styles.emoji}
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default EmojiButton;

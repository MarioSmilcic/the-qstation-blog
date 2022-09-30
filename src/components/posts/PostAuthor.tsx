import { useSelector } from "react-redux";

interface IProp {
  userId: number;
}

const PostAuthor: React.FC<IProp> = ({ userId }) => {
  const users = useSelector((state: any) => state.users.users);

  const author = users.find(
    (user: any) => user.id.toString() === userId.toString()
  );

  return <span>by {author && author.name}</span>;
};
export default PostAuthor;

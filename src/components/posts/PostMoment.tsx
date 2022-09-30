import { parseISO, formatDistanceToNow } from "date-fns";

interface IProp {
  timeAdded: string;
}

const PostMoment: React.FC<IProp> = ({ timeAdded }) => {
  let postMoment = "";
  if (timeAdded) {
    const date = parseISO(timeAdded);
    const timePeriod = formatDistanceToNow(date);
    postMoment = `${timePeriod} ago`;
  }

  return (
    <span title={timeAdded}>
      &nbsp; <i>{postMoment}</i>
    </span>
  );
};
export default PostMoment;

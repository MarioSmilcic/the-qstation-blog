import { useCallback, useEffect, useReducer } from "react";
import { useAppDispatch } from "../store/reduxHooks";
import { axiosInstance } from "./axios";
import { addPostsApi } from "../store/posts-slice";
import { addUsersApi } from "../store/users-slice";
import { sub } from "date-fns";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

const initialState = {
  loading: false,
  error: false,
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOADING":
      return {
        error: false,
        loading: true,
      };
    case "ERROR":
      return {
        error: true,
        loading: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

const FetchingApiData = () => {
  const navigate = useNavigate();

  const [apiState, dispatchReducer] = useReducer(reducer, initialState);

  const dispatch = useAppDispatch();

  const fetchPosts = useCallback(async () => {
    try {
      dispatchReducer({ type: "LOADING" });
      const response = await axiosInstance.get("/posts");
      dispatchReducer({ type: "SUCCESS" });

      let min = 1;
      let date = sub(new Date(), { minutes: min++ }).toISOString();
      let reactions = {
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
      };
      const transformedPosts = response.data.map((post: any) => {
        return {
          ...post,
          date,
          reactions,
        };
      });
      dispatch(addPostsApi(transformedPosts));
    } catch (error) {
      dispatchReducer({ type: "ERROR" });
    }
  }, [dispatch]);

  const fetchUsers = useCallback(async () => {
    try {
      dispatchReducer({ type: "LOADING" });
      const response = await axiosInstance.get("/users");
      dispatchReducer({ type: "SUCCESS" });

      const transformedData = response.data.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
        };
      });
      dispatch(addUsersApi(transformedData));
    } catch (error) {
      dispatchReducer({ type: "ERROR" });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, [fetchPosts, fetchUsers]);

  return (
    <div>
      {apiState.error && navigate("/error")}
      {!apiState.error && apiState.loading && <LoadingSpinner />}
    </div>
  );
};

export default FetchingApiData;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IsPost {
  posts: IPost[];
}

interface IPost {
  id: any;
  userId: any;
  title: string;
  body: string;
  date: string;
  reactions: IsReactions;
}

interface IsReactions {
  thumbsUp: number;
  thumbsDown: number;
  clapping: number;
  heart: number;
  grinning: number;
  beaming: number;
  winking: number;
  tong: number;
  zany: number;
  shushing: number;
}

interface IEmojiAdded {
  postId: number;
  reaction: string;
}

const initialState: IsPost = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<IPost>) {
      state.posts.unshift(action.payload);
    },
    updatePost(state, action) {
      const { id } = action.payload;
      const posts = state.posts.filter((post) => post.id !== id);
      state.posts = [action.payload, ...posts];
    },
    deletePost(state, action) {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },

    addPostsApi(state, action) {
      state.posts = action.payload;
    },

    addReaction(state: any, action: PayloadAction<IEmojiAdded>) {
      const { postId, reaction } = action.payload;
      const blogPost = state.posts.find((post: any) => post.id === postId);
      blogPost && blogPost.reactions[reaction]++;
    },
  },
});

export const { addPost, addPostsApi, addReaction, updatePost, deletePost } =
  postsSlice.actions;

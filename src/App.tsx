import PostsList from "./components/posts/PostsList";
import AddPostForm from "./pages/addPostPage/AddPostForm";
import FetchingApiData from "./api/FetchingApiData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import FullPostPage from "./pages/fullPostPage/FullPostPage";
import EditPostForm from "./pages/editPostPage/EditPostForm";
import Hero from "./pages/hero/Hero";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FetchingApiData />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> <PostsList />
            </>
          }
        />
        <Route path="/addNewPost" element={<AddPostForm />} />
        <Route path="/post/:postId" element={<FullPostPage />} />
        <Route path="post/edit/:postId" element={<EditPostForm />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useContext, useEffect } from "react";
import Post from "./Post.jsx";
import { PostList as PostListData } from "../store/Posts-Store.jsx"

const Posts = () =>{
  const {postList, addPost} = useContext(PostListData);
  useEffect(() =>{
    fetch("https://dummyjson.com/posts").then(res => res.json()).then(data => {addPost(data.posts)});
  },[]);
  return (
      <>
        {postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
      </>
    )
};
export default Posts;
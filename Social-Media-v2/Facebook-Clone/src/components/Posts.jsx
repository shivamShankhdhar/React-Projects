import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Posts-Store.jsx"

const Posts = () =>{
  const {postList, addPost} = useContext(PostListData);
  
  return (
      <>
      
        {postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
      </>
    )
};
export default Posts;
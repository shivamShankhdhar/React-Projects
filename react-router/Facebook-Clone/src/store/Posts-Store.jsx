import {createContext, useReducer} from "react";

export const PostList =  createContext({
  postList:[],
  addPost: () => {},
  deletePost:() => {},
}); 

const postListReducer = (currPostList,action)=>{
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = newPostList.filter((post)=> post.id !== action.payload.postId)
  }else if(action.type === 'ADD_POST'){
    newPostList = [action.payload,...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, PostList);
  
  const addPost = (postTitle,postBody,postTag,userId) =>{
    
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reactions:0,
        userId:userId,
        tags:postTag,
      },
    }); 
  };

  const deletePost = (postId) =>{
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId,
      },
    });  
  }

return (
  <PostList.Provider value={{postList,addPost,deletePost}}>
    {children}
  </PostList.Provider>
  );
};

export default PostListProvider;
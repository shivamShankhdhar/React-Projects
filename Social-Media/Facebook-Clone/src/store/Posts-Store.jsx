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
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
  
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
const DEFAULT_POST_LIST = [
  {
    id:"1",
    title:'Going to mumbai',
    body:'Hi Friends, I am Going to mumbai for my vacations',
    reactions:10,
    userId:'user-1',
    tags:['travelling','vacation','enjoy'],
  },

  {
    id:"2",
    title:'Going Live',
    body:'Hi Friends, I am Going Live on youtube',
    reactions:12,
    userId:'user-2',
    tags:['youtube','enjoy'],
  },

  {
    id:"3",
    title:'I am going to Learn Coding',
    body:'Hi Friends, I am going to Learn Coding from coding ninjas ut channel',
    reactions:5,
    userId:'user-3',
    tags:['study','coding','enjoy'],
  },

  {
    id:"4",
    title:'With my wife',
    body:'Hi Friends, I am enjoying my Life with my Wife',
    reactions:50,
    userId:'user-4',
    tags:['family-time','enjoy'],
  },
];
export default PostListProvider;
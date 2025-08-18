import { useState, useEffect } from "react";

const useFetchPosts = ({selectedUser}) => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
      fetchPosts();
    }, [])

    const fetchPosts = async() => {
         const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.id}`);
         const json = await data.json();
         setPosts(json);
    }

  return posts
}

export default useFetchPosts

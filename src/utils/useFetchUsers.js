import { useState, useEffect } from 'react';

const useFetchUsers = () => {

const [userList, setUserList] = useState([]);
    
useEffect(()=>{
    fetchUser();
     }, [])

  const fetchUser = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setUserList(json);
    
  }
  return userList
}

export default useFetchUsers

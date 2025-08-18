import { useState } from "react"
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import useFetchUsers from "../utils/useFetchUsers";
import Modal from "./Modal";

const UserList = () => {
  
  const userList = useFetchUsers();  //Custom hook to fetch User data
  const [searchInput, setSearchInput] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const handleUserPost = (user) => {
         setSelectedUser(user);
         setShowModal(true)
  }
  const filteredList = userList.filter((user)=>user.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="p-2">
      <h1 className="p-2 font-bold">User Dashboard</h1>

      {/* SearchBar */}
      <SearchBar value = {searchInput} onChange= {setSearchInput}/>

      {/* UserList */}
      <div className="flex flex-wrap">
        {filteredList.map((user) => <UserCard key={user.id} data={user} onClick={()=>handleUserPost(user)}/>)}
      </div>
      
      {/* Modal */}
      {showModal && selectedUser && <Modal selectedUser={selectedUser} onClose={setShowModal}/>}
      
    </div>
  )
}

export default UserList

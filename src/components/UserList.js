import { useState } from "react";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import useFetchUsers from "../utils/useFetchUsers";
import Modal from "./Modal";

const UserList = () => {
  const userList = useFetchUsers();
  const [searchInput, setSearchInput] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUserPost = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const filteredList = userList.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">User Dashboard</h1>

      {/* SearchBar */}
      <SearchBar value={searchInput} onChange={setSearchInput} />

      {/* User List */}
      <div className="flex flex-wrap justify-center">
        {filteredList.map((user) => (
          <UserCard
            key={user.id}
            data={user}
            onClick={() => handleUserPost(user)}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedUser && (
        <Modal selectedUser={selectedUser} onClose={setShowModal} />
      )}
    </div>
  );
};

export default UserList;

const UserCard = ({ data, onClick }) => {
  const { name, email, company } = data;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-full sm:w-72 p-4 m-2 border rounded-lg shadow hover:shadow-lg transition bg-white"
    >
      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
      <h3 className="text-sm text-gray-600">{email}</h3>
      <h3 className="text-sm text-gray-500">{company?.name}</h3>
    </div>
  );
};

export default UserCard;

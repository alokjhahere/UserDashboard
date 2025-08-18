const UserCard = ({data, onClick}) => {
    
    const {name, email, company} = data;
  return (
    <div className="cursor-pointer col-auto m-2 p-2 border border-gray-500 shadow-lg" onClick={onClick}>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{company.name}</h3>
    </div>
  )
}

export default UserCard

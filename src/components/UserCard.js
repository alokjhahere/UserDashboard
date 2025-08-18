const UserCard = ({data}) => {
    
    const {name, email, company} = data;
  return (
    <div className="grid col-auto m-2 p-2 border border-gray-500 shadow-lg">
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{company.name}</h3>
    </div>
  )
}

export default UserCard

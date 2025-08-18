import useFetchPosts from '../utils/useFetchPosts'

const Modal = ({selectedUser, onClose}) => {
  
   const posts = useFetchPosts({selectedUser});   //Extracted the data fetching logic into a Custom Hook.

    if(posts === null) return <h1>Loading...</h1>

  return (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-2xl relative animate-fadeIn">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => {
                onClose(false);
                
              }}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Posts by {selectedUser.name}
            </h2>
            <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {posts.map((post) => (
                  <li key={post.id} className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{post.body}</p>
                  </li>
                ))}
              </ul>
          </div>
        </div>
  )
}

export default Modal

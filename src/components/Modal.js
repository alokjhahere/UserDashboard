import useFetchPosts from "../utils/useFetchPosts";

const Modal = ({ selectedUser, onClose }) => {
  const posts = useFetchPosts({ selectedUser }); //Extracted Fetching logic into a custom hook

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl relative p-6 animate-fadeIn">
        
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
          onClick={() => onClose(false)}
        >
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Posts by {selectedUser.name}
        </h2>

        <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;

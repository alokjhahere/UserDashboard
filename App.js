import ReactDOM from 'react-dom/client'
import UserList from './src/components/UserList';

const AppLayout = () => {
    return (
        <div>
         <UserList/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

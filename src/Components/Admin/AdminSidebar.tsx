import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa"
import { Link, NavLink, useNavigate } from "react-router-dom"

const AdminSidebar = () => {
    const navigate = useNavigate()
    const HandleLogOut = ()=>{
        navigate("/")
    }
  return (
    <div className="p-6">
        <div className="mb-6">
            <Link to="/admin" className="text-2xl font-medium">
            Threads
            </Link>
        </div>
        <h2 className="text-xl font-medium mb-6 text-center"> Admin Dashboard</h2>
        <nav className="flex flex-col space-y-2">
            {/* users */}
            <NavLink to="/admin/users" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:text-white py-3 px-4 rounded flex items-center space-x-2 hover:bg-gray-700"}>
            <FaUser/>
            <span>Users</span>
            </NavLink>
                {/* products */}
            <NavLink to="/admin/products" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:text-white py-3 px-4 rounded flex items-center space-x-2 hover:bg-gray-700"}>
            <FaBoxOpen/>
            <span>Products</span>
            </NavLink>

            <NavLink to="/admin/orders" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:text-white py-3 px-4 rounded flex items-center space-x-2 hover:bg-gray-700"}>
            <FaClipboardList/>
            <span>Orders</span>
            </NavLink>

            <NavLink to="/" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:text-white py-3 px-4 rounded flex items-center space-x-2 hover:bg-gray-700"}>
            <FaStore/>
            <span>Shop</span>
            </NavLink>
        </nav>
        <div className="mt-6 ">
            <button onClick={HandleLogOut} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center gap-1.5 cursor-pointer">
                <FaSignOutAlt/>
                <span>LogOut</span>
            </button>
        </div>
    </div>
  )
}

export default AdminSidebar
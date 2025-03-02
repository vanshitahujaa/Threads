import { useState } from 'react'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.js'
import CartDrawer from '../Layout/CartDrawer.js'
import { IoMdClose } from 'react-icons/io'


const Navbar = () => {
    const [DrawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen , setNavDrawerOpen]= useState(false);

    const toggleNavDrawer = ()=>{
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!DrawerOpen);
    }

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className='text-2xl font-medium'>
                        Threads</Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="/collections/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>  Men
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>  Women
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>  Top Wear
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>  Bottom Wear
                    </Link>
                </div>
                {/* right - icons */}
                <div className='flex items-center space-x-4'>
                    <Link to="/admin" className='block bg-black px-2  rounded text-sm text-white'>
                        Admin
                    </Link>
                    <Link to="/profile" className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700'></HiOutlineUser>
                    </Link>

                    <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5 '>4</span>
                    </button>

                    {/* Searchbar */}
                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>

                    {/* hidden hamburger */}
                    <button onClick={toggleNavDrawer} className='md:hidden hover:text-black'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>
                </div>
            </nav>
            {/* Cartdrawer */}
            <CartDrawer open={DrawerOpen} onClose={toggleCartDrawer} />
            {/* NavDrawer  mobile  navigation*/}
            <div className={`fixed top-0 left-0 w-3/4 md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 h-full z-50 ${navDrawerOpen? "translate-x-0": "-translate-x-full"}`}>
            <div className='flex p-4 justify-end'>
                <button onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600' />
                </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="#" 
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>Men</Link>
                        <Link to="#" 
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>Women</Link>
                        <Link to="#" 
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                        <Link to="#" 
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:text-black text-sm font-medium uppercase'>bottom Wear</Link>
                    </nav>
                </div>
            
            </div>
        </>
    )
}

export default Navbar
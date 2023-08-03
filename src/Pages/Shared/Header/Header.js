import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import { AuthContext } from '../../../contexts/AuthProvider';
import './Header.css'


const Nav = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log out Successful")
            })

            .catch(error => console.log(error))
    }

    const menuItems =
        <>
            <li className='mb-2 md:mb-0 md:pt-0 lg:mb-0 lg:pt-0 pt-2'><Link to='/'>HOME</Link></li>
            <li className='mb-2 md:mb-0 lg:mb-0'><Link to='/consultation'>CONSULTATION</Link></li>
            <li className='mb-2 md:mb-0 lg:mb-0'><Link to='/appointment'>APPOINTMENT</Link></li>
            {/* <li className='mb-2 md:mb-0 lg:mb-0'><Link to='/'>ABOUT</Link></li> */}

            {
                user?.uid ?
                    <>
                        <li className='mb-2 md:mb-0 lg:mb-0'><Link to='/dashboard'>DASHBOARD</Link></li>
                        <li><button onClick={handleLogOut} >LOG OUT</button></li>
                    </>
                    :
                    <li><Link to='/login'>LOGIN</Link></li>
            }

        </>
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 z-50'>

            <div className='md:flex sm:gap-5 items-center justify-between bg-white py-4 md:px-10 px-7'>
                <label htmlFor="dashboard" className="text-3xl absolute left-2 top-6 cursor-pointer lg:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </label>
                <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <img className='w-52 ml-5 lg:ml-0' src={logo} alt="" />
                </Link>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 gap-4 lg:gap-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {menuItems}
                </ul>
            </div>
        </div>
    )
}

export default Nav
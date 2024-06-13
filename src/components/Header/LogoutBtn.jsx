import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appWrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        // authService.logout();
        // dispatch(logout());
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 bg-red-700 text-white rounded-md ms-2' onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn
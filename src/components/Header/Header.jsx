import React from 'react';
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();
  
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ].filter(item => item.active);

  return (
    <header className='w-full py-3 shadow-lg bg-gray-50 border-b-[#5289DC] border-b border-solid'>
      <Container>
        <nav className='w-full flex justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo/>
            </Link>
          </div>
          <ul className='flex gap-3'>
            {
              navItems.map((item) => (
                <li key={item.name} className='mx-2'>
                  <Link
                    to={item.slug}
                    className={`font-medium inline-block  py-2 duration-200 ${location.pathname === item.slug ? 'text-blue-600 border-b-2 border-blue-500 pb-1' : 'text-gray-400 hover:text-gray-700'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))
            }
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

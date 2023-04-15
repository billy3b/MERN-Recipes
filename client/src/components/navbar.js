import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
  const [cookie,setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const Logout = (event) => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    event.preventDefault();
    navigate("/auth");
  }
  return (
    <div className='bg-near-black mt1 flex justify-around'>
      <Link to='/' className=" f3 link dim dark-green fw7 pa4 "><HomeIcon /> home</Link>
      <Link to='/create-recipe' className="f3 link dim dark-green fw7 pa4"><AddCircleOutlineRoundedIcon /> create </Link>
      <Link to='/saved-recipe' className="f3 link dim dark-green fw7 pa4"><BookmarksRoundedIcon /> Save</Link>
      {!cookie.access_token ? (<Link to='/log/login' className="f3 link dim dark-green fw7 pa4">Login</Link>) 
        : (
          <button className='f3 w1-m fw7 pa4' onClick={Logout}><LogoutIcon /></button> )
      }
      <Link to='/newuser/register' className="f3 link dim dark-green fw7 pa4">Register</Link>
      
    </div>
  )
}

export default Navbar

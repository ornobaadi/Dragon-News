import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);


    return (
        <div className="flex justify-between">
            <div className="">{user && user.email}</div>
            <div className="navbar-center space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="navbar-end">
                <div className="flex justify-end gap-2">
                    <img className="h-[50px] w-[50px]" src={userIcon} alt="" />
                    {
                        user && user?.email ? 
                        <button onClick={logOut} className="px-10 rounded-none btn btn-neutral">Logout</button> 
                        
                        : 
                        
                        <Link to='/auth/login'><button className="px-10 rounded-none btn btn-neutral">Login</button></Link>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default Navbar;
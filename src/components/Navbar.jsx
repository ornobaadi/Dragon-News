import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className="navbar-start"></div>
            <div className="navbar-center space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="navbar-end">
                <div className="flex justify-end gap-2">
                    <img className="h-[50px] w-[50px]" src={userIcon} alt="" />
                    <button className="px-10 rounded-none btn btn-neutral">Login</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
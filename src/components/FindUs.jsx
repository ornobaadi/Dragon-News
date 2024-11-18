import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find us on</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook className="text-blue-600"></FaFacebook>Facebook</button>

                <button className="btn join-item justify-start "><FaTwitter className="text-blue-400"></FaTwitter>Twitter</button>

                <button className="btn join-item justify-start"><FaInstagram className="text-pink-500"></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
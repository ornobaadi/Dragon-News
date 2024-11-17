import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-200 p-2">
            <p className="btn bg-[#D72050] text-base-100 rounded-none">Latest</p>
            <Marquee pauseOnHover={true} speed={75} className="space-x-1">
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened &emsp;</Link>
                <Link to='/news'>Match Highlights: Argentina vs France - Full Commentary &emsp;</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
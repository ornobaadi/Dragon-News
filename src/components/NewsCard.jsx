import { FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ( props = {} ) => {
    const {news} = props || {};
    const {
        title,
        author,
        thumbnail_url,
        published_date,
        details,
        rating,
        total_view,
    } = news;

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                <div className="flex items-center mb-4">
                    <img
                        src={author.img}
                        alt="Author"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-500">{published_date}</p>
                    </div>
                </div>
                <h2 className="card-title">{title}</h2>
                <figure className="my-4">
                    <img
                        src={thumbnail_url}
                        alt="News Thumbnail"
                        className="rounded-lg h-96 w-full object-scale-down"
                    />
                </figure>
                <p className="text-gray-700">
                    {details.slice(0, 120)}...{" "}
                    <span className="text-primary cursor-pointer">
                        Read More
                    </span>
                </p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                        <AiFillStar className="text-yellow-400" />
                        <p className="font-medium">{rating.number}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEye />
                        <p className="text-gray-600">{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

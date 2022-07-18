import { Link } from "react-router-dom";

const SidebarLink = ({ icon: Icon, path, name, active }) => {
    return (
        <Link
            to={path}
            className={`flex items-center mb-2  py-2 rounded-lg px-2 hover:bg-purple-50 hover:text-white ${
                active ? " bg-purple-50" : "bg-gray-100"
            }`}
        >
            <div
                className={`mr-3  ${
                    active ? "text-white font-bold" : "text-gray-400"
                } `}
            >
                <Icon />
            </div>
            <p
                className={`${
                    active ? "text-white font-bold" : "text-gray-400  "
                } `}
            >
                {name}
            </p>
        </Link>
    );
};

export default SidebarLink;

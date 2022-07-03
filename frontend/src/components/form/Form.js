import { Link } from "react-router-dom";

const Form = ({ head, label, to, title, children }) => {
    return (
        <form className="card rounded border shadow-sm border-gray-300  bg-gray-50 px-10 py-5">
            <p className="text-2xl text-purple-50 text-center mb-3">{head}</p>
            <div>
                <p className="text-gray-400">
                    {title}{" "}
                    <Link className="text-blue hover:underline" to={to}>
                        {label}
                    </Link>
                </p>
            </div>
            <div className="border-b-2 border-gray-300 my-2"></div>
            {children}
        </form>
    );
};

export default Form;

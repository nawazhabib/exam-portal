const Footer = () => {
    return (
        <div className="bg-blue-400 mt-4">
            <h1 className="text-center font-medium text-md py-xl text-white">
                copyright &copy; exam-portal, {new Date().getFullYear()}
            </h1>
        </div>
    );
};

export default Footer;

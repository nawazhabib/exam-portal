const Container = ({ children, className }) => {
    return (
        <div className={`container h-full min-h-90 py-15 ${className}`}>
            {children}
        </div>
    );
};

export default Container;

const Container = ({ children, className = " py-15" }) => {
    return (
        <div className={`container h-full  min-h-90 ${className}`}>
            {children}
        </div>
    );
};

export default Container;

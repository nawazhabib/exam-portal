const Container = ({ children, className = "" }) => {
    return (
        <div className={`container lg:min-h-90  ${className}`}>{children}</div>
    );
};

export default Container;

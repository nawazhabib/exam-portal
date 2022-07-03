const Container = ({ children, className = " py-15" }) => {
    return (
        <div className={`container  lg:min-h-90  ${className}`}>{children}</div>
    );
};

export default Container;

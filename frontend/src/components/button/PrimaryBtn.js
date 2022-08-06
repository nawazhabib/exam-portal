const PrimaryBtn = ({
    title,
    className = " ",
    onClick,
    loading = false,
    component: Component,
    bg = " bg-primary ",
    ...rest
}) => {
    return (
        <>
            <button
                type="button"
                onClick={onClick}
                {...rest}
                disabled={loading}
                className={
                    "disabled:bg-gray-100 bg-opacity-80 hover:bg-opacity-100 disabled:text-gray-500 hover:cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-400 px-4 py-2 rounded-md   text-white uppercase  font-bold " +
                    bg +
                    " " +
                    className
                }
            >
                {loading ? (
                    <div className="flex gap-2 items-center justify-around">
                        <div className="w-5 h-5 border-4 border-blue-400 border-dotted rounded-full animate-spin"></div>
                        {title && " Loading..."}
                    </div>
                ) : title ? (
                    title
                ) : (
                    <Component />
                )}
            </button>
        </>
    );
};

export default PrimaryBtn;

const Sidebar = ({ component: Component }) => {
    return (
        <div className=" bg-gray-50 pt-3 rounded-md px-4 h-full w-full border-r-2 border-r-gray-200 pb-4">
            <Component />
        </div>
    );
};

export default Sidebar;

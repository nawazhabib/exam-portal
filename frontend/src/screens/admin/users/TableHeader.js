import React from "react";

const TableHeader = () => {
    return (
        <div className="grid grid-cols-3   lg:grid-cols-6 ">
            <div className="border border-gray-200 bg-gray-500 text-white py-3 text-center">
                <p>User Name</p>
            </div>
            <div className="border   hidden lg:block border-gray-200 bg-gray-500 text-white py-3 text-center">
                <p>Name</p>
            </div>
            <div className="border border-gray-200 bg-gray-500 text-white py-3 text-center">
                <p>Email</p>
            </div>
            <div className="border  hidden lg:block border-gray-200 bg-gray-500 text-white py-3 text-center">
                <p>Role</p>
            </div>
            <div className="border  hidden lg:block border-gray-200 bg-gray-500 text-white py-3 text-center">
                <p>Status</p>
            </div>

            <div className="border border-gray-200 bg-gray-500 text-white py-3 text-center">
                <p>Action</p>
            </div>
        </div>
    );
};

export default TableHeader;

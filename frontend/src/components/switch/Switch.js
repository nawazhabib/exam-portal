import React from "react";

const Switch = ({ onChange, value, label, checked, id }) => {
    return (
        <label
            for={id}
            class="inline-flex relative items-center cursor-pointer"
        >
            <input
                type="checkbox"
                value={value}
                checked={checked}
                id={id}
                class="sr-only peer"
                onChange={onChange}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-green-50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-50"></div>
            {label && (
                <span class="hidden sm:block ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {label}
                </span>
            )}
        </label>
    );
};

export default Switch;

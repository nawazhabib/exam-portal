/*
  This InputComponent requires Tailwind CSS v2.0+ 
  
  This InputComponent requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const InputComponent = ({
    label,
    onChange,
    error = "",
    className,
    component = "input",
    ...rest
}) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 mb-1">{label}</label>
            {component === "input" ? (
                <input
                    onChange={onChange}
                    className={`border-2 p-2  rounded bg-opacity-50 focus:bg-opacity-100  bg-gray-200  focus:bg-gray-50    focus:outline-none ${
                        error
                            ? "border-red-500"
                            : "border-gray-300 focus:border-primary"
                    } ${className}`}
                    {...rest}
                />
            ) : (
                <textarea
                    onChange={onChange}
                    className={`border-1 p-2 rounded  bg-gray-200 focus:bg-gray-50 bg-opacity-50 focus:bg-opacity-100  focus:outline-none ${
                        error
                            ? "border-red-500"
                            : "border-gray-300 focus:border-primary"
                    } ${className}`}
                    {...rest}
                />
            )}
            {error && <p className="text-sm mt-2 text-red-50">{error}</p>}
        </div>
    );
};

export default InputComponent;

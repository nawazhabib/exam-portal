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
const InputComponent = ({ label, onChange, error = "", ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-500 mb-1">{label}</label>
            <input
                placeholder="Email"
                className={`border-2 p-2 rounded    focus:outline-none ${
                    error
                        ? "border-red-500"
                        : "border-gray-300 focus:border-blue-400"
                } `}
            />
            {error && (
                <p className="text-sm mt-2 text-red-50">Enter valid Email</p>
            )}
        </div>
    );
};

export default InputComponent;

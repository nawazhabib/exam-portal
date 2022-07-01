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
export default function InputComponent() {
    return (
        <div className="max-w-min mt-xl ">
            <form className="card rounded border shadow-sm border-gray-300  bg-gray-50 p-10">
                <label className="block">Email</label>
                <input
                    placeholder="Email"
                    className=" border p-2 rounded border-gray-300 focus:border-blue-400 ..."
                />
            </form>
        </div>
    );
}

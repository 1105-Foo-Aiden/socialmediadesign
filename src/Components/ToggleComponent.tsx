import React, { useEffect, useState } from "react";


export default function ToggleComponent() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    theme === 'light' ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [theme]);
  const HandleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <label className="inline-flex items-center mb-5 cursor-pointer">
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Dark Mode </span>
        <input type="checkbox" value="" className="sr-only peer" onChange={HandleChange}/>
        <div className="relative w-11 h-6 bg-gradient-to-r from-[#378fe6] to-[#3eda82] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-200 peer-checked:after:bg-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-700 after:border-gray-700 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-700 peer-checked:bg-[#1db489]"></div>
      </label>
    </div>
  );
}

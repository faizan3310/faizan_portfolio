import React, { useState } from "react";

const useDebouncedSearch = (callback, delay) => {
  const [timeoutId, setTimeoutId] = useState(null);

  return (query) => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => callback(query), delay));
  };
};

const SearchBar = ({ onSearch }) => {
  const debouncedSearch = useDebouncedSearch(onSearch, 500);

  return (
    <div >
        <input className="lg:max-w-[20%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        type="text"
        placeholder="Search users..."
        onChange={(e) => debouncedSearch(e.target.value)}
        />
    </div>

  );
};

export default SearchBar;

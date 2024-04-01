import React from "react";

function SearchCampaigns({ setSearchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div class="relative max-w-xs">
      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
        <svg
          class="flex-shrink-0 size-4 text-gray-400 dark:text-white/60"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle
            cx="11"
            cy="11"
            r="8"
          />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        className="py-2 px-3 ps-10 pe-14 block w-full border-gray-200 rounded-lg text-sm placeholder:border-orange-500 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-grey-700 dark:placeholder:text-grey-50 dark:text-grey-50"
        placeholder="Search for campaigns"
        data-hs-overlay="#hs-pro-dnsm"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchCampaigns;

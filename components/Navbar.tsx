"use client";

import Link from "next/link";
import { navigations } from "@/data";
import SearchBox from "./SearchBox";
import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);

  const openSearch = () => {
    setIsSearch(!isSearch);
  };

  const searchRef = useClickOutside(() => {
    if (isSearch) {
      setIsSearch(false);
    }
  });

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="flex flex-row items-center gap-8 px-8 py-3 rounded-full border border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl">
        {navigations.map((nav) => (
          <div key={nav.id} className="flex items-center">
            {nav.name === "search" ? (
              <SearchBox
                openSearch={openSearch}
                isSearch={isSearch}
                containerRef={searchRef}
              />
            ) : (
              <Link
                href={nav.link}
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                {nav.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

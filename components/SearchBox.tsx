import { Search, Close } from "@mui/icons-material";
import { useRef, useEffect } from "react";

interface SearchBoxProps {
  isSearch: boolean;
  openSearch: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const SearchBox = ({ openSearch, isSearch, containerRef }: SearchBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearch) {
      inputRef.current?.focus();
    }
  }, [isSearch]);

  return (
    <div
    ref={containerRef}
      className={`flex items-center transition-all duration-300 ease-in-out ${
        isSearch ? "bg-white/10 px-2 py-1 rounded-full" : ""
      }`}
    >
      <button
        onClick={openSearch}
        className="text-gray-300 hover:text-white transition-colors flex items-center justify-center"
      >
        {isSearch ? <Close fontSize="small" /> : <Search fontSize="medium" />}
      </button>

      <div
        className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
          isSearch ? "w-48 opacity-100 ml-2" : "w-0 opacity-0 ml-0"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Type to search..."
          className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-400"
        />

        <Search
          className="text-gray-400 ml-1 cursor-pointer hover:text-white"
          fontSize="small"
        />
      </div>
    </div>
  );
};

export default SearchBox;

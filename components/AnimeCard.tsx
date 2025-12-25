import Image from "next/image";
import { AnimeProp } from "@/types"; // Import from types file

interface AnimeCardProps {
  anime: AnimeProp;
  index: number;
}

// Added 'group' to the outer div for hover effects
function AnimeCard({ anime, index }: AnimeCardProps) {
  return (
    <div className="max-w-sm rounded relative w-full group cursor-pointer">
      
      {/* 1. Improved Image Container: Uses aspect ratio instead of vh */}
      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-[#FFAD49] transition-all duration-300">
        <Image
          src={anime.image}
          alt={anime.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          {/* 2. Title: Allowed 2 lines (line-clamp-2) for long anime names */}
          <h2 className="font-bold text-white text-xl line-clamp-2 w-full group-hover:text-[#FFAD49] transition-colors">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm shrink-0">
            <p className="text-white text-xs font-bold capitalize tracking-wider">
              {anime.kind}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            {/* 3. Fixed Paths: Remove the dot (.) if files are in public folder */}
            <Image
              src="/episodes.svg" 
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
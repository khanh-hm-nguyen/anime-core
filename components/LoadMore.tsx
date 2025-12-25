"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AnimeCard from "./AnimeCard";
import { fetchAnime } from "@/app/action";
import { AnimeProp } from "@/types";

let page = 2; // Start from page 2 (Page 1 is already on Home)

function LoadMore() {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<AnimeProp[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      
      // 2. Check if the spinner is visible AND we aren't already loading
      if (target.isIntersecting && !isLoading) {
        setIsLoading(true);
        
        // 3. Load next page
        fetchAnime(page).then((res) => {
          setData((prev) => [...prev, ...res]);
          page++;
          setIsLoading(false);
        });
      }
    });

    // 4. Start observing the spinner
    if (ref.current) {
      observer.observe(ref.current);
    }

    // 5. Cleanup when component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isLoading]); // Re-run effect if loading state changes to prevent duplicates

  return (
    <>
      {/* Render the NEW loaded anime here */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-full">
        {data.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      {/* The Spinner / Trigger Point */}
      <section className="flex justify-center items-center w-full py-6">
        <div ref={ref}>
           {/* Only show spinner if there is more data to load, or always show it at bottom */}
          <Image
            src="/spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
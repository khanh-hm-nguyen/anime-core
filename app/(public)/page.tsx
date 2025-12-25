import AnimeCard from "@/components/AnimeCard";
// import LoadMore from "@/components/LoadMore";
import Hero from "@/components/home/Hero";
import { AnimeProp } from "@/types";
import { data } from "@/data/_data";

async function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 bg-black min-h-screen">
      <Hero />

      <h2 className="text-3xl text-white font-bold drop-shadow-lg">
        Explore Anime
      </h2>

      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
    </main>
  );
}

export default Home;

"use server";

import { AnimeProp } from "@/types";
import { data } from "@/data/_data";

export const fetchAnime = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const itemsPerPage = 8;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return data.slice(start, end);
};

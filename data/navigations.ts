
export interface NavItem {
  id: number;
  name: string;
  link: string;
}

export const navigations: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "New Releases",
    link: "#",
  },
  {
    id: 3,
    name: "search",
    link: "#",
  },
  {
    id: 4,
    name: "Trending",
    link: "#",
  },
  {
    id: 5,
    name: "Category",
    link: "#",
  },
];

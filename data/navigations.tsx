import { YouTube, Instagram, X } from "@mui/icons-material";
import { ReactNode } from "react";

export interface SocialItem {
  name: string;
  icon: ReactNode;
  url: string;
}

export interface NavItem {
  id: number;
  name: string;
  link: string;
}

export const navigations: NavItem[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "New Releases", link: "#" },
  { id: 3, name: "search", link: "#" },
  { id: 4, name: "Trending", link: "#" },
  { id: 5, name: "Category", link: "#" },
];

export const footerSocials: SocialItem[] = [
  {
    name: "YouTube",
    icon: <YouTube />,
    url: "https://youtube.com",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    url: "https://instagram.com",
  },
  {
    name: "Twitter",
    icon: <X />,
    url: "https://twitter.com",
  },
];

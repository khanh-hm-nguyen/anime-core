import Image from "next/image";
import Link from "next/link";
import { footerSocials } from "@/data/navigations";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#161921] border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-8 py-8 sm:px-16 max-w-7xl mx-auto">
        <p className="text-base font-bold text-white text-center md:text-left">
          @{year} AnimeCore. All rights reserved.
        </p>

        <Link
          href="/"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="AnimeCore Logo"
            width={47}
            height={44}
            className="object-contain"
          />
        </Link>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6">
          {footerSocials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

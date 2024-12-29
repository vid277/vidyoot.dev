import { Cover } from "@/components/cover";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { FloatingDockHome } from "@/components/floating-dock-home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cover />
      <div
        className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative py-0"
        id="about"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <About />
        <Work />
      </div>
      <hr className="w-full h-1 bg-gray-200 dark:bg-gray-800" />
      <Contact />
      <FloatingDockHome />
    </div>
  );
}

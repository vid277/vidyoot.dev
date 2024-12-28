import { Cover } from "@/components/cover";
import { About } from "@/components/about";
import { Work } from "@/components/work";
export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <Cover />
      <About />
      <Work />
    </div>
  );
}

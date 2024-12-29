import { Cover } from "@/components/cover";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cover />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

import { Cover } from "@/components/cover";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Cover />
      <About />
    </div>
  );
}

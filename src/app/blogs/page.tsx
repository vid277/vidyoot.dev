import { FloatingDockHome } from "@/components/floating-dock-home";
import WorkInProgress from "@/components/ui/wip";

export default function Playground() {
  return (
    <div>
      <WorkInProgress pageTitle={"Blogs"} />
      <FloatingDockHome />
    </div>
  );
}

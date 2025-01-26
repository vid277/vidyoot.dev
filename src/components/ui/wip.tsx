import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Currently",
  },
  {
    text: "under",
  },
  {
    text: "construction",
  },
  {
    text: "🧱",
  },
];

export default function WorkInProgress({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative py-0"
        id="about"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="h-max w-screen relative flex flex-col items-center md:items-start justify-center md:justify-start md:px-36 px-14 mb-32 mt-32 gap-20">
          <div className="flex flex-col items-center md:items-start md:justify-start justify-center gap-6 flex-wrap">
            <h1 className="text-8xl font-oddolini pb-1 w-100  text-center md:text-left items-center md:items-start flex flex-col md:flex-row gap-4 flex-wrap">
              <span className="text-blue-900 flex flex-col gap-5 h-full text-[50%] md:text-6xl">
                {pageTitle}
                <span className="text-gray-950 text-2xl">
                  Currently under construction 🧱
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Contact } from "@/components/contact";
import { FloatingDockHome } from "@/components/floating-dock-home";
import SpotifyTopSongs from "@/components/ui/spotify-cards";

import bestInterest from "@/components/images/best_interest.jpg";
import newMagicWand from "@/components/images/new_magic_wand.jpeg";
import seeYouAgain from "@/components/images/see_you_again.jpg";
import pinkWhite from "@/components/images/blond_album.jpeg";
import glimpseOfUs from "@/components/images/glimpse_of_us.jpeg";

import tyler from "@/components/images/chromakopia.jpg";
import denzel from "@/components/images/mmesyf.avif";
import drake from "@/components/images/more_life.webp";
import frankOcean from "@/components/images/orange.jpeg";
import kendrick from "@/components/images/mr_morale.jpg";

import NowPlayingCard from "@/components/now-playing-card";

export default function Home() {
  const topSongs = [
    {
      title: "See You Again (feat. Kali Uchis)",
      artist: "Tyler, the Creator",
      image: seeYouAgain.src,
      albumName: "Flower Boy",
      url: "https://open.spotify.com/track/7KA4W4McWYRpgf0fWsJZWB?si=aca08480a2364e0f",
    },
    {
      title: "NEW MAGIC WAND",
      artist: "Tyler, the Creator",
      image: newMagicWand.src,
      albumName: "Igor",
      url: "https://open.spotify.com/track/0fv2KH6hac06J86hBUTcSf?si=7fa5859f3825405d",
    },
    {
      title: "BEST INTEREST",
      artist: "Igor",
      image: bestInterest.src,
      albumName: "Flower Boy",
      url: "https://open.spotify.com/track/3jHdKaLCkuNEkWcLVmQPCX?si=56480d401339474b",
    },
    {
      title: "Pink + White",
      artist: "Frank Ocean",
      image: pinkWhite.src,
      albumName: "Blonde",
      url: "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=ce4aeb3256204c21",
    },
    {
      title: "Glimpse of Us",
      artist: "Joji",
      image: glimpseOfUs.src,
      albumName: "Smithereens",
      url: "https://open.spotify.com/track/2mlNgAeIBnL78ZriXgrRHz?si=bb33527905e4467f",
    },
  ];

  const topArtists = [
    {
      title: "Kendrick Lamar",
      image: kendrick.src,
      albumName: "Mr. Morale & The Big Steppers",
    },
    {
      title: "Tyler, the Creator",
      image: tyler.src,
      albumName: "Chromakopia",
    },
    {
      title: "Denzel Curry",
      image: denzel.src,
      albumName: "Melt My Eyez See Your Future",
    },
    {
      title: "Drake",
      image: drake.src,
      albumName: "More Life",
    },
    {
      title: "Frank Ocean",
      image: frankOcean.src,
      albumName: "Channel Orange",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative py-0"
        id="about"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="h-max w-screen relative flex flex-col items-center md:items-start justify-center md:justify-start md:px-36 px-14 mb-32 mt-32 gap-20">
          <div className="flex flex-col items-center md:items-start md:justify-start justify-center gap-6 flex-wrap">
            <h1 className="text-6xl font-oddolini pb-1 w-100  text-center md:text-left items-center md:items-start flex flex-col md:flex-row gap-4 flex-wrap">
              <span className="text-green-700">Spotify </span>
              Top Songs <span className="hidden md:block">& Artists</span>
            </h1>
            <div className="flex items-center justify-center md:gap-24 gap-10 md:flex-row flex-col flex-wrap">
              <SpotifyTopSongs songs={topSongs} />
              <h1 className="text-6xl font-oddolini pb-1 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-4 block md:hidden">
                Top Artists
              </h1>
              <SpotifyTopSongs songs={topArtists} />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-5">
            <h1 className="text-6xl font-oddolini pb-1 text-center md:text-left flex flex-row items-center md:items-start gap-3 flex-wrap md:justify-start justify-center">
              Now <span className="text-green-700">Playing</span>
            </h1>
            <div className="flex items-center justify-center bg-white">
              <NowPlayingCard />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-1 bg-gray-200 dark:bg-gray-800" />
      <Contact />
      <FloatingDockHome />
    </div>
  );
}

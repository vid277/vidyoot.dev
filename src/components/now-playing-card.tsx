"use client";

import { IconBrandSpotify } from "@tabler/icons-react";
import useSWR from "swr";

export default function NowPlayingCard() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={
        data?.isPlaying
          ? data.songUrl
          : "https://open.spotify.com/user/l7kht3r7nc3gvx4bojco00oh0"
      }
      className="relative flex w-full max-w-[50rem] min-h-[10rem] items-center space-x-6 rounded-xl border-2 border-gray-800 bg-black/90 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20"
    >
      <div className="w-36">
        {data?.isPlaying ? (
          <img
            className="w-36 rounded-md shadow-lg"
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <IconBrandSpotify size={96} color={"#1ED760"} />
        )}
      </div>

      <div className="flex-1">
        <p className="text-xl font-bold text-white font-hanken">
          {data?.isPlaying ? data.title : "Not Listening"}
        </p>
        <p className="text-base text-gray-400 font-hanken">
          {data?.isPlaying ? data.artist : "Spotify"}
        </p>
      </div>
      <div className="absolute bottom-3 right-3">
        <IconBrandSpotify size={24} color={"#1ED760"} />
      </div>
    </a>
  );
}

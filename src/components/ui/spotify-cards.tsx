import Image from "next/image";
import { FollowerPointerCard } from "./following-pointers";

type Song = {
  title: string;
  artist?: string;
  image: string;
  albumName?: string;
  url?: string;
};

type SpotifyTopSongsProps = {
  songs: Song[];
};

const SpotifyTopSongs: React.FC<SpotifyTopSongsProps> = ({ songs }) => {
  return (
    <div className="w-max">
      <ul style={{ listStyleType: "none" }} className="bg-transparent">
        {songs.map((song, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
            className="font-oddolini w-[20rem] hover:cursor-pointer"
          >
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              {index + 1}
            </span>
            <FollowerPointerCard title={song.albumName}>
              <Image
                src={song.image}
                alt={song.title || ""}
                width={60}
                height={60}
                style={{ borderRadius: "8px", marginRight: "10px" }}
              />
            </FollowerPointerCard>
            <div>
              <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                {song.title}
              </div>
              <div
                style={{ fontSize: "14px", color: "#555" }}
                className="font-hanken"
              >
                {song.artist}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyTopSongs;

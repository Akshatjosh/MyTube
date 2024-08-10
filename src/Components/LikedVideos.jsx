import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LikedVideos() {
  const likedVideos = useSelector((state) => state.likedVideos);

  return (
    <div className=" flex items-center justify-center  flex-col h-full">
      <h1 className="text-2xl font-bold">Liked Videos</h1>
      {likedVideos.length > 0 ? (
        <ul className="mt-4 flex justify-center flex-col items-center gap-4">
          {likedVideos.map((video, index) => (
            <Link to={`/Watch?v=${video.id}`} key={index}>
              <li className="p-2 border rounded">
                <img
                  src={video.thumbnails?.medium?.url}
                  alt={video.title}
                  className="w-full h-auto rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{video.title}</h3>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="text-2xl font-semibold">No Liked Videos</p>
      )}
    </div>
  );
}

export default LikedVideos;

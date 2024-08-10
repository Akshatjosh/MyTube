import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import store from "./utils/store";
import Body from "./Components/Body";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import PlaylistList from "./Components/PlaylistList";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef } from "react";
import Search_Results from "./Components/Search_Results";
import LikedVideos from "./Components/LikedVideos";
function App() {
  const location = useLocation();
  const ref = useRef(0);
  useEffect(() => {
    ref.current.continuousStart();
    const timer = setTimeout(() => {
      ref.current.complete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
      <LoadingBar style={{ color: "#ff0000" }} ref={ref} />
      <Provider store={store}>
        <div className="select-none">
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/Playlist" element={<PlaylistList />} />
              <Route path="/search-results" element={<Search_Results />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
            </Route>
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;

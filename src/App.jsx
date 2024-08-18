import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef, Suspense, lazy } from "react";
import LoadingBar from "react-top-loading-bar";
import "./App.css";

// Lazy load components to split code and improve performance
const MainContainer = lazy(() => import("./Components/MainContainer"));
const WatchPage = lazy(() => import("./Components/WatchPage"));
const PlaylistList = lazy(() => import("./Components/PlaylistList"));
const SearchResults = lazy(() => import("./Components/Search_Results")); // Correct name here
const LikedVideos = lazy(() => import("./Components/LikedVideos"));

function App() {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart();
      const timer = setTimeout(() => {
        ref.current.complete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <div className="app-container">
        <LoadingBar
          color="#ff4500"
          height={4}
          ref={ref}
          transitionTime={300}
          shadow={true}
          className="rounded-lg"
        />
        <Header />
        <div className="main-content">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="loader"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Body />}>
                <Route index element={<MainContainer />} />
                <Route path="/watch" element={<WatchPage />} />
                <Route path="/playlist" element={<PlaylistList />} />
                <Route
                  path="/search-results"
                  element={<SearchResults />}
                />{" "}
                {/* Corrected name here */}
                <Route path="/liked-videos" element={<LikedVideos />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </Provider>
  );
}

export default App;

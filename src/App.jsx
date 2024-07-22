import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import store from "./utils/store";
import Body from "./Components/Body";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import PlaylistList from "./Components/PlaylistList";

function App() {
  return (
    <Provider store={store}>
      <div className="select-none">
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/Playlist" element={<PlaylistList />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

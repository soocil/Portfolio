import Home from "./Components/Home";
import {BrowserRouter,  Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Labs from "./Pages/Labs";
import Work from "./Pages/Work";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
        
          <Route path="blog" element={<Blog />} />
          <Route path="labs" element={<Labs />} />
          <Route path="work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

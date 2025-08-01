import { HashRouter, Routes, Route } from "react-router-dom";

//import pages
import HKApp from "../HKApp";
import HomePage from "./pages/HomePage";
import KnowledgePage from "./pages/KnowledgePage";
import FoodPage from "./pages/FoodPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarkPage from "./pages/BookmarkPage";
import TravelGuidePage from "./pages/TravelGuidePage";
import MusicPage from "./pages/MusicPage";

export default function AppRouter() {
    return <HashRouter>
        <Routes>
            <Route path = "/" element={<HKApp />}>
                <Route index   element={<HomePage />} />
                <Route path="knowledge" element={<KnowledgePage/>}/>
                <Route path="food"  element={<FoodPage />} />
                <Route path = "tourist" element={<TouristAttractionsPage />} />
                <Route path = "bookmark" element={<BookmarkPage/>}/>
                <Route path = "music" element={<MusicPage/>}/>
                <Route path = "travelGuide" element={<TravelGuidePage/>}/>
                <Route path = "*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </HashRouter>
}


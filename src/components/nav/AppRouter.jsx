import { HashRouter, Routes, Route } from "react-router-dom";

//import pages
import HKApp from "../HKApp";
import HomePage from "./pages/HomePage";
import KnowledgePage from "./pages/KnowledgePage";
import FoodPage from "./pages/FoodPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function AppRouter() {
    return <HashRouter>
        <Routes>
            <Route path = "/" element={<HKApp />}>
                <Route index   element={<HomePage />} />
                <Route path="knowledge" element={<KnowledgePage/>}/>
                <Route path="food"  element={<FoodPage />} />
                <Route path = "tourist" element={<TouristAttractionsPage />} />
                <Route path="log-in"  element={<LoginPage />} />
                <Route path = "sign-up" element={<SignUpPage />} />
                <Route path = "*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </HashRouter>
}


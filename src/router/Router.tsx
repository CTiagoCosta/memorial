import { HashRouter, Routes, Route } from 'react-router-dom';
import { StartPage } from "../pages/StartPage";

export function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                
            </Routes>
        </HashRouter>
    )
}
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paths from "./paths";
import OverviewPage from '../pages/OverviewPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={Paths.home} element={<OverviewPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            
        </Router>
    );
}

export default AppRoutes;
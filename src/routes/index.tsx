import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage";
import {PreviewPage} from "../pages/PreviewPage/PreviewPage";
import {RoutesConstants} from "../constants/routes-constants";

export default function PagesRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={RoutesConstants.HOME}/>} />
            <Route path={RoutesConstants.HOME} element={ <HomePage/> } />
            <Route path={RoutesConstants.PREVIEW} element={ <PreviewPage/> } />
        </Routes>
    )
}
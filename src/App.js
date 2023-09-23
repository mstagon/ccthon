import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank2 from './pages/Blank2';
import Blank3 from './pages/Blank3';
import Blank4 from './pages/Blank4';
import CHAT from "./pages/CHAT";
import MyCalender from "./pages/MyCalender";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<MyCalender />} />
                    <Route path='/started' element={<Blank2 />} />
                    <Route path='/calendar' element={<CHAT />} />
                    <Route path='/user' element={<Blank4 />} />
                    <Route path='/order' element={<Blank2 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

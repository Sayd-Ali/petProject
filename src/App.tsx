import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import  MainPage  from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
            </Routes>
            </Suspense>
        </div>
    )
}

export default App;
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'aos/dist/aos.css'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><App /></BrowserRouter>
)

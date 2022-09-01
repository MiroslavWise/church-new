import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './style/index.scss';
import 'aos/dist/aos.css'
import 'shared/translation/i18n'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Main } from 'page'
import { maps } from 'routes/mapping'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Header />
            <div className='index-layout'>
                <Routes>
                    <Route path="/" element={<Main />} index/>
                    {
                        maps
                    }
                </Routes>
            </div>
        <Footer />
    </BrowserRouter>
)

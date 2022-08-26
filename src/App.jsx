import { Route, Routes } from 'react-router-dom';

import { Footer } from 'components/Footer'
import {Header} from 'components/Header'
import {Main} from 'page'
import {maps} from 'routes/mapping'

function App() {
  return (
    <>
      <Header />
      <div className='main-layout'>
        <Routes>
          <Route path="/" element={<Main />} index/>
          {
            maps
          }
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;

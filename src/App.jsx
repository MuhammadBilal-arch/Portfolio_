import AOS from 'aos'
import { Route, Routes } from 'react-router-dom'
import 'aos/dist/aos.css'
import { GlobalRoute } from './utils/Routes/global'

import { Main } from './container'

AOS.init()

function App() {
    return (
        <Routes>
            <Route path="/" element={<GlobalRoute component={Main} />} />
        </Routes>
    )
}

export default App

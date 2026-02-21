import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout.jsx'
import Home from '@/components/pages/Home.jsx'
import About from '@/components/pages/About.jsx'
import Contact from '@/components/pages/Contact.jsx'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default App

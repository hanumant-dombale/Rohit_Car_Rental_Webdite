import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout.jsx'
import Home from '@/components/pages/Home.jsx'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default App

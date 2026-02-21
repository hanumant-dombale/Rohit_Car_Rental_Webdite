import { NavLink } from 'react-router-dom'

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    return (
        <nav style={{ padding: '12px 16px', borderBottom: '1px solid #ddd', display: 'flex', gap: 12 }}>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        fontWeight: isActive ? 700 : 400,
                    })}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )
}

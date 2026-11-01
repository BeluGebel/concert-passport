import { NavLink } from 'react-router';

function Navbar() {
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-4 py-2 transition-colors ${
      isActive
        ? 'bg-purple-600 text-white'
        : 'text-gray-400 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <nav className="flex items-center gap-4">
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>

      <NavLink to="/explore" className={linkStyles}>
        Explore
      </NavLink>

      <NavLink to="/passport" className={linkStyles}>
        My Passport
      </NavLink>
    </nav>
  );
}

export default Navbar;

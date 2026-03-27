import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, role, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { label: 'HOME', link: '/' },
    { label: 'HOW IT WORKS', link: '/how-it-works' },
    { label: 'RAISE REQUEST', link: '/raise-request' },
    { label: 'DONATE', link: '/donate' },
    { label: 'TRACK DONATIONS', link: '/track-donations' },
    { label: 'SHOPS', link: '/shops' },
    { label: 'REVIEWS', link: '/reviews' },
    { label: 'CONTACT', link: '/contact' },
  ];

  return (
    <nav className="bg-primary border-b-2 border-secondary shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold flex items-center gap-1">
            <span className="text-secondary">शक्ति</span>
            <span className="text-white">LINK</span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex gap-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="text-white font-bold text-xs hover:text-secondary transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Button */}
          <div>
            {isAuthenticated ? (
              <div className="flex gap-3 items-center">
                <span className="text-secondary font-bold text-sm px-3 py-1 border border-secondary rounded-full">
                  {role?.toUpperCase()}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-danger hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary px-6 py-2 rounded-full font-bold transition duration-300"
              >
                SIGN UP / IN
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

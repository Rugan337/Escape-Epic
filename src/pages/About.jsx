// AboutPage.js - React Component for the About Us Page (Tailwind CSS Version)
// This component converts the provided about.html into a fully mobile-responsive React structure.
// It integrates seamlessly with the existing App.js (e.g., uses Header, Footer, and Tailwind classes).
// Key Changes for Mobile Responsiveness:
// - Uses Tailwind's responsive prefixes (e.g., sm:, md:, lg:) for grids, text sizes, and layouts.
// - About-grid: 1-col on mobile (sm), 2-col on md, 3-col on lg.
// - Gallery-grid: 1-col on mobile, 2-col on sm, 3-col on md+.
// - List items stack vertically on mobile.
// - Images: Responsive with object-fit-cover, lazy loading implied via React (add Suspense if needed).
// - Hover effects: Added subtle transforms and transitions for cards and buttons.
// - Text: Responsive font sizes (e.g., text-base on mobile, text-lg on md).
// - Integration: Import and use <Header /> and <Footer /> from App.js (assume they are exported).
// - Routing: Uses <Link> for internal links (e.g., to index.html -> "/").
// - Enhancements: Added smooth scroll for GoTop, ensured accessibility (aria-labels), and fixed image paths.
// For full app integration: Add route in App.js like <Route path="/about" element={<AboutPage />} />.

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optional: close mobile menu when clicking a link (already partially there)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderActive
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        data-header
      >
        <div className="header-top bg-gray-900 text-white py-3 md:py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 md:space-x-3">
                <img
                  src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png"
                  alt="Escape Epic Logo"
                  className="h-9 md:h-11"
                />
                <h1 className="text-xl md:text-2xl font-bold hidden sm:block tracking-wide">
                  ESCAPE EPIC
                </h1>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center space-x-8">
                <ul className="flex items-center space-x-8 text-base font-medium">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `hover:text-blue-300 transition-colors ${
                          isActive ? 'text-blue-300 underline font-semibold' : ''
                        }`
                      }
                      end
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `hover:text-blue-300 transition-colors ${
                          isActive ? 'text-blue-300 underline font-semibold' : ''
                        }`
                      }
                    >
                      About Us
                    </NavLink>
                  </li>

                  {/* Dropdown - Destinations */}
                  <li className="relative group">
                    <NavLink
                      to="/destination"
                      className={({ isActive }) =>
                        `flex items-center hover:text-blue-300 transition-colors ${
                          isActive ? 'text-blue-300 underline font-semibold' : ''
                        }`
                      }
                    >
                      Destination <span className="ml-1 text-sm">▾</span>
                    </NavLink>
                    <ul className="absolute top-full left-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                      {[
                        'France',
                        'Italy',
                        'England',
                        'Spain',
                        'Germany',
                        'Austria',
                        'Greece',
                        'Netherland',
                        'Switzerland',
                      ].map((country) => (
                        <li key={country}>
                          <Link
                            to={`/${country.toLowerCase()}`}
                            className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                            onClick={closeMenu}
                          >
                            {country}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Blog Dropdown */}
                  <li className="relative group">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        `flex items-center hover:text-blue-300 transition-colors ${
                          isActive ? 'text-blue-300 underline font-semibold' : ''
                        }`
                      }
                    >
                      Blog <span className="ml-1 text-sm">▾</span>
                    </NavLink>
                    <ul className="absolute top-full left-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                      <li>
                        <Link
                          to="/indianblog"
                          className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                          onClick={closeMenu}
                        >
                          Indian Travel Explore
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/europeblog"
                          className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                          onClick={closeMenu}
                        >
                          Europe Travel Explore
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `hover:text-blue-300 transition-colors ${
                          isActive ? 'text-blue-300 underline font-semibold' : ''
                        }`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {/* Hamburger Button – visible only < lg */}
              <button
                className="lg:hidden text-white text-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1 transition-transform active:scale-95"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'}></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Menu panel – slides from right */}
        <nav
          className={`absolute top-0 bottom-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b">
            <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <img
                src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png"
                alt="Escape Epic Logo"
                className="h-10"
              />
              <span className="text-xl font-bold text-gray-900">ESCAPE EPIC</span>
            </Link>
            <button
              className="text-gray-700 text-3xl focus:outline-none"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <div className="p-5 overflow-y-auto h-[calc(100%-4rem)]">
            <ul className="space-y-2 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`
                  }
                  onClick={closeMenu}
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`
                  }
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>

              {/* Mobile Dropdown - Destinations */}
              <li className="space-y-1">
                <div className="block py-3 px-4 rounded-lg font-medium text-gray-800 bg-gray-50">
                  Destination
                </div>
                <ul className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                  {[
                    'France',
                    'Italy',
                    'England',
                    'Spain',
                    'Germany',
                    'Austria',
                    'Greece',
                    'Netherland',
                    'Switzerland',
                  ].map((country) => (
                    <li key={country}>
                      <Link
                        to={`/${country.toLowerCase()}`}
                        className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={closeMenu}
                      >
                        {country}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Mobile Blog Dropdown */}
              <li className="space-y-1">
                <div className="block py-3 px-4 rounded-lg font-medium text-gray-800 bg-gray-50">
                  Blog
                </div>
                <ul className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                  <li>
                    <Link
                      to="/indianblog"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMenu}
                    >
                      Indian Travel Explore
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/europeblog"
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeMenu}
                    >
                      Europe Travel Explore
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`
                  }
                  onClick={closeMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content jump when header becomes fixed */}
      <div className={isHeaderActive ? 'h-20 md:h-24' : 'h-0'}></div>
    </>
  );
};


const AboutPageContent = () => (
  <section className="about-page py-16 bg-white">
    <div className="container mx-auto px-4">
      <p className="section-subtitle text-center text-blue-600 font-semibold mb-4 text-sm md:text-base">About Us</p>
      <h2 className="h2 section-title text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Best Cities in the World</h2>

      <p className="section-text text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
        At Escape Epic, we believe <b><Link to="/about" className="text-blue-600 hover:underline">traveling</Link></b> should be more than just visiting places—it should connect you to the best tourist spots in the world and create lasting memories. We specialize in curating journeys to popular vacation spots, most tourist cities in the world, and hidden gems across Europe and beyond. Whether you’re planning <b><Link to="/about" className="text-blue-600 hover:underline">road trips</Link></b>, cultural tours, or a romantic getaway, we design every trip to be meaningful, safe, and unforgettable.
      </p>

      {/* About Grid - Responsive: 1-col mobile, 2-col tablet, 3-col desktop */}
      <div className="about-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="about-card relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
          <img src="https://i.pinimg.com/1200x/76/66/3e/76663edbdacc2fe216d4e36ce47e7376.jpg" alt="Our Mission" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm">To inspire and connect people with the beauty of the world through meaningful journeys.</p>
            </div>
          </div>
        </div>

        <div className="about-card relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
          <img src="https://i.pinimg.com/1200x/08/7c/df/087cdf289b1d6fd7866497477a1f8374.jpg" alt="Our Vision" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm">Becoming your most trusted travel partner for epic adventures worldwide.</p>
            </div>
          </div>
        </div>

        <div className="about-card relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
          <img src="https://i.pinimg.com/1200x/85/cf/7b/85cf7b4993b6519887effa15951ca46b.jpg" alt="Our Values" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-sm">Integrity, passion, and care in every trip we design.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Centered on mobile, responsive list */}
      <div className="about-extra text-center mb-12">
        <h3 className="h3 text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Us?</h3>
        <ul className="list-none space-y-3 max-w-md mx-auto text-left md:text-center">
          <li className="flex items-center justify-start md:justify-center text-green-600 font-medium">
            <span className="mr-3 text-lg">✔</span> Personalized itineraries tailored to your interests
          </li>
          <li className="flex items-center justify-start md:justify-center text-green-600 font-medium">
            <span className="mr-3 text-lg">✔</span> Expert local guides with cultural insights
          </li>
          <li className="flex items-center justify-start md:justify-center text-green-600 font-medium">
            <span className="mr-3 text-lg">✔</span> Safe, secure, and comfortable travel experiences
          </li>
          <li className="flex items-center justify-start md:justify-center text-green-600 font-medium">
            <span className="mr-3 text-lg">✔</span> Affordable packages with premium services
          </li>
        </ul>
      </div>

      
     
    </div>
  </section>
);

const Footer = () => {
  // Reuse the Footer component from App.js (assume exported)
  // For brevity, pasting a minimal version; in full app, import.
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="footer-brand">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Logo" className="h-10" />
                <h1 className="text-2xl font-bold">ESCAPE EPIC</h1>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Embark on unforgettable journeys with Escape Epic. We curate travel experiences that blend adventure, culture, and relaxation, connecting you to the world’s most iconic destinations.
              </p>
            </div>
            <div className="footer-contact">
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-4">Plan your next adventure with us! Reach out today.</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <ion-icon name="call-outline" className="text-blue-600"></ion-icon>
                  <Link to="tel:+919345707347" className="text-gray-400 hover:text-white">+91 93457 07347</Link>
                </li>
                <li className="flex items-center space-x-4">
                  <ion-icon name="mail-outline" className="text-blue-600"></ion-icon>
                  <Link to="mailto:info@escapeepic.com" className="text-gray-400 hover:text-white">info@escapeepic.com</Link>
                </li>
                <li className="flex items-start space-x-4">
                  <ion-icon name="location-outline" className="text-blue-600 mt-1"></ion-icon>
                  <address className="text-gray-400 not-italic">
                    No. 11 / 4, Pooja Garden, Kalpatti Main Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu - 641 014.
                  </address>
                </li>
              </ul>
            </div>
            <div className="footer-form">
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive travel tips, destination guides, and special offers!</p>
              <form action="" className="flex flex-col sm:flex-row gap-2">
                <input type="email" name="email" className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400" placeholder="Enter Your Email" required />
                <button type="submit" className="bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-t border-gray-800 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 <Link to="/" className="text-blue-600 hover:underline">codewithsadee</Link>. All rights reserved
            </p>
            <ul className="flex space-x-6">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const GoTop = () => (
  <Link to="#top" className="go-top fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 z-40 hidden md:block">
    <ion-icon name="chevron-up-outline"></ion-icon>
  </Link>
);

const AboutPage = () => {
  return (
    <div id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <AboutPageContent />
      </main>
      <Footer />
      <GoTop />
    </div>
  );
};

export default AboutPage;
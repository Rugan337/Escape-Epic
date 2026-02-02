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


const BlogHero = () => {
  const blogSlides = [
    'https://i.pinimg.com/1200x/41/bf/54/41bf543319b49a01bc02b155f6941414.jpg',
    'https://i.pinimg.com/1200x/26/e0/67/26e067dbf18c4d227529b64398731e30.jpg',
    'https://i.pinimg.com/1200x/d0/34/dc/d034dc3feba9156f1b807ab491fdf4f5.jpg',
  ];
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogSlide((prev) => (prev + 1) % blogSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [blogSlides.length]);

  return (
    <section className="blog-hero relative h-96 md:h-screen overflow-hidden">
      {blogSlides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentBlogSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center text-center text-white relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Travel Blog Adventures</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover the world's hidden gems, epic journeys, and insider tips from seasoned travelers. From Europe to beyond, find inspiration for your next escape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Indianblog"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Indian Blog
            </Link>
            <Link
              to="/Europeblog"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Europe Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable FadeIn Section Hook
const useFadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [handleIntersection]);

  return { ref, isVisible };
};

// Indian Travel Section
const IndianTravelSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn();

  const indianTransports = [
    { title: 'Palace on Wheels', desc: 'Luxury train journey through Rajasthan\'s palaces and deserts.', icon: 'train-outline' },
    { title: 'Maharajas\' Express', desc: 'Royal heritage train with gourmet dining and elephant safaris.', icon: 'train-outline' },
    { title: 'Volvo AC Buses', desc: 'Comfortable intercity buses connecting major cities like Delhi to Agra.', icon: 'bus-outline' },
    { title: 'IndiGo Flights', desc: 'Affordable domestic flights for quick hops across India.', icon: 'airplane-outline' },
  ];

  const indianParks = [
    { title: 'Jim Corbett National Park', desc: 'Tiger safaris in the Himalayan foothills with river views.', img: 'https://images.unsplash.com/photo-1583682449850-6e0d7a3e6a48?w=400&h=300&fit=crop' },
    { title: 'Kaziranga National Park', desc: 'UNESCO site famous for one-horned rhinos and elephant rides.', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop' },
  ];

  return (
    <section ref={sectionRef} id="indian-section" className={`indian-section py-16 bg-gradient-to-b from-orange-50 to-yellow-100 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeInUp">Indian Travel Explore</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp animation-delay-300">
          Dive into India's vibrant tapestry with our guides on luxurious trains, scenic buses, swift flights, and majestic national parks. From royal rails to wildlife wonders, uncover the subcontinent's soul.
        </p>

        {/* Transportation Container */}
        <div className="transport-container mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Special Trains, Buses & Flights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indianTransports.map((transport, index) => (
              <div key={index} className="transport-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <ion-icon name={transport.icon} className="text-4xl text-orange-500 mb-4 block mx-auto"></ion-icon>
                <h4 className="text-xl font-semibold mb-2 text-center">{transport.title}</h4>
                <p className="text-gray-600 text-center">{transport.desc}</p>
                <Link to="/Jimcorbett" className="block mt-4 text-blue-600 hover:underline text-center"></Link>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

// Europe Travel Section
const EuropeTravelSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn();

  const europeTransports = [
    { title: 'Eurail Pass', desc: 'Unlimited train travel across 33 countries with scenic routes.', icon: 'train-outline' },
    { title: 'Venice Simplon-Orient-Express', desc: 'Iconic luxury train from Paris to Istanbul.', icon: 'train-outline' },
    { title: 'FlixBus', desc: 'Budget-friendly buses connecting major European cities.', icon: 'bus-outline' },
    { title: 'Ryanair Flights', desc: 'Low-cost carriers for quick intra-Europe hops.', icon: 'airplane-outline' },
  ];

  const europeParks = [
    { title: 'Plitvice Lakes National Park (Croatia)', desc: 'Cascading waterfalls and turquoise lakes in a UNESCO wonder.', img: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop' },
    { title: 'Peak District National Park (England)', desc: 'Rolling hills, hiking trails, and quaint villages.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop' },
  ];

  return (
    <section ref={sectionRef} id="europe-section" className={`europe-section py-16 bg-gradient-to-b from-blue-50 to-indigo-100 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeInUp">Europe Travel Explore</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp animation-delay-300">
          Journey through Europe's timeless landscapes with tips on high-speed trains, eco-buses, budget flights, and pristine national parks. From alpine adventures to coastal escapes, Europe awaits.
        </p>

        {/* Transportation Container */}
        <div className="transport-container mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Special Trains, Buses & Flights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {europeTransports.map((transport, index) => (
              <div key={index} className="transport-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <ion-icon name={transport.icon} className="text-4xl text-blue-500 mb-4 block mx-auto"></ion-icon>
                <h4 className="text-xl font-semibold mb-2 text-center">{transport.title}</h4>
                <p className="text-gray-600 text-center">{transport.desc}</p>
                <Link to="/europeblog/train-details" className="block mt-4 text-blue-600 hover:underline text-center"></Link>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

const Footer = () => (
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
              By reason before, there is care and provision; strength and elegance combined with movement, a display of beauty in harmony. 
              Great presence joined with union and fulfillment, value and growth unfolding in graceful ways
            </p>
          </div>
          <div className="footer-contact">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">Feel free to contact and reach us !!</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <ion-icon name="call-outline" className="text-blue-600"></ion-icon>
                <Link to="tel:+919566839299" className="text-gray-400 hover:text-white transition-colors">+91 9566839299</Link>
              </li>
              <li className="flex items-center space-x-4">
                <ion-icon name="mail-outline" className="text-blue-600"></ion-icon>
                <Link to="mailto:info@escapeepic.com" className="text-gray-400 hover:text-white transition-colors">info@escapeepic.com</Link>
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
            <p className="text-gray-400 mb-4">Subscribe our newsletter for more update & news !!</p>
            <form action="" className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                placeholder="Enter Your Email"
                required
              />
              <button
                type="submit"
                className="bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
              >
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
            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Term & Condition</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const GoTop = () => (
  <Link to="#top" className="go-top fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 z-40 hidden md:block">
    <ion-icon name="arrow-upward-outline"></ion-icon>
  </Link>
);

const BlogPage = () => {
  return (
    <div className="BlogPage" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <BlogHero />
        <IndianTravelSection />
        <EuropeTravelSection />
      </main>
      <Footer />
      <GoTop />
    </div>
  );
};

export default BlogPage;
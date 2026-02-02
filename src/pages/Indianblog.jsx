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


const IndianBlogHero = () => {
  const indianSlides = [
    'https://i.pinimg.com/736x/f7/86/b8/f786b86022ccf644d854b400f4dc62bc.jpg', // Local image
    'https://i.pinimg.com/1200x/10/cd/8f/10cd8fe1f02a61799d4d9dc41d2b0fe9.jpg',
    'https://i.pinimg.com/1200x/ab/7f/ba/ab7fba25fb73d9e6d81f34e68a55975b.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % indianSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [indianSlides.length]);

  return (
    <section className="indian-blog-hero relative h-96 md:h-[70vh] overflow-hidden">
      {indianSlides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center text-center text-white relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Indian Travel Blog Adventures</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            India is more than just a destination; it’s an adventure waiting to be lived. From the towering Himalayas in the north to the sun-kissed beaches in the south.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Explore Posts
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogGrid = () => {
  const indianPosts = [
    {
      id: 1,
      img: 'https://i.pinimg.com/1200x/64/f4/bd/64f4bdc98554a0998ac9c05f7a5996f4.jpg',
      alt: 'Trekking in India',
      title: 'Trekking Trails That Define India’s Adventure Spirit',
      text: 'Alright, here’s the real deal: India’s basically a playground for hikers. You’ve got everything icy river trails',
      link: '/Trekkingtrailsblog',
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/736x/ce/2e/df/ce2edfd8e6e37ad4e0f2c122c42ca81b.jpg',
      alt: 'Autumn Festivals',
      title: 'Autumn Festivals Across India: Where Colors Come Alive',
      text: 'Oh, you want more No problem let’s really dive into it. Autumn in India isn’t just a season, it’s like the country’s collective.',
      link: '/Autumnfestivalsblog',
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/736x/fc/db/1e/fcdb1e6d5033a852431c57f7d722dbba.jpg',
      alt: 'Border Villages',
      title: 'Life in India’s Border Villages: Stories from the Edge',
      text: 'What’s nuts is how much old-school culture just survives out here. Stuff you won’t find in any museum.',
      link: '/Bordervillagesblog',
    },
    {
      id: 4,
      img: 'https://i.pinimg.com/1200x/9f/9f/55/9f9f55fac94fe8eb780e5955b2430416.jpg',
      alt: 'Ancient Temples',
      title: 'India’s Oldest Temples You’ve Never Heard Of',
      text: "India’s spiritual side isn’t just about the postcard famous stuff. It’s carved into rock, tucked into wild jungles, half-swallowed by old villages",
      link: '/Oldesttemplesblog',
    },
    {
      id: 5,
      img: 'https://i.pinimg.com/736x/ce/f9/c4/cef9c4167ffaed5cf7f807e08f7a4e6c.jpg',
      alt: 'Street Food',
      title: 'Street Food Stories: From Delhi Chaat to Chennai Idli',
      text: 'Alright, picture this India’s street food is basically chaos in the best way. One minute you’re elbow deep in spicy chaat in Delhi',
      link: '/Streetfoodblog',
    },
    {
      id: 6,
      img: 'https://i.pinimg.com/1200x/5d/11/93/5d11936a226ead23f50c3013550b0e76.jpg',
      alt: 'Street Art',
      title: 'Street Art Tours: Discovering India\'s Creative Walls',
      text: "India's street art isn't just some paint slapped on a wall. It's like the whole country decided to have one big, colorful conversation right",
      link: '/Streetarttoursblog',
    },
   
  ];

  return (
    <section id="indian-section" className="blog-section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-blue-600 font-semibold mb-2">Top Picks</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">India’s Top Adventure Picks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From trekking trails to hidden temples, explore some of the most breathtaking adventures across India.
          </p>
        </div>
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {indianPosts.map((post) => (
            <article key={post.id} className="blog-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="card-img relative overflow-hidden">
                <img src={post.img} alt={post.alt} className="w-full h-48 md:h-56 object-cover" />
                <div className="img-overlay absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="card-content p-6">
                <h3 className="card-title text-xl font-bold mb-3">
                  <Link to="/indianblog" className="text-gray-900 hover:text-blue-600 transition-colors">{post.title}</Link>
                </h3>
                <p className="card-text text-gray-600 mb-4 leading-relaxed">{post.text}</p>
                <div className="blog-footer">
                  <Link
                    to={post.link}
                    className="read-more-btn inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More <ion-icon name="arrow-forward-outline" className="ml-2"></ion-icon>
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
                <a href="tel:+919566839299" className="text-gray-400 hover:text-white transition-colors">+91 9566839299</a>
              </li>
              <li className="flex items-center space-x-4">
                <ion-icon name="mail-outline" className="text-blue-600"></ion-icon>
                <a href="mailto:info@escapeepic.com" className="text-gray-400 hover:text-white transition-colors">info@escapeepic.com</a>
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

const IndianBlogPage = () => {
  return (
    <div className="IndianBlogPage" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <IndianBlogHero />
        <BlogGrid />
      </main>
      <Footer />
      <GoTop />
    </div>
  );
};

export default IndianBlogPage;
// App.js - Enhanced React Component for Escape Epic Website (Tailwind CSS Version)
// Fully Updated with Indian-Themed Hero Banner: 5 Slides for Iconic Indian Destinations
// Enhancements in Hero:
// - Replaced European slides with Indian vacation spots: Taj Mahal, Goa, Kerala, Rajasthan, Himalayas.
// - Content focuses on evocative vacation experiences: romance, beaches, serenity, adventure, mountains.
// - Retained all existing functionality: auto-advance (5000ms), pause on click, indicators, slide-in animations.
// - Images use Unsplash placeholders (replace with local assets, e.g., '/assets/images/taj-mahal.jpg').
// - Other sections unchanged: Header, About, Destination, Blog, Contact, Footer.
// Navbar Enhancements:
// - Added active state to navbar links using NavLink from react-router-dom.
// - Active links get 'text-blue-300 underline font-semibold' styling for visibility.
// - Applied to both desktop and mobile menus.
// - Home link active on "/" route.

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



const Hero = () => {
  const slides = [
    {
      img: 'https://i.pinimg.com/1200x/e9/1a/b6/e91ab6d60ffd80c74e6364c96f293a84.jpg', // Taj Mahal
      title: 'Taj Mahal Eternal Love',
      subtitle: '🏰 Marble symphony of romance at dawn',
      description: 'India\'s crown jewel awaits—witness the sun rise over the Taj, stroll Mughal gardens, and indulge in Agra\'s royal feasts. A timeless vacation for history lovers and dreamers alike.',
      btnText: 'Visit the Taj',
      link: '/indianblog'
    },
    {
      img: 'https://i.pinimg.com/1200x/bd/3e/36/bd3e36eb07b7d0b0a53d77c3df7f9913.jpg', // Goa beaches
      title: 'Goa Beach Paradise',
      subtitle: '🌴 Palm-fringed shores whispering sea secrets',
      description: 'Unwind on Goa\'s golden sands with fresh seafood shacks, yoga sunrises, and nightlife vibes. Perfect Indian vacation for sun-soaked relaxation and water sports adventures.',
      btnText: 'Beach Bliss Awaits',
      link: '/indianblog'
    },
    {
      img: 'https://i.pinimg.com/1200x/d3/ea/61/d3ea61bca2af8dfba72768bfe49da6e3.jpg', // Kerala backwaters
      title: 'Kerala Backwater Serenity',
      subtitle: '🚣‍♀️ Houseboats drifting through emerald lagoons',
      description: 'Cruise Kerala\'s tranquil waters, explore spice-scented villages, and rejuvenate with Ayurvedic therapies. An idyllic Indian escape for nature lovers seeking peace and wellness.',
      btnText: 'Drift to Kerala',
      link: '/indianblog'
    },
    {
      img: 'https://i.pinimg.com/1200x/7c/f9/a4/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg', // Rajasthan deserts
      title: 'Rajasthan Desert Royals',
      subtitle: '🏜️ Camel caravans under starlit dunes',
      description: 'Journey through Jaisalmer\'s golden forts, ride camels at sunset, and dance at desert festivals. Rajasthan offers epic Indian vacations blending heritage, adventure, and luxury havelis.',
      btnText: 'Safari the Sands',
      link: '/indianblog'
    },
    {
      img: 'https://i.pinimg.com/1200x/5b/78/d6/5b78d6de1d8aee5c9daeb498d5fbdb76.jpg', // Himalayas (Manali)
      title: 'Himalayan Snow Escapes',
      subtitle: '⛰️ Peaks cloaked in misty white wonders',
      description: 'Trek Manali\'s snowy trails, paraglide over valleys, and sip chai by roaring fires. India\'s mountains deliver thrilling vacations for thrill-seekers and serene soul-searchers.',
      btnText: 'Summit the Heights',
      link: '/indianblog'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 1000);
      }, 5000); // Slower pace for immersive Indian storytelling
    }
    return () => clearInterval(interval);
  }, [currentSlide, isPaused, slides.length]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section className="hero relative h-screen overflow-hidden" id="home" style={{ perspective: '1px' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${isTransitioning ? 'transition-all' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
          onClick={togglePause}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transform translateZ(-1px) scaleY(1.5)"></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center text-center text-white relative z-10">
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-2 italic">{slide.subtitle}</p>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{slide.description}</p>
              <div className="btn-group">
                <Link
                  to={slide.link}
                  className="btn btn-primary inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  {slide.btnText}
                </Link>
              </div>
              <p className={`mt-4 text-sm ${isPaused ? 'text-yellow-300' : 'text-white/70'}`}>
                {isPaused ? 'Click to Resume' : 'Click to Pause'} • Swipe for Touch (Mobile) • Discover India\'s Wonders
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slide-in { animation: slideIn 1s ease-out; }
      `}</style>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About us Escape Epic</h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-8">
        At <b><Link to="/about" className="text-blue-600 hover:underline">Escape Epic</Link></b>, we believe traveling should be more than just visiting places—it should connect you to the best tourist spots in the world and create lasting memories. We specialize in curating journeys to popular vacation spots, most tourist cities in the world, and <b><Link to="/about" className="text-blue-600 hover:underline">hidden gems</Link></b> across Europe and beyond. Whether you’re planning road trips, cultural tours, or a romantic getaway, we design every trip to be meaningful, safe, and unforgettable.
      </p>
      <div className="grid md:grid-cols-4 gap-8 text-center mt-12">
        <div className="stat">
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-600">Years of Expertise</p>
        </div>
        <div className="stat">
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-600">Happy Travelers</p>
        </div>
        <div className="stat">
          <h3 className="text-3xl font-bold text-blue-600">20+</h3>
          <p className="text-gray-600">Destinations</p>
        </div>
        <div className="stat">
          <h3 className="text-3xl font-bold text-blue-600">100%</h3>
          <p className="text-gray-600">Customized Trips</p>
        </div>
      </div>
    </div>
  </section>
);

const DestinationHeader = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Destination</h2>
    </div>
  </section>
);

const EuropeHero = () => (
  <section className="europe-hero bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Destination of Europe</h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
        Explore the most iconic and charming destinations across Europe from scenic road trips to historic cities and breathtaking coastlines.
      </p>
    </div>
  </section>
);

const BigBenSection = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src="https://i.pinimg.com/1200x/8c/36/1c/8c361cd814ae06fcc839ec109ef7035d.jpg" alt="Big Ben at dusk in London" className="w-full md:w-1/2 rounded-lg shadow-xl" />
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Big Ben: The Timeless Icon of London</h3>
          <p className="mb-4 leading-relaxed">
            Immerse yourself in the heart of England with Big Ben, the legendary clock tower that chimes the rhythm of history. Under the veil of twilight, its golden glow pierces the misty London sky, inviting wanderers to uncover stories etched in stone and time.
          </p>
          <p className="leading-relaxed">
            Escape Epic invites you to let Big Ben&apos;s chimes guide your European odyssey pair it with a cozy pub crawl or a West End show for the full London allure.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const DestinationSlideshow = () => {
  const destinations = [
    {
      title: 'France',
      subtitle: 'Eiffel Tower whispers secrets of romance under a canvas of stars.',
      description: 'Stroll along the Seine, savor croissants at dawn, and lose yourself in the Louvre\'s timeless art. France isn\'t just a destination—it\'s a love letter to elegance and flavor.',
      btnText: 'Embark on Romance',
      img: 'https://i.pinimg.com/1200x/0d/f4/a5/0df4a5e1cfb65d0491e76af28402cbbc.jpg',
      link: '/france',
    },
    {
      title: 'Italy',
      subtitle: 'Toss a coin in the Trevi Fountain and let history echo through your veins.',
      description: 'From the Colosseum\'s ancient roars to gelato-fueled evenings in Trastevere, Italy weaves passion into every cobblestone. Discover la dolce vita, one pasta twirl at a time.',
      btnText: 'Savor the Eternal',
      img: 'https://i.pinimg.com/1200x/1f/6c/09/1f6c09eea4b360241b7e7896ccf3cbfd.jpg',
      link: '/italy',
    },
    {
      title: 'Spain',
      subtitle: 'Dance with Gaudí\'s whimsy as the Mediterranean sun paints the sky in fiesta hues.',
      description: 'Wander Sagrada Família\'s spires, tap your feet to flamenco rhythms, and feast on tapas by the sea. Spain pulses with fiery spirit—ignite your wanderlust here.',
      btnText: 'Ignite the Fiesta',
      img: 'https://i.pinimg.com/1200x/44/62/12/446212d6a59499c7ce4c855a67d6ca17.jpg',
      link: '/spain',
    },
    {
      title: 'Germany',
      subtitle: 'Where the Berlin Wall\'s scars tell tales of resilience and rebirth.',
      description: 'Cycle through graffiti-splashed streets, raise a stein in beer gardens, and trace the Rhine\'s fairy-tale castles. Germany\'s blend of edge and enchantment awaits.',
      btnText: 'Uncover Resilience',
      img: 'https://i.pinimg.com/1200x/fe/81/59/fe815970a128c787e38d73d7e3b513a0.jpg',
      link: '/germany',
    },
    {
      title: 'Greece',
      subtitle: 'Blue-domed cliffs kiss the Aegean, where myths swim in sapphire waves.',
      description: 'Chase sunsets over caldera views, explore Acropolis ruins, and island-hop to hidden coves. Greece revives the soul with olive groves and ancient whispers.',
      btnText: 'Chase the Myth',
      img: 'https://i.pinimg.com/736x/05/65/2e/05652e0860b9966fd9b9f41a3674324f.jpg',
      link: '/greece',
    },
    {
      title: 'Austria',
      description: 'Waltz through Vienna\'s palaces, hike the Alps, and savor strudel in Salzburg. Mozart\'s melodies and mountain majesty in Central Europe.',
      img: 'https://i.pinimg.com/1200x/8c/19/ed/8c19ed69234e8225733e00c5fd7ae4de.jpg',
      link: '/austria'
    },
    {
      title: 'England',
      description: 'Island-hop the Cyclades, explore Athens\' Acropolis, and dive into azure seas. Myths, mezes, and Mediterranean sun in the cradle of civilization.',
      img: 'https://i.pinimg.com/1200x/4e/74/03/4e7403a14bc80dc9b62e25edd5669626.jpg',
      link: '/england'
    },
    {
      title: 'Netherlands',
      description: 'Cycle Amsterdam\'s canals, wander tulip fields, and visit Van Gogh\'s world. Windmills, cheese, and progressive charm in the low countries.',
      img: 'https://i.pinimg.com/1200x/b8/68/50/b86850b8a60e1ce6bde2ad185e903a5e.jpg',
      link: '/netherland'
    },
    {
      title: 'Switzerland',
      description: 'Conquer the Matterhorn, sail Lake Geneva, and chocolate-hop in Zurich. Precision, peaks, and pristine lakes in the heart of the Alps.',
      img: 'https://i.pinimg.com/1200x/b4/c2/f8/b4c2f859e61841b0ef552a9a9c1c8325.jpg',
      link: '/switzerland'
    }
    
  
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next'); // Track slide direction for animation

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setIsTransitioning(true);
        setDirection('next');
        setCurrentSlideIndex((prev) => (prev + 1) % destinations.length);
        setTimeout(() => setIsTransitioning(false), 1000);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentSlideIndex, isPaused, destinations.length]);

  const togglePause = () => setIsPaused(!isPaused);

  const handleNext = () => {
    setIsTransitioning(true);
    setDirection('next');
    setCurrentSlideIndex((prev) => (prev + 1) % destinations.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setDirection('prev');
    setCurrentSlideIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleIndicatorClick = (index) => {
    if (index > currentSlideIndex) setDirection('next');
    else if (index < currentSlideIndex) setDirection('prev');
    setIsTransitioning(true);
    setCurrentSlideIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const getSlideClass = (index) => {
    if (index === currentSlideIndex) return 'opacity-100 translate-x-0';
    if ((index + 1) % destinations.length === currentSlideIndex && direction === 'prev') return 'opacity-0 translate-x-full';
    if ((index - 1 + destinations.length) % destinations.length === currentSlideIndex && direction === 'next') return 'opacity-0 -translate-x-full';
    return 'opacity-0 translate-x-full';
  };

  return (
    <section className="destination-slideshow relative h-screen overflow-hidden" id="destinations">
      {destinations.map((dest, index) => (
        <div
          key={index}
          className={`destination-container absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out transform rounded-2xl overflow-hidden shadow-2xl ${getSlideClass(index)} ${isTransitioning ? 'transition-transform' : ''}`}
          style={{ backgroundImage: `url(${dest.img})` }}
          onClick={togglePause}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center text-white">
            <div className="max-w-2xl">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-title ${index === currentSlideIndex ? 'animate-slide-in-delayed opacity-100' : ''}`}>
                {dest.title}
              </h2>
              <p className={`text-xl italic mb-4 opacity-0 animate-subtitle ${index === currentSlideIndex ? 'animate-slide-in-delayed-200 opacity-100' : ''}`}>
                {dest.subtitle}
              </p>
              <p className={`text-lg mb-8 leading-relaxed opacity-0 animate-description ${index === currentSlideIndex ? 'animate-slide-in-delayed-400 opacity-100' : ''}`}>
                {dest.description}
              </p>
              <Link
                to={dest.link}
                className={`inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 opacity-0 animate-button ${index === currentSlideIndex ? 'animate-slide-in-delayed-600 opacity-100' : ''}`}
              >
                {dest.btnText}
              </Link>
              <p className={`mt-4 text-sm ${isPaused ? 'text-yellow-300' : 'text-white/70'}`}>
                {isPaused ? 'Click to Resume' : 'Click to Pause • Swipe Left/Right'}
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-30"
        aria-label="Previous Slide"
      >
        <ion-icon name="chevron-back-outline" className="text-xl"></ion-icon>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-30"
        aria-label="Next Slide"
      >
        <ion-icon name="chevron-forward-outline" className="text-xl"></ion-icon>
      </button>
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {destinations.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideInDelayed { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInDelayed200 { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } animation-delay: 0.2s; }
        @keyframes slideInDelayed400 { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } animation-delay: 0.4s; }
        @keyframes slideInDelayed600 { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } animation-delay: 0.6s; }
        .animate-slide-in-delayed { animation: slideInDelayed 1s ease-out; }
        .animate-slide-in-delayed-200 { animation: slideInDelayed200 1s ease-out; }
        .animate-slide-in-delayed-400 { animation: slideInDelayed400 1s ease-out; }
        .animate-slide-in-delayed-600 { animation: slideInDelayed600 1s ease-out; }
      `}</style>
    </section>
  );
};

const BlogHeader = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
    </div>
  </section>
);

const BlogHero = () => {
  const blogSlides = [
    { src: 'https://i.pinimg.com/1200x/41/bf/54/41bf543319b49a01bc02b155f6941414.jpg', title: 'Indian Hidden Gems' },
    { src: 'https://i.pinimg.com/1200x/26/e0/67/26e067dbf18c4d227529b64398731e30.jpg', title: 'Europe Train Trips' },
    { src: 'https://i.pinimg.com/1200x/d0/34/dc/d034dc3feba9156f1b807ab491fdf4f5.jpg', title: 'Adventure Awaits' },
  ];
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentBlogSlide((prev) => (prev + 1) % blogSlides.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentBlogSlide, isPaused, blogSlides.length]);

  const togglePause = () => setIsPaused(!isPaused);

  return (
    <section className="blog-hero relative h-96 md:h-screen overflow-hidden" onClick={togglePause}>
      {blogSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide absolute inset-0 bg-cover bg-center transition-all duration-1000 ${index === currentBlogSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center text-center text-white relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{blogSlides[currentBlogSlide].title}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover the world&apos;s hidden gems, epic journeys, and insider tips from seasoned travelers. From Europe to beyond, find inspiration for your next escape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/indianblog"
              className="btn btn-primary inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Indian Blog
            </Link>
            <Link
              to="/europeblog"
              className="btn btn-primary inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Europe Blog
            </Link>
          </div>
          <p className={`mt-4 text-sm ${isPaused ? 'text-yellow-300' : 'text-white/70'}`}>
            {isPaused ? 'Click to Resume' : 'Click to Pause'}
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactHeader = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Contact us</h2>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="contact-info space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">Connect with us for personalized travel advice and support.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <ion-icon name="call-outline" className="text-2xl text-blue-600"></ion-icon>
              <Link to="tel:+919566839299" className="text-gray-700 hover:text-blue-600 transition-colors">+91 9566839299</Link>
            </div>
            <div className="flex items-center space-x-4">
              <ion-icon name="mail-outline" className="text-2xl text-blue-600"></ion-icon>
              <Link to="mailto:info@escapeepic.com" className="text-gray-700 hover:text-blue-600 transition-colors">info@escapeepic.com</Link>
            </div>
            <div className="flex items-start space-x-4">
              <ion-icon name="location-outline" className="text-2xl text-blue-600 mt-1"></ion-icon>
              <address className="text-gray-700 not-italic">
                No. 11 / 4, Pooja Garden, Kalpatti Main Rd, Civil Aerodrome Post,
              </address>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form action="" method="post" className="space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
              <input type="text" id="subject" name="subject" placeholder="What is your message about?" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea id="message" name="message" placeholder="Write your message here..." required rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

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
              By reason before, there is care and provision; strength and elegance combined with movement, a display of beauty in harmony. Great presence joined with union and fulfillment, value and growth unfolding in graceful ways
            </p>
          </div>
          <div className="footer-contact">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">Feel free to contact and reach us !!</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <ion-icon name="call-outline" className="text-blue-600"></ion-icon>
                <Link to="tel:+919345707347" className="text-gray-400 hover:text-white transition-colors">+91 9345707347</Link>
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
              <input type="email" name="email" className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400" placeholder="Enter Your Email" required />
              <button type="submit" className="btn btn-secondary bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300">
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
    <ion-icon name="chevron-up-outline"></ion-icon>
  </Link>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-24 lg:pt-20">
        <Hero />
        <AboutSection />
        <DestinationHeader />
        <EuropeHero />
        <BigBenSection />
        <DestinationSlideshow />
        <BlogHeader />
        <BlogHero />
        <ContactHeader />
        <ContactSection />
      </main>
      <Footer />
      <GoTop />
    </div>
  );
}

export default App;
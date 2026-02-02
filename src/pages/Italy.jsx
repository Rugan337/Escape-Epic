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

// Italy Hero Section
const ItalyHero = () => (
  <section className="italy-hero relative min-h-[70vh] md:min-h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(11, 7, 7, 0.8), rgba(61, 54, 54, 0.8)), url('https://i.pinimg.com/736x/91/5a/01/915a018598654e45cf9f5b5b95e24e1c.jpg')" }}>
    <div className="absolute inset-0 bg-black/20 z-0 animate-fadeIn"></div>
    <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-slideInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-lg tracking-wide">Discover Italy</h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        Immerse yourself in Italy's timeless allure — from Renaissance masterpieces and sun-kissed coastlines to flavorful feasts and romantic canals, where history and la dolce vita intertwine in every piazza.
      </p>
    </div>
  </section>
);
// Colosseum Section (Image on right for desktop)
const ColosseumSection = () => (
  <section className="colosseum-container bg-gray-100 py-24 md:py-32 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="colosseum-details flex-1 text-left md:text-left text-center order-2 md:order-1">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Colosseum: Rome's Gladiatorial Icon</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Enter the heart of ancient Rome at the Colosseum, the world's largest amphitheater where gladiators once battled and emperors held sway. This UNESCO gem stands as a testament to imperial grandeur, drawing millions to its weathered arches.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Journey to the Colosseum?</h3>
        <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Explore the subterranean chambers where wild animals were caged before spectacles.</li>
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Wander the Forum below for a glimpse into daily Roman life amid ruins.</li>
         
        </ul>
        
        
      </div>
      
    </div>
  </section>
);
// Region Intro Section
const RegionIntro = () => (
  <section className="region-intro relative py-20 md:py-32 bg-gray-50">
    <div className="absolute inset-0 bg-[url('/assets/images/italy-intro-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Explore the Magic of Italy</h2>
      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
        Italy enchants with its boot-shaped boot of wonders, from the misty canals of Venice to the volcanic shores of Sicily. Whether you're a backpacker uncovering hidden trattorias, a couple chasing sunset gondolas, or an adventurer conquering alpine passes, Italy promises la bella figura. Escape Epic curates authentic guides to backpacking trails, secret borghi, romantic retreats, mountain refuges, and azure seas for your ultimate Italian odyssey.
      </p>
    </div>
  </section>
);
// Reusable Topic Section Component with Image Side Prop
const TopicSection = ({ title, intro, subtitle, listItems, outro, imageSrc, alt, bgColor = 'bg-white', imageSide = 'right' }) => {
  const isImageLeft = imageSide === 'left';
  return (
    <section className={`topic-section py-20 md:py-32 ${bgColor}`}>
      <div className="topic-container container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className={`topic-details flex-1 text-left md:text-left text-center ${isImageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">{title}</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">{intro}</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{subtitle}</h3>
          <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
            {listItems.map((item, index) => (
              <li key={index} className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-gray-600">{outro}</p>
        </div>
        <img
          src={imageSrc}
          alt={alt}
          className={`flex-1 w-full md:w-auto max-w-md md:max-w-none h-64 md:h-96 object-cover rounded-xl shadow-2xl ${isImageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}
        />
      </div>
    </section>
  );
};
// Main Italy Page Component
const ItalyPage = () => {
  return (
    <div className="ItalyPage min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 lg:pt-20">
        <ItalyHero />
        <ColosseumSection />
        <RegionIntro />
        <TopicSection
          title="Backpacker Italy"
          intro="Italy rewards budget explorers with cheap trains, free piazzas, and al fresco dining. From Rome's eternal ruins to Milan's fashion pulse, craft your path with savvy savings and iconic stops."
          
          listItems={[
            "Budget €40-€70 daily for hostels, panini, and regional trains; leverage Eurail passes for intercity hops.",
            "Kick off in Rome, train north to Florence and Venice for art, or south to Naples and Pompeii for drama.",
            
            
          ]}
         
          imageSrc="https://i.pinimg.com/736x/f3/b4/56/f3b456c9d026b1709b7109be26783663.jpg"
          alt="Backpackers in Tuscany"
          imageSide="right"
        />
        <TopicSection
          title="Secrets of the Villages in Italy"
          intro="Delve into Italy's borgos, medieval hilltop havens where cobbled lanes wind past wildflower meadows and forgotten frescoes, far from the tourist throng."
          
          listItems={[
            "Montepulciano in Tuscany: Etruscan walls and underground wine cellars brimming with Vino Nobile.",
            "Civita di Bagnoregio in Lazio: The 'dying city' perched on a crumbling plateau, a surreal time capsule.",
            
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/b7/3f/5c/b73f5ccb4258388029525ee13f72a3df.jpg"
          alt="Hidden village in Umbria"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Couple's Places Italy"
          intro="Italy whispers amore in every archway and vineyard row. Perfect for vows or stolen kisses, these locales fuse passion with panoramic poetry."
         
          listItems={[
            "Venice's labyrinthine canals: Gondola serenades and bridge kisses under lantern glow.",
            "Amalfi Coast's Positano: Cliffside villas and lemon grove sunsets over Tyrrhenian waves.",
,
           
          ]}
          
          imageSrc="https://i.pinimg.com/736x/36/95/67/36956743e63f8eac2ba859a11978efae.jpg"
          alt="Romantic gondola in Venice"
          imageSide="right"
        />
        <TopicSection
          title="Hill Stations in Italy"
          intro="Italy's Apennines and Alps deliver vertigo-inducing vistas, cable car ascents, and rifugios serving polenta by roaring fires for high-altitude bliss."
          
          listItems={[
            "Dolomites' Cortina d'Ampezzo: Jagged pink peaks for via ferrata and winter luge.",
            "Aosta Valley's Gran Paradiso: Ibex-spotting hikes in Italy's first national park.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/a8/bc/5e/a8bc5e140364e0e2c6014d7d212f3a7b.jpg"
          alt="Dolomites mountains"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Best Beaches in Italy"
          intro="Italy's 7,600km of shores span pebbled coves to sugar sands, where azure waters invite cliff jumps, SUP yoga, and sunset aperitivi."
          
          listItems={[
            "Spiaggia dei Conigli, Lampedusa: Turtle-nesting white sands and Caribbean-clear shallows.",
            "Cala Mariolu, Sardinia: Sea kayaking into grottoes amid sheer limestone walls.",
            "Baia del Silenzio, Sestri Levante: Horseshoe bay with pastel facades and jazz festivals.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/2e/bf/b9/2ebfb98d00fa5180ff08bc5e1b069f2f.jpg"
          alt="Spiaggia dei Conigli in Sicily"
          imageSide="right"
        />
        <TopicSection
          title="Culinary of Italy"
          intro="Italy's tavola is a regional symphony, from pasta al dente to espresso rituals, where meals are symphonies of simplicity and seasonality."
          
          listItems={[
            "Pizza Margherita in Naples: Wood-fired heirloom tomatoes, mozzarella di bufala, and basil crowns.",
            "Pasta alla carbonara in Rome: Guanciale, pecorino, and egg yolk in peppery harmony.",
            "Ossobuco in Milan: Veal shanks braised with saffron risotto alla Milanese.",
           
          ]}
       
          imageSrc="https://i.pinimg.com/1200x/da/e9/bc/dae9bcf39c9db751182e6155634d850c.jpg"
          alt="Pasta carbonara in Rome"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Italy's  Wine Regions"
          intro="Italy, the world's top wine producer, cultivates 500+ indigenous grapes across terraced slopes, yielding velvety Barolos and fizzy Proseccos."
         
          listItems={[
            "Tuscany's Chianti: Sangiovese-driven reds with cherry notes and cypress-lined estates.",
            "Piedmont's Barolo: Nebbiolo 'king of wines' from foggy Langhe hills, aged in cellars.",
            "Veneto's Prosecco: Sparkling Glera from cone-shaped hills in Valdobbiadene.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/92/07/1e/92071e3c706ceeac2009924a50ac2696.jpg"
          alt="Vineyards in Tuscany"
          imageSide="right"
        />
        <TopicSection
          title="Vibrant Festivals Italy"
          intro="Italy pulses with sagre and palii, where saints' days ignite fireworks, feasts, and folk dances, weaving communal threads through centuries."
         
          listItems={[
            "Carnevale in Venice: Masked balls and elaborate floats in labyrinthine lagoons.",
            "Palio di Siena: Bareback horse races around Piazza del Campo with contrada rivalries.",
            
            
          ]}
         
          imageSrc="https://i.pinimg.com/736x/b7/33/d6/b733d6a33fc5e61314371a24dc3eee4b.jpg"
          alt="Palio di Siena"
          bgColor="bg-gray-50"
          imageSide="left"
        />
      </main>
      <Footer />
      <GoTop />
    </div>
  );
};
// Reused Footer (from App.js)
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
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for more updates!</p>
            <form action="" className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                placeholder="Enter Your Email"
                required
              />
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
            &copy; 2025 Escape Epic. All rights reserved
          </p>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
// Reused GoTop
const GoTop = () => (
  <a href="#top" className="go-top fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 z-40 hidden md:block">
    <ion-icon name="chevron-up-outline"></ion-icon>
  </a>
);
export default ItalyPage;
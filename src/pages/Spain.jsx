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

// Spain Hero Section
const SpainHero = () => (
  <section className="spain-hero relative min-h-[70vh] md:min-h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(11, 7, 7, 0.8), rgba(61, 54, 54, 0.8)), url('https://i.pinimg.com/1200x/47/c3/6b/47c36ba6b146a2c1fde971c333523909.jpg')" }}>
    <div className="absolute inset-0 bg-black/20 z-0 animate-fadeIn"></div>
    <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-slideInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-lg tracking-wide">Discover Spain</h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        Uncover the vibrant soul of Spain from sun-drenched beaches and ancient villages to romantic cities and majestic mountains, where every corner whispers tales of passion and adventure.
      </p>
    </div>
  </section>
);
// Sagrada Familia Section (Image on right for desktop)
const SagradaSection = () => (
  <section className="sagrada-container bg-gray-100 py-24 md:py-32 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="sagrada-details flex-1 text-left md:text-left text-center order-2 md:order-1">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Sagrada Familia: Gaudi's Eternal Masterpiece</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Step into the whimsical world of Antoni Gaudi's Sagrada Familia, Barcelona's unfinished symphony of stone and light. As Europe's most visited monument, its towering spires reach for the heavens, blending Gothic and Art Nouveau in a celebration of faith and imagination.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Journey to Sagrada Familia?</h3>
        <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Marvel at the intricate facades depicting biblical scenes with surreal detail.</li>
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Experience the interior's forest-like columns bathed in colorful stained-glass glow.</li>
        
        </ul>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800"></h3>
        
      </div>
     
    </div>
  </section>
);
// Region Intro Section
const RegionIntro = () => (
  <section className="region-intro relative py-20 md:py-32 bg-gray-50">
    <div className="absolute inset-0 bg-[url('/assets/images/spain-intro-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Explore the Magic of Spain</h2>
      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
        Spain captivates with its diverse landscapes, from the fiery flamenco of Andalusia to the cool Basque coasts. Whether you're a backpacker chasing hidden gems, a couple seeking romance, or an adventurer scaling peaks, Spain offers endless discoveries. Escape Epic curates authentic guides to backpacking routes, secret villages, romantic hideaways, hill stations, and pristine beaches for your perfect Iberian escape.
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
// Main Spain Page Component
const SpainPage = () => {
  return (
    <div className="SpainPage min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 lg:pt-20">
        <SpainHero />
        <SagradaSection />
        <RegionIntro />
        <TopicSection
          title="Backpacker to Spain"
          intro="Spain is a backpacker's paradise, blending affordable adventures with world-class culture. From bustling Barcelona to serene Andalusian trails, plan your route with budget tips and must-sees."
         
          listItems={[
            "Budget around €50-€80 per day for hostels, street food, and trains; use apps like BlaBlaCar for cheap rides.",
            "Start in Barcelona, then head south to Seville and Granada for history, or north to Bilbao for modern vibes.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/a8/dc/ac/a8dcac0a56f216f9a0c394a943bb506d.jpg"
          alt="Backpackers hiking in Spain"
          imageSide="right"
        />
        <TopicSection
          title="Villages in Spain"
          intro="Escape the crowds and uncover Spain's enchanting white-washed pueblos, where time stands still amid olive groves and medieval streets."
          
          listItems={[
            "Alcala de Jucar in Albacete: Dramatic river gorges and cave dwellings carved into cliffs.",
            "Medinaceli in Soria: Ancient Roman arches and quiet plazas perfect for introspection.",
            
          ]}
        
          imageSrc="https://i.pinimg.com/1200x/a0/a7/ea/a0a7ea0a4f2957f10a67750821be76b4.jpg"
          alt="Hidden village in Spain"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Couple's Places Spain"
          intro="Spain ignites romance with sunset sangria and whispered serenades. Ideal for honeymoons or anniversaries, these spots blend intimacy and luxury."
          
          listItems={[
            "Seville's Andalusian charm: Flamenco shows and horse-drawn carriages in Alcazar gardens.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/39/44/17/394417493f0f6564d7c1f733658d0122.jpg"
          alt="Romantic couple in Seville"
          imageSide="right"
        />
        <TopicSection
          title="Hill Stations in Spain"
          intro="Spain's rugged sierras and Pyrenees offer crisp air, hiking trails, and alpine villages for nature lovers seeking elevation and serenity."
          
          listItems={[
            "Ordesa y Monte Perdido National Park: Dramatic canyons and waterfalls in the Pyrenees.",
            "Serra de Tramuntana, Mallorca: Olive-terraced hills with coastal vistas.",
            
          ]}
        
          imageSrc="https://i.pinimg.com/1200x/47/93/74/47937422cefb4276fadb2063271600d3.jpg"
          alt="Pyrenees mountains in Spain"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title=" Beaches in Spain"
          intro="From golden sands to turquoise coves, Spain's 8,000km coastline delivers sun-soaked bliss and water sports galore."
         
          listItems={[
            "La Concha Beach, San Sebastian: Urban elegance with calm, shell-strewn waters.",
            "Playa de la Granadella, Alicante: Cliff-fringed bay for snorkeling in crystal seas.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/736x/5c/c0/95/5cc095d6b028474954a265f72ecd7bae.jpg"
          alt="La Concha Beach in San Sebastian"
          imageSide="right"
        />
        <TopicSection
          title="Culinary of Spain"
          intro="Spain's cuisine is a feast for the senses, from regional rice dishes to sweet pastries, reflecting its rich cultural tapestry and diverse regions."
         
          listItems={[
            "Paella from Valencia: Saffron-infused rice with seafood or rabbit, a symbol of communal dining.",
            "Tapas in Andalusia: Small plates of patatas bravas, jamón ibérico, and olives shared among friends.",
            
          ]}
         imageSrc="https://i.pinimg.com/736x/ef/d9/1e/efd91ec81b970a883430d795edb8a919.jpg"
         
          alt="Paella in Valencia"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Spain's  Wine Regions"
          intro="With over a million hectares of vineyards, Spain ranks as the world's third-largest wine producer, boasting bold reds, crisp whites, and sparkling varieties."
         
          listItems={[
            "Rioja: World-renowned Tempranillo reds aged in oak for smooth, fruity elegance.",
            "Penedès: Birthplace of Cava, Spain's answer to Champagne, with bubbly celebrations.",
           
          ]}
          outro="Join guided wine tours for tastings, vineyard hikes, and pairings with local cheeses."
          imageSrc="https://i.pinimg.com/1200x/49/db/93/49db935f5ed5786dbb3aabd3319a77ff.jpg"
          alt="Vineyards in Rioja"
          imageSide="right"
        />
        <TopicSection
          title="Vibrant Festivals  in Spain"
          intro="Spain comes alive with colorful fiestas that blend ancient rituals, music, and community spirit, offering immersive cultural experiences."
          
          listItems={[
            "La Tomatina in Buñol: The world's largest tomato fight, a messy celebration of summer.",
            "San Fermín in Pamplona: Thrilling running of the bulls followed by fireworks and feasts.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/91/f0/81/91f081756e5ffd2c5313a1095885f850.jpg"
          alt="La Tomatina Festival"
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
export default SpainPage;
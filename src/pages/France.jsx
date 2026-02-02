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

// France Hero Section
const FranceHero = () => (
  <section className="france-hero relative min-h-[70vh] md:min-h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(11, 7, 7, 0.8), rgba(61, 54, 54, 0.8)), url('https://i.pinimg.com/736x/cc/26/e0/cc26e028237ef017e936c8345a50f766.jpg')" }}>
    <div className="absolute inset-0 bg-black/20 z-0 animate-fadeIn"></div>
    <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-slideInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400 drop-shadow-lg tracking-wide">Discover France</h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        Surrender to France's elegant enchantment — from iconic towers and lavender fields to gourmet bistros and Riviera glamour, where joie de vivre dances in every cobblestone street and vineyard vista.
      </p>
    </div>
  </section>
);
// Eiffel Tower Section (Image on right for desktop)
const EiffelSection = () => (
  <section className="eiffel-container bg-gray-100 py-24 md:py-32 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="eiffel-details flex-1 text-left md:text-left text-center order-2 md:order-1">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Eiffel Tower: Paris's Iron Lady</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Ascend the Eiffel Tower, Gustave Eiffel's 1889 marvel that pierces the Parisian sky, symbolizing love and innovation. This latticework legend glows nightly, offering 360-degree views of the City of Light.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Journey to the Eiffel Tower?</h3>
        <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Savor a champagne picnic at Champ de Mars for romantic sunset toasts.</li>
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Explore the secret second floor with its own elevator and panoramic salon.</li>

        </ul>
        
        
      </div>
     
    </div>
  </section>
);
// Region Intro Section
const RegionIntro = () => (
  <section className="region-intro relative py-20 md:py-32 bg-gray-50">
    <div className="absolute inset-0 bg-[url('/assets/images/france-intro-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Explore the Magic of France</h2>
      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
        France fascinates with its fusion of finesse and fervor, from the Seine's sophisticated swirls to the Dordogne's prehistoric whispers. Whether you're a backpacker unraveling Riviera rails, a couple chasing château sunsets, or a gourmand grazing goat cheese trails, France fuses artful allure and agrarian authenticity. Escape Epic etches exquisite escapades for lavender labyrinths, Loire legends, and Languedoc lore for your Gallic gallivant.
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
// Main France Page Component
const FrancePage = () => {
  return (
    <div className="FrancePage min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 lg:pt-20">
        <FranceHero />
        <EiffelSection />
        <RegionIntro />
        <TopicSection
          title="Backpacker Travel "
          intro="France fuels free spirits with SNCF Ouigo deals, free museum Mondays, and baguette budgets. From Montmartre's mischief to Marseille's medinas, map your meander with miserly magic and misty mornings."
          
          listItems={[
            "Stretch €40-€70 daily on auberges, fromageries, and TGV tickets; snag an Interrail pass for inter-département dashes.",
            "Launch in Paris, then south to Provence's petals or west to Breton's breakers.",
            "Trek the GR10 Pyrenees for 800km of pyrénéen panoramas and pastis pauses.",
            
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/3d/f6/e3/3df6e39812d764fa521ac635f443cfde.jpg"
          alt="Backpackers in Provence"
          imageSide="right"
        />
        <TopicSection
          title="Villages in France"
          intro="Unveil France's villages perchés, stone-swathed sentinels atop hills, where bougainvillea-draped lanes and ancient fountains hush the world's clamor."
         
          listItems={[
            "Gordes in Provence: Boulders balanced like a cubist canvas with truffle markets.",
            "Saint-Paul-de-Vence on Côte d'Azur: Walled artist enclave with Matisse mosaics.",
            "Rocamadour in Dordogne: Cliff-clinging pilgrimage site with falconry shows.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/ff/c6/2e/ffc62ecccf3f90f938e1fb28f3f7ac74.jpg"
          alt="Gordes in Provence"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Couple's Best Places in France"
          intro="France fans the flames of amour amid vineyard vaults and lantern-lit bridges. Curated for honeymoons or heart-flutters, these oases ooze intimacy and indulgence."
          
          listItems={[
            "Loire Valley châteaux: Bicycle tours through fairy-tale turrets and wine picnics.",
            "Paris Montmartre: Sacré-Cœur sunsets and artist-square sketches.",
            "Provence lavender fields: Hot-air balloon drifts over purple seas.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/7a/89/b1/7a89b1fd885fbbe58152ef7e3a6fdd2c.jpg"
          alt="Lovers in Loire Valley"
          imageSide="right"
        />
        <TopicSection
          title=" Hill Stations in France"
          intro="France's massifs and monts beckon with téléphérique thrills, fondue firesides, and paraglide plunges over glacial grandeur for elevated ecstasy."
          
          listItems={[
            "Chamonix-Mont Blanc: Aiguille du Midi cable car to Europe's summit views.",
            "Annecy Alps: Lake-framed hikes with turquoise swims and cheese cellars.",
            "Vosges Ballon d'Alsace: Forested ridges for cross-country skis and stork-spotting.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/84/6f/86/846f8676ee2eaf04daa8b0685b0c474b.jpg"
          alt="Chamonix Mont Blanc"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Best Beaches in France"
          intro="France's 3,500km seaboard spans pink granite strands to dune-draped bays, where cerulean curls lure windsurfers, boules players, and barefoot feasts."
          
          listItems={[
            "Plage de Palombaggia, Corsica: Pine-shaded pink sands with yacht-dotted horizons.",
            "Grande Plage, Biarritz: Surf mecca with Basque waves and belle époque pavilions.",
            "Plage de Saleccia, Corsica: Pristine desert-isle cove reachable by boat or hike.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/86/27/d9/8627d9c0816ee2648cc96ab3db154387.jpg"
          alt="Plage de Palombaggia in Corsica"
          imageSide="right"
        />
        <TopicSection
          title="Culinary Specialties "
          intro="France's cuisine is a terroir tapestry, from buttery viennoiseries to escargot escapades, where every bite narrates a region's soul and savoir-faire."
          
          listItems={[
            "Croissant in Paris: Flaky, almond-dusted crescents from boulangerie ovens.",
            "Escargot in Burgundy: Garlic-herb snails in parsley butter shells.",
            
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/26/d6/16/26d61679245dd43f1e42a14b6a1d7c28.jpg"
          alt="Croissant in Paris"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="France's  Wine Regions"
          intro="France, vinous virtuoso, unfurls 300+ appellations from Bordeaux's bold blends to Champagne's effervescent elegance, cradled in chalky crus and sun-drenched slopes."
         
          listItems={[
            "Bordeaux: Cabernet-Merlot symphonies from Left Bank gravel and Right Bank clays.",
            "Champagne: Pinot Noir-Chardonnay bubbles from crayeux soils in Reims.",
            "Burgundy Côte d'Or: Pinot Noir and Chardonnay from Premier Cru parcels.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/736x/d7/37/c9/d737c9eb2be57ea6709d10c874c4294e.jpg"
          alt="Bordeaux vineyards"
          imageSide="right"
        />
        <TopicSection
          title="Vibrant Festivals "
          intro="France fizzles with fêtes where fireworks fanfares and folk dances flourish, marrying ancien régime rites with republican revelry in confetti cascades."
         
          listItems={[
            "Fête de la Musique nationwide: June solstice street symphonies from buskers to brass.",
            "14 Juillet Bastille Day: Parades, pétanque, and Eiffel pyrotechnics.",
            
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/81/86/9f/81869f41d4f00269c0e35352fd8ed342.jpg"
          alt="Bastille Day fireworks"
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
export default FrancePage;
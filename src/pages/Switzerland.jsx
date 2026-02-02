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

// Switzerland Hero Section
const SwitzerlandHero = () => (
  <section className="switzerland-hero relative min-h-[70vh] md:min-h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(11, 7, 7, 0.8), rgba(61, 54, 54, 0.8)), url('https://i.pinimg.com/736x/1c/3f/81/1c3f8187a333f9cd3c4388d68ad7466b.jpg')" }}>
    <div className="absolute inset-0 bg-black/20 z-0 animate-fadeIn"></div>
    <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-slideInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-lg tracking-wide">Discover Switzerland</h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        Ascend Switzerland's alpine allure — from glacier-gilded peaks and chocolate chalets to cuckoo clocks and cognac cruises, where Helvetic harmony hums with highland hymns in every edelweiss embrace.
      </p>
    </div>
  </section>
);
// Matterhorn Section (Image on right for desktop)
const MatterhornSection = () => (
  <section className="matterhorn-container bg-gray-100 py-24 md:py-32 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="matterhorn-details flex-1 text-left md:text-left text-center order-2 md:order-1">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Matterhorn Peak: Switzerland's Pyramid Pinnacle</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Behold the Matterhorn, a Zermatt zenith where Toblerone-shaped titan towers over Theodul's turquoise tarn, siren sentinel of Saas-Fee's snowy splendor and Simplon slopes.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Journey to the Matterhorn?</h3>
        <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Gondola gaze from Gornergrat at dawn for pink-hued pyramids and ibex interludes under infinite ice.</li>
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Hike the Five Lakes trail for cerulean cascades and chalet-cheese picnics amid marmot melodies.</li>
      
        </ul>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Your Ultimate Matterhorn Itinerary</h3>
        
      </div>
     
    </div>
  </section>
);
// Region Intro Section
const RegionIntro = () => (
  <section className="region-intro relative py-20 md:py-32 bg-gray-50">
    <div className="absolute inset-0 bg-[url('/assets/images/switzerland-intro-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Explore the Magic of Switzerland</h2>
      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
        Switzerland seduces with its serrated summits and sapphire lakes, from Geneva's jet-set jets to Zurich's zodiac zephyrs. Whether yodeling yaks, paragliding over pastures, or truffling Ticino trails, Switzerland seamlessly synthesizes precision punctuality and pastoral poetry. Escape Epic engineers epic excursions for cogwheel climbs, raclette reveries, and Rhine rhapsodies for your confederate chronicle.
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
// Main Switzerland Page Component
const SwitzerlandPage = () => {
  return (
    <div className="SwitzerlandPage min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 lg:pt-20">
        <SwitzerlandHero />
        <MatterhornSection />
        <RegionIntro />
        <TopicSection
          title="Backpacker  to Switzerland"
          intro="Switzerland surges sojourners with SBB half-fares, free hike hostels, and rösti rations. From Bern's bear burrows to Lugano's lakeside lounges, navigate with nomadic nuggets and nutty nougat."
          
          listItems={[
            "Stretch CHF 60-100 daily on dorms, dairy delights, and SwissPass; hook a Eurail for alpine arcs.",
            "Launch in Zurich, then west to Lucerne's legends or south to St. Moritz's sparkle.",
           
          ]}
        
          imageSrc="https://i.pinimg.com/1200x/b5/11/c5/b511c5a8b7c3881ef3a97855d3bb99f1.jpg"
          alt="Backpackers in Interlaken"
          imageSide="right"
        />
        <TopicSection
          title=" Villages in Switzerland"
          intro="Unveil Switzerland's chalet-charmed clusters, frescoed facades where cowbells clang and cable cars climb, quieting the quay's querulous quacks."
          
          listItems={[
            "Appenzell, Appenzell Innerrhoden: Painted parades with embroidered eves and absinthe ateliers.",
            "Gruyères, Fribourg: Cheese citadel with turret tales and chocolate chateaus.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/b4/db/12/b4db12f7d68362bd59b5ba782aa2f8ff.jpg"
          alt="Appenzell Village"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Couple's  Places in Switzerland"
          intro="Switzerland simmers for sweethearts in spa soirees and starlit spires. Curated for caress cogwheels and candlelit chalets, these lairs lavish with Lombardic luxury and lakeside liaisons."
          
          listItems={[
            "Interlaken's Jungfrau: Paraglide passions hand-in-heart with waterfall whispers.",
            "Lucerne's Chapel Bridge: Lantern-lit lakes with chocolate courtship cruises.",
            
          ]}
          
          imageSrc="https://i.pinimg.com/736x/cc/c8/5a/ccc85adaffe8e0685d4eccfacabba7f7.jpg"
          alt="Lovers in Lucerne"
          imageSide="right"
        />
        <TopicSection
          title="Alpine Escapes in Switzerland"
          intro="Switzerland's snow-crowned sentinels summon ski symphony and summer saunters, edelweiss echoes and eagle eyries, proffering powdery paradises and peak panoramas for montane masterpieces."
       
          listItems={[
            "Jungfrau Region: Aletsch arena with ice palace intrigues and Eiger escalades.",
            "Engadine Valley: St. Moritz sleighs with frozen lakes and fur-festooned fetes.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/3d/cb/90/3dcb908f00624b482649c7e313d320c0.jpg"
          alt="Jungfrau Region"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Lakes in Switzerland"
          intro="Switzerland's 1,500 lakes lap limpid legacies, from pedal-pushed promenades to yacht yachtels, evoking ebbing elegance, emerald expanses, and evening evensongs amid lacustrine lyricism."
         
          listItems={[
            "Lake Geneva: Lavaux lavishes with vineyard voyages and jetty jazz.",
            "Lake Lucerne: William Tell tales with paddleboard panoramas and pilatus peaks.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/736x/6b/11/3d/6b113dccf17646d7d566d7f6bfe5fa37.jpg"
          alt="Lake Geneva"
          imageSide="right"
        />
        <TopicSection
          title="Culinary of Switzerland"
          intro="Switzerland's savor symphony spans from fondue forges to praline palaces, where each nibble narrates a canton's craft and confection from chalet to charcuterie."
         
          listItems={[
            "Fondue in Fribourg: Molten majesty with kirsch-kissed cubes and crusty comforters.",
            "Raclette in Valais: Scraped succulence with potato partners and pickle piquancy.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/9c/7e/d9/9c7ed937a3d9cbc7069bf3135a6dfeb5.jpg"
          alt="Fondue in Zurich"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Switzerland's Wine Trails"
          intro="Switzerland, viticultural virtuoso, vines 250 varietals from Chasselas's chiseled charms to Pinot Noir's noirish nuances, terraced treasures and terrene-tamed terroirs from lakeside to lofty."
          
          listItems={[
            "Lavaux, Vaud: UNESCO undulations with Chasselas chalets and lakeside libations.",
            "Valais: Petite Arvine pearls with AOC arcs and apricot accents.",
            
          ]}
     
          imageSrc="https://i.pinimg.com/736x/2c/90/a2/2c90a2e7ed189cdae6d5f55008587294.jpg"
          alt="Lavaux Vineyards"
          imageSide="right"
        />
        <TopicSection
          title="Festivals  Switzerland"
          intro="Switzerland scintillates with Fasnacht flurries and fondue fêtes, where alphorn anthems ascend and fireworks flicker, fusing folk finery with feathered finials in lederhosen and lanterns."
          
          listItems={[
            "Fasnacht, Basel: Confetti cascades with lantern-lit lanterns and lantern parades.",
            "Paléo, Nyon: Folk frenzy with fire spins and fiddle frenzies.",
         
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/4c/71/90/4c719072f76d9ae28f8a9bf86fa75dc5.jpg"
          alt="Fasnacht in Basel"
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
export default SwitzerlandPage;
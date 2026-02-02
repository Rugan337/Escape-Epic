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

// Austria Hero Section
const AustriaHero = () => (
  <section className="austria-hero relative min-h-[70vh] md:min-h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(11, 7, 7, 0.8), rgba(61, 54, 54, 0.8)), url('https://i.pinimg.com/1200x/41/a6/27/41a627aaf43a4913daa4af0c3d72e2b3.jpg')" }}>
    <div className="absolute inset-0 bg-black/20 z-0 animate-fadeIn"></div>
    <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-slideInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-lg tracking-wide">Discover Austria</h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        Immerse in Austria's alpine symphony — from waltzing Viennese halls and Sound of Music meadows to Tyrolean trails and Danube dreams, where melody meets majesty in every edelweiss embrace.
      </p>
    </div>
  </section>
);

// Schönbrunn Section (Image on right for desktop)
const SchonbrunnSection = () => (
  <section className="schonbrunn-container bg-gray-200 py-24 md:py-32 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="schonbrunn-details flex-1 text-left md:text-left text-center order-2 md:order-1">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Schönbrunn Palace: Vienna's Baroque Jewel</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Step into Schonbrunn, the Habsburgs' summer retreat, a UNESCO rococo resplendence with 1,441 rooms, labyrinthine gardens, and Gloriette gazes over Vienna's vine-clad hills.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Journey to Schonbrunn?</h3>
        <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Stroll the imperial maze and tiered fountains for Versailles-like verdure.</li>
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Attend a marionette Mozart opera in the Orangery for summer soirées.</li>
        
        </ul>
       
        
      </div>
      
    </div>
  </section>
);

// Region Intro Section
const RegionIntro = () => (
  <section className="region-intro relative py-20 md:py-32 bg-gray-50">
    <div className="absolute inset-0 bg-[url('/assets/images/austria-intro-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Explore the Magic of Austria</h2>
      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
        Austria allures with its orchestral overtures and ochre abbeys, from Salzburg's spires to Innsbruck's ice caves. Whether scaling Grossglockner, sipping Sturm in heurigers, or gliding on Salzkammergut steamers, Austria harmonizes heritage and high peaks. Escape Epic composes custom concertos for baroque boulevards, spa sanctuaries, and Wachau wonders for your Habsburg harmony.
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

// Main Austria Page Component
const AustriaPage = () => {
  return (
    <div className="AustriaPage min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 lg:pt-20">
        <AustriaHero />
        <SchonbrunnSection />
        <RegionIntro />
        <TopicSection
          title="Backpacker Travel Austria"
          intro="Austria awakens adventurers with ÖBB rail romps, free opera stands, and schnitzel stalls. From Vienna's volksgarten to Carinthia's corries, navigate with budget ballets and breathtaking bergs."
          
          listItems={[
            "Budget €50-€80 daily for gasthäuser, goulash, and Eurail; grab an Interrail for alpine expresses.",
            "Start in Vienna, then west to Salzburg and Hallstatt, or south to Graz's graffiti.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/7f/82/13/7f82130cd6edfd548ab547d953173632.jpg"
          alt="Backpackers in Tyrol"
          imageSide="right"
        />
        <TopicSection
          title=" Villages in Austria"
          intro="Unearth Austria's alpine idylls, timbered treasures tucked in valleys, where geraniums glow and goat bells tinkle, silencing the city's clamor."
         
          listItems={[
            "Hallstatt, Salzkammergut: Lakeside postcard with salt mines and bone house ossuary.",
            "Dürnstein, Wachau: Riverside ruin where Richard the Lionheart was held captive.",
           
          ]}

          imageSrc="https://i.pinimg.com/736x/60/d1/bf/60d1bf7d3a83320d168ba740f6ba9baa.jpg"
          alt="Hallstatt in Salzkammergut"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Couple's Places in Austria"
          intro="Austria ignites intimacy in imperial inns and ivy-clad isles. Curated for crescendos and caresses, these havens hum with honeymoon harmony and heartfelt harmonies."
         
          listItems={[
            "Vienna's Prater: Ferris wheel kisses at dusk with strudel sunsets.",
            "Salzkammergut lakes: Boat rides on Wolfgangsee with violin vespers.",
            
          ]}
        
          imageSrc="https://i.pinimg.com/1200x/6e/5f/4a/6e5f4ab52b043894fa24d1f8b67be9f7.jpg"
          alt="Lovers in Wachau Valley"
          imageSide="right"
        />
        <TopicSection
          title="Alpine Retreats in Austria"
          intro="Austria's Ötztal and Zillertal beckon with via ferrata vertigos, glacier gondolas, and hut-hopping highs for peak-pinnacle pleasures and pristine panoramas."
         
          listItems={[
            "Kitzbühel: Ski circus with summer luge runs and medieval mint tours.",
            "Zell am See: Lake-locked lifts to Schmittenhöhe's wildflower wonders.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/0a/18/2f/0a182ff8d4db92f6c9d6dd03d24c3b49.jpg"
          alt="Grossglockner High Alpine Road"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Lakes in Austria"
          intro="Austria's 6,000+ lakes lap with limpid lucidity, from turquoise tarns to thermal tepidaries, luring lilos, lindy hops, and lakeside lounges amid emerald enclaves."
          
          listItems={[
            "Wörthersee, Carinthia: Riviera of the Alps with yacht clubs and jazz jives.",
            "Attersee, Salzkammergut: Deepest dive with cliff jumps and cormorant coasts.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/44/7d/34/447d34073c721f5515ab0769d7e9d6fb.jpg"
          alt="Wörthersee in Carinthia"
          imageSide="right"
        />
        <TopicSection
          title="Culinary Specialties of Austria"
          intro="Austria's table tempts with Tafelspitz tenderness to Sachertorte seduction, where each forkful evokes folklore and feasting fervor from farm to feasting hall."
          subtitle="Must-Try Austrian Foods"
          listItems={[
            "Wiener Schnitzel in Vienna: Veal veiled in breadcrumbs with lingonberry lingers.",
            "Apfelstrudel in Salzburg: Apple eddy in flaky phyllo with vanilla vortex.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/a7/89/66/a78966c2211b5c74f83156d17c780ff5.jpg"
          alt="Wiener Schnitzel in Vienna"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Austria's Wine Regions"
          intro="Austria, vin vintage virtuoso, vines 50,000ha from Grüner's grassy grins to Zweigelt's zesty zing, cradled in thermen and terraced terraces along the Danube."
         
          listItems={[
            "Wachau: Riesling and Grüner from Danube-draped Donaurieden terraces.",
            "Styria: Sauvignon Blanc from sausal slopes and pumpkin seed presses.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/2d/72/eb/2d72eb047a21f268ece06f9da40a2acd.jpg"
          alt="Wachau vineyards"
          imageSide="right"
        />
        <TopicSection
          title="Festivals  in Austria"
          intro="Austria alight with advent arias and asparagus fêtes, where yodelers yippee and fireworks fanfare, melding monastic masses with modern merriment in lederhosen legacy."
          
          listItems={[
            "Salzburg Festival: Mozart masses in Mirabell marble halls and fortress fests.",
            "Vienna Opera Ball: Strauss waltzes in Hofburg splendor and sequin swirls.",
         
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/cd/27/d5/cd27d5decfaf3bf8eb2ed7a1ddc40ede.jpg"
          alt="Salzburg Festival"
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
            <p className="text-gray-400 mb-4">Subscribe our newsletter for more update & news !!</p>
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
            &copy; 2025 <a href="#" className="text-blue-400 hover:text-blue-300">Escape Epic</a>. All rights reserved
          </p>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Term & Condition</a></li>
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

export default AustriaPage;
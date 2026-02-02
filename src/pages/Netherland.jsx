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

// Netherlands Hero Section
const NetherlandsHero = () => (
  <section className="netherland-hero relative min-h-[70vh] md:min-h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(11, 7, 7, 0.8), rgba(61, 54, 54, 0.8)), url('https://i.pinimg.com/1200x/1f/1b/11/1f1b11506f7c993447ff95b3d892ad21.jpg')" }}>
    <div className="absolute inset-0 bg-black/20 z-0 animate-fadeIn"></div>
    <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-slideInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-lg tracking-wide">Discover Netherlands</h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        Cycle through Netherlands' watery wonderland — from tulip tapestries and canal cruises to cheese markets and windmill whispers, where Dutch ingenuity dances with delta delights in every dyke-lined dream.
      </p>
    </div>
  </section>
);
// Kinderdijk Section (Image on right for desktop)
const KinderdijkSection = () => (
  <section className="kinderdijk-container bg-gray-100 py-24 md:py-32 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="kinderdijk-details flex-1 text-left md:text-left text-center order-2 md:order-1">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Kinderdijk Windmills: Netherlands' Iconic Sentinels</h3>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Behold Kinderdijk, a UNESCO-listed pantheon of 19 windmills that have tamed the delta for centuries, creaking guardians of polder peace amid Alblasserwaard's watery weave and willow-fringed waterways.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Journey to Kinderdijk?</h3>
        <ul className="mb-8 text-lg leading-relaxed text-gray-600 space-y-3">
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Pedal the mill trail at golden hour for postcard panoramas and creaking concerts under vast skies.</li>
          <li className="relative pl-6 before:absolute before:left-0 before:text-gray-800 before:content-['▸']">Climb inside a working smock mill for gear-grinding insights and thatched tranquility tours.</li>
          
        </ul>
        
        
      </div>
      
    </div>
  </section>
);
// Region Intro Section
const RegionIntro = () => (
  <section className="region-intro relative py-20 md:py-32 bg-gray-50">
    <div className="absolute inset-0 bg-[url('/assets/images/netherland-intro-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">Explore the Magic of Netherlands</h2>
      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
        Netherlands captivates with its reclaimed realms and Rembrandt radiance, from Amsterdam's gabled grandeur to Utrecht's canal cafes. Whether biking bulb fields, skating frozen grachten, or foraging Frisian fries, Netherlands masterfully melds maritime mastery and modern minimalism. Escape Epic designs dynamic deltas for bike boulevards, polder picnics, and Zaanse zephyrs for your Low Country legacy.
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
// Main Netherlands Page Component
const NetherlandsPage = () => {
  return (
    <div className="NetherlandsPage min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 lg:pt-20">
        <NetherlandsHero />
        <KinderdijkSection />
        <RegionIntro />
        <TopicSection
          title="Backpacker Travel Guides to Netherlands"
          intro="Netherlands propels peripatetics with OV-chipkaart zips, free museum Mondays, and stroopwafel stands. From Rotterdam's raw edges to Texel's tidal trails, steer with thrift thrills and tulip-tinted trails."
          
          listItems={[
            "Stretch €45-€75 daily on hostels, herring hooks, and NS bikes; snag an Eurail for delta dashes.",
            "Launch in Amsterdam, then south to The Hague's peace palaces or north to Groningen's grooves.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/f1/97/87/f1978779d5aa2eb328400f22a436700a.jpg"
          alt="Backpackers in Amsterdam"
          imageSide="right"
        />
        <TopicSection
          title="Secrets of the Villages in Netherlands"
          intro="Unveil Netherlands' thatched treasures, whisper-quiet hamlets where punts ply and peat bogs breathe, hushing the harbor's hullabaloo."
         
          listItems={[
            "Giethoorn, Overijssel: Venice of the North with thatched farmsteads and whisper boats.",
            "Marken, North Holland: Clog-clad peninsula with wooden bridges and cheese wheels.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/736x/32/dd/5c/32dd5c67dcca83998776ae0180f7ab88.jpg"
          alt="Giethoorn in Overijssel"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Couple's Best Places in Netherlands"
          intro="Netherlands nurtures romance in rijsttafel rendezvous and rose-red sunsets. Curated for canoodle cruises and cozy kroegen, these nooks nestle with Netherlandic nuance and nautical nuzzles."
          
          listItems={[
            "Keukenhof tulips: Petal paths hand-in-hand with windmill wind-downs.",
            "Amsterdam canals: Gondola glows at dusk with poffertjes picnics.",
           
          ]}
          
          imageSrc="https://i.pinimg.com/1200x/7d/26/9a/7d269a25aed000c568ba9bc51bbdc0fb.jpg"
          alt="Lovers in Keukenhof"
          imageSide="right"
        />
        <TopicSection
          title="Best Dune Escapes in Netherlands"
          intro="Netherlands' North Sea bulwarks beckon with kite-surfing kites, marram marches, and bunker burrows, delivering sandy spectacles and sea-spray serenity for coastal crescendos."
          
          listItems={[
            "Texel National Park: Sheep-speckled sands with lighthouse ladders and bird blinds.",
            "Schoorlse Duinen: Climbable climbs to panoramas with heather heaths and horse trots.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/17/86/01/1786014b5d785d50a0959f3cb009acdd.jpg"
          alt="Dunes in Texel"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Best Waterways in Netherlands"
          intro="Netherlands' 6,000km of canals carve cerulean corridors, from houseboat havens to lock-laced labyrinths, summoning sups, superyachts, and sunset sails amid aquatic artistry."
         
          listItems={[
            "Amsterdam Grachten: Golden gables with bridge kisses and bike-free bliss.",
            "Utrecht Oudegracht: Wharf warehouses for terrace tango and hidden harbors.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/ee/ee/33/eeee331d84f0d3c9c976318908964c12.jpg"
          alt="Amsterdam Canals"
          imageSide="right"
        />
        <TopicSection
          title="Culinary Specialties of Netherlands"
          intro="Netherlands' nosh navigates from raw herring heroism to rijsttafel rituals, where every bite broadcasts a province's pluck and plenty from polder to plate."
          subtitle="Must-Try Dutch Foods"
          listItems={[
            "Haring in Amsterdam: Raw herring with onions and uitjes, chased by genever gulps.",
            "Stroopwafel in Utrecht: Caramel-chewy wafers warm from iron, street-side seduction.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/5a/27/1f/5a271f8193790f6ff35dd882a2374358.jpg"
          alt="Stroopwafel in Amsterdam"
          bgColor="bg-gray-50"
          imageSide="left"
        />
        <TopicSection
          title="Netherlands' Premier Beer Trails"
          intro="Netherlands, brew beacon, bubbles 800+ breweries from Heineken's hazy heroes to Trappist triumphs, hopped havens and historic halls from delta to dunes."
          
          listItems={[
            "Amsterdam: IPA innovations from Brouwerij 't IJ windmill with canal chasers.",
            "Breda: Belgian-border blondes with barrel-aged beauties and botanic bitters.",
            
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/42/47/a6/4247a6ec476d9e575087ca10d89291e9.jpg"
          alt="Heineken Brewery in Amsterdam"
          imageSide="right"
        />
        <TopicSection
          title="Vibrant Festivals and Traditions in Netherlands"
          intro="Netherlands bursts with bloemencorso parades and Sinterklaas sails, where orange hordes holler and fireworks flourish, blending seafaring sagas with stroopwafel soirees in clogs and confetti."
         
          listItems={[
            "Koningsdag nationwide: Orange orgy of flea markets, canal floats, and beer bonanzas.",
            "Tulip Festival, Keukenhof: Floral floats and bulb bazaars in billion-bloom blaze.",
           
          ]}
         
          imageSrc="https://i.pinimg.com/1200x/2b/67/b8/2b67b89f3e89e2237864589c6be17e06.jpg"
          alt="King's Day in Amsterdam"
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
            &copy; 2025 <a href="" className="text-blue-400 hover:text-white">Escape Epic</a>. All rights reserved
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
export default NetherlandsPage;
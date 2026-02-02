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
              Escape Epic is your gateway to unforgettable adventures. Discover hidden gems, cultural wonders, and epic escapes around the world. Join us on the journey where every path leads to discovery.
            </p>
          </div>
          <div className="footer-contact">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">Feel free to contact and reach us!!</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <ion-icon name="call-outline" className="text-blue-600"></ion-icon>
                <Link to="tel:+919566839299" className="text-gray-400 hover:text-white transition-colors duration-200">+91 9566839299</Link>
              </li>
              <li className="flex items-center space-x-4">
                <ion-icon name="mail-outline" className="text-blue-600"></ion-icon>
                <Link to="mailto:info@escapeepic.com" className="text-gray-400 hover:text-white transition-colors duration-200">info@escapeepic.com</Link>
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
                className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
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
            © 2025 Escape Epic. All rights reserved
          </p>
          <ul className="flex space-x-6">
            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms & Conditions</Link></li>
            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
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

const OldestTemplesBlog = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);
    document.querySelectorAll('.main-content p, .paragraph-container').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="OldestTemplesBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/736x/7b/8d/56/7b8d56e975a4bee8de9c70492faa342e.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Indias Oldest Temples Youve Never Heard Of
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="journey-begins" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Journey Begins</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Indias spiritual side is not just about the postcard famous stuff. It is carved into rock, tucked into wild jungles, half swallowed by old villages nobody talks about anymore. Yeah, you have got the big ticket temples with crowds snapping selfies, but honestly. The real magic is off the map, where the priests still chant and the air practically buzzes with old secrets.</p>
                <p className="mb-4 opacity-0 animate-fade-in">We are talking temples so ancient even the trees seem to whisper their stories. Places time nearly erased. Some are crumbling, some are stubbornly standing tall, all of them breathing with rituals you cannot fake for tourists. Wander with us down dusty roads and mossy stone steps; get lost in the hypnotic chaos of carvings and the hush of sacred groves. There is more than just spirituality here. There is Indias wild, beating cultural heart, alive and kicking.</p>
                <p className="mb-0 opacity-0 animate-fade-in">You will stumble onto legends, mind blowing architecture, and maybe even a new obsession for your travel bucket list. Basically, forget the guidebooks. This is heritage the way it was meant to be found: raw, mysterious, and kind of unforgettable.</p>
              </section>
              <section id="mundeshwari-temple" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Mundeshwari Temple Bihar</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Mundeshwari Temple in Bihar has been doing its thing since, what, 108 AD? Yeah, you heard right. Folks have been showing up here to worship for nearly two millennia without missing a beat. That is basically forever in temple years.</p>
                <p className="mb-4 opacity-0 animate-fade-in">The place is not your usual shrine either; it has got this wild octagonal shape going on, plus some seriously old school Nagara style carvings that will make your jaw drop if you are even half a history nerd. And get this. It is not just for Shiva or Shakti, but both, so everyone is invited to the party.</p>
                <p className="mb-0 opacity-0 animate-fade-in">If you ever swing by when the weather is cool, there is this whole vibe. Mist curling up from the hills, the air thick with old stories and incense. Feels like you have stepped straight into some ancient legend. Total goosebumps.</p>
              </section>
              <section id="devunigutta-temple" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Devunigutta Temple </h2>
                <p className="mb-4 opacity-0 animate-fade-in">Picture this: you are hacking your way through the wilds of Mulugu, and suddenly bam a 6th century temple pops out of the trees like some Indiana Jones fever dream. Archaeologists just dusted this place off (so, yeah, it went MIA for, like, a millennium). It is all about Shiva here, but you will spot Ganesha and Ardhanarishvara chilling on the walls too. The crazy part. Because nobody knew it was there, the ancient Vakataka era sculptures are basically untouched. If you are the type who gets goosebumps from ruins and wants a side of spiritual quiet with your adventure, this spot is straight up gold.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Let us talk about the Kailasa Temple. Imagine someone just carving an entire temple out of one giant rock. Yep, that happened in the 8th century. The place is massive. Like, how did humans even levels of massive. The carvings? Mind blowing. Dravidian style turned up to eleven, gods and legends frozen in stone, and every inch screams epic. You wander around and it is like history is whispering in your ear (okay, sometimes yelling). If you geek out over ancient architecture or want to feel tiny in the best way, this is your spot.</p>
                    <p className="mb-4">The Kailasa Temple, an awe inspiring marvel of ancient Indian rock cut architecture, stands as the largest single monolithic excavation in the world, carved vertically from a single basalt cliff at the Ellora Caves in Maharashtra, India. Dedicated to Lord Shiva and constructed in the 8th century during the reign of Rashtrakuta king Krishna I, this Dravidian style masterpiece spans over 200000 tons.</p>
                    <p className="mb-0">Nestled deep within the lush, untamed forests of Telanganas Mulugu District, the Devunigutta Temple stands as a whispering relic of the 6th century CE, a Shiva sanctuary carved from stone during the Vishnukundin dynastys golden era. Just 2.5 km from the sleepy village of Kothur and 60 km east of Warangal, this architectural enigma eerily reminiscent of Cambodias Angkor Wat with its intricate bas reliefs and towering gopuram evokes a time when jungle kings communed with the divine amid roaring waterfalls and chattering wildlife. Rediscovered only recently, its weathered pillars and sacred lingam pulse with forgotten rituals, offering intrepid explorers a rare portal to Indias pre medieval soul far from the tourist trails, where the canopys emerald veil guards secrets older than the hills themselves.</p>
                  </div>
                </div>
              </section>
              <section id="chausath-yogini" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Chausath Yogini </h2>
                <p className="mb-0 opacity-0 animate-fade-in">Honestly, most people just zip past this spot, buried deep in Madhya Pradeshs dusty landscape. The Chausath Yogini Temple? It is basically a giant stone circle, open to the sky a weirdly magical arena built way back in the 9th century for sixty four fierce tantric goddesses. Not exactly your average Instagram checklist. Hardly anyone goes, but those who do are usually chasing some mystical secret or just soaking up the rural hush. Locals still whisper crazy stories about the place. There is something about it kind of eerie, kind of peaceful.</p>
              </section>
              <section id="shore-temple" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Shore Temple Mahabalipuram </h2>
                <p className="mb-4 opacity-0 animate-fade-in">Now, the Shore Temple? Whole different vibe. UNESCOs stamped its approval, and yeah, it deserves the hype. This one is an OG built in the 8th century, literally one of the first South Indian temples carved out of stone. It just sits there, staring out over the wild Bay of Bengal, looking dramatic as hell. Back in the day, they say the towers and carvings were covered in gold leaf. Imagine rolling up on a ship, seeing that sparkle from miles away. If you are up before sunrise, with the salty air and the sound of waves crashing? Man, it is unforgettable. The place hums with old stories you can almost hear them if you listen close enough.</p>
              </section>
              <section id="jagatpita-brahma" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Jagatpita Brahma Temple </h2>
                <p className="mb-0 opacity-0 animate-fade-in">Brahma does not get a ton of temples seriously, this one in Pushkar pretty much stands alone, and it is ancient, we are talking maybe 2000 years old, give or take a few centuries. There is this moss covered staircase that drops you right by a peaceful lake. If you are into spiritual vibes or just want a killer sunset photo, the evening aarti here is honestly next level. The place has been lost and found and rebuilt over the years, still feels like you are stumbling upon a secret.</p>
              </section>
              <section id="kashi-vishwanath" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Kashi Vishwanath Temple </h2>
                <p className="mb-0 opacity-0 animate-fade-in">People call Varanasi the heart of Hindu spirituality, and Kashi Vishwanath is basically its heartbeat. This temples been taken down and rebuilt more times than anyone can count seriously, it is like the city refuses to let it fade. That golden spire. You cannot miss it. The constant flow of prayers just soaks into your bones. Pilgrims show up hoping for liberation or, at the very least, some inner peace. For travelers, it is like stepping right into a living, breathing epic.</p>
              </section>
              <section id="meenakshi-amman" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Meenakshi Amman Temple Madurai </h2>
                <p className="mb-4 opacity-0 animate-fade-in">The Meenakshi Temple has got roots so deep, some say they hit the 6th century BC. But do not expect some dusty old ruin this place is alive. Vibrant gopurams, endless sculptures, sacred pools it is basically a riot of color and devotion. When evening hits, the lamps light up, the music gets going, and you are swept up with the crowd. It is wild, a bit overwhelming, and proof that tradition here is not just surviving, it is thriving (with a dash of chaos thrown in, obviously).</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-0">Seriously, this place is wild. It goes all the way back to like the 6th century BC (yeah, wrap your head around that), but honestly, people just kept adding to it over thousands of years. Walk up and bam those gopurams hit you with a riot of color and jaw dropping sculptures. The temples not just a dusty relic either. Evenings? The whole place is buzzing: lamps everywhere, music echoing through the halls, and waves of devotees pouring in. It is alive, not frozen in time a full on sensory overload that somehow still feels sacred. Indias got this knack for keeping old traditions pulsing right through the chaos of modern life, and Meenakshi Temple is like the poster child for that.</p>
                  </div>
                </div>
              </section>
              <section id="off-beaten-path" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">A Few Off the Beaten Path Stunners</h2>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5">
                  <li>Champaner Pavagadh (Gujarat): If you love a good ruin, this UNESCO site is packed with ancient temples, stepwells, and forts from the 8th century. Way underrated.</li>
                  <li>Tungnath Temple (Uttarakhand): The highest Shiva temple in Asia seriously, it is perched up in the Himalayas, practically in the clouds. Perfect if you like your spirituality with a side of altitude sickness.</li>
                  <li>Mitawali Temple (Madhya Pradesh): Looks like something out of a fantasy flick, with its round design and 64 yogini statues keeping watch.</li>
                  <li>Padmanabhaswamy Temple (Kerala): Mysterious vaults, treasure legends, and a vibe that is just dripping with old school South Indian mystique.</li>
                </ul>
              </section>
              <section id="temple-hopping-tips" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Handy Tips for Ancient Temple Hopping</h2>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5">
                  <li>Scope out local festivals those are the moments you will see wild rituals and traditions you would never catch otherwise. Dress on the modest side, and maybe Google a little history beforehand, just to show some respect. Some of these places are pretty remote, so do not count on fancy cafés or even bottled water pack your own. And if you want peace (and amazing photos), drag yourself out of bed for sunrise. Trust me, it is worth it.</li>
                </ul>
              </section>
              <section id="wrapping-up" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Wrapping Up the Journey</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Honestly, Indias oldest temples? They are like ancient rockstars standing there, quietly killing it while the flashier ones hog all the spotlight. Mundeshwari in Bihar, Devunigutta out in Telangana, tucked away shrines in the jungles of Madhya Pradesh, and those weathered stones at Mahabalipuram each one is basically a living, breathing time capsule. There is a wild amount of history pulsing through their walls, just waiting for someone to tune in.</p>
                <p className="mb-4 opacity-0 animate-fade-in">If you are the type who gets bored of the usual tourist gig, these places are where the real magics hiding. You end up stumbling into legends, jaw dropping art, and just this raw sense of devotion that is kind of mind blowing. Plus, you will walk away with stories that actually surprise people back home.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So yeah, if you are up for it, bring your curiosity and maybe a little respect (temple etiquette, folks). These stones have seen more than you or I ever will, and honestly? They are more alive than half the new stuff popping up on your Instagram feed. Go see for yourself.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Which hidden temple are you adding to your list?</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#journey-begins" className="text-blue-600 hover:underline transition-colors duration-200">Journey Begins</Link></li>
                  <li><Link to="#mundeshwari-temple" className="text-blue-600 hover:underline transition-colors duration-200">Mundeshwari Temple</Link></li>
                  <li><Link to="#devunigutta-temple" className="text-blue-600 hover:underline transition-colors duration-200">Devunigutta Temple</Link></li>
                  <li><Link to="#chausath-yogini" className="text-blue-600 hover:underline transition-colors duration-200">Chausath Yogini Temple</Link></li>
                  <li><Link to="#shore-temple" className="text-blue-600 hover:underline transition-colors duration-200">Shore Temple</Link></li>
                  <li><Link to="#jagatpita-brahma" className="text-blue-600 hover:underline transition-colors duration-200">Jagatpita Brahma Temple</Link></li>
                  <li><Link to="#kashi-vishwanath" className="text-blue-600 hover:underline transition-colors duration-200">Kashi Vishwanath Temple</Link></li>
                  <li><Link to="#meenakshi-amman" className="text-blue-600 hover:underline transition-colors duration-200">Meenakshi Amman Temple</Link></li>
                  <li><Link to="#off-beaten-path" className="text-blue-600 hover:underline transition-colors duration-200">Off the Beaten Path Stunners</Link></li>
                  <li><Link to="#temple-hopping-tips" className="text-blue-600 hover:underline transition-colors duration-200">Temple Hopping Tips</Link></li>
                  <li><Link to="#wrapping-up" className="text-blue-600 hover:underline transition-colors duration-200">Wrapping Up</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>Indias oldest temples</strong>, <strong>ancient temples India</strong>, and <strong>hidden heritage sites India</strong>. We are passionate about sharing <strong>offbeat temple travel India</strong> that inspire your next trip in <strong>India</strong> and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/64/f4/bd/64f4bdc98554a0998ac9c05f7a5996f4.jpg'" alt="Ladakh Trek" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>trekking trails</strong></p>
                    <Link to="Trekkingtrailsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/ce/2e/df/ce2edfd8e6e37ad4e0f2c122c42ca81b.jpg" alt="Autumn Festival" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Autumn festival</strong></p>
                    <Link to="Autumnfestivalsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/fc/db/1e/fcdb1e6d5033a852431c57f7d722dbba.jpg" alt="Valley of Flowers" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Life in india</strong></p>
                    <Link to="Bordervillagesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/ce/f9/c4/cef9c4167ffaed5cf7f807e08f7a4e6c.jpg" alt="Coorg Peak" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Street food</strong></p>
                    <Link to="Streetfoodblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/5d/11/93/5d11936a226ead23f50c3013550b0e76.jpg" alt="Sikkim Views" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Street art</strong></p>
                    <Link to="Streetarttoursblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <GoTop />
      <style jsx>{`
        .fade-in .opacity-0 { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .fade-in .animate-fade-in.visible { opacity: 1; transform: translateY(0); }
        .text-shadow-lg { text-shadow: 2px 2px 4px rgba(0,0,0,0.7); }
        .line-height-1.2 { line-height: 1.2; }
        @media (max-width: 768px) {
          .hero-header h1 { font-size: 2.5rem !important; }
          .hero-header { height: 50vh; min-height: 300px; }
        }
      `}</style>
    </div>
  );
};

export default OldestTemplesBlog;
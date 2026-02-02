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
              By reason before, there is care and provision; strength and elegance combined with movement, a display of beauty in harmony.
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

const StreetArtBlog = () => {
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
    <div className="StreetArtBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/66/7d/1f/667d1faae491a2c2a84c0e1e7d15eec6.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Street Art Tours Discovering Indias Creative Walls
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="street-art-tours" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Street Art Tours Discovering Indias Creative Walls</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Indias street art is not just some paint slapped on a wall. It is like the whole country decided to have one big, colorful conversation right there on the street. You have got everything from wild, trippy murals tucked away in Delhis artsy corners to those slick graffiti pieces that jump out at you while you are dodging traffic in Mumbai. Seriously, these artists do not mess around. They turn boring old walls into living, breathing stories about hope, history, and straight up rebellion.</p>
                <p className="mb-4 opacity-0 animate-fade-in">This blog is your no nonsense roadmap to all the coolest spots where street art is basically the main event. Perfect if you are obsessed with art, always chasing your next adventure, or just bored of the same old boring tourist traps. You will stumble on mind blowing murals, epic festivals, and, honestly, you will probably start wondering why you ever bothered with museums.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So, whether you are in it for the gram or you are tagging along on a street art tour, trust me. Indias walls will flip your idea of urban exploring on its head. You are not just seeing art. You are living it.</p>
              </section>
              <section id="delhi-street-art" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Delhi Where Walls Speak in Color</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Delhis got such a wild energy when it comes to street art. Like, the Lodhi Art District is not just a bunch of painted walls. It is basically an open air gallery that smacks you in the face with color and personality. First of its kind in India, actually. You have got everything from wild mythological scenes to the kind of futuristic stuff that makes you wonder if you are still in the same decade.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Just wander between Khanna Market and Meherchand Market, and you will see what I mean. Every walls a surprise attack on boring city vibes. Now, if you are looking for something with a little more bite, something political, maybe even a little rebellious, swing by Shahpur Jat. Those murals do not mess around. And Hauz Khas Village? Yeah, it is like stumbling through a maze of creativity. Blink and you will miss something weird or wonderful.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Honestly, if you are even halfway into art, you will wanna check out the walking tours or jump into an art workshop. There is always some kind of community thing happening, and it is way more fun than just scrolling through Instagram pics. Delhis street art scene? It is alive, messy, and absolutely worth getting lost in.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="text flex-1">
                    <p className="mb-0">Key highlights. In the labyrinthine alleys of Marrakech, where walls speak in color, the ochre facades blush with the secrets of ancient caravans, their terracotta whispers curling like smoke from forgotten hookahs, carrying the faint aroma of spices traded under moonlit skies. These sun baked sentinels, etched with the patina of centuries, recount the footsteps of merchants who bartered silk for saffron, their laughter echoing in the cracks like distant thunder over the Atlas Mountains. Indigo veils drape the medinas edges, deep as the midnight Berber robes, murmuring tales of nomadic stars that guided lovers across the endless Saharan sands. Lovers whose promises were sealed with henna tattoos that faded like desert mirages, yet whose passion lingers in the twilight glow. Viridian vines claw upward in defiant green, twisting through wrought iron grilles and over crumbling archways, etching ballads of resilience against the relentless sun that scorches the earth.</p>
                  </div>
                </div>
              </section>
              <section id="bangalore-street-art" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Bangalore Where Geek Meets Graffiti</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Bangalores got this wild mix of geek and graffiti you will see cutting edge code and spray cans living side by side. Seriously, this citys not just about start ups and traffic jams. Wander through Whitefield, Koramangala, or hit up Church Street, and boom, giant murals just jump out at you.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Some pop with comic book vibes, others make you think about the planet, and a few just look like the Internet exploded on a wall (in a good way). Folks here do not just paint pretty pictures either. You will spot art shouting about womens rights, climate stuff, all those techy aspirations, right in your face, loud and proud.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And it is not just locals gawking anymore; people are signing up for street art photo tours, graffiti walks, the whole deal. Bangalores turned into this enormous, open air art gallery swapping cubicles for spray paint cans and making the city way more interesting.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="text flex-1">
                    <p className="mb-0">Creative hotspots. Creative hotspots in India. Theyre not your sterile galleries or overpriced co working lofts, but gritty, graffiti splashed sanctuaries where the muse crashes into the monsoon like a rickshaw in rush hour. Think Delhis Lodhi Art District, where Stiks massive murals of masked figures leer from forgotten walls, turning a stroll through colonial ruins into a psychedelic dialogue with urban ghosts, while street poets scribble haikus on chai stained napkins amid the scent of blooming bougainvillea. Or dive into Mumbais Kala Ghoda, that bohemian heartbeat of the city, where indie galleries like Project 88 spill neon installations onto rain slicked lanes, and forgotten Irani cafes buzz with aspiring filmmakers nursing Irani chai and dreams of Bollywoods next big twist, the air thick with the tang of fish fry from nearby Crawford Market bleeding into sketches of half formed manifestos.</p>
                  </div>
                </div>
              </section>
              <section id="pune-street-art" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Pune Brains Culture and Colorful Walls</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Punes got this wild energy, you know? Sure, it is always been big on brains and culture, but lately, the murals are stealing the show. Wander down FC Road, seriously, just get lost for a bit, and you will stumble into these alleys splashed with color, leftovers from art fests and just locals doing their thing.</p>
                <p className="mb-4 opacity-0 animate-fade-in">The art? It is like old school vibes mashed up with new tricks. Perfect if you are chasing something quirky and Insta worthy.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="text flex-1">
                    <p className="mb-0">Artistic highlights.</p>
                  </div>
                </div>
              </section>
              <section id="kochi-varanasi" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Kochi and Varanasi Old Cities Totally New Vibes</h2>
                <p className="mb-4 opacity-0 animate-fade-in">So, Fort Kochi. Used to be just this chill port town, right? Now, thanks to the Kochi Muziris Biennale, it is basically the cool kid of Indias art scene. You wander around, and boom giant murals everywhere. Some tell old folk tales, others just blast you with color or sneak in some political shade. Every corners got a surprise, honestly. Even the fish markets look artsy now.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Then theres Varanasi. The citys, what, thousands of years old? Suddenly, its ancient walls are covered in splashes of paint. Guitars, gods, chai sellers, everything that makes Banaras, well, Banaras, is now a piece of street art. It is like the citys Instagrammed itself.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="text flex-1">
                    <p className="mb-0">Cultural fusion.</p>
                  </div>
                </div>
              </section>
              <section id="biennale-festivals" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Street Art Biennale and Festivals Art for Literally Everyone</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Now, the 2025 Street Art Biennale? That is a whole new level. Not just the big metros, small towns like Pondicherry and Jaipur are getting in on the action. Each place picks its own vibe. Mumbais going all ocean activist, Jaipurs hyping up its heroines, Varanasis obsessed with river life and all things spiritual, Bengalarus geeking out with tech stuff, and Kolkata? Folk tales, but make them pop.</p>
                <p className="mb-4 opacity-0 animate-fade-in">It is not just about gawking at murals, though. You will see people dragging ladders down the street, painting with strangers, random art walks happening, locals, tourists, whoevers around, everyones got a paintbrush. These festivals just show how much Indias cities are buzzing with creativity right now, fueled by everything from history and legends to what is trending on Twitter. Basically, arts out of the galleries and right in your face, and it is kinda awesome.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="text flex-1">
                    <p className="mb-0">Festival highlights.</p>
                  </div>
                </div>
              </section>
              <section id="tour-tips" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Tips for the Ultimate Street Art Tour</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, you wanna get the most outta a street art tour? Here is how I would roll with it: First off, ditch the rigid plans, sometimes wandering and getting a little lost leads to the best finds. Sure, you can map out a route or sign up for a group tour if you want the inside scoop from locals or the artists themselves.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Daytimes your friend if you wanna see all those wild colors pop, but honestly, street art festivals at night? Absolute vibe. You will get music, food, and crowds hyped on creativity.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Do not forget your camera, or your phone, lets be real. Snap pics like a tourist, but keep your eyes peeled for hidden details. Some murals tell deep stories or throw shade at politicians or pop culture, and if you blink, you will miss the jokes.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Wanna level up? Buy a print or a sticker from a local artist. Maybe even join a workshop and get your hands dirty. Artists gotta eat too, you know?</p>
                <p className="mb-0 opacity-0 animate-fade-in">Oh, and for the love of Banksy, do not go scribbling your name on someone elses masterpiece. Be cool, ask before taking pics of people, especially if they are working or you are in someones neighborhood. Basic respect goes a long way.</p>
              </section>
              <section id="conclusion" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">In Conclusion</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Man, Indias walls are wild these days. Seriously, they are not just boring slabs of concrete anymore, they are like giant canvases shaking up neighborhoods and getting people talking. Walking around cities like Delhi, you stumble on these huge, jaw dropping murals, then bam, turn a corner in Mumbai and theres some quirky, weird graffiti that totally changes the vibe. Bengaluru? Tech nerds making art, obviously. Every place you hit, you see something new, something super now.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And it is not just the big cities either. Thanks to stuff like the Street Art Biennale, even little towns are getting in on the action. Suddenly, everyone wants a piece of that visual magic. It is almost like every walls got its own secret, just waiting for someone to stop scrolling and actually look up.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So, if you are after Insta gold, want to flex your travel blog, or, I dunno, just want to see what is really going on in modern India, these street art tours are basically a no brainer. Toss your usual plans, grab your camera, and get ready for some serious color therapy. Indias walls are talking, might as well listen.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Which citys street art scene are you most excited to explore?</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#street-art-tours" className="text-blue-600 hover:underline transition-colors duration-200">Street Art Tours</Link></li>
                  <li><Link to="#delhi-street-art" className="text-blue-600 hover:underline transition-colors duration-200">Delhi Street Art</Link></li>
                  <li><Link to="#bangalore-street-art" className="text-blue-600 hover:underline transition-colors duration-200">Bangalore Street Art</Link></li>
                  <li><Link to="#pune-street-art" className="text-blue-600 hover:underline transition-colors duration-200">Pune Street Art</Link></li>
                  <li><Link to="#kochi-varanasi" className="text-blue-600 hover:underline transition-colors duration-200">Kochi and Varanasi</Link></li>
                  <li><Link to="#biennale-festivals" className="text-blue-600 hover:underline transition-colors duration-200">Biennale and Festivals</Link></li>
                  <li><Link to="#tour-tips" className="text-blue-600 hover:underline transition-colors duration-200">Tour Tips</Link></li>
                  <li><Link to="#conclusion" className="text-blue-600 hover:underline transition-colors duration-200">Conclusion</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>India street art tours</strong>, <strong>urban art India</strong>, and <strong>creative travel India</strong>. We are passionate about sharing <strong>authentic cultural journeys</strong> that inspire your next trip in <strong>India</strong> and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/64/f4/bd/64f4bdc98554a0998ac9c05f7a5996f4.jpg" alt="Ladakh Trek" className="w-full rounded-lg mb-2" />
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
                    <img src="https://i.pinimg.com/1200x/9f/9f/55/9f9f55fac94fe8eb780e5955b2430416.jpg" alt="Kedarkantha Snow" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>India oldest temple</strong></p>
                    <Link to="Oldesttemplesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/ce/f9/c4/cef9c4167ffaed5cf7f807e08f7a4e6c.jpg" alt="Street Food" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Street food</strong></p>
                    <Link to="Streetfoodblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
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

export default StreetArtBlog;
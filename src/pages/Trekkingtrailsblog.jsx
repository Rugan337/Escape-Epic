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

const TrekkingTrailsBlog = () => {
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
    <div className="TrekkingTrailsBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/736x/07/12/77/0712775f5b3b08d90d58be866d33f40c.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Trekking Trails That Define Indias Adventure Spirit
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="trekking-trails-india" className="mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Trekking Trails That Define Indias Adventure Spirit</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, heres the real deal: Indias basically a playground for hikers. Youve got everythingicy river trails up in Ladakh if you like freezing your toes off, lush green madness in the Western Ghats, and a ton of wild stuff in between. Every trek feels like its got its own personality, you know Some are chill, others just want to see you sweat.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Whether you are down for Himalayan peaks, creepy-misty forests, or those tucked away valleys you only see in bad Bollywood romances, theres something for every kind of trekker. You want a trip that will mess with your soul or just want to say you survived? Indias got you.</p>
                <p className="mb-4 opacity-0 animate-fade-in">I am gonna spill on the big-name hikes plus a few secret spots locals try to keep hush-hush. Honestly, if you love adventure or just want an epic Instagram shot, youre in the right place.</p>
                <p className="mb-8 opacity-0 animate-fade-in">So, boots on lets get a little lost and see what all the hypes about. <b><Link to="/indianblog" className="text-blue-600 hover:underline transition-colors duration-200">Indias trails are calling</Link></b>, and trust me, you dont wanna leave them on read.</p>
              </section>
              <section id="why-trekking-unique" className="mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Trekking in India Is Unique</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Trekking in India? Oh man, its a wild ride way more than just hiking up a hill and snapping a few scenic selfies. The landscapes wild, sure, but the vibe? Totally its own beast. You are not just trudging through mountains or jungles; you are basically time-traveling through old-school traditions, weird rituals, and stories that locals might have told around fires for centuries. You will be sucking air on a Himalayan pass one day, then wading through misty ghats, the next monsoon rain making everything feel kinda epic.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Trails here dont just dump you at a view and call it a day. Nah, you will stumble onto ancient monasteries, stumble across secret lakes, maybe even a wildlife sanctuary if you are lucky (or unlucky, depending on how you feel about leopards lurking in the shadows). One minute its rhododendron forests, the next you are half-convinced you spotted a snow leopard usually you did not, but hey, the excitements real.</p>
                    <p className="mb-0">And lets be honest, half the fun is what you eat and who you meet. You will chow down on whatever the locals are cooking—sometimes spicy enough to burn your soul—swap stories with guides who probably know every trail like the back of their hand, and if you time it right, you crash some cultural festival you did not even know existed. Its messy, unpredictable, and honestly, that is what makes trekking in <b><Link to="/indianblog" className="text-blue-600 hover:underline transition-colors duration-200">India an absolute legend</Link></b>.</p>
                  </div>
                </div>
              </section>
              <section id="himalayan-legends" className="mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Himalayan Legends: Iconic Treks of North India</h2>
                <section id="chadar-trek" className="mb-6">
                  
                  <p className="mb-0 opacity-0 animate-fade-in">Alright, so this ones not your average stroll in the park. The Chadar Trek? Its bonkers. Imagine tiptoeing (okay, more like slipping and sliding) across a frozen river in Ladakh, smack in the middle of winter. The Zanskar becomes this glassy runway, and you’re basically a tiny speck in a white, sub-zero wilderness. You see wild ice caves, canyons that look like they have been carved by giants, and somehow, actual <b><Link to="/indianblog" className="text-blue-600 hover:underline transition-colors duration-200">villages where the locals greet</Link></b> you with the kind of warmth that makes your numb fingers tingle. Brutal For sure. Worth it Oh, 100%.</p>
                </section>
                <section id="valley-of-flowers" className="mb-6">
                 
                  <p className="mb-0 opacity-0 animate-fade-in">Picture this: you are hiking through a legit UNESCO World Heritage site, and every step you take, BOOM another explosion of color from crazy alpine flowers. Its like natures own Holi festival from July to September. Snow-capped peaks in the distance, the rarest critters popping up when you least expect them, and landscapes that look like they have been Photoshopped. Bring your camera, your sense of wonder, and maybe a selfie stick if you are feeling extra. Nature nerds, spiritual types, and anyone who needs a break from city grime this is your happy place.</p>
                </section>
                <section id="hampta-pass" className="mb-6">
                 
                  <p className="mb-0 opacity-0 animate-fade-in">Hampta Pass is like the ultimate plot twist for a trek. You start in Kullus lush, green world, then bam suddenly you are in the wild, stark Spiti Valley. The terrain flip flops so fast itll mess with your head in the best way. Glacial rivers, wildflowers everywhere, and campsites that will make you never want to crawl back to civilization. Perfect if youre new to the Himalayas but want those “Im on top of the world vibes without needing to be an ultra-marathoner.</p>
                </section>
                <section id="kedarkantha-trek" className="mb-6">
             
                  <p className="mb-0 opacity-0 animate-fade-in">Snow. So much snow. Kedarkantha is like walking into a winter fairytale, minus the Disney soundtrack. Pine forests dusted in white, tiny villages that seem to just materialize out of the mist, and a summit view that will make your jaw drop (if it is not frozen already). This ones awesome for beginners or families uncomplicated, but the payoff is straight up magical. Think bonfires, starry nights, and enough Instagram content to last a lifetime.</p>
                </section>
                <section id="goechala-trek" className="mb-8">
                 
                  <p className="mb-4 opacity-0 animate-fade-in">Okay, Kanchenjunga is not just a mountain. Its a legend, towering above the clouds. Goechala gets you up close and personal with its crazy massiveness. You will tramp through rhododendron forests that look like they are out of a fairytale, chill by mirror-like lakes, and then climb until the views punch you right in the soul. Go in autumn clear skies, crisp air, and those Himalayan giants staring right back at you. Total bucket-list material.</p>
                  <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in hover:shadow-md transition-shadow duration-300">
                    <div className="text">
                      <p className="mb-0">Holy hell, the payoffs hit like a sunrise over Everest Base Camp—pure, unadulterated magic that seeps into your bones. You will crest a pass to find yourself eye-level with giants like Annapurna or Nanda Devi, their snow flanks glowing pink in the alpenglow, while below, turquoise glacial lakes wink like hidden jewels in the folds of the earth. Its not just the views; its the quiet epiphanies the way a Sherpas grin over shared momos tastes like victory, or how the silence up high amplifies the crunch of your boots into a symphony of solitude.</p>
                    </div>
                  </div>
                </section>
              </section>
              <section id="southern-western-treks" className="mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Southern and Western Indian Treks</h2>
                <section id="kudremukh-trek" className="mb-6">
                
                  <p className="mb-0 opacity-0 animate-fade-in">Man, Kudremukh is just wild—literally and figuratively. You’re walking through these rolling green hills that look like something out of a fantasy movie, with clouds hanging so low you might as well high five them. Hit it during the monsoons and its like someone cranked the saturation up to eleven everythings just so alive. If you are lucky, you might spot a bison chilling in the bushes or stumble across weirdly beautiful orchids. <b><Link to="/indianblog" className="text-blue-600 hover:underline transition-colors duration-200">Not your average stroll in the park.</Link></b></p>
                </section>
                <section id="chembra-peak" className="mb-6">
                  
                  <p className="mb-0 opacity-0 animate-fade-in">Chembra’s got this whole “wow, am I in a postcard?” vibe going on. Its the king of Wayanad hills, and if you make it up top, that heart-shaped lake is just sitting there, looking all photogenic and stuff. The trail itself? Little bit of everything—tea gardens, forests, wildflowers popping up whenever they feel like it. Trust me, go between September and February if you actually want to enjoy the trek and not just sweat buckets.</p>
                </section>
                <section id="rajmachi-fort" className="mb-6">
                  
                  <p className="mb-0 opacity-0 animate-fade-in">If you are from Mumbai or Pune and want to escape the city noise, Rajmachi is basically calling your name. The trek is packed with old forts, forests that get all mysterious when the mist rolls in, and waterfalls that come alive when the rains hit. Its not super tough, so even if your idea of exercise is walking to the fridge, you will be fine. Perfect for a spontaneous weekend adventure.</p>
                </section>
                <section id="tadiandamol-trek" className="mb-8">
                 
                  <p className="mb-4 opacity-0 animate-fade-in">Tadiandamol is like Coorgs crown jewel. Tallest peak in the area, surrounded by coffee plantations (so yeah, it smells amazing), lush shola forests, and those classic Western Ghats views that just hit different. The trails not too crazy, and the weathers pretty much always on your side. No wonder people keep coming back, no matter what time of year it is.</p>
                  <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in hover:shadow-md transition-shadow duration-300">
                    <div className="text">
                      <p className="mb-0">Following Faith and Footsteps: Eastern Indias Sacred Journeys is not just about putting one foot in front of the other its a pilgrimage wrapped in mist-shrouded peaks and age-old chants that pull you into the soul of the East. Think winding paths through Sikkims emerald rhododendron groves, where every rustle in the undergrowth feels like a whisper from the gods, leading you to Dzongris alpine meadows that bloom with prayer flags fluttering like captured breaths of the divine. Or trace the footsteps of ancient sadhus along the Singalila Ridge.</p>
                    </div>
                  </div>
                </section>
              </section>
              <section id="eastern-sacred-journeys" className="mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Eastern Indias Sacred Journeys</h2>
                <section id="sandakphu-singalila" className="mb-6">
                
                  <p className="mb-0 opacity-0 animate-fade-in">Right on the edge where West Bengal and Sikkim meet, the Sandakphu trek is basically a front-row seat to four out of the five tallest mountains on the planet—yeah, Everest and Kanchenjunga just casually hanging out in your line of sight. The trails not just about epic peaks either. You get pine forests that smell like Christmas, villages splashed with color, and that wild “Sleeping Buddha” mountain silhouette that will have you squinting and going, “Wait, is that…?”</p>
                </section>
                <section id="dzongri-trek" className="mb-6">
                 
                  <p className="mb-0 opacity-0 animate-fade-in">Dzongri is for the drama lovers. The Sikkim Himalayas show off here, and if you are thinking about going higher (hello, Goechala), this is your launchpad. Hit it in autumn and you will get those crisp, perfect views—plus wildflowers everywhere, like nature just dumped a bag of Skittles on the trail.</p>
                </section>
                <section id="kedarnath-har-ki-dun" className="mb-8">
                 
                  <p className="mb-0 opacity-0 animate-fade-in">Now, Kedarnath is where the spiritual meets the seriously steep. People haul themselves up there for both the views and the vibes, and if youre into legends and old-school stories, you will be in heaven (pun intended). Har Ki Dun is classic golden meadows, villages that feel like time forgot them, and enough folklore to fill a Netflix series. Not a race, more of a meander, perfect if you want to soak up the culture and not just your own sweat.</p>
                </section>
              </section>
              <section id="final-mile" className="mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Final Mile</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, lets be realtrekking in India isnt just about hiking from point A to point B. Its a whole vibe. One minute youre knee-deep in wildflowers, <b><Link to="/indianblog" className="text-blue-600 hover:underline transition-colors duration-200">next youre gasping</Link></b> for air on some snowy pass, and then somehow you are sharing chai with locals who have probably climbed those hills since before you learned to tie your shoes.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Honestly, every trails got its own flavor. Sometimes its all raw, untamed jungle. Sometimes, you are just staring at some ancient temple, wondering how the heck they built that up here. And the people? Man, you meet everyone from hardcore trekkers to spiritual wanderers, and the occasional cow that refuses to move.</p>
                <p className="mb-4 opacity-0 animate-fade-in">You wanna discover India You gotta lace up, throw your pack on, and just go. Dont overthink it. Forget all that “finding yourself” nonsense—just let the trail mess up your shoes and clear your head. Theres magic in every muddy footprint.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So yeah, respect the mountains, dont be that person who leaves plastic everywhere, and remember you are walking through stories older than your grandma. Indias trails? Not just routes. They are wild, unpredictable, and a little bit spiritual. Go walk em.</p>
                <p className="opacity-0 animate-fade-in">Which trek are you tackling first</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#trekking-trails-india" className="text-blue-600 hover:underline transition-colors duration-200">Trekking Trails India</Link></li>
                  <li><Link to="#why-trekking-unique" className="text-blue-600 hover:underline transition-colors duration-200">Why Trekking Unique</Link></li>
                  <li><Link to="#himalayan-legends" className="text-blue-600 hover:underline transition-colors duration-200">Himalayan Legends</Link></li>
                  <li><Link to="#chadar-trek" className="text-blue-600 hover:underline transition-colors duration-200">Chadar Trek</Link></li>
                  <li><Link to="#valley-of-flowers" className="text-blue-600 hover:underline transition-colors duration-200">Valley of Flowers</Link></li>
                  <li><Link to="#hampta-pass" className="text-blue-600 hover:underline transition-colors duration-200">Hampta Pass</Link></li>
                  <li><Link to="#kedarkantha-trek" className="text-blue-600 hover:underline transition-colors duration-200">Kedarkantha Trek</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>Indian street food</strong>, <strong>Delhi chaat</strong>, and <strong>Chennai idli</strong>. We’re passionate about sharing <strong>food street India</strong> that inspire your next trip in <strong>India</strong> and beyond!</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/ce/2e/df/ce2edfd8e6e37ad4e0f2c122c42ca81b.jpg" alt="Autumn Festival" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Autumn festival</strong></p>
                    <Link to="/Autumnfestivalsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/fc/db/1e/fcdb1e6d5033a852431c57f7d722dbba.jpg" alt="Life in India" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Life in india</strong></p>
                    <Link to="/Bordervillagesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/9f/9f/55/9f9f55fac94fe8eb780e5955b2430416.jpg" alt="India Oldest Temple" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>India oldest temple</strong></p>
                    <Link to="/Oldesttempleblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/ce/f9/c4/cef9c4167ffaed5cf7f807e08f7a4e6c.jpg" alt="Street Art" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Street Food</strong></p>
                    <Link to="/Streetfoodblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                   <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/5d/11/93/5d11936a226ead23f50c3013550b0e76.jpg" alt="Street Art" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Street art</strong></p>
                    <Link to="/Streetarttoursblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
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

export default TrekkingTrailsBlog;
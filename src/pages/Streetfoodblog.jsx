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

const StreetFoodBlog = () => {
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
    <div className="StreetFoodBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/736x/97/2b/49/972b496d2003ee5191c77be80350ec57.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Street Food Stories From Delhi Chaat to Chennai Idlis
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="street-food-stories" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Street Food Stories From Delhi Chaat to Chennai Idlis</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Indias street food is basically chaos in the best way. One minute you are elbow deep in spicy chaat in Delhi, the next you are chasing fluffy idlis down a side alley in Chennai. Every city has got its own vibe, its own you have to try this or you have not lived snack.</p>
                <p className="mb-4 opacity-0 animate-fade-in">You will find these vendors everywhere crammed into neon lit lanes, camped out beneath ancient banyan trees, tucked away in some corner you would never find unless you got lost (which, honestly, is half the fun). The food? It is a wild mix of old school recipes passed down through families, the kind of genius mashups only true food nerds could dream up, and smells that will have you drooling before you even know what hit you.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So here is the plan: we are diving headfirst into the messiest, tastiest, most iconic street snacks, secret food alleys, and the legends behind them. Why? Because street food is not just some side gig in India it is basically the main event.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Get ready for a tour of the classics, mind blowing fusion bites, and those holy crap, I need more of this must eats. Does not matter if you are getting lost in Old Delhi, scarfing down rolls in Kolkata, or on a one person quest for the fluffiest idli in Chennai this guides your ticket to the wild world of Indian street food. Buckle up, your taste buds are in for a ride.</p>
              </section>
              <section id="delhi-chaat" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Delhi Chaat Tang Spice and Chaos</h2>
                <p className="mb-4 opacity-0 animate-fade-in">If you have never wandered through Chandni Chowk, man, you are missing out. This place is basically the wild beating heart of Delhi street food. Chaat here is not just food it is like getting smacked in the face with flavor (in a good way, promise).</p>
                <p className="mb-4 opacity-0 animate-fade-in">Papri Chaat, Dahi Bhalla, Aloo Tikki, Golgappa honestly, I lose count half the time. Every vendor has their own thing going on. You will get that perfect hit of crunch, creamy yogurt, a slap of spice, and enough tang to make your eyes water. Locals? Obsessed. Tourists? Utterly confused but loving it.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And the chaos? Oh, it is real. You have got honking rickshaws, the crowds basically elbowing you out of the way, but it only makes the food taste better. Each stall swears their masala is the best good luck picking a favorite.</p>
                <p className="mb-4 opacity-0 animate-fade-in">If you wander into Parathe Wali Gali, prepare for a carb overload. Stuffed parathas, swimming in ghee, come in flavors you did not even know existed. Or hit up Karims for kebabs so tender you will barely need teeth.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Oh, and skipping jalebis? Blasphemy. Grab a piping hot, sticky sweet one with some masala chai, and thank me later.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-0">Look, if you have not tried Vada Pav in Mumbai, are you even living? It is basically the citys answer to a burger: think mashed up, spicy potato, deep fried, shoved into a soft bun and smothered with chutney. Cheap, messy, and absolutely essential people eat it for breakfast, lunch, after work, after fighting with their boss, whatever.</p>
                    <p className="mb-0">And then there is Pani Puri, which, honestly, is a wild ride in your mouth little crispy balls stuffed with spicy water and potato, served by the handful at Juhu Beach or some guys cart at the train station. You pop one, it explodes, you almost cry, you ask for more.</p>
                    <p className="mb-0">Oh, and do not even get me started on Misal Pav, Bhel Puri, or Ragda Pattice. Each one is a full blown party of flavors. Mumbai runs on this stuff it is not just food, it is like, the citys entire personality.</p>
                    <p className="mb-0">Oh, it is less a meal and more a chaotic love letter to the citys relentless pulse, where you elbow through the humid crush of Churchgate commuters at a no frills thela cart, the air thick with the sizzle of besan batter hitting scalding oil and the sharp tang of green chutneys being slathered like war paint. You hand over a crumpled ten rupee note because who needs change when the universe feels this alive and there it is: a fist sized potato vada, golden crusted and steaming, crammed into a soft pav bun that has been kissed by garlic and fried chilies, with a side of mind numbing mirchi that dares you to breathe fire.</p>
                  </div>
                </div>
              </section>
              <section id="mumbai-vada-pav" className="mb-6 fade-in">
               
              </section>
              <section id="kolkata-street-food" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Kolkata Street Food Rolls and More</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, let us talk Kolkata street food, because honestly, it is a whole vibe. Park Street, College Street if you have not wandered down those, are you even living? Kathi rolls are the MVP here: imagine juicy chunks of chicken or egg, maybe both if you are feeling extra, all hugged tight in a hot, flaky paratha. Stuffed with onions, drizzled with some mysterious tangy sauce messy, addictive, and 100% worth ruining your shirt for.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Now, if you are craving comfort, you hit up a macher jhol joint. That is fish curry, by the way. They will slap a steaming plate of rice next to it, and suddenly you are in flavor paradise. Oh, and puchka? Kolkatas own spin on pani puri spicy, sour, basically a flavor explosion in your mouth that will have you lining up for more.</p>
                <p className="mb-0 opacity-0 animate-fade-in">And do not even get me started on jhal muri. It is like the OG spiced puffed rice snack, perfect when you are dashing through a crowded crossing. Pair it with a samosa or two trust me. And if you leave the city without stuffing your face with rasgulla and sandesh, what are you even doing Those sweets are basically Kolkata royalty.</p>
              </section>
              <section id="chennai-street-food" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Chennais Comfort Classics</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Let us talk about Chennais food scene honestly, it is like a giant bear hug for your taste buds. First stop. Marina Beach, Vadapalani, or heck, just pull up at Ratna Cafe (that place is basically legendary). Grab a plate of idli and sambar. Those fluffy little rice cakes dunked in hot, spicy lentil stew man, nothing says good morning like that. Super soft, super chill, and your stomachs gonna thank you.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Now, if you skip the masala dosa, what are you even doing? Golden, crispy crepe loaded up with spicy potato slap on some coconut chutney, maybe a splash of sambar, and you are basically in heaven. Do not even get me started on bondas deep fried potato balls, piping hot, especially if you are wandering by the beach. Or sundal: chickpeas tossed with coconut and spices, usually served in a newspaper cone because, why not?</p>
                <p className="mb-0 opacity-0 animate-fade-in">And here is the deal Chennai street food is not stuck in the past. These folks love a remix. You will spot fusion snacks everywhere bread omelette, weird but awesome mashups always something new to try. So yeah, come hungry and ready to experiment. The classics are just the start.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Bangalores Food Street Diversity in Every Bite</p>
                    <p className="mb-4">V V Purams Food Street? Oh man, it is an absolute chaos in the best way possible. You have got everything from spicy Rajasthani chaat that will make your nose run to South Indian legends like Paddu, crispy dosas, those fluffy idli vada combos you name it, it is sizzling somewhere on that street.</p>
                    <p className="mb-4">Hit it up in the evening and boom, the whole place just explodes with people. Students in packs, families dragging their kids around, office folks in their work clothes all elbowing for space, munching on sweets, snacks, and hot food under those twinkly lights strung overhead.</p>
                    <p className="mb-0">It does not matter if you are going for gooey jalebis or one of those giant paper dosas that barely fit on the plate Bangalores street food scene on this stretch is wild. North, South, spicy, sweet, crunchy every bite has got a little bit of everything, and the whole vibe is just electric.</p>
                    <p className="mb-0">Nestled in the heart of Basavanagudi, Bangalores VV Puram Food Street affectionately dubbed Thindi Beedi unfurls like a vegetarian fever dream over a mere 150 meters of buzzing asphalt, where over two dozen stalls hawk an audacious parade of Indias finest meat free marvels under strings of fairy lights that twinkle like mischievous fireflies.</p>
                  </div>
                </div>
              </section>
              <section id="bangalore-food-street" className="mb-6 fade-in">
                
              </section>
              <section id="hidden-gems" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Hidden Street Food Gems</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, ditch the touristy food spots for a sec let us talk about the places you probably will not see on fancy blogs, but honestly, they are where the magic happens.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Honestly, these places are the real deal. Forget the guidebooks just follow your nose and maybe your hunger pangs.</p>
              </section>
              <section id="street-food-hacks" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Street Food Hacks for Real Foodies</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Seriously, skip those empty stands find the stalls where the locals are packed in. That is where the magic (and probably the best bites) happen. Early morning or late at night? That is when the street eats hit different, trust me. Everything is fresher, juicier, and just better.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Do not just stick to what you know wander a bit! If you see a line, join it. You might end up with some wild fusion snack that will blow your mind or stumble into a regional thing you never even heard of. Go for it.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Oh, and do not let a dodgy tummy ruin your whole trip. Stick with stuff that is steaming hot, and maybe pack a little hand sanitizer. Nobody wants to spend their vacation hugging the toilet, ya know?</p>
              </section>
              <section id="wrapping-up" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Wrapping Up the Journey</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, here is the real deal: Indian street food is not just something you eat it is more like a nostalgia bomb, a festival, and your grandmas best kept secret all mashed together. Seriously, you cannot walk two steps in Delhi without tripping over a chaat vendor, or be in Chennai and not get tempted by those fluffy idlis that basically melt if you look at them too hard. Every single region? Totally doing its own thing, and proudly so.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And honestly, you have not truly seen India unless you have elbowed your way through a jam packed food bazaar, burning your tongue on spicy samosas, or standing in line at midnight for that one legendary dosa. The whole vibe is chaos, but the kind you crave. Whether you are a pro traveler or just hopped off the plane for the first time, street food here will wreck your willpower and probably send you home with a handful of wild stories and maybe a mysterious stain on your shirt.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So, what are you waiting for? Grab whatever passes for a plate, jump right into the madness, and let your taste buds call the shots. Indias got a street food scene that will blow your mind and leave you hungry for more. Guaranteed.</p>
                <p className="mb-0 opacity-0 animate-fade-in">What is your must try street food from this list?</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#street-food-stories" className="text-blue-600 hover:underline transition-colors duration-200">Street Food Stories</Link></li>
                  <li><Link to="#delhi-chaat" className="text-blue-600 hover:underline transition-colors duration-200">Delhi Chaat</Link></li>
                  <li><Link to="#mumbai-vada-pav" className="text-blue-600 hover:underline transition-colors duration-200">Mumbai Vada Pav</Link></li>
                  <li><Link to="#kolkata-street-food" className="text-blue-600 hover:underline transition-colors duration-200">Kolkata Street Food</Link></li>
                  <li><Link to="#chennai-street-food" className="text-blue-600 hover:underline transition-colors duration-200">Chennai Street Food</Link></li>
                  <li><Link to="#bangalore-food-street" className="text-blue-600 hover:underline transition-colors duration-200">Bangalore Food Street</Link></li>
                  <li><Link to="#hidden-gems" className="text-blue-600 hover:underline transition-colors duration-200">Hidden Gems</Link></li>
                  <li><Link to="#street-food-hacks" className="text-blue-600 hover:underline transition-colors duration-200">Street Food Hacks</Link></li>
                  <li><Link to="#wrapping-up" className="text-blue-600 hover:underline transition-colors duration-200">Wrapping Up</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>Indian street food</strong>, <strong>Delhi chaat</strong>, and <strong>Chennai idli</strong>. We are passionate about sharing <strong>food street India</strong> that inspire your next trip in <strong>India</strong> and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/64/f4/bd/64f4bdc98554a0998ac9c05f7a5996f4.jpg" alt="Ladakh Trek" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>trekking trails</strong></p>
                    <Link to="Trekkintrailsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
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

export default StreetFoodBlog;
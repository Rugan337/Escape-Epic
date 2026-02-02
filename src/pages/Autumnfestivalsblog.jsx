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

const AutumnFestivalsBlog = () => {
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
    <div className="AutumnFestivalsBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/10/0c/31/100c31b5803278906456125ec38121e6.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Autumn Festivals Across India
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="why-autumn-overload" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Autumn Feels Like Festival Overload in India</h2>
                <p className="mb-4 opacity-0 animate-fade-in">As soon as the sticky monsoon packs its bags, bam! Autumn barges in with that cool breeze, and suddenly, everywhere you look, it's festival central. From September to November, it's like the entire country just can't stop celebrating harvests, religious blowouts, tons of wild local stuff. Seriously, towns and cities light up so much, you'd think the power bill just doesn't exist.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Why now? Well, blame or thank the Hindu lunisolar calendar. Everything kinda syncs up, so autumn turns into this massive party season. Perfect time for travelers, honestly. You get a mix of thank you for the crops vibes, dramatic mythological showdowns, and all sorts of regional craziness: mask dances in the northeast, stunning flower carpets down south, effigies going up in flames, and palaces looking extra bougie in the north.</p>
                    <p className="mb-4">But it's not just about ticking boxes on a festival calendar. There's something in the air, no, not just the smell of firecrackers and ghee. It's this wild, contagious excitement that gets everyone from old aunties to little kids out of their homes and into the streets. People paint their houses, string up fairy lights, buy new clothes because obviously your old ones won't cut it for the goddess, and prep enough sweets to send everyone into a sugar coma.</p>
                    <p className="mb-0">That ancient cosmic dance of moon phases and solar cycles that turns October into a golden window of trekking nirvana across India's wild fringes. As the monsoon's dramatic exit leaves the air crisp and the trails blooming with post-rain vibrancy, think rhododendrons exploding in pinks and reds like nature's own Diwali fireworks, the calendar syncs up with Sharad Purnima's full moon glow on October 6, bathing Himalayan passes in silvery light, perfect for midnight rambles under star-packed skies.</p>
                  </div>
                </div>
              </section>
              <section id="big-name-festivals" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Big Name Autumn Festivals From East to West</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Let's start with Durga Puja because wow, Kolkata loses its mind in the best possible way. The whole city morphs into this glowing maze of temporary temples they call them pandals, each one more over the top than the last. We're talking handcrafted goddess idols, music blasting into the night, and crowds that make Times Square on New Year's Eve look chill.</p>
                <p className="mb-4 opacity-0 animate-fade-in">It's not just some religious deal either. The creativity? Next level. Every neighborhood tries to outdo the others with crazier themes: one year it's an Egyptian pyramid, the next it's Hogwarts. People fly in from all over just to gawk, eat, and join the midnight madness. Don't skip the Dhunuchi dance, imagine people waving around smoking incense pots like they're at some ancient rave. And the food, oh man, the food: giant feasts where everyone's invited. It's pure chaos and pure joy all wrapped up in one wild week.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And that's just one corner of the country. Head south and you'll hit Onam season. Kerala turns into a flower-filled wonderland with people making crazy intricate floral carpets pookalam, eating giant banana leaf meals, and competing in boat races that look like something out of a movie. The north isn't slacking either. Dussehra means epic effigy burnings with huge crowds cheering as paper mache demons go up in flames. There's something so primal and satisfying about it, honestly.</p>
                <p className="mb-4 opacity-0 animate-fade-in">It's not just about the big names though. Every region's got its own flavor: folk dances, random fairs, parades with elephants or camels, you name it. The whole thing is this beautiful, noisy, messy expression of togetherness. Even if you're not religious, you can't help but get swept up in the buzz.</p>
                <p className="mb-0 opacity-0 animate-fade-in">So yeah, autumn in India. It's a sensory overload in the best way. Try to keep up, you'll probably need a nap by November.</p>
              </section>
              <section id="dussehra-navratri" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Dussehra and Navratri: Victory of Good over Evil</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Dussehra, man, it's not just a festival, it's a full-on theatrical experience in India. Imagine this: the streets are packed, everyone's eyes glued to giant open-air Ramlila dramas where actors bring the whole Ramayana to life, usually with more enthusiasm than budget. And the grand finale? Massive effigies of Ravana stuffed with fireworks going up in literal flames, everyone cheering like their team just won the World Cup. In northern towns, you'll see little kids running around with toy bows trying to be mini Ramas. Karnataka jumps in with its own flavor, but Mysore? Mysore doesn't do subtle. That palace turns into a glowing jewel covered in so many lights, you'd think it's competing with Vegas. The parade struts through the city: decked-out elephants, dancers swirling, musicians going wild, and everyone from toddlers to grannies just soaking it in. It's the kind of parade where you end up with confetti in your shoes and probably a mild sugar high from all the festival sweets.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-0">Meanwhile, Gujarat just cranks the energy up to eleven with Navratri. For nine nights, the whole state pulses with Garba and Dandiya dances: picture thousands of people all decked in sequined vibrant clothes moving in these hypnotic circles under fairy lights. It's a photographer's dream, and you'd better believe Instagram is flooded with shots each year. Honestly, even if you've got two left feet, you'll find yourself in the mix just spinning around and hoping you don't trip over someone's lehenga. There's something electric in the air, a sense of unity and joy that's hard to find anywhere else. Food stalls pop up everywhere selling spicy snacks and sweet treats, and every night feels like a celebration of life itself.</p>
                  </div>
                </div>
              </section>
              <section id="diwali" className="mb-6 fade-in">
               
                <p className="mb-4 opacity-0 animate-fade-in">Days before, folks are scrubbing their homes spotless, stringing up fairy lights, and prepping for the main event. On Diwali night, you step outside and boom: there's a riot of colors, fireworks lighting up the sky, and the smell of sweets and incense hanging heavy in the air. Neighbors go door-to-door sharing boxes of mithai those dangerously addictive sweets, and families gather to play cards, swap stories, and just bask in the glow. Varanasi takes it to another level though. The ghats along the Ganges are blanketed in little lamps, their reflections shimmering on the water, and there's this almost surreal feeling like the whole city is floating in light. People say it's spiritual, but honestly, it's just pure magic. Doesn't matter if you're religious or not, you'll feel the buzz.</p>
              </section>
              <section id="tawang-festival" className="mb-6 fade-in">
                
                <p className="mb-4 opacity-0 animate-fade-in">Northeast India doesn't get the attention it deserves, but this festival? Oh, it's something else. The Monpa community goes all out, mixing ancient Buddhist rituals with a street party vibe. Monks in wild colorful masks perform dances that tell old stories, there's traditional music that's both haunting and catchy, and the whole place smells of momos and butter tea. Craft fairs show off local handiwork: think handwoven shawls and quirky souvenirs you won't find in any Delhi market. Plus, the backdrop? Towering mountains and the Tawang Monastery, which looks like it was plucked straight from a postcard. Late October is when it all happens, and if you're into adventure sports, you'll find some wild treks and river runs to add adrenaline to your cultural fix. Honestly, if you're sick of the usual tourist circuit, Tawang will blow your mind.</p>
              </section>
              <section id="onam-kerala" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Onam: Kerala's Harvest Extravaganza</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Onam? Oh, buckle up because Kerala goes all out for this one. We're talking ten days where the whole state feels like it's auditioning for a Bollywood musical. There's these wild snake boat races: imagine dozens of oarsmen, muscles gleaming, rowing like their lives depend on that trophy. The energy is nuts. Then you've got pookalams, those floral carpets: kids, grannies, everyone's on the ground making these psychedelic patterns out of petals. It's like a flower explosion on every doorstep. And don't even get me started on the Sadya. If there's a food coma Olympics, this banana leaf feast is the training ground: more curries than you can name, crispy chips, tangy pickles, payasam some next-level dessert, and people just keep piling it on. Honestly, if you leave hungry, that's on you.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">But Onam isn't just about stuffing your face or flexing your creative muscles with flowers. It's got this vibe of unity: friends, family, neighbors, even that guy you barely talk to, all coming together. There's Pulikali where dudes paint themselves up like tigers and prance around to drumbeats, equal parts hilarious and impressive. The music, parades? They're not just for show, they're an open invitation. Anyone can join in, clap along, or just lose themselves in the rhythm. Autumn in Kerala basically turns into a living, breathing work of art. No wonder photographers drool over it.</p>
                    <p className="mb-0">Onam, Kerala's riotous harvest bash that kicks off the Malayali New Year, isn't just a festival. It's a full-throated roar of the earth giving back after the monsoon's wild tantrum, blending ancient lore with a kaleidoscope of colors and chaos that could make even the most jaded trekker trade boots for a flower chain.</p>
                  </div>
                </div>
              </section>
              <section id="regional-festivals" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Regional Hidden Gems</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Now swing up northeast to Meghalaya for Wangala, the 100 Drums festival. You know that feeling when you hear a bass drop at a concert and your chest vibrates? Multiply that. The entire village gets swallowed up by this hypnotic wall of sound as everyone drums in sync, dressed in the brightest, wildest costumes you've ever seen. It's not just a party for the sake of partying though. They're giving thanks to Saljong, the Sun God, hoping for another solid harvest. The dances are straight fire, no one just stands around. It's like the whole community becomes one big beating heart. If you're bored of the same old travel photos, Wangala will snap you out of it real quick. And man, those sun-dappled hills as a backdrop? Unreal.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Telangana's Bathukamma brings a different flavor. Women gather in circles, balancing these gorgeous towers of flowers on their heads, singing songs passed down generations. There's this sense of pride like, Yeah, this is our tradition, and we're owning it. The finale? Everyone walks to the water, flowers and all, for this big collective immersion. It's both a farewell and a blessing, a way of saying thanks and letting go. Assam's Kati Bihu feels almost meditative in comparison. Lanterns, Akash Banti, float up into the night sky, and there's this hush as people pray among the rice fields, hoping the earth keeps giving. Tulsi plants are worshipped, which is kinda sweet when you think about it, giving nature its due respect.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And if you thought autumn was winding down, think again. Odisha's Nuakhai is all about the new rice harvest. Everyone's got a plate in hand, and there's this unspoken rule: you eat, you celebrate, you thank the land. They don't do anything by half measures: feasts, rituals, everyone coming together like one big fam. Manipur's Chavang Kut? Pure visual overload. Dancers in vibrant costumes, cultural shows, and a general sense of the more the merrier. You can't stand still, the music just pulls you in. Jharkhand's Sohrai gets a little wild with cows as the stars of the show, yep, you read that right: tribal wall murals bursting with color, and performances that'll have you grinning ear to ear.</p>
                <p className="mb-0 opacity-0 animate-fade-in">And then, sweet tooths, rejoice. Nabanna in West Bengal is your festival. It's a celebration of new rice, sure, but it doubles as an excuse to eat your body weight in sweets and pithas. Families get together to cook, laugh, and make memories. It's not just about the food though, there's poetry, music, and this infectious joy that just spills out into the streets.</p>
              </section>
              <section id="travel-tips-festivals" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Travel Tips for Autumn Festivals</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Okay, let's get real for a second. Autumn in India isn't just the festival season. It's basically a wild, months-long party where every corner of the country seems to be in full-on celebration mode. And the thing is, you can totally feel it in the air. The sticky summer heat chills out, the evenings get crisp, and suddenly, everyone's got a reason to dress up and eat too much sugar. If you're even thinking about experiencing this, you gotta go all in.</p>
                
                <p className="mb-4 opacity-0 animate-fade-in">Let's talk food because honestly, half the reason anyone goes to festivals is to eat. Autumn means harvest, which means fresh everything. You'll get Onam Sadya served on banana leaves, try to finish all those curries, I dare you. Diwali sweets that'll give you a sugar high for days, Durga Puja bhog that's served to thousands at a time, and market stalls loaded with just-picked fruits and veggies. Your taste buds basically go on a rollercoaster ride.</p>
                <p className="mb-4 opacity-0 animate-fade-in">And the vibe? It's electric. One minute you're watching priests light a thousand lamps on the Ganges, the next you're swept into a street parade with drums so loud your bones rattle. Kids launch fireworks, families swap stories, strangers become friends over shared plates of food. The whole idea of festival here isn't just about tradition, it's about community, about everyone dropping their worries for a while and celebrating just being alive.</p>
                <p className="mb-4 opacity-0 animate-fade-in">By the end, you'll find yourself changed. You'll carry the smell of incense, the beat of a hundred drums, the shimmer of saris and lanterns. And honestly, maybe a bit of glitter you can't wash out for weeks. These festivals are more than just events, they're memories in the making, stories you'll tell for years: pure color and chaos and joy.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So if you're planning your next adventure, don't just scroll past autumn in India. Jump in. Let the festivals sweep you up. Let them teach you how to dance badly, eat too much, laugh with strangers, and remember what it feels like to be part of something bigger. This isn't just a trip. It's an experience that'll stick with you way after the last lamp's gone out. And if you're a travel blogger, trust me, these are the stories your readers actually want.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Which festival are you most excited for?</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#why-autumn-overload" className="text-blue-600 hover:underline transition-colors duration-200">Why Autumn Overload</Link></li>
                  <li><Link to="#big-name-festivals" className="text-blue-600 hover:underline transition-colors duration-200">Big Name Festivals</Link></li>
                  <li><Link to="#dussehra-navratri" className="text-blue-600 hover:underline transition-colors duration-200">Dussehra and Navratri</Link></li>
                  <li><Link to="#onam-kerala" className="text-blue-600 hover:underline transition-colors duration-200">Onam Kerala</Link></li>
                  <li><Link to="#regional-festivals" className="text-blue-600 hover:underline transition-colors duration-200">Regional Hidden Gems</Link></li>
                  <li><Link to="#travel-tips-festivals" className="text-blue-600 hover:underline transition-colors duration-200">Travel Tips</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>autumn festivals India</strong> <strong>best Indian festivals</strong> and <strong>colorful festivals India</strong>. We're passionate about sharing <strong>Diwali Durga Puja</strong> that inspire your next trip in <strong>India</strong> and beyond.</p>
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
                    <img src="https://i.pinimg.com/736x/fc/db/1e/fcdb1e6d5033a852431c57f7d722dbba.jpg" alt="Life in India" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Life in india</strong></p>
                    <Link to="Bordervillagesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/9f/9f/55/9f9f55fac94fe8eb780e5955b2430416.jpg" alt="India Oldest Temple" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>India oldest temple</strong></p>
                    <Link to="Oldesttemplesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/ce/f9/c4/cef9c4167ffaed5cf7f807e08f7a4e6c.jpg" alt="Coorg Peak" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Street food</strong></p>
                    <Link to="Streetfoodblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/5d/11/93/5d11936a226ead23f50c3013550b0e76.jpg" alt="Street Art" className="w-full rounded-lg mb-2" />
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

export default AutumnFestivalsBlog;
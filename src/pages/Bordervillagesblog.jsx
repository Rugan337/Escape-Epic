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

const BorderVillagesBlog = () => {
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
    <div className="BorderVillagesBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/736x/14/b1/48/14b1480e850ea6fb374cc2578232c55b.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Life in Indias Border Villages Stories from the Edge
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="journey-begins" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Journey Begins</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Indias border villages. You want to talk about grit and wild stories. These places have it in spades. Forget your usual city chaos. Out here, at the actual edge of the country, life hits different. Picture this: snowy winds whipping through Ladakh, thick green jungles hugging Arunachal Pradesh, rivers weaving all over Bengal like Mother Nature could not make up her mind. It is not just scenery, either. These folks are literally living on the frontline, holding down the fort while the rest of us are worrying about Wi Fi speeds.</p>
                <p className="mb-4 opacity-0 animate-fade-in">What is nuts is how much old school culture just survives out here. Stuff you will not find in any museum. People just doing things the way their great grandparents did. Sure, it is tough. Being this remote is no joke. But the hospitality? Next level. You show up, and you are basically family.</p>
                <p className="mb-4 opacity-0 animate-fade-in">You will meet people who wave to neighbors across the border like it is totally normal, swap stories, share tea. Meanwhile, the rest of us are glued to the news about tensions. Out here, life is shaped by mountains, politics, wild weather, and honestly, a stubborn hope that tomorrow will be brighter.</p>
                <p className="mb-4 opacity-0 animate-fade-in">If you are bored of cookie cutter travel experiences, these stories will smack you awake. Go on, get out there, and let these villages show you what living at the edge really means. You will come back with way more than souvenirs, trust me.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Indias border villages are not just random dots on a map. They are clinging to wild cliff edges in the Himalayas, baking out in deserts, hiding in tangled forests, or squelching through swampy deltas. It is all pretty breathtaking, honestly, but also kind of brutal.</p>
                    <p className="mb-4">We are talking extremes here. Some folks live where the air is so thin you practically need a second set of lungs, or right by rivers that decide to change course just to keep life interesting. The views? Out of this world. The isolation? Also out of this world, and not in a good way.</p>
                    <p className="mb-4">Weather does not play nice either. Blizzards, surprise floods, rivers that wander off. Every year, it is like nature rolls the dice and border villages just have to deal with whatever comes up.</p>
                    <p className="mb-0">And do not get me started on the basics. Roads? Maybe, maybe not. Power cuts? All the time. Want to find a school or a clinic? Good luck. Bring snacks for the journey. Let us just say, convenience is not really in the local vocabulary. But, hey, you do not get epic landscapes without a little drama, right?</p>
                  </div>
                </div>
              </section>
              <section id="culture-traditions" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Culture and Traditions Where Borders Get Blurry</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Border villages? Man, those places are a wild mashup. You are technically in India, but sometimes you are closer to the next countrys town than to Delhi or Mumbai. It is like one foot in, one foot out, and honestly, the culture reflects that. Local folk songs echo through the valleys, old school dialects still thrive, and you will find foods you have probably never even heard of unless your grandma has stories from back home. Crafts, recipes, even the way folks talk. It all gets handed down, like an heirloom you cannot buy on Amazon.</p>
                <p className="mb-0 opacity-0 animate-fade-in">And festivals? Oh, they go all out. You have got monks in Tawang chanting for hours, or people in Assam losing their minds over harvest festivals. Stuff that makes daily life feel straight out of a movie. There is a real we are all in this together vibe, even if the next village is technically across a border. Shared rivers, markets, even family ties. Sometimes it is all peace and parties, and sometimes, well, let us just say it is not all kumbaya.</p>
              </section>
              <section id="real-stories" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Real Stories Life at the Edge</h2>
                <p className="mb-4 text-xl font-semibold opacity-0 animate-fade-in">Turtuk Ladakh</p>
                <p className="mb-4 opacity-0 animate-fade-in">Talk about a place with an identity crisis (in the best way). Turtuk used to be Baltistan, now it is India. Apricot trees everywhere, houses built from stone, and a culture that is this wild fusion of Central Asian and Ladakhi. The locals? Super proud. They will invite you in for tea, feed you too much, and tell stories about ancient trade routes and how they have rolled with the punches over the years.</p>
                <p className="mb-4 text-xl font-semibold opacity-0 animate-fade-in">Kibithu Arunachal Pradesh</p>
                <p className="mb-4 opacity-0 animate-fade-in">Welcome to the land of epic sunrises. Kibithu is the first spot in India to catch the sun. The Meyor tribe lives here, basically hugging the mountains. Their connection to the land runs deep. Ancient rituals, languages nobody else speaks, and now, a little bit of road and phone signal creeping in. Old meets new, but the old stuff? Still holding strong.</p>
                <p className="mb-4 text-xl font-semibold opacity-0 animate-fade-in">Chitkul Himachal Pradesh</p>
                <p className="mb-4 opacity-0 animate-fade-in">They call it Indias last village. Sounds dramatic, but it is kind of true. Wooden homes, a sky full of stars, and traditions that make you feel like you stepped back in time. Winters are brutal. Phone signal? Good luck. But the connection people have to the land. Unbreakable.</p>
                <p className="mb-4 text-xl font-semibold opacity-0 animate-fade-in">Ha Arunachal Pradesh</p>
                <p className="mb-4 opacity-0 animate-fade-in">Monpa tribe territory. The village clings to its Buddhist roots, and the wooden architecture is all about teamwork. Neighbors helping neighbors, everyone pitching in. Farming keeps them going, and the monastery is the social hub. Isolation? Maybe. Strong sense of community? Absolutely.</p>
                <p className="mb-4 text-xl font-semibold opacity-0 animate-fade-in">Alis Story Bengal Border</p>
                <p className="mb-4 opacity-0 animate-fade-in">Now, not everything is sunshine and rainbows. On the West Bengal border, people like Ali remember when villages thrived on trade and easy movement. Now? Fences, climate mess ups, and fewer ways to make a living. Life is hard, but people are not giving up. They move, hustle, adapt, and just keep going, stories of survival tucked in their pockets.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">That is border life, in all its messy, beautiful, sometimes tough glory.</p>
                    <p className="mb-4">So, here is how it goes down: most folks are either out in the fields, herding livestock, or getting crafty with their hands. Whatever the land and the season throw at them. Nothing fancy, just life rolling on with whatever is at hand.</p>
                    <p className="mb-4">Kids? Oh man, these kids are tough. Some of them hoof it for miles to school, if you can call a couple benches under the open sky a school. Sun in their eyes, rain on their heads, and not a computer in sight. Try whining about your commute after that.</p>
                    <p className="mb-0">Slowly, you see some changes creeping in. The government has got these programs. Border Area Development, Vibrant Village, all that jazz. Clinics pop up where there used to be none, and now you might even get a bar or two of cell service if you are lucky. Not exactly city life, but hey, it is getting better.</p>
                  </div>
                </div>
              </section>
              <section id="borderland-tourism" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Borderland Tourism Where Stories and Scenery Collide</h2>
                <p className="mb-4 opacity-0 animate-fade-in">There is this magnetic pull, right? Folks are ditching the usual tourist traps and heading out to the edge. Literally, the borderlands. Out here, you are not elbowing through crowds for a blurry photo. You are hiking wild mountains nobody has Instagrammed to death, dancing at some harvest festival with your new best friends, crashing at homestays, and shoveling down food that will ruin you for city takeout forever.</p>
                <p className="mb-0 opacity-0 animate-fade-in">But hey, it is not just about swooping in for cool selfies. If you are going to do this right, you have got to back the local scene. Shop from the folks who live there, actually listen when they tell you what is cool (and what is off limits), and maybe pick up your trash, yeah? The trick is keeping things real and beautiful without turning the place into the next tourist circus. Locals are not just along for the ride; they are steering the ship, and travelers need to respect that.</p>
              </section>
              <section id="challenges-progress" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Challenges and Progress The Borderland Hustle</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, real talk: life out here is not all misty mornings and sunset views. These border villages? They are still wrestling with shaky healthcare, blackouts that make you nostalgic for candlelight, young people skipping town for better gigs, and the occasional flood or landslide just to keep things interesting. Still, things are not standing still. The government is rolling out new roads, better schools, jobs that might actually make kids want to stick around, and tourism plans that do not wreck the place.</p>
                <p className="mb-4 opacity-0 animate-fade-in">When stuff hits the fan. Be it a border flare up or some natural disaster. The army and the locals team up. It is not all military boots and marches; sometimes it is villagers and soldiers side by side, rebuilding or helping out. That is how you get tight knit communities and, honestly, a stronger country.</p>
                <p className="mb-0 opacity-0 animate-fade-in">And you know, as these stories leak out beyond the hills and valleys, more people are tuning in. Suddenly, the edges of India are not so far away. They are part of the bigger picture, getting a shot at the future they deserve.</p>
              </section>
              <section id="wrapping-up" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Wrapping Up the Journey</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Alright, let us wrap this up. Indias border villages? They are not just dots on a map. They are wild, gritty, and full of surprises. Imagine biting into a sun warmed apricot in Ladakh, waking up to a sunrise that actually makes you forget your phone exists in Arunachal, or stumbling across the last crooked rooftop in Himachal before the mountains swallow everything. These places, man, they are tough as nails but somehow overflowing with warmth.</p>
                <p className="mb-4 opacity-0 animate-fade-in">If you ever drag yourself out there, it is not just about snagging a cool selfie. You start to get what it really means to carve out a life where the road ends, where tradition wrestles with the modern world and both usually end up sharing a cup of chai. When you actually listen to their stories and do not just treat the whole trip like an Instagram prop. You help keep these places, and their wild, beautiful chaos, alive.</p>
                <p className="mb-4 opacity-0 animate-fade-in">So yeah, next time wanderlust hits, maybe skip the tourist traps. The real magic? It is hanging out on the fringe, where India stretches out its arms and dares you to come closer.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Which border village story resonated with you most?</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#journey-begins" className="text-blue-600 hover:underline transition-colors duration-200">Journey Begins</Link></li>
                  <li><Link to="#culture-traditions" className="text-blue-600 hover:underline transition-colors duration-200">Culture and Traditions</Link></li>
                  <li><Link to="#real-stories" className="text-blue-600 hover:underline transition-colors duration-200">Real Stories</Link></li>
                  <li><Link to="#borderland-tourism" className="text-blue-600 hover:underline transition-colors duration-200">Borderland Tourism</Link></li>
                  <li><Link to="#challenges-progress" className="text-blue-600 hover:underline transition-colors duration-200">Challenges and Progress</Link></li>
                  <li><Link to="#wrapping-up" className="text-blue-600 hover:underline transition-colors duration-200">Wrapping Up</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>Life in Indias border villages</strong>, <strong>Indian borderland stories</strong>, and <strong>remote Indian villages</strong>. We are passionate about sharing <strong>border culture India</strong> that inspire your next trip in <strong>India</strong> and beyond.</p>
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
                    <img src="https://i.pinimg.com/1200x/9f/9f/55/9f9f55fac94fe8eb780e5955b2430416.jpg" alt="Kedarkantha Snow" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>India oldest temple</strong></p>
                    <Link to="Oldesttemplesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
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

export default BorderVillagesBlog;
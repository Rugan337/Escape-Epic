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
            <p className="text-gray-400 mb-4">Feel free to contact and reach us !!</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <ion-icon name="call-outline" className="text-blue-600"></ion-icon>
                <Link to="tel:+919345707347" className="text-gray-400 hover:text-white transition-colors duration-200">+91 9566839299</Link>
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

const LisbonLocalBlog = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);
    document.querySelectorAll('.main-content p, .paragraph-container, .main-content ul').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="LisbonLocalBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-6" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/38/43/81/3843810978ef9101adc5a2bdec119d08.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Lisbon Like a Local: Cafes, Streets, and Secret Spots
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="discovering-lisbon" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Discovering the Real Lisbon: A Locals Perspective</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Hey there, fellow travelers! After falling head over heels for Lisbon during my three month stay last summer, I just had to share all my favorite spots with you. Forget those tourist traps. Let us explore the authentic heart of this incredible city together!</p>
              </section>
              <section id="why-fell-in-love" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why I Fell in Love with Lisbon</h2>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">There is something magical about waking up to the sound of trams rattling past pastel colored buildings. Lisbon captured my heart with its:</p>
                    <p className="mb-4">I fell in love with Lisbon the moment the trams creaking wheels sang me up the steep incline of Alfama, where the air hung heavy with the scent of salt kissed Atlantic winds mingling with the caramelized sweetness of pastéis de nata fresh from the oven. Their flaky crusts crumbled like the citys own layered history under the weight of seven hills that cradle secrets older than the Moors who once etched their arabesques into the whitewashed walls. It was the way the fado crooned from shadowed taverns at dusk. Those melancholic guitar strings plucked at the heartstrings of saudade, a word that means everything and nothing. The ache of what is lost and the joy of what is fleeting wrapped around me like the golden light of a late afternoon sol that bathes the Tagus River in molten amber. It turned ferries into silhouettes of dreamers chasing horizons where the ocean whispers promises of voyages yet to come. Oh, how the azulejos gleamed. Those cobalt and canary tiled murals on every facade told stories in shards of porcelain poetry: saints and sirens, ships and storms. It was a visual symphony that peeled back the veil on an empire that once spanned seas. Now it is distilled into the humble grace of a fisherman mending nets on the docks of Belem.</p>
                  </div>
                </div>
              </section>
              <section id="favorite-cafes" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">My Favorite Local Cafes</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Trust me, café culture is EVERYTHING here. I started every morning with a bica (Lisbons powerful espresso) while watching the city come to life.</p>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5 mb-4 opacity-0 animate-fade-in">
                  <li><strong>Casa Sao Miguel:</strong> Tucked away in Alfalmas winding streets, I spent countless mornings here sketching in my journal. Their pastéis de nata are honestly life changing! The locals who gather here shared so many stories with me.</li>
                  <li><strong>Do Beco:</strong> I stumbled upon this Saldanha gem completely by accident. Their homemade sourdough became my weekend ritual, and I ended up befriending the owner who invited me to their jazz evenings!</li>
                  <li><strong>Seagull Method Cafe:</strong> My go to workspace when I needed to update my travel journal. The breakfast bowls kept me fueled through long writing sessions.</li>
                  <li><strong>Hello, Kristof:</strong> Perfect minimalist vibes when I needed focus time. I loved flipping through their international magazines while sipping their specialty brews.</li>
                  <li><strong>Fabrica Coffee Roasters:</strong> When I wanted to treat myself to truly exceptional coffee. I watched the baristas work their magic while the morning light streamed through the windows.</li>
                </ul>
              </section>
              <section id="neighborhoods" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Neighborhoods Worth Getting Lost In</h2>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">I spent days wandering these areas, each with its own distinct personality:</p>
                    <p className="mb-4">In the labyrinthine embrace of neighborhoods worth getting lost in, where cobblestones conspire with shadows to unravel the hurried soul, Alfalmas serpentine alleys in Lisbon first ensnared me. It was a Moorish maze of fado haunted nooks where whitewashed walls lean conspiratorially inward. They dripped with the salt of Atlantic sighs and the honeyed lament of guitar strings that pluck at the threads of saudade. They led the wanderer past sardine grilled doorways and into the sudden revelation of a miradouro where the Tagus unfurls like a lovers ribbon under a sky bruised purple at dusk. From there, the medina of Marrakech summons with its riotous pulse. It was a kaleidoscopic warren of ochre arches and indigo dyed wool dangling like nomadic dreams. The call to prayer wove through the clamor of brass hammers shaping lanterns that flicker secrets in riads hidden behind rose madder doors. Every turn yielded a souk stall spilling cumin scented spices or silks that slither like whispers. It ensnared you in a dance of haggling and heat until the call of a distant drum pulled you deeper into the heart of a city that breathes in vibrant defiance. Its walls etched with the graffiti of centuries and the fleeting tattoos of travelers who came to vanish and found themselves reborn. Across the Tiber in Romes Trastevere, the enchantment shifts to a bohemian reverie of ivy cloaked palazzos and ivy wreathed fountains where the air tastes of rosemary roasted artichokes.</p>
                  </div>
                </div>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5 mb-4 opacity-0 animate-fade-in">
                  <li><strong>Alfama:</strong> Getting lost here was my favorite pastime! Between the tile covered buildings and unexpected viewpoints, I discovered tiny family run grocers where grandmothers insisted I try their homemade cheese.</li>
                  <li><strong>Graca:</strong> I accidentally found the most incredible street art here! The panoramic views from Miradouro da Senhora do Monte became my sunset spot. I would bring a bottle of vinho verde and watch the city lights come on.</li>
                  <li><strong>Bairro Alto and Principe Real:</strong> Such different vibes between day and night! By day, I browsed quirky boutiques; by night, I followed the sounds of fado music down narrow alleys.</li>
                  <li><strong>Rua Verde:</strong> I watched this street transform over my months in Lisbon. It is becoming the coolest hangout spot with plant filled cafés and indie shops. Way more authentic than the touristy Pink Street!</li>
                </ul>
              </section>
              <section id="hidden-gems" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Hidden Gems That Made My Trip Special</h2>
                <p className="mb-4 opacity-0 animate-fade-in">These off beat spots gave me my favorite Lisbon memories:</p>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5 mb-4 opacity-0 animate-fade-in">
                  <li><strong>Panoramico de Monsanto:</strong> I almost did not make the trek out here, but WOW. This abandoned modernist building covered in street art has the most spectacular city views. I had the entire place to myself one misty morning!</li>
                  <li><strong>Jardim do Torel:</strong> My secret reading spot! I would grab pastries from a nearby bakery and spend hours on these peaceful benches, occasionally looking up to admire the view.</li>
                  <li><strong>Ler Devagar at LX Factory:</strong> I accidentally spent an entire rainy afternoon browsing this incredible bookshop with its flying bicycle installation. The whole industrial complex is worth exploring!</li>
                  <li><strong>Quinta dos Azulejos Garden:</strong> It took me three attempts to find this hidden garden, but the blue tiled walls transported me to another century. I sat sketching for hours without seeing another soul.</li>
                  <li><strong>Elevador da Bica:</strong> Skip the tourist packed tram 28 and ride this funicular instead! I got my best Lisbon photos here without fighting any crowds.</li>
                </ul>
              </section>
              <section id="where-ate" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Where I Actually Ate (Not Where the Guidebooks Sent Me)</h2>
                <p className="mb-4 opacity-0 animate-fade-in">After some mediocre meals in tourist spots, I started asking locals where THEY eat:</p>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5 mb-4 opacity-0 animate-fade-in">
                  <li><strong>Manteigaria:</strong> I watched them make fresh pastéis de nata through the glass window. The little bell they ring when a new batch comes out became my favorite sound in the city!</li>
                  <li><strong>Santo Antonio:</strong> The upstairs tea room became my rainy day refuge. The elderly server recognized me by my third visit and started saving the best table with the castle view.</li>
                  <li><strong>Clube do Jornalista:</strong> A local friend brought me here for my birthday dinner in their garden. The fusion of traditional Portuguese flavors with modern techniques blew me away.</li>
                  <li><strong>Touta Ballouta:</strong> When I needed a break from Portuguese cuisine, this Lebanese spot hit the spot. The owner shared stories about moving to Lisbon while I devoured the best hummus I have had outside the Middle East.</li>
                  <li><strong>Potato Project:</strong> Seriously, who knew fries could be this good? I still dream about their truffle and parmesan topping.</li>
                </ul>
              </section>
              <section id="experience-lisbon" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Actually Experience Lisbon</h2>
                <ul className="text-lg leading-loose text-gray-700 space-y-2 list-disc pl-5 mb-4 opacity-0 animate-fade-in">
                  <li>Stay in Santos or Principe Real if you want to live like a local but still reach all the sights easily</li>
                  <li>Ditch the hop on hop off bus and WALK everywhere. My calves got so strong from those hills!</li>
                  <li>Wake up early (I know, I know) to experience the city before cruise ship crowds arrive</li>
                  <li>Learn just a few Portuguese phrases. My terrible pronunciation of obrigada made locals smile</li>
                  <li>Build getting lost time into your schedule. My best discoveries happened when I put away Google Maps</li>
                  <li>Find your own special miradouro (viewpoint). Mine was a tiny unnamed spot behind Graca that I stumbled upon while trying to find a shortcut</li>
                </ul>
              </section>
              <section id="final-thoughts" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Final Thoughts</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Looking back at my Lisbon photos now, I realize it was not just the stunning architecture or delicious food that made me fall so hard for this city. It was the unexpected moments. The elderly woman who invited me into her Alfama home to show me her collection of fado records, the street artist who let me try spray painting on an approved wall, the cafe owner who remembered my order after just one visit.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Lisbon rewards the curious. So put down the checklist, lace up comfortable shoes, and see where the cobblestone streets take you. I promise the memories you will make will be worth so much more than another photo of a famous landmark!</p>
                <p className="mb-4 opacity-0 animate-fade-in">What questions do you have about Lisbon? I am always happy to share more specific recommendations!</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#discovering-lisbon" className="text-blue-600 hover:underline transition-colors duration-200">Discovering the Real Lisbon</Link></li>
                  <li><Link to="#why-fell-in-love" className="text-blue-600 hover:underline transition-colors duration-200">Why I Fell in Love with Lisbon</Link></li>
                  <li><Link to="#favorite-cafes" className="text-blue-600 hover:underline transition-colors duration-200">My Favorite Local Cafes</Link></li>
                  <li><Link to="#neighborhoods" className="text-blue-600 hover:underline transition-colors duration-200">Neighborhoods Worth Getting Lost In</Link></li>
                  <li><Link to="#hidden-gems" className="text-blue-600 hover:underline transition-colors duration-200">Hidden Gems That Made My Trip Special</Link></li>
                  <li><Link to="#where-ate" className="text-blue-600 hover:underline transition-colors duration-200">Where I Actually Ate</Link></li>
                  <li><Link to="#experience-lisbon" className="text-blue-600 hover:underline transition-colors duration-200">How to Actually Experience Lisbon</Link></li>
                  <li><Link to="#final-thoughts" className="text-blue-600 hover:underline transition-colors duration-200">Final Thoughts</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>Lisbon local spots</strong>, <strong>hidden cafes Lisbon</strong>, and <strong>secret streets Portugal</strong>. We are passionate about sharing <strong>authentic travel Lisbon</strong> that inspire your next trip in <strong>Europe</strong> and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/9b/ae/48/9bae48a7c71ece38772506ea36d34ff1.jpg" alt="European Castles" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>European Castles</strong></p>
                    <Link to="Europeancastlesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/c3/cc/46/c3cc46f0c1a201dab07ae1638c237543.jpg" alt="Love Affair Vineyards" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>My Love Affair</strong></p>
                    <Link to="Europeanvineyardsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/91/31/b2/9131b294a476a0bb5b7f871af36b89e0.jpg" alt="Europe Shoestring" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Europe Shoestring</strong></p>
                    <Link to="Europeshoestringblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/6c/05/f6/6c05f6ef0d07c8d6412aab09afb86c77.jpg" alt="Christmas Markets" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Best Christmas Markets</strong></p>
                    <Link to="Bestchristmasmarketsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/16/7e/c2/167ec259e41bf1e800c888657e071cf9.jpg" alt="Movie Literature" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Movie Literature Locations</strong></p>
                    <Link to="Movieliteraturelocations" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
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

export default LisbonLocalBlog;
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

const EuropeanCastlesBlog = () => {
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
    <div className="EuropeanCastlesBlog" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/59/ff/e1/59ffe12a7d509c47cc6ba80276dc972c.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              European Castles That Look Straight Out of Fairy Tales
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="discovering-castles" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">European Castles That Stole My Heart A Personal Journey Through Fairy Tale Destinations</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Hey there fellow dreamers. After falling head over heels for European castles during my adventures across the continent over the past three years, I just had to share all my favorite magical spots with you. Forget those stuffy history lessons. Lets explore the enchanting soul of these fairy tale havens together. Imagine waking up to the sight of towers piercing the mist against ancient stone walls, sipping a warm drink while the sun rises over rolling hills. These castles arent just destinations. Theyre portals to stories that linger long after youve left.</p>
              </section>
              <section id="obsession-started" className="mb-6 fade-in">
                
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Ill be honest. I used to think people who got excited about old buildings were a bit, well, boring. Then I saw a photo of Neuschwanstein Castle on Instagram, and something just clicked. That fairy tale silhouette against the Bavarian mountains made me realize I needed to see these magical places for myself. After visiting 15 incredible European castles, Im officially that person who gets way too excited about turrets and drawbridges. And you know what? Im totally okay with that.</p>
                    <p className="mb-0">Perched like a Wagnerian fever dream on a craggy spur above the Pollat Gorge in Bavarias alpine embrace, Neuschwanstein Castle isnt just stone and spire. Its the madcap hallucination of King Ludwig II, that reclusive romantic who poured his fairytale obsessions into a Gothic extravaganza, starting with the foundation stone laid on September 5, 1869. Turrets twist skyward in neo Romantic frenzy. Frescoed halls echo with Lohengrin legends painted by court artists who captured swans and knights in luminous glory, while cavernous throne rooms, throne unfinished mind you, gape like invitations to a ball where the mad king himself waltzed with shadows till dawn. From its gateway bastion where Ludwig brooded over mountain mists, it stares down at the Austrian border like a sentinel of solitude, so enchanting it birthed Disneylands Sleeping Beauty Castle in its whimsical wake.</p>
                  </div>
                </div>
              </section>
              <section id="what-makes-magical" className="mb-6 fade-in">
                
                <p className="mb-4 opacity-0 animate-fade-in">Before I dive into my favorites, let me tell you what Ive learned makes these places so special. Its the perfect blend of timeless wonder and whimsical details that hits you the moment you arrive.</p>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2 list-disc pl-5">
                  <li>The wow factor when you first see them, that moment when you round a corner and suddenly theres this incredible structure that looks too perfect to be real.</li>
                  <li>Stories that give you goosebumps. Every castle has legends, and the best ones make you feel like youre stepping into a storybook.</li>
                  <li>Those Instagram worthy details: ornate facades, mysterious towers, and gardens that look like they were designed by Disney.</li>
                  <li>The setting matters: perched on cliffs, surrounded by forests, or reflected in lakes. Location is everything.</li>
                </ul>
              </section>
              <section id="top-castles" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">My Top European Castles</h2>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-4 list-none pl-0">
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Neuschwanstein Castle Germany The One That Started It All</strong> This castle literally inspired Disneys Sleeping Beauty Castle, and when you see it in person youll understand why. King Ludwig II built this place as his personal fantasy retreat, and honestly the man had excellent taste. Those white stone walls and blue topped turrets look like they were painted by an artist. The bridge Marienbrucke gives you the most incredible photo opportunities, just dont look down if youre scared of heights. The interior rooms are completely over the top with opera themed decorations. The forest setting makes it feel like youre in an actual fairy tale. Pro tip: Book your tickets online way in advance.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Pena Palace Portugal A Rainbow Castle That Shouldnt Work But Totally Does</strong> When I first saw photos of Pena Palace, I thought someone had gone crazy with Photoshop. Nope, this place really is painted in bright yellows reds and blues, and somehow its absolutely stunning. The color combination sounds terrible on paper but looks magical in real life. Moorish Gothic and Baroque styles all mixed together, it shouldnt work but it does. The misty forest setting makes it feel mysterious and romantic. I spent an entire afternoon just wandering the terraced gardens and taking photos from every possible angle.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Château de Chambord France Where Leonardo da Vinci Left His Mark</strong> The Loire Valley is packed with beautiful châteaux but Chambord is the one that made my jaw drop. With over 400 rooms and a double helix staircase that might have been designed by Leonardo da Vinci himself, this place is an architectural masterpiece. The famous staircase where two people can go up and down without ever meeting, 440 rooms yes I tried to count them all and gave up, the rooftop terrace with all those chimneys and spires. Massive parklands perfect for picnicking. The Renaissance details are incredible, and if youre into architecture or art history you could easily spend a full day here.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Bojnice Castle Slovakia The Hidden Gem Everyone Should Know About</strong> This one doesnt get nearly enough attention, which is honestly fine by me because it means fewer crowds. Bojnice Castle has everything you want in a fairy tale castle: Gothic curves aqua green turrets and even a ghost festival every spring. Those spiral staircases that make you feel like Rapunzel, rich art collections that most people dont know about. Natural caves underneath the castle seriously. Perfect for wedding photos if youre into that sort of thing. The 12th century history gives it serious medieval vibes but the romantic renovations make it feel like a storybook setting.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Alcazar of Segovia Spain The Castle That Looks Like a Ship</strong> Perched on a cliff above Segovia this castle has the most unique silhouette Ive ever seen. It literally looks like a stone ship sailing through the green countryside and the pointed slate roofs make it instantly recognizable. The Golden Throne Room with its incredible ceiling details, Moorish and Christian architectural styles blended perfectly. That dramatic clifftop location with panoramic views. Rich history as both fortress and royal palace. The drawbridge entrance made me feel like I was about to meet a medieval king and the interior rooms are filled with the kind of ornate details that make you want to move in immediately.
                  </li>
                </ul>
              </section>
              <section id="hidden-gems" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Hidden Gems That Feel Like Secret Discoveries</h2>
                <p className="mb-4 opacity-0 animate-fade-in">These underrated treasures gave me my favorite castle memories, places where the crowds fade and the enchantment unfolds just for you.</p>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-4 list-none pl-0">
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Chillon Castle Switzerland The Lake Castle</strong> Set on a tiny island in Lake Geneva with snowcapped Alps as a backdrop, Chillon Castle looks like it was placed there by a fairy godmother. The reflection in the crystal clear water creates some of the most beautiful castle photos Ive ever taken. Gothic halls and romantic courtyards that transport you to medieval times, dungeons that inspired Lord Byrons poetry. Lake setting thats unlike any other castle location. Less crowded than famous Swiss attractions but equally stunning.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <strong>Vianden Castle Luxembourg The Underrated Beauty</strong> This hilltop castle in Luxembourg doesnt get the attention it deserves, which means you can explore without fighting crowds. The mix of Romanesque and Gothic architecture creates a perfect fairy tale silhouette against the forested hills. Dramatic views visible from the entire village below, medieval festivals that bring the castle to life. Hidden rooms and passages to explore. Authentic medieval atmosphere without the tourist chaos.
                  </li>
                </ul>
              </section>
              <section id="practical-tips" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Practical Tips From Someone Whos Been There</h2>
                <p className="mb-4 opacity-0 animate-fade-in">After visiting all these castles heres what I wish someone had told me before I started. These insider strategies will help you unlock the true magic.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-0">Planning your castle adventures. Its a delicious tangle of dusty tomes and daring detours, where you start by poring over maps dotted with crenellated crowns from the brooding ramparts of Edinburghs brooding stone giant whispering of Jacobite ghosts and Highland mist to the fairytale spires of Germanys Neuschwanstein perched like a Wagnerian dream on alpine crags that beg for a horse drawn carriage or at least a sturdy pair of boots. Layer in the logistics like a medieval feast: snag off season tickets to dodge the selfie stick hordes, book that ghost tour under a blood moon for chills that linger longer than the chill of flagstone floors, and pack a satchel with thermal layers for draughty dungeons and a journal for sketching gargoyles that leer from the battlements. Time it for autumns amber haze when fog rolls in like a cloaked assassin turning moats into mirrors of forgotten lore or springs wildflower siege that softens the scars of sieges past. Whatever the era, its about surrendering to the stones siren call, unearthing secrets in arrowslit windows and toasting triumphs in candlelit great halls.</p>
                  </div>
                </div>
              </section>
              <section id="why-changed" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why These European Castles Changed How I Travel</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Before my castle obsession began I was all about beaches and cities. Now I realize I was missing out on some of the most incredible architecture and history Europe has to offer. These fairytale castles Europe is famous for arent just tourist attractions. Theyre windows into centuries of human creativity ambition and storytelling. Each castle taught me something different. Neuschwanstein showed me that sometimes the most impractical dreams create the most beautiful realities. Pena Palace proved that bold choices can result in stunning beauty. Chambord demonstrated that true artistry stands the test of time. The best castles to visit Europe has to offer arent just about the buildings themselves. Theyre about the stories the settings and the way they make you feel like youve stepped into another world. Whether youre planning a romantic getaway a family adventure or a solo journey of discovery these European castles offer experiences you simply cant find anywhere else. What questions do you have about these castles? Im always happy to share more specific recommendations.</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="#discovering-castles" className="text-blue-600 hover:underline transition-colors duration-200">European Castles That Stole My Heart</Link></li>
                  <li><Link to="#obsession-started" className="text-blue-600 hover:underline transition-colors duration-200">My Castle Obsession Started With a Single Photo</Link></li>
                  <li><Link to="#what-makes-magical" className="text-blue-600 hover:underline transition-colors duration-200">What Makes a Castle Feel Like a Fairy Tale</Link></li>
                  <li><Link to="#top-castles" className="text-blue-600 hover:underline transition-colors duration-200">My Top European Castles</Link></li>
                  <li><Link to="#hidden-gems" className="text-blue-600 hover:underline transition-colors duration-200">Hidden Gems That Feel Like Secret Discoveries</Link></li>
                  <li><Link to="#practical-tips" className="text-blue-600 hover:underline transition-colors duration-200">Practical Tips From Someone Whos Been There</Link></li>
                  <li><Link to="#why-changed" className="text-blue-600 hover:underline transition-colors duration-200">Why These Castles Changed How I Travel</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>European castles</strong>, <strong>fairy tale castles Europe</strong>, and <strong>hidden heritage sites Europe</strong>. We are passionate about sharing <strong>offbeat castle travel Europe</strong> that inspire your next trip in <strong>Europe</strong> and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/af/79/c8/af79c8bc031010ccc0be95b621b4920f.jpg" alt="France Travel" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Lisbon like</strong></p>
                    <Link to="Europeshoestringblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/c3/cc/46/c3cc46f0c1a201dab07ae1638c237543.jpg" alt="Italy Travel" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>My Love affair</strong></p>
                    <Link to="Europeanvineyardsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="/assets/blog2img/e4.jpg" alt="Austria Travel" className="w-full rounded-lg mb-2" />
                    <p className="https://i.pinimg.com/1200x/91/31/b2/9131b294a476a0bb5b7f871af36b89e0.jpg"><strong>Europe shoerting</strong></p>
                    <Link to="Europeshoestringblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/6c/05/f6/6c05f6ef0d07c8d6412aab09afb86c77.jpg" alt="Portugal Travel" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Best christmas</strong></p>
                    <Link to="Bestchristmasmarketsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/16/7e/c2/167ec259e41bf1e800c888657e071cf9.jpg" alt="France Travel" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Movie Litreature</strong></p>
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

export default EuropeanCastlesBlog;
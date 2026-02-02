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

const MovieLiteratureLocations = () => {
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
    <div className="MovieLiteratureLocations" id="top">
      <Header />
      <main className="pt-24 lg:pt-20">
        <div className="hero-header relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-[60vh] min-h-[400px] flex items-center justify-center mb-8" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/7e/9b/7d/7e9b7d9d97a22159e0ea34e306dfea7d.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="header-container relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-0 line-height-1.2 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Movie and Literature Locations Across Europe
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <article className="main-content prose prose-lg max-w-none">
              <section id="introduction" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Movie and Literature Locations </h2>
                <p className="mb-4 opacity-0 animate-fade-in">Europes cities and landscapes have inspired generations of writers and directors. Many of the iconic places are available for all to visit. From the Hogwarts corridors of Alnwick Castle to the amorous Parisian streets, this trip links classic literature and film masterpieces with actual European locations.</p>
                <p className="mb-4 opacity-0 animate-fade-in">Walk in the footprints of much loved characters, learn about places from best selling books, and see where history and imagination intersect. This travel blog discovers enchanted film sets, book city strolls, and secret treats for a cinematic and storybook journey.</p>
                <p className="mb-0 opacity-0 animate-fade-in">Whether arranging your own epic tour or searching for inspiration for travel blogs, these locations deliver experiences that linger forever all underpinned by local culture, art, and history.</p>
              </section>
              <section id="why-visit" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Visit Movie and Literature Sites?</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Visiting film and literary sites in Europe provides more than lovely scenery. It allows tourists to relive stories, stand where famous scenes happened, and connect fiction with reality. These destinations provide new depths to reading or viewing, mixing fiction with local culture.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">In a world scrolling through screens, there is an electric alchemy in stepping onto the very cobblestones where ink met page or celluloid captured dreams. It turns Europes movie and literature sites into living portals that do not just echo tales. They ignite them in your veins, blending the thrill of recognition with the hush of creations birthplace, making every pilgrimage a defiant act against the digital blur. Picture yourself in Oxfords honeyed halls of Christ Church College, where the grand staircase doubled as Hogwarts grand entrance in the Harry Potter films. Its vaulted ceilings whisper spells as you trace the path young wizards once strode. The air is thick with the scent of aged oak and possibility, reminding you that magic is not conjured from wands alone but from places that hold stories like secrets in their stones. Or surrender to Dublins literary labyrinth, where James Joyces Ulysses unfurls across the Liffey in guided pub crawls through the Brazen Head the citys oldest tavern. Its low beams are scarred by centuries of pints and prose where you will sip Guinness amid readings of Bloomsday passages. The rain slicked streets outside mirror Leopold Blooms odyssey, transforming a foggy afternoon into a personal epic that challenges you to wander without a map, just heart and hunch. Venture to Croatias sun baked walls of Dubrovnik, the Iron Thrones perch in Game of Thrones, where climbing the ancient ramparts feels like scaling Westeros itself sea winds whipping your cloak as you overlook the Adriatics sapphire sprawl.</p>
                  </div>
                </div>
              </section>
              <section id="harry-potter-europe" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Harry Potters Europe: Castles and Magic</h2>
                
                <p className="mb-4 opacity-0 animate-fade-in">Alnwick was a true life Hogwarts and appeared in the early Harry Potter films, inviting fans to stroll its gardens, attempt broomstick flying lessons, and take in medieval rooms.</p>
               
                <p className="mb-4 opacity-0 animate-fade-in">Hogwarts Express footage was filmed across this breathtaking Scottish viaduct. Ride a steam locomotive for your own magical ride.</p>
                
                <p className="mb-0 opacity-0 animate-fade-in">Inspired the Hogwarts dining hall; visitors can eat and awe in the very same room that created the wizarding world.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Paris is basically Hollywood with croissants, is not it? If you have watched Inception and did not immediately want to run across the Bir Hakeim Bridge, I do not know what to tell you. And Montmartre in Amelie? Pure magic. The whole city is a film set, just waiting for someone dramatic to show up with a baguette and a beret.</p>
                    <p className="mb-4">If you are more of a bookworm than a cinephile, Paris has you covered too. Shakespeare and Company is not just a bookstore, it is a pilgrimage. Grab a coffee at Café de Flore. Pretend you are Sartre or Hemingway, plotting your next existential crisis. Wander the Left Bank and you might just channel your inner F. Scott Fitzgerald or James Joyce. Or at least, you will look artsy for Instagram.</p>
                    <p className="mb-0">And look, if you are wandering around Paris at midnight, you will basically trip over hidden alleys, mysterious little bookstores, and that whole swoony, old school romance vibe. It is all literature meets cinema, and it is impossible not to get swept up.</p>
                  </div>
                </div>
              </section>
              <section id="rome-florence" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Rome and Florence: Renaissance and Cinema</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Okay, lets kick things off in Rome. Audrey Hepburn and Gregory Peck basically turned the city into a movie set with Roman Holiday. You get the Spanish Steps, Trevi Fountain, Colosseum. All the greatest hits. Now, folks literally book tours just to walk in their footsteps. And Florence? That place is dripping with Dante vibes. You have got Santa Croce, Casa di Dante, and, if you are a Dan Brown addict, you can go all Inferno and follow Robert Langdons wild chase across the city.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-4">Scoot over to Rome and Florence if you want to live your best Renaissance meets movie star life. Roman Holiday? Audrey Hepburn on a Vespa, Gregory Peck being peak Gregory Peck. It is all there. You can literally walk where they filmed, Spanish Steps and all, pretending the paparazzi are following you (unless they actually are, in which case, wow).</p>
                    <p className="mb-0">Florence is not just art on the walls; it has got Dantes ghost lurking around Santa Croce and Casa di Dante. If you are into Dan Browns Inferno level drama, you can join a tour and solve pseudo mysteries while gawking at Renaissance masterpieces. Lets be real, you will probably feel at least ten percent smarter just breathing the air there.</p>
                  </div>
                </div>
              </section>
              <section id="london" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">London: Literary Legends and Movie Magic</h2>
                <p className="mb-0 opacity-0 animate-fade-in">Londons a buffet for bookworms and cinephiles. Sherlock Holmes? Slide over to Baker Street, check out the museum, and poke around sites that made the films iconic. Downton Abbey fans? Highclere Castle is basically Mecca TV magic, tea, the works. And if you ever watched Notting Hill and wanted to see that blue door or Portobello Road? Yeah, they are real. You can actually stand there and pretend you are Julia Roberts. Or Hugh Grant. No judgment.</p>
              </section>
              <section id="edinburgh" className="mb-6 fade-in">
              
                <p className="mb-0 opacity-0 animate-fade-in">Edinburgh. If you are into books, this place is like Disneyland. J.K. Rowling scribbled Harry Potter into existence at The Elephant House Café, and people still hunt down her old haunts. The Royal Mile is loaded with statues of literary heavyweights like Stevenson and Scott. Plus, the city throws these book festivals where you can geek out with other story obsessed folks.</p>
              </section>
              <section id="prague" className="mb-6 fade-in">
                
                <p className="mb-4 opacity-0 animate-fade-in">Prague is weird in the best way. Kafkas gloomy imagination haunts the city; there is literally a Kafka Museum, and Old Town oozes with that surreal, slightly creepy vibe. If you are more into action flicks, Mission: Impossible filmed wild chase scenes on the Charles Bridge and through those dark, twisty archways. Walking tours here? You feel half spy, half philosopher.</p>
                <div className="paragraph-container bg-gray-50 p-6 rounded-lg opacity-0 animate-fade-in mb-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text">
                    <p className="mb-0">Pragues Old Town does not just greet you it ensnares you in a labyrinth of baroque spires and alchemical whispers, where the Astronomical Clocks skeletal apostles chime like a fever dream at noon, their hollow eyes scanning the throng as if judging the souls spilling from gothic portals, turning a midday stroll into an unwitting descent into Kafkas bureaucratic nightmare where time itself rebels against the linear. I first felt the surreal snag on a drizzly October eve in 2025, slipping into the Anonymous Bars shadowed maw off a nameless alley, where masked bartenders faces shrouded in Guy Fawkes veils ignited flaming absinthe rituals that birthed blood cocktails from IV bags, the invisible menu blooming under blacklight like forbidden glyphs, each sip a velvet unraveling of reality that blurred the line between speakeasy séance and Dalis melting clocks, leaving me adrift in a haze where laughter echoed from velvet banquettes.</p>
                  </div>
                </div>
              </section>
              <section id="dublin" className="mb-6 fade-in">
               
                <p className="mb-0 opacity-0 animate-fade-in">Dublins got storytelling in its DNA. There is the Writers Museum, whole street parties for James Joyces Bloomsday, and pubs where legends like Wilde and Beckett probably swapped insults. Seriously, the citys walking tours are a boozy, brainy romp through Irish history.</p>
              </section>
              <section id="vienna-salzburg" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Vienna and Salzburg: Sound of Music and Literary Grandeur</h2>
                <p className="mb-0 opacity-0 animate-fade-in">Salzburg. It is impossible not to hum Do Re Mi as you tour those gardens and lakes from The Sound of Music. Vienna is pure class, with grand coffee houses where Mozart and the Empress Sissi get their own cinematic moments. Basically, it is a place where your inner book nerd and film buff can finally agree on something.</p>
              </section>
              <section id="scotland" className="mb-6 fade-in">
               
                <p className="mb-0 opacity-0 animate-fade-in">Dunnottar Castle. Moody cliffs, wild sea, Hamlet vibes. You half expect a ghost to pop up. Yorkshire villages? Total Brontë country. You can wander Haworth and almost hear the wind howling like in Wuthering Heights. Super atmospheric, kind of perfect for moody selfies.</p>
              </section>
              <section id="spain" className="mb-6 fade-in">
                
                <p className="mb-0 opacity-0 animate-fade-in">Madrids got the Cervantes Institute, Don Quixote statues, and even the House Museum of Lope de Vega. Plus, Spanish cities love popping up in films, old and new, so you get this mash up of bookish charm and movie cool.</p>
              </section>
              <section id="other-places" className="mb-6 fade-in">
               
                <p className="mb-0 opacity-0 animate-fade-in">Bruges: Thanks to In Bruges, the city is now a quirky pilgrimage, all cobbled streets and dark comedy. St. Petersburg is Dostoevsky central. Think heavy novels, intense tours, and a vibe that is more vodka and philosophy than light sightseeing. Ischia Island? The Talented Mr. Ripley made it look dreamy and dangerous. And Estoril in Portugal? Bond was here, martinis and all.</p>
              </section>
              <section id="travel-tips" className="mb-6 fade-in">
                
                <p className="mb-0 opacity-0 animate-fade-in">Book those guided tours early trust me, they spill all the best behind the scenes secrets. Hunt down literary festivals, especially if you want to geek out with locals. Do not skip the museums, indie bookstores, or sneaky set locations. Oh, and check if there is filming or anniversary events going on sometimes you luck into something wild, like a cast reunion or a themed party.</p>
              </section>
              <section id="wrap-up" className="mb-6 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Wrap Up</h2>
                <p className="mb-4 opacity-0 animate-fade-in">Europe is just stacked with legendary spots where stories leap off the page (or screen) and smack you right in the feels. Hogwarts castles, moody Parisian bookshops, the dusty roads of Don Quixote everywhere you turn, there is something magical going on. Whether you are chasing movie locations or walking in a famous authors shoes, you will come home with stories of your own.</p>
                <p className="mb-0 opacity-0 animate-fade-in">So, pack your camera, scribble notes, and get ready for the kind of travel stories that will make everyone else jealous. Europes waiting for you go make your own epic.</p>
              </section>
            </article>
            <aside className="sidebar lg:sticky lg:top-24 self-start space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                
                <ul className="space-y-2 text-sm">
                  <li><Link to="#introduction" className="text-blue-600 hover:underline transition-colors duration-200">Introduction</Link></li>
                  <li><Link to="#why-visit" className="text-blue-600 hover:underline transition-colors duration-200">Why Visit?</Link></li>
                  <li><Link to="#harry-potter-europe" className="text-blue-600 hover:underline transition-colors duration-200">Harry Potters Europe</Link></li>
                  <li><Link to="#rome-florence" className="text-blue-600 hover:underline transition-colors duration-200">Rome and Florence</Link></li>
                  <li><Link to="#london" className="text-blue-600 hover:underline transition-colors duration-200">London</Link></li>
                  <li><Link to="#edinburgh" className="text-blue-600 hover:underline transition-colors duration-200">Edinburgh</Link></li>
                  <li><Link to="#prague" className="text-blue-600 hover:underline transition-colors duration-200">Prague</Link></li>
                  <li><Link to="#dublin" className="text-blue-600 hover:underline transition-colors duration-200">Dublin</Link></li>
                  <li><Link to="#vienna-salzburg" className="text-blue-600 hover:underline transition-colors duration-200">Vienna and Salzburg</Link></li>
                  <li><Link to="#scotland" className="text-blue-600 hover:underline transition-colors duration-200">Scotland</Link></li>
                  <li><Link to="#spain" className="text-blue-600 hover:underline transition-colors duration-200">Spain</Link></li>
                  <li><Link to="#other-places" className="text-blue-600 hover:underline transition-colors duration-200">Other Places</Link></li>
                  <li><Link to="#travel-tips" className="text-blue-600 hover:underline transition-colors duration-200">Travel Tips</Link></li>
                  <li><Link to="#wrap-up" className="text-blue-600 hover:underline transition-colors duration-200">Wrap Up</Link></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">About Escape Epic</h3>
                <img src="https://muddy-chocolate-t4djkabi8p.edgeone.app/logi.png" alt="Author Profile" className="w-32 mx-auto mb-4 rounded-full" />
                <p className="text-gray-600 text-sm text-center">Join <strong>Escape Epic</strong> as we uncover <strong>movie locations Europe</strong>, <strong>literary sites Europe</strong>, and <strong>film inspired travel Europe</strong>. We are passionate about sharing <strong>Europe book tours</strong> that inspire your next trip in <strong>Europe</strong> and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <div className="space-y-4">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/af/79/c8/af79c8bc031010ccc0be95b621b4920f.jpg" alt="Lisbon Travel" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Lisbon like</strong></p>
                    <Link to="Europeshoestringblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/9b/ae/48/9bae48a7c71ece38772506ea36d34ff1.jpg" alt="European Castles" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>European castles</strong></p>
                    <Link to="Europeancastlesblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/c3/cc/46/c3cc46f0c1a201dab07ae1638c237543.jpg" alt="European Vineyards" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>My love affair</strong></p>
                    <Link to="Europeanvineyardsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/1200x/91/31/b2/9131b294a476a0bb5b7f871af36b89e0.jpg" alt="Europe Shoestring" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Europe shoestring</strong></p>
                    <Link to="Europeshoestringblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-200">
                    <img src="https://i.pinimg.com/736x/6c/05/f6/6c05f6ef0d07c8d6412aab09afb86c77.jpg" alt="Christmas Markets" className="w-full rounded-lg mb-2" />
                    <p className="font-semibold text-sm mb-1"><strong>Best christmas</strong></p>
                    <Link to="Bestchristmasmarketsblog" className="text-blue-600 text-sm hover:underline transition-colors duration-200">Read Guide</Link>
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

export default MovieLiteratureLocations;
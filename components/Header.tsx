import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { searchableContent, SearchableContent } from '../data/searchableContent';
import { PhoneIcon, MailIcon, FacebookIcon, LinkedInIcon, TwitterIcon, SearchIcon, ChevronDownIcon, CloseIcon, MenuIcon } from './icons';
import { SearchHighlight } from './SearchHighlight';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Our Solutions', 
    path: '/solutions',
    megaMenu: [
      {
        heading: 'Core Services',
        links: [
          { name: 'Manned Guard Services', path: '/solutions' },
          { name: 'Electronic Security', path: '/solutions' },
          { name: 'Retail Security', path: '/solutions' },
          { name: 'Civil Detectives', path: '/solutions' },
        ]
      },
      {
        heading: 'Specialized Solutions',
        links: [
          { name: 'KAYJAY Cash Management', path: '/cash-management' },
          { name: 'Cash Transit & Management', path: '/cash-transit' },
          { name: 'Our Expertise & Training', path: '/expertise' },
          { name: 'Pre-employment Checks', path: '/expertise' },
          { name: 'Civil Recovery', path: '/solutions' },
        ]
      },
      {
        heading: 'Group Companies',
        links: [
          { name: 'KayJay Prime Movers', path: '/prime-movers' },
        ]
      }
    ]
  },
  { name: 'Why Choose Us', path: '/why-kayjay' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchableContent[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeLinkStyle = {
    color: '#D4AF37',
    fontWeight: '700',
  };

  // Effect for search overlay
  useEffect(() => {
    if (isSearchOverlayOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOverlayOpen]);

  // Effect for click outside desktop search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsResultsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 1) {
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.keywords.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  };
  
  const closeSearch = () => {
      setIsSearchOverlayOpen(false);
      setIsResultsVisible(false);
      setSearchTerm('');
      setSearchResults([]);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (name: string) => {
    setOpenMobileSubMenu(prev => (prev === name ? null : name));
  };

  const SearchResultsList = () => (
    <>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(result => (
            <li key={result.path}>
              <Link to={result.path} onClick={closeSearch} className="block p-4 hover:bg-kayjay-light-gray transition-colors">
                <div className="font-bold text-kayjay-blue">
                   <SearchHighlight text={result.title} highlight={searchTerm} />
                </div>
                <p className="text-sm text-gray-600">
                   <SearchHighlight text={result.description} highlight={searchTerm} />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-8 text-center text-gray-500">No results found for "{searchTerm}".</div>
      )}
    </>
  );

  return (
    <>
      <header className="sticky top-[-44px] hover:top-0 md:top-[-44px] z-40 w-full transition-all duration-300 ease-in-out">
        {/* Top Bar */}
        <div className="bg-kayjay-dark-gray text-white h-[44px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+94112522302" className="flex items-center space-x-2 hover:text-kayjay-gold transition-colors">
                <PhoneIcon className="h-4 w-4" />
                <span>+94 (11) 252 2302</span>
              </a>
              <a href="mailto:sales@kayjay-group.com" className="hidden sm:flex items-center space-x-2 hover:text-kayjay-gold transition-colors">
                <MailIcon className="h-4 w-4" />
                <span>sales@kayjay-group.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {/* Desktop Search Bar */}
              <div className="relative" ref={searchContainerRef}>
                 <div className="flex items-center">
                   <input
                     type="text"
                     value={searchTerm}
                     onChange={handleSearchChange}
                     onFocus={() => searchTerm.length > 1 && setIsResultsVisible(true)}
                     placeholder="Search..."
                     className="w-48 lg:w-56 pl-4 pr-10 py-2 border border-gray-500 bg-gray-600 text-white rounded-full focus:ring-kayjay-gold focus:border-kayjay-gold focus:bg-gray-700 transition-all duration-300 text-sm"
                   />
                   <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                     <SearchIcon className="h-5 w-5" />
                   </button>
                 </div>
                 {isResultsVisible && searchTerm.length > 1 && (
                   <div className="absolute top-full mt-2 w-96 max-h-96 overflow-y-auto bg-white rounded-md shadow-2xl border z-50">
                     <SearchResultsList />
                   </div>
                 )}
              </div>
              <div className="flex items-center space-x-4">
                  <a href="#" aria-label="Facebook" className="hover:text-kayjay-gold transition-colors"><FacebookIcon className="h-5 w-5" /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-kayjay-gold transition-colors"><LinkedInIcon className="h-5 w-5" /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-kayjay-gold transition-colors"><TwitterIcon className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div id="main-nav" className="bg-kayjay-blue shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <NavLink to="/" className="text-white text-2xl font-extrabold tracking-wider">
                  KAYJAY
                </NavLink>
              </div>
              
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link) => (
                  link.megaMenu ? (
                    <div key={link.name} className="relative group">
                      <span className="text-white hover:text-kayjay-gold px-2 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center">
                        {link.name}
                        <ChevronDownIcon className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                      </span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                        <div className="bg-white rounded-lg shadow-2xl p-8 grid grid-cols-3 gap-8">
                          {link.megaMenu.map(section => (
                            <div key={section.heading}>
                              <h3 className="font-bold text-kayjay-blue mb-4">{section.heading}</h3>
                              <ul className="space-y-3">
                                {section.links.map(subLink => (
                                  <li key={subLink.name}>
                                    <Link to={subLink.path} className="text-gray-600 hover:text-kayjay-gold transition-colors text-sm">{subLink.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      style={({ isActive }) => (isActive ? activeLinkStyle : { color: 'white' })}
                      className="hover:text-kayjay-gold px-2 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors"
                    >
                      {link.name}
                    </NavLink>
                  )
                ))}
              </nav>

              <div className="hidden lg:flex items-center">
                <Link to="/contact" className="bg-kayjay-gold text-kayjay-blue font-bold py-2 px-5 rounded-full text-sm hover:bg-yellow-400 transition-transform transform hover:scale-105">
                  Request a Quote
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                 <button onClick={() => setIsSearchOverlayOpen(true)} aria-label="Search website" className="text-white hover:text-kayjay-gold p-2">
                  <SearchIcon className="h-5 w-5" />
                </button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

           {/* Mobile Menu Panel */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-kayjay-blue border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  link.megaMenu ? (
                    <div key={link.name}>
                      <button 
                        onClick={() => toggleMobileSubMenu(link.name)}
                        className="w-full flex justify-between items-center text-left text-white hover:text-kayjay-gold px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${openMobileSubMenu === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileSubMenu === link.name && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-kayjay-gold/50">
                          {link.megaMenu.map(section => (
                            <div key={section.heading} className="py-2">
                              <h3 className="font-semibold text-kayjay-gold mb-2 px-2 text-sm uppercase tracking-wider">{section.heading}</h3>
                              <ul className="space-y-1">
                                {section.links.map(subLink => (
                                  <li key={subLink.name}>
                                    <Link 
                                      to={subLink.path} 
                                      onClick={closeMobileMenu}
                                      className="block text-white hover:text-kayjay-gold hover:bg-gray-700/50 px-2 py-2 rounded-md"
                                    >
                                      {subLink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={closeMobileMenu}
                      style={({ isActive }) => (isActive ? activeLinkStyle : { color: 'white' })}
                      className="hover:text-kayjay-gold block px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider"
                    >
                      {link.name}
                    </NavLink>
                  )
                ))}
                <div className="pt-4 px-3">
                    <Link to="/contact" onClick={closeMobileMenu} className="block w-full text-center bg-kayjay-gold text-kayjay-blue font-bold py-2 px-5 rounded-full text-base hover:bg-yellow-400 transition-colors">
                      Request a Quote
                    </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Overlay for Mobile */}
      {isSearchOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-4 pt-[15vh]">
          <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl" role="dialog" aria-modal="true">
            <div className="p-4">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search KayJay Security..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-md focus:ring-kayjay-gold focus:border-kayjay-gold"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <SearchIcon className="h-6 w-6"/>
                </div>
              </div>
              <button onClick={closeSearch} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                <CloseIcon className="h-6 w-6" />
                <span className="sr-only">Close search</span>
              </button>
            </div>
            {searchTerm.length > 1 && (
                 <div className="max-h-[50vh] overflow-y-auto border-t">
                    <SearchResultsList />
                </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
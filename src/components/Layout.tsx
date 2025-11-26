import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Menu, X, Phone, Mail, Linkedin, Calendar } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Client Success', href: '/client-success' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Image
                src="https://static.wixstatic.com/media/aa11aa_9e4ea985c2fb4dd98769d3b1e1d8e863~mv2.jpg?id=ap-logo-header"
                alt="AnchorPoint Business Development Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-paragraph text-foreground hover:text-primary transition-colors ${
                    location.pathname === item.href ? 'text-primary font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:347-675-2238" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-paragraph text-sm">347-675-2238</span>
              </a>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block font-paragraph text-foreground hover:text-primary transition-colors py-2 ${
                      location.pathname === item.href ? 'text-primary font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:347-675-2238" 
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-paragraph">347-675-2238</span>
                  </a>
                  <a 
                    href="mailto:moshe@anchorpointgrp.com" 
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="font-paragraph">moshe@anchorpointgrp.com</span>
                  </a>
                  <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="https://static.wixstatic.com/media/aa11aa_9e4ea985c2fb4dd98769d3b1e1d8e863~mv2.jpg?id=ap-logo-footer"
                  alt="AnchorPoint Business Development Logo"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="font-paragraph text-white/80 text-sm">
                Streamlining operations and delivering results for retail, commercial, 
                and warehouse businesses nationwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services#retail" className="font-paragraph text-white/80 hover:text-white transition-colors text-sm">
                    Retail Operations
                  </Link>
                </li>
                <li>
                  <Link to="/services#commercial" className="font-paragraph text-white/80 hover:text-white transition-colors text-sm">
                    Commercial Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services#warehouse" className="font-paragraph text-white/80 hover:text-white transition-colors text-sm">
                    Warehouse Management
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="font-paragraph text-white/80 hover:text-white transition-colors text-sm">
                    View All Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="font-paragraph text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="tel:347-675-2238" 
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-paragraph text-sm">347-675-2238</span>
                </a>
                <a 
                  href="mailto:moshe@anchorpointgrp.com" 
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-paragraph text-sm">moshe@anchorpointgrp.com</span>
                </a>
              </div>
            </div>

            {/* Social & Scheduling */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/company/anchorpointgrp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="font-paragraph text-sm">LinkedIn</span>
                </a>
                <a 
                  href="https://calendly.com/moshe-anchorpointgrp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  <span className="font-paragraph text-sm">Schedule Meeting</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-paragraph text-white/60 text-sm">
              © 2024 Anchor Point Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="font-paragraph text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="font-paragraph text-white/60 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Home, 
  Building2, 
  CloudLightning, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Star,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#E61A2D', // Strong Red
  dark: '#030712', // almost black
  light: '#ffffff',
  slate: '#f8fafc',
};

// Navigation
function Navigation({ onBack }: { onBack?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${isScrolled ? 'bg-red-600 text-white group-hover:bg-gray-900' : 'bg-white text-red-600 group-hover:bg-gray-200'}`}>
            <Home size={20} className="stroke-[2.5]" />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900 group-hover:text-red-600' : 'text-white group-hover:text-red-400'}`}>
            THE USA ROOFER
          </span>
        </div>
        
        <div className={`hidden md:flex gap-8 items-center text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
          <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#process" className="hover:text-red-600 transition-colors">Process</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Projects</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:123-456-7890" className={`flex items-center gap-2 text-sm font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <PhoneCall size={16} className={isScrolled ? "text-red-600" : "text-white"} />
            (800) USA-ROOF
          </a>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-red-600/20">
            Get an Estimate
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 border-t"
          >
            <a href="#services" className="font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#process" className="font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <div className="pt-4 border-t mt-2 flex flex-col gap-4">
              <a href="tel:123-456-7890" className="flex items-center gap-2 font-bold text-gray-900">
                <PhoneCall size={18} className="text-red-600" />
                (800) USA-ROOF
              </a>
              <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold text-center w-full">
                Get an Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

type ViewType = 'residential' | 'commercial';

// Noise Overlay Component for cinematic texture
function NoiseOverlay() {
  return (
    <div 
      className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
  );
}

// Hero Section (Editorial / Magazine Hero style)
function Hero({ view }: { view: ViewType }) {
  const isCommercial = view === 'commercial';
  const heading = isCommercial ? "COMMERCIAL" : "RESIDENTIAL";
  const image = isCommercial 
    ? "https://images.unsplash.com/photo-1541888086925-920f0fd5b651?auto=format&fit=crop&q=100&w=2940"
    : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=2940";

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-[#010204] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-[#010204]">
        <motion.div 
          className="w-full h-full"
          animate={{ scale: 1.05 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <img 
            src={image} 
            alt="Modern roof" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
        </motion.div>
        {/* Core Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010204] via-[#010204]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#010204] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent mix-blend-overlay" />
        <NoiseOverlay />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-16 pb-24">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-white/80 text-xs font-semibold uppercase tracking-[0.2em]">America's Best Since 1993</span>
              </div>
              <span className="w-px h-3 bg-white/20 hidden sm:block" />
              <span className="text-white/60 text-xs font-medium flex items-center gap-1.5 uppercase tracking-widest">
                <MapPin size={12} className="text-red-500"/> Manalapan, NJ
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold text-white leading-[0.85] tracking-tighter mb-10 group">
              <span className="block text-white/50 text-xl md:text-3xl lg:text-4xl tracking-[0.2em] font-light mb-6 ml-1 md:ml-2 uppercase">Elevate Your Property</span>
              <span className="block drop-shadow-2xl">{heading}</span>
              <span className="block mt-2 flex items-center gap-4 md:gap-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">ROOFING.</span>
                <span className="hidden md:block h-[2px] lg:h-[3px] flex-1 bg-gradient-to-r from-red-600 to-transparent self-center rounded-full opacity-50" />
              </span>
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed tracking-wide">
              Your property deserves an architectural crown. Experience uncompromising durability and zero APR financing with Central New Jersey's premier contractors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="h-14 sm:h-16 bg-white hover:bg-black hover:text-white hover:border-black border border-transparent text-black px-8 sm:px-10 rounded-sm font-semibold transition-all flex items-center justify-center gap-3 group text-[10px] sm:text-xs uppercase tracking-[0.15em] relative shadow-2xl">
                Schedule Inspection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-14 sm:h-16 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 sm:px-10 rounded-sm font-semibold transition-all flex items-center justify-center text-[10px] sm:text-xs uppercase tracking-[0.15em]">
                View Financing Options
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats / Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/5 pt-12"
        >
          <div>
            <div className="text-3xl md:text-4xl font-light tracking-tighter text-white mb-2">30<span className="text-red-500">+</span></div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.15em] font-semibold">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light tracking-tighter text-white mb-2">0<span className="text-red-500">%</span></div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.15em] font-semibold">APR Financing</div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-3xl md:text-4xl font-light tracking-tighter text-white mb-2">
              4.9 <Star size={20} className="fill-red-500 text-red-500" />
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.15em] font-semibold">Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light tracking-tighter text-white mb-2">24<span className="text-red-500">/</span>7</div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.15em] font-semibold">Emergency Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Problems Section (Clean Utility approach)
function Problems() {
  const problems = [
    { title: "Unexpected Leaks", icon: CloudLightning },
    { title: "Storm Damage", icon: CloudLightning },
    { title: "Aging Roof", icon: Clock },
    { title: "Bad Contractors", icon: Wrench },
    { title: "Insurance Nightmares", icon: ShieldCheck },
    { title: "No Peace of Mind", icon: Home },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">The Challenge</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Roofing Problems Keep You Up At Night
          </h3>
          <p className="text-lg text-gray-600">
            We understand the stress of a failing roof. From unexpected leaks to dealing with insurance companies, we eliminate the headache.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon size={24} className="text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900">{problem.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section (Technical / Grid approach)
function Services() {
  const services = [
    {
      title: "Residential Roofing",
      desc: "Complete roof replacements, new installations, and minor repairs for homeowners using premium architectural shingles.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Commercial Roofing",
      desc: "Flat roofs, TPO, EPDM, and metal roofing solutions designed for longevity and minimal business disruption.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1541888086925-920f0fd5b651?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Storm Damage & Repair",
      desc: "Emergency tarping, detailed inspections, and complete restoration services for wind, hail, and tree damage.",
      icon: CloudLightning,
      image: "https://images.unsplash.com/photo-1527018263351-404ced6ee73e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Comprehensive Roofing Services
            </h3>
          </div>
          <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-red-600 transition-colors">
            View All Services <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon size={24} className="text-red-600" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider group-hover:text-red-600 transition-colors">
                Learn More <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works (Brutalist / Editorial numbered approach)
function Process() {
  const steps = [
    { title: "Schedule Your Inspection", desc: "Contact us to schedule a free, no-obligation inspection of your property." },
    { title: "Detailed Assessment", desc: "Our experts thoroughly examine your roof, using drones and advanced tech to find every issue." },
    { title: "Transparent Pricing", desc: "Receive a detailed, easy-to-understand free estimate with 0% financing options available." },
    { title: "Expert Installation", desc: "Our certified crews execute the project swiftly and professionally, respecting your property." },
    { title: "Final Walkthrough", desc: "We ensure every detail meets our strict quality standards before considering the job done." },
    { title: "Lifetime Support", desc: "Enjoy peace of mind with our strong warranties and dedicated ongoing customer support." },
  ];

  return (
    <section id="process" className="py-24 bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-4 text-center">The Blueprint</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-20 text-center tracking-tight">
          How It Works
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-[80px] leading-none font-bold text-white/5 mb-4 font-serif absolute -top-8 -left-4">
                0{idx + 1}
              </div>
              <div className="relative z-10 pl-4 border-l border-red-600/30">
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section (Bold Split Layout)
function CTA() {
  return (
    <section className="bg-red-600 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to Protect Your Home?
        </h2>
        <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10 font-light">
          Join thousands of satisfied homeowners in Central New Jersey. 
          Get your free inspection and lock in a 0% APR financing plan today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="h-14 bg-white text-red-600 hover:bg-gray-50 px-10 rounded-full font-bold text-lg transition-all shadow-xl shadow-red-900/20">
            Get Your Free Estimate
          </button>
          <button className="h-14 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
            <PhoneCall size={20} />
            Call (800) USA-ROOF
          </button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} /> Fully Licensed & Insured
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} /> Local to Manalapan, NJ
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} /> Financing Available
          </span>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#030712] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-red-600 text-white">
                <Home size={20} className="stroke-[2.5]" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                THE USA ROOFER
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Manalapan NJ roofing contractor since 1993. America's best choice for roof replacement, repair, and new installations across Monmouth County.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Residential Roofing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Commercial Roofing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Storm Damage Repair</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Metal Roofs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Recent Projects</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Financing Options</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin size={18} className="text-red-500 shrink-0" />
                <span>Manalapan Township, NJ<br/>Monmouth County</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall size={18} className="text-red-500 shrink-0" />
                <a href="tel:123-456-7890" className="hover:text-white">(800) USA-ROOF</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} The USA Roofer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Gateway({ onSelect }: { onSelect: (type: ViewType) => void }) {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#010204]">
      
      {/* Absolute Logo */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-red-600 text-white shadow-2xl pointer-events-auto">
            <Home size={22} className="stroke-[2.5]" />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-[0.2em] text-white pointer-events-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            THE USA ROOFER
          </span>
        </div>
      </div>

      {/* Residential Split */}
      <div 
        onClick={() => onSelect('residential')} 
        className="flex-1 relative group cursor-pointer overflow-hidden transition-[flex] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] md:hover:flex-[1.4]"
      >
        <div className="absolute inset-0 z-0 bg-black">
          <motion.div 
            className="w-full h-full"
            animate={{ scale: 1.1 }}
            transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=2940" 
              alt="Residential Roofing" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] opacity-40 group-hover:opacity-70 group-hover:scale-105"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#010204] via-transparent to-transparent group-hover:via-[#010204]/20 transition-colors duration-1000 z-10" />
        <div className="absolute inset-0 bg-[#010204]/30 group-hover:bg-transparent transition-colors duration-1000 z-10" />
        <NoiseOverlay />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <Home size={40} className="text-white/40 mb-8 drop-shadow-2xl mx-auto group-hover:text-red-500 transition-colors duration-700" />
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] p-2">
              RESIDENTIAL
            </h2>
            <div className="flex items-center justify-center gap-3 text-white/80 group-hover:text-red-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
              Protect Your Legacy <ArrowRight size={14} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Commercial Split */}
      <div 
        onClick={() => onSelect('commercial')} 
        className="flex-1 relative group cursor-pointer overflow-hidden transition-[flex] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] md:hover:flex-[1.4] border-t md:border-t-0 md:border-l border-white/5"
      >
        <div className="absolute inset-0 z-0 bg-black">
          <motion.div 
            className="w-full h-full"
            animate={{ scale: 1.1 }}
            transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541888086925-920f0fd5b651?auto=format&fit=crop&q=100&w=2940" 
              alt="Commercial Roofing" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] opacity-40 group-hover:opacity-70 group-hover:scale-105"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#010204] via-transparent to-transparent group-hover:via-[#010204]/20 transition-colors duration-1000 z-10" />
        <div className="absolute inset-0 bg-[#010204]/30 group-hover:bg-transparent transition-colors duration-1000 z-10" />
        <NoiseOverlay />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <Building2 size={40} className="text-white/40 mb-8 drop-shadow-2xl mx-auto group-hover:text-red-500 transition-colors duration-700" />
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] p-2">
              COMMERCIAL
            </h2>
            <div className="flex items-center justify-center gap-3 text-white/80 group-hover:text-red-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
              Engineered For Scale <ArrowRight size={14} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<'gateway' | ViewType>('gateway');

  if (view === 'gateway') {
    return <Gateway onSelect={setView} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white">
      <Navigation onBack={() => setView('gateway')} />
      <Hero view={view} />
      <Problems />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}


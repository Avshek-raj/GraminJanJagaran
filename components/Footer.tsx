
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center text-white mb-6">
              <i className="fas fa-leaf text-2xl text-emerald-500 mr-3"></i>
              <span className="text-2xl font-bold">EcoHeart</span>
            </div>
            <p className="max-w-md text-slate-500 mb-6">
              EcoHeart is a registered non-profit organization dedicated to fostering sustainable living and protecting our planet's most vulnerable ecosystems.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Volunteer Opportunities</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest initiatives and impact stories.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white rounded-r-lg px-4 hover:bg-emerald-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} EcoHeart NGO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

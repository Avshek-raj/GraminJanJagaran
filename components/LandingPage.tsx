
import React from 'react';
import { Program, ViewState } from '../types';
import ProgramCard from './ProgramCard';

interface LandingPageProps {
  setView: (view: ViewState) => void;
  programs: Program[];
}

const LandingPage: React.FC<LandingPageProps> = ({ setView, programs }) => {
  const activePrograms = programs.filter(p => p.status === 'active').slice(0, 3);
  const completedPrograms = programs.filter(p => p.status === 'completed').slice(0, 2);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Hero background"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md text-emerald-400 font-bold text-xs uppercase tracking-[0.2em]">
            Building a greener tomorrow
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Nurturing Nature, <br /><span className="text-emerald-400">Empowering</span> People.
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            EcoHeart is a global movement dedicated to environmental restoration and social equity. Join our community of 15,000+ donors building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setView('donate')}
              className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/20 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Start Donating
            </button>
            <button 
              onClick={() => setView('programs')}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-lg backdrop-blur-md transition-all active:scale-95"
            >
              Our Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div>
              <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2">Urgent Needs</div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Active Initiatives</h2>
              <p className="text-slate-500 max-w-xl text-lg">Every dollar counts towards reaching these critical goals. Support a cause today.</p>
            </div>
            <button 
              onClick={() => setView('programs')}
              className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center group transition-colors"
            >
              View all programs 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {activePrograms.map((program) => (
              <ProgramCard key={program.id} program={program} onClick={() => setView('donate')} />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Programs Showcase */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-2">Our Legacy</div>
            <h2 className="text-4xl font-black text-white mb-6">Success Stories</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Take a look at what we've achieved together. These programs have successfully reached their goals and are now driving sustainable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {completedPrograms.map((program) => (
              <div key={program.id} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 flex flex-col md:flex-row group">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={program.imageUrl} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase mb-4">
                    <i className="fas fa-check-circle"></i>
                    <span>Impact Achieved</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {program.impactStatement || program.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-700/50">
                    <div className="flex justify-between items-center">
                      <div className="text-slate-500 text-xs">Total Funds Deployed</div>
                      <div className="text-white font-bold">${program.currentAmount.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setView('programs')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/10"
            >
              <span>View More Impact Reports</span>
              <i className="fas fa-book-open"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Lives Impacted', val: '1.2M+', icon: 'fa-users' },
              { label: 'Trees Planted', val: '500k+', icon: 'fa-tree' },
              { label: 'Villages Supported', val: '250+', icon: 'fa-home' },
              { label: 'Volunteers', val: '15k+', icon: 'fa-hand-peace' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{stat.val}</div>
                <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

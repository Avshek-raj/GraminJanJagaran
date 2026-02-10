
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Donation Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'Donation Inquiry', message: '' });
    }, 2000);
  };

  const contactInfo = [
    { 
      icon: 'fa-envelope', 
      title: 'Email Us', 
      detail: 'hello@ecoheart.ngo', 
      color: 'bg-emerald-100 text-emerald-600' 
    },
    { 
      icon: 'fa-phone-alt', 
      title: 'Call Us', 
      detail: '+1 (555) 000-HEART', 
      color: 'bg-blue-100 text-blue-600' 
    },
    { 
      icon: 'fa-map-marker-alt', 
      title: 'Headquarters', 
      detail: '742 Evergreen Terrace, Eco Valley, CA', 
      color: 'bg-orange-100 text-orange-600' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-emerald-50 text-emerald-600 font-black text-[10px] uppercase tracking-widest border border-emerald-100">
          Let's Start a Conversation
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          How can we <span className="text-emerald-600">work together?</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Whether you're looking to make a major contribution or want to propose a new project for your community, our team is ready to listen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        {contactInfo.map((info, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl`}>
              <i className={`fas ${info.icon}`}></i>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{info.title}</h3>
            <p className="text-slate-500 font-medium">{info.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
        <div className="lg:w-2/5 bg-slate-900 p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 leading-tight">Partner with EcoHeart</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              We are constantly seeking new ways to expand our impact. If you have an idea for a sustainability project or want to discuss strategic donations, use the form to get in touch with our partnerships team.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-sm shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Project Proposals</h4>
                  <p className="text-slate-500 text-sm">Submit your ideas for community restoration or social initiatives.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-sm shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Donation Planning</h4>
                  <p className="text-slate-500 text-sm">Discuss corporate social responsibility or large-scale endowment funds.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-800">
              <p className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-4">Follow our journey</p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'instagram'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <i className={`fab fa-${s}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 p-12 lg:p-16">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-scale-up">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-emerald-500/10">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h2 className="text-3xl font-black text-slate-900">Message Received!</h2>
              <p className="text-slate-500 max-w-sm mx-auto text-lg leading-relaxed">
                Thank you for reaching out. A member of our partnership team will review your message and get back to you within 48 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 text-emerald-600 font-black text-sm uppercase tracking-widest border-2 border-emerald-100 rounded-2xl hover:bg-emerald-50 transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-emerald-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-emerald-500 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">What do you want to discuss?</label>
                <div className="flex flex-wrap gap-3">
                  {['Donation Inquiry', 'Project Proposal', 'Volunteering', 'General Inquiry'].map(subj => (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => setFormData({...formData, subject: subj})}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all border-2 ${
                        formData.subject === subj 
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-emerald-200'
                      }`}
                    >
                      {subj}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Your Message</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your ideas or questions..." 
                  className="w-full px-6 py-4 rounded-3xl bg-slate-50 border-2 border-slate-50 focus:border-emerald-500 focus:bg-white outline-none transition-all resize-none leading-relaxed"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all transform active:scale-[0.98]"
              >
                Launch Discussion
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

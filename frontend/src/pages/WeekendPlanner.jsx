import { useState } from 'react';
import { Calendar, MapPin, Clock, Star, TrendingUp, Heart, Share2 } from 'lucide-react';

export default function WeekendPlanner() {
  const [selectedDate, setSelectedDate] = useState('2026-01-11');
  const [interests, setInterests] = useState([]);
  const [savedActivities, setSavedActivities] = useState([]);

  const toggleSave = (idx) => {
    setSavedActivities(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-2 tracking-tight">
            Weekend Planner
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            ✨ Discover amazing activities in Paris
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Preferences Section */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            What interests you?
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['Art & Museums', 'Games', 'Music', 'Food & Dining', 'Sports', 'Nature', 'Nightlife', 'Theater', 'Shopping'].map((interest) => (
              <button
                key={interest}
                onClick={() => setInterests(prev => 
                  prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
                )}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  interests.includes(interest)
                    ? 'bg-black text-white border-black shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:shadow'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end bg-gray-50 p-5 rounded-xl">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                📅 When are you free?
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all bg-white"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
              Get Recommendations ✨
            </button>
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black flex items-center gap-2">
              <MapPin className="w-6 h-6 text-red-500" />
              Recommended for This Weekend
            </h2>
            <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
              6 activities
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                title: 'Musée d\'Orsay',
                category: 'Art & Museums',
                time: 'Sat 10:00 AM - 6:00 PM',
                distance: '2.3 km from you',
                image: '🎨',
                match: '95%'
              },
              {
                title: 'Food Market at Marché Bastille',
                category: 'Food & Dining',
                time: 'Sun 7:00 AM - 2:00 PM',
                distance: '1.8 km from you',
                image: '🍇',
                match: '88%'
              },
              {
                title: 'Live Jazz at Duc des Lombards',
                category: 'Music',
                time: 'Sat 9:00 PM - 12:00 AM',
                distance: '3.1 km from you',
                image: '🎷',
                match: '92%'
              },
              {
                title: 'Jardin du Luxembourg',
                category: 'Nature',
                time: 'Sun 8:00 AM - Sunset',
                distance: '2.7 km from you',
                image: '🌳',
                match: '85%'
              },
              {
                title: 'Shakespeare and Company Bookstore',
                category: 'Shopping',
                time: 'Sat 10:00 AM - 7:00 PM',
                distance: '2.0 km from you',
                image: '📚',
                match: '78%'
              },
              {
                title: 'Sunset Seine Cruise',
                category: 'Nature',
                time: 'Sat 7:00 PM - 9:00 PM',
                distance: '1.5 km from you',
                image: '🚢',
                match: '90%'
              },
            ].map((activity, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300 relative z-10">{activity.image}</span>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-black text-lg leading-tight flex-1 group-hover:text-gray-700 transition-colors">
                      {activity.title}
                    </h3>
                    <span className="ml-2 px-3 py-1.5 bg-black text-white text-xs font-bold rounded-full">
                      {activity.match}
                    </span>
                  </div>
                  
                  <span className="inline-block px-3 py-1.5 bg-gray-100 text-black text-xs font-semibold rounded-full mb-4">
                    {activity.category}
                  </span>
                  
                  <div className="space-y-2.5 text-sm text-gray-700 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0 text-gray-500" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-gray-500" />
                      <span>{activity.distance}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleSave(idx)}
                      className={`p-2.5 border-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                        savedActivities.includes(idx)
                          ? 'bg-red-50 text-red-500 border-red-500'
                          : 'bg-white text-gray-400 border-gray-300 hover:border-red-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${savedActivities.includes(idx) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2.5 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-black transition-all transform hover:scale-110 active:scale-95">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="flex-1 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
                      Add to Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
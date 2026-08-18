import React, { useState } from 'react';
import menuData from './data/menuData.json';
import { ShoppingBag, Flame, PhoneCall, Tag, Sparkles, Utensils, Bike, HeartHandshake, Search, Clock, MessageCircle, Star, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('offers');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const defaultImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80";

  const addToCart = (itemName) => {
    setCart((prev) => [...prev, itemName]);
  };

  const handleWhatsAppOrder = (itemDetails = '') => {
    let text = '';
    if (cart.length > 0 && !itemDetails) {
      text = `مرحبا، بدي أطلب القائمة التالية:\n- ${cart.join('\n- ')}`;
    } else if (itemDetails) {
      text = `مرحبا، بدي أطلب: ${itemDetails}`;
    } else {
      text = 'مرحبا، بدي أطلب من فرن تكلّكش';
    }
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${menuData.phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 pb-24 overflow-x-hidden" dir="rtl">
      
      {/* Background Ambient Glow & Ember Effect */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-stone-950 text-[11px] md:text-xs font-black py-1.5 px-4 shadow-lg border-b border-amber-400/30">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
            <span>مفتوح يومياً: 8:00 صباحاً – 12:00 ليلاً</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 fill-stone-950" />
            <span>توصيل طازج وسريع</span>
          </div>
        </div>
      </div>

      {/* Modern Glass Header */}
      <header className="sticky top-0 z-50 bg-stone-950/70 backdrop-blur-2xl border-b border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur-md opacity-80 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-stone-900/90 p-2.5 rounded-xl border border-amber-500/40 text-amber-400">
                <Flame className="w-6 h-6 fill-amber-500 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wide bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                {menuData.bakeryName}
              </h1>
              <p className="text-[10px] md:text-[11px] text-amber-200/60 font-medium tracking-wider">طعم الطبيعة وريحة الفرن الأصيل</p>
            </div>
          </div>

          <button
            onClick={() => handleWhatsAppOrder()}
            className="relative group overflow-hidden rounded-xl p-[1px] font-bold text-xs md:text-sm active:scale-95 transition-all shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-xl"></span>
            <div className="relative px-4 py-2.5 bg-stone-950/40 rounded-[11px] transition-all duration-300 group-hover:bg-transparent flex items-center gap-2 text-white">
              <PhoneCall className="w-4 h-4 text-emerald-400 group-hover:text-white" />
              <span>اطلب الآن</span>
            </div>
          </button>
        </div>
      </header>

      {/* Hero Showcase */}
      <section className="relative overflow-hidden py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="flex-1 text-center md:text-right">
            <span className="inline-flex items-center gap-2 text-xs font-black bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-full mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>عجين بلدي طازج يومياً</span>
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-stone-100 mb-5 leading-tight tracking-tight">
              المذاق الأصيل... <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                طالع من الفرن لعندك
              </span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-light">
              {menuData.slogan}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-stone-300 border-t border-stone-800/80 pt-6">
              <div className="flex items-center gap-2 bg-stone-900/60 border border-stone-800 px-3.5 py-2 rounded-xl">
                <Utensils className="w-4 h-4 text-amber-500" />
                <span>مكونات طازجة</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 border border-stone-800 px-3.5 py-2 rounded-xl">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>عجين يدوي</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 border border-stone-800 px-3.5 py-2 rounded-xl">
                <Bike className="w-4 h-4 text-emerald-500" />
                <span>توصيل سريع سخن</span>
              </div>
            </div>
          </div>

         {/* Hero Side Image Banner */}
<div className="w-full relative px-4"> {/* أضفنا px-4 هنا لتتوازن الصورة مع النصوص */}
  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-[28px] blur-sm opacity-15"></div>
  <div className="relative rounded-[28px] overflow-hidden border border-amber-500/40 shadow-2xl bg-stone-900">
    <img 
      src="./hero-banner.jpg" 
      alt="فرن تكلّكش" 
      className="w-full h-64 object-cover rounded-2xl" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
    <div className="absolute bottom-4 right-4 left-4 p-3 bg-stone-900/80 backdrop-blur-md rounded-2xl border border-stone-800 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <span className="text-xs font-bold text-stone-200">الأعلى تقييماً بالمنطقة</span>
      </div>
      <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-1 rounded-md font-bold">100% بلدي</span>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Controls Header: Search & Category Tabs */}
      <div className="sticky top-[61px] z-40 bg-stone-950/90 backdrop-blur-xl border-y border-stone-800/80 py-3 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 space-y-3">
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto sm:mx-0">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="ابحث عن منقوشة، بيتزا، كعكة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900/90 border border-stone-800 rounded-2xl pr-10 pl-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition shadow-inner"
            />
          </div>

          {/* Nav Tabs */}
          {!searchQuery && (
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar pt-1">
              {[
                { id: 'offers', label: 'العروض المميزة', icon: Tag },
                { id: 'pizzas', label: 'البيتزا', icon: Flame },
                { id: 'manakish', label: 'الفيّات والمناقيش', icon: ShoppingBag },
                { id: 'kaak', label: 'كعك عصروني', icon: Sparkles },
                { id: 'mashrouha', label: 'المشروحة', icon: Utensils },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                        : 'bg-stone-900/80 text-stone-400 hover:bg-stone-800/80 border border-stone-800/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-500'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Menu Grid */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Special Offers Section */}
        {activeTab === 'offers' && !searchQuery && (
          <div className="grid md:grid-cols-2 gap-8">
            {menuData.offers.map((offer) => (
              <div
                key={offer.id}
                className="group relative bg-stone-900/50 border border-amber-500/20 hover:border-amber-500/60 rounded-[30px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={offer.image || defaultImage} 
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                  {offer.badge && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-xs font-black px-4 py-1.5 rounded-full shadow-lg border border-amber-300/40">
                      {offer.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-amber-400 mb-2">{offer.title}</h3>
                    <p className="text-stone-300 text-sm mb-4 leading-relaxed font-light">{offer.description}</p>
                    {offer.price && <div className="text-3xl font-black text-emerald-400 mb-4">{offer.price}</div>}
                    {offer.options && (
                      <div className="space-y-2 mb-4">
                        {offer.options.map((opt, i) => (
                          <div key={i} className="flex justify-between items-center text-xs bg-stone-950/70 p-3 rounded-xl border border-stone-800">
                            <span className="text-stone-300 font-medium">{opt.quantity}</span>
                            <span className="font-bold text-amber-400">{opt.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleWhatsAppOrder(offer.title)}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black py-3 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 text-xs"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>اطلب العرض</span>
                    </button>
                    <button
                      onClick={() => addToCart(offer.title)}
                      className="bg-stone-800 hover:bg-stone-700 text-amber-400 p-3 rounded-xl border border-stone-700 transition"
                      title="إضافة للسلّة"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Categories / Search Grid */}
        {(activeTab !== 'offers' || searchQuery) && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'pizzas' && !searchQuery &&
              menuData.menu.pizzas.map((item, index) => (
                <div key={index} className="group bg-stone-900/50 border border-stone-800/80 hover:border-amber-500/50 rounded-[28px] overflow-hidden transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-xl">
                  <div className="h-44 overflow-hidden relative">
                    <img src={item.image || defaultImage} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-amber-400 text-base mb-4">{item.name}</h3>
                      <div className="space-y-2 mb-6">
                        {item.sizes.map((sz, i) => (
                          <div key={i} className="flex justify-between items-center text-xs bg-stone-950/70 p-2.5 rounded-xl border border-stone-800/60">
                            <span className="text-stone-400 font-medium">{sz.size}</span>
                            <span className="font-bold text-emerald-400">{sz.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleWhatsAppOrder(item.name)} className="flex-1 bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 font-bold py-2.5 rounded-xl transition-all text-xs">
                        اطلب البيتزا
                      </button>
                      <button onClick={() => addToCart(item.name)} className="bg-stone-950 hover:bg-stone-800 text-amber-400 p-2.5 rounded-xl border border-stone-800">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {(activeTab !== 'pizzas' || searchQuery) &&
              (searchQuery 
                ? Object.values(menuData.menu).flat().filter(item => item.name.includes(searchQuery))
                : menuData.menu[activeTab]
              )?.map((item, index) => (
                <div key={index} className="group bg-stone-900/50 border border-stone-800/80 hover:border-amber-500/50 rounded-[28px] overflow-hidden transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-xl">
                  <div className="h-40 overflow-hidden relative">
                    <img src={item.image || defaultImage} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                  </div>
                  <div className="p-4 flex justify-between items-center bg-stone-900/30">
                    <div>
                      <h4 className="font-bold text-stone-200 text-sm mb-1">{item.name}</h4>
                      <span className="font-black text-amber-400 text-xs">{item.price || 'حسب الحجم'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => addToCart(item.name)} className="bg-stone-950 hover:bg-stone-800 text-amber-400 p-2.5 rounded-xl border border-stone-800 transition">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleWhatsAppOrder(`${item.name}`)}
                        className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white p-2.5 rounded-xl transition-colors shrink-0"
                      >
                        <PhoneCall className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>

      {/* Quick Cart Floating Bar (ظهر عندما يختار المستخدم عناصر) */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-stone-900/90 backdrop-blur-2xl border border-amber-500/40 p-3.5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.9)] flex items-center justify-between animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-stone-950 font-black w-8 h-8 rounded-xl flex items-center justify-center text-xs">
              {cart.length}
            </div>
            <div className="text-xs">
              <p className="font-bold text-stone-200">الطلبات المختارة</p>
              <p className="text-stone-400 text-[10px]">جاهز للإرسال عبر واتساب</p>
            </div>
          </div>
          <button
            onClick={() => handleWhatsAppOrder()}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>إرسال الطلب</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-800/80 bg-stone-950 py-10 text-center text-stone-500 text-xs mt-12">
        <div className="flex justify-center items-center gap-2 text-stone-400 mb-2">
          <HeartHandshake className="w-4 h-4 text-amber-500" />
          <span>فرن تكلكش - المذاق الفلسطيني الأصيل</span>
        </div>
        <p>خدمة التوصيل السريع والطلبات المباشرة: +961 81 834 372</p>
      </footer>
    </div>
  );
}

export default App;

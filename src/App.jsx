import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Areas from './components/Areas'
import Blog from './components/Blog'
import Contact from './components/Contact'
import CalculatorPage from './components/CalculatorPage'

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home onNavigate={setActivePage} />;
      case 'services': return <Services onNavigate={setActivePage} />;
      case 'calculator': return <CalculatorPage onNavigate={setActivePage} />;
      case 'about': return <About onNavigate={setActivePage} />;
      case 'gallery': return <Gallery onNavigate={setActivePage} />;
      case 'areas': return <Areas onNavigate={setActivePage} />;
      case 'blog': return <Blog onNavigate={setActivePage} />;
      case 'contact': return <Contact onNavigate={setActivePage} />;
      default: return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body bg-cream text-inkSelection">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setActivePage} />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-7 right-7 z-[999] flex flex-col items-end gap-2.5 group">
        <div className="bg-ink text-white text-xs font-medium py-1.5 px-3.5 rounded-full whitespace-nowrap opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none">
          Chat on WhatsApp
        </div>
        <a 
          href="https://wa.me/919830000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] w-14.5 h-14.5 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 relative"
        >
          <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-cream animate-ping"></div>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.655 4.84 1.8 6.876L2 30l7.362-1.77A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.61l-.42-.25-4.368 1.05 1.088-4.26-.275-.44A11.54 11.54 0 014.4 16c0-6.397 5.203-11.6 11.6-11.6S27.6 9.603 27.6 16 22.397 27.6 16 27.6zm6.355-8.674c-.347-.174-2.056-1.014-2.375-1.13-.32-.115-.553-.173-.787.173-.233.346-.902 1.13-1.107 1.363-.203.232-.407.26-.754.086-.347-.173-1.465-.54-2.79-1.72-1.03-.92-1.727-2.054-1.929-2.4-.203-.347-.022-.535.152-.708.157-.157.347-.406.52-.61.174-.203.232-.347.348-.578.115-.232.058-.434-.029-.607-.086-.173-.787-1.895-1.077-2.593-.284-.683-.572-.59-.787-.6l-.672-.012c-.232 0-.608.087-.926.434-.318.347-1.213 1.186-1.213 2.89 0 1.703 1.242 3.35 1.415 3.582.174.233 2.445 3.731 5.924 5.234.828.357 1.474.57 1.977.73.83.264 1.586.226 2.183.137.666-.1 2.056-.84 2.347-1.653.29-.813.29-1.51.203-1.653-.086-.144-.318-.231-.665-.404z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App

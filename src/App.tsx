// App.tsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Home from './components/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-dark-950 text-dark-50 font-sans antialiased min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10" />
        </div>
        <div className="relative z-10">
          <Header />
          <main className="flex items-center justify-center min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route 
                path="/" 
                element={
                  <div className="container mx-auto max-w-4xl bg-dark-900 bg-opacity-80 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
                    <Home />
                  </div>
                } 
              />
              <Route 
                path="/leaderboard/:database/:collection" 
                element={
                  <div className="container mx-auto max-w-6xl bg-dark-900 bg-opacity-80 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
                    <Leaderboard />
                  </div>
                } 
              />
              <Route 
                path="/leaderboard" 
                element={
                  <div className="container mx-auto max-w-6xl bg-dark-900 bg-opacity-80 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
                    <Leaderboard />
                  </div>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

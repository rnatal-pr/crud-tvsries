import React from 'react';
import Navbar from './components/Navbar';
import RecommendedContextProvider from './context/RecommendedContext';
import RecommendationList from './components/RecommendationList'
import NewRecommendationForm from './components/RecommendationForm';

function App() {
  return (
    <div className="App">
      <RecommendedContextProvider>
        <Navbar />
        <RecommendationList />
        <NewRecommendationForm />
      </RecommendedContextProvider>
    </div>
  );
}

export default App;
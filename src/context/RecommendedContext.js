import React, { createContext, useState } from 'react';
import {v1} from 'uuid';

export const RecommendedContext = createContext();

const RecommendedContextProvider = (props) => {
  const [recommendations, setRecommendations] = useState([
    {title: 'Ted Lasso', recommendedBy: 'Jason Sudeikis', source: 'Apple Tv', id: 1},
    {title: 'The Morning Show', recommendedBy: 'Jennifer Aniston', source: 'Apple Tv', id: 2},
  ]);
  const addRecommendation = (title, recommendedBy, source) => {
    setRecommendations([...recommendations, {title, recommendedBy, source, id: v1()}]);
  };
  const removeRecommendation = (id) => {
    setRecommendations(recommendations.filter(recommendation => recommendation.id !== id));
  }

  return (
    <RecommendedContext.Provider value={{ recommendations, addRecommendation, removeRecommendation }}>
      {props.children}
    </RecommendedContext.Provider>
  );
}
 
export default RecommendedContextProvider;
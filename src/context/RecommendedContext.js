import React, { createContext, useReducer, useEffect } from 'react';
import {recommendationReducer} from '../Reducers/RecommendationReducers'

export const RecommendedContext = createContext();

const RecommendedContextProvider = (props) => {
  const [recommendations, dispatch] = useReducer(recommendationReducer, [],() => {
    const localData = localStorage.getItem('recommendations');
    return localData ? JSON.parse(localData) : [];
  } );
  
  useEffect(()=>{
    localStorage.setItem('recommendations', JSON.stringify(recommendations))
  }, [recommendations])

  return (
    <RecommendedContext.Provider value={{ recommendations, dispatch }}>
      {props.children}
    </RecommendedContext.Provider>
  );
}
 
export default RecommendedContextProvider;
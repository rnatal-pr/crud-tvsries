import React, { useContext } from 'react';
import { RecommendedContext } from '../context/RecommendedContext';

const Navbar = () => {
  const { recommendations } = useContext(RecommendedContext);
  return (
    <div className="navbar">
      <h1>Recommendations List</h1>
      <p>Currently you have {recommendations.length} recommendations pending to watch!</p>
    </div>
  );
}
 
export default Navbar;
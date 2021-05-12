import React, {useContext} from 'react';
import { RecommendedContext } from '../context/RecommendedContext';
import  RecommendationDetails  from './RecommendationDetails';

const RecommendationList = () => {
    const {recommendations} = useContext(RecommendedContext);
    return recommendations.length ? (
        <div className = "recommendations-list">
            <ul>
                {recommendations.map(recommendation => {
                    return ( <RecommendationDetails recommendation={recommendation} key={recommendation.id} />);
                })}
            </ul>
        </div>
    ) : (
        <div className="empty"> No recommendations available. </div>
    ) 
}
 
export default RecommendationList;
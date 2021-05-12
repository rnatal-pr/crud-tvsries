import React, {useContext} from 'react';
import {RecommendedContext} from '../context/RecommendedContext';


const RecommendationDetails = ({recommendation}) => {
    const {removeRecommendation} = useContext(RecommendedContext);
    return (
        <li onClick={() =>removeRecommendation(recommendation.id)}>
            <div className='title'>{recommendation.title}</div>
            <div className='recommendedBy'>{recommendation.recommendedBy}</div>
            <div className='source'>{recommendation.source}</div>
        </li>
    )
}

export default RecommendationDetails;
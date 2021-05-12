import React, {useContext} from 'react';
import {RecommendedContext} from '../context/RecommendedContext';


const RecommendationDetails = ({recommendation}) => {
    const {dispatch} = useContext(RecommendedContext);
    return (
        <li onClick={() =>dispatch({type: 'REMOVE_RECOMMENDATION', id: recommendation.id })}>
            <div className='title'>{recommendation.title}</div>
            <div className='recommendedBy'>{recommendation.recommendedBy}</div>
            <div className='source'>{recommendation.source}</div>
        </li>
    )
}

export default RecommendationDetails;
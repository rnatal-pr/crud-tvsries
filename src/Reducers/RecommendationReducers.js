import {v1} from 'uuid';

export const recommendationReducer = (state,action) => {
    switch(action.type){
        case 'ADD_RECOMMENDATION':
            return [...state, {
                title: action.recommendation.title, 
                recommendedBy: action.recommendation.recommendedBy,
                source: action.recommendation.source,
                id: v1()
            }]
        case 'REMOVE_RECOMMENDATION':
            return state.filter(recommendation => recommendation.id !== action.id)
        default:
            return state
    }
}
import React, {useContext, useState} from 'react';
import {RecommendedContext} from '../context/RecommendedContext'

const NewRecommendationForm = () => {
    const { addRecommendation} = useContext(RecommendedContext);
    const [title, setTitle] = useState('');
    const [recommendedBy, setRecommendedBy] = useState('');
    const [source, setSource] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecommendation(title, recommendedBy,source);
        setTitle('');
        setRecommendedBy('');
        setSource('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recommendation title" value={title}
            onChange={(e) => setTitle(e.target.value)} required/>

             <input type="text" placeholder="Person who recommended it." value={recommendedBy}
            onChange={(e) => setRecommendedBy(e.target.value)} required/>

             <input type="text" placeholder="Recommendation Streaming Site" value={source}
            onChange={(e) => setSource(e.target.value)} required/>
            <input type="submit" value="Add recommendation" />
        </form>
     );
}
 
export default NewRecommendationForm;
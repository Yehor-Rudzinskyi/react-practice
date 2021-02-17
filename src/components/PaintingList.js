import React from 'react';
import Painting from './Painting';


const PaintingList = ({paintingsData}) => (
    <ul>
        {paintingsData.map((number) => (<li key={number.id}>
         
            <Painting
                url={number.url}
                title={number.title}
                price={number.price}
                profileUrl={number.author.url}
                tag={number.author.tag}
                quantity={number.quantity} /></li>))};
    </ul>
);

export default PaintingList
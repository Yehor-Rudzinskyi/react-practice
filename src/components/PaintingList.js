import React from 'react';
import Painting from './Painting';
import PropTypes from 'prop-types';


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

PaintingList.propTypes = {
    paintingsData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
};

export default PaintingList
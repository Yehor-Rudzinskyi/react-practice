import React from 'react';
import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';
import './PaintingList.css'


const PaintingList = ({ paintingsData }) => (
    <ul className="PaintingList">
        {paintingsData.map((number) => (<li key={number.id}
            className="PaintingList-item">
         
            <Painting
                url={number.url}
                title={number.title}
                price={number.price}
                profileUrl={number.author.url}
                tag={number.author.tag}
                quantity={number.quantity} /></li>))}
    </ul>
);

PaintingList.propTypes = {
    paintingsData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
};

export default PaintingList
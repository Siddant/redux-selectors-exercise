import React from 'react';

const Image = ({ imgSrc, caption }) => {
	return (
		<div className="imageContainer">
			<img src={imgSrc} />
			<p>{caption}</p>
		</div>
	);
};

export default Image;

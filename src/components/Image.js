import React from 'react';

const Image = ({ imgSrc, caption }) => {
	return (
		<div className="image">
			{console.log(caption)}
			<img src={imgSrc} />
			<p>{caption}</p>
		</div>
	);
};

export default Image;

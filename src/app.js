import React from 'react';
import posts from '../data/posts';

import './main.scss';
import Image from './components/Image';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<main>
				<h1>Images</h1>
				<div className="images">
					{posts.map((elem, index) => <Image key={index} code={elem.code} />)}
				</div>
			</main>
		);
	}
}

export default App;

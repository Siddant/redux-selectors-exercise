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
				<h1>here</h1>
				<div className="images">
					{posts.map((elem, index) => <Image imgSrc={elem.display_src} caption={elem.caption} />)}
				</div>
			</main>
		);
	}
}
export default App;

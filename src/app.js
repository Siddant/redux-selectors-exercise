import React from 'react';
import posts from '../data/posts';

import { connect } from 'react-redux';

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
					{posts.map((elem, index) => <Image key={index} imgSrc={elem.display_src} caption={elem.caption} />)}
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state) => {

}


const mapDispatchToProps = () => {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

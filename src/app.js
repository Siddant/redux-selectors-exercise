import React from 'react';
import posts from '../data/posts';

import { connect } from 'react-redux';
import { selectUsers, selectUsersId } from './selectors/index'
import './main.scss';
import Image from './components/Image';

class App extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		console.log(this.props.selectUsersId)


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
	return {
		comments: state.comments,
		posts: state.posts,
		selectUsers: selectUsers(state),
		selectUsersId: selectUsersId(state),
	}
}


// const mapDispatchToProps = () => {

// };

export default connect(mapStateToProps, null)(App);
// export default App;

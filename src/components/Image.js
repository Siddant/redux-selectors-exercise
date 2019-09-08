import React from 'react';

import { connect } from 'react-redux';
import {
	selectedId,
	selectPostId,
	selectedPost

} from '../selectors/index'


class Image extends React.Component {
	constructor() {
		super();
	}
	render() {
		const { display_src, caption } = this.props.selectPostId.posts
		const { comments } = this.props.selectPostId
		return (
			<div className="imageContainer">
				<img src={display_src} />
				<p>{caption}</p>
				<p>{(comments || []).length} comments</p>
			</div>
		);
	}
}

const makeMapStateToProps = () => {
	const mapStateToProps = (state, props) => {
		return {
			// selectedPost: selectedPost(state, props),
			selectPostId: selectPostId(state, props),
			selectedId: selectedId(state, props),
		}
	}
	return mapStateToProps
}

export default connect(makeMapStateToProps, null)(Image);

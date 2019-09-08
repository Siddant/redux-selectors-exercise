import { createSelector } from 'reselect'


// export const selectUsers = state => state.posts.map(elem => elem.code);
export const selectComments = state => state.comments;
export const selectPost = state => state.posts;
export const selectedId = (state, props) => props.code;
export const selectedPostCode = createSelector(selectPost, (posts) => posts.map(elem => elem.code))
export const selectedUserPost = createSelector([selectPost, selectedId], (posts, userId) => {
    return posts.filter(elem => elem.code === userId)
})
export const selectPostId = createSelector([selectedUserPost, selectComments], (posts, comments) => {
    return { posts: posts[0], comments: comments[posts[0].code] }
}
)


import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    createVote as createVoteFromApi
} from 'api/posts.js';

/*  Posts */

function startLoading() {
    return {
        type: '@POST/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@POST/END_LOADING'
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
    };
}

function endCreatePost(post) {
    return {
        type: '@POST/END_CREATE_POST',
        post
    };
}

function endCreateVote(post) {
    return {
        type: '@POST/END_CREATE_VOTE',
        post
    };
}

export function listPosts(searchText) {
    return (dispatch, getState) => {
        dispatch(startLoading());
        return listPostsFromApi(searchText).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => {
            dispatch(endLoading())
        });
    };
};

export function createPost(mood, text) {
    //TODO
    return {
        type: '@POST/CREATE_POST',
        mood,text
    };
};

export function createVote(id, mood) {
    //TODO
    return {
        type: '@POST/CREATE_VOTE',
        id,mood
    };
    
};

/*  Search text */

export function setSearchText(searchText) {
    // TODO
    return {
        type: '@SEARCH_TEXT/Set_SEARCH_TEXT',
        searchText
    };
}

/*  Post Form */

export function input(value) {
    //TODO
    return {
        type:'@POSTFORM/INPUT',
        value
    };
};

export function inputDanger(danger) {
    //TODO
    return {
        type:'@POSTFORM/INPUT_DANGER',
        danger
    };
};

export function toggleMood() {
    //TODO
    return {
        type:'@POSTFORM/TOGGLE_MOOD'
    };
};

export function setMoodToggle(toggle) {
    //TODO
    return {
        type:'@POSTFORM/SET_MOOD_TOGGLE',
        toggle
    };
};

export function selectMood(mood) {
    //TODO
    return {
        type:'@POSTFORM/SELECT_MOOD',
        mood
    };
};

/*  Post item */

export function toggleTooltip(id) {
   //TODO
   return {
    type:'@POSTITEM/TOGGLE_TOOLTIP',
    id
   };
};

export function setTooltipToggle(id, toggle) {
    //TODO
    return {
        type:'@POSTITEM/SET_TOOLTIP_TOOGLE',
        id,toggle
    };
};

var utilDetails = {
    apiUrl: {
        userCredentials : '/validate/userCredentials',
        getPhotoData: '/getPhotoDetails',
        addComments: '/add/newComment',
        getComments: '/getComments',
        likeAndDislike: '/doLikeOrDislike',
        deleteComment: '/deleteComment',
        local: 'http://localhost:8080',
        uat: 'http://abc.com/',
        dev: 'http://devabc.com/',
        prod: 'http://devabc.com/'
    },
    getDomain() {
        return this.apiUrl.local;
    }
}

export default utilDetails;


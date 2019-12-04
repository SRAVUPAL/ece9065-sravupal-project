module.exports = (app) => {
    const special = require('../controllers/adminController.js');

    // Create a new Song
    app.post('/user/songs', special.createSong);

    // Retrieve all Songs
    app.get('/user/songs', special.findAllSongs);

    // Retrieve a single Song with noteId
    app.get('/user/songs/:songId', special.findOneSong);

    // Update a Song with songId
    app.put('/user/songs/:songId', special.updateSong);

    // Delete a Song with songId
    app.delete('/user/songs/:songId', special.deleteSong);

    /*
    *Reviews
    */

    // Create a new Review
    app.post('/user/reviews', special.createReview);

    // Retrieve all Reviews
    app.get('/user/reviews', special.findAllReviews);

    // Retrieve a single Review with noteId
    app.get('/user/reviews/:reviewId', special.findOneReview);

    // Update a Review with reviewId
    app.put('/user/reviews/:reviewId', special.updateReview);

    // Delete a Review with reviewId
    app.delete('/user/reviews/:reviewId', special.deleteReview);

    /*
     *Ratings
     */

    // Create a new Rating
    app.post('/user/ratings', special.createReview);

    // Retrieve all Ratings
    app.get('/user/ratings', special.findAllRatings);

    // Retrieve a single Rating with noteId
    app.get('/user/ratings/:ratingId', special.findOneRating);

    // Update a Rating with ratingId
    app.put('/user/ratings/:ratingId', special.updateRating);

    // Delete a Rating with ratingId
    app.delete('/user/ratings/:ratingId', special.deleteRating);

    /*
     *Access
     */

    // Create a new Access
    app.post('/user/access', special.createReview);

    // Retrieve all Access
    app.get('/user/access', special.findAllAccess);

    // Retrieve a single Access with noteId
    app.get('/user/access/:accessId', special.findOneAccess);

    // Update a Access with accessId
    app.put('/user/access/:accessId', special.updateAccess);

    // Delete a Access with accessId
    app.delete('/user/access/:accessId', special.deleteAccess);

}
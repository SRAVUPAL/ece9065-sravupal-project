module.exports = (app) => {
    const special = require('../controllers/adminController.js');

    // Create a new Song
    // app.post('/guest/songs', special.createSong);

    // Retrieve all Songs
    app.get('/guest/songs', special.findAllSongs);

    // Retrieve a single Song with noteId
    app.get('/guest/songs/:songId', special.findOneSong);

    // Update a Song with songId
    // app.put('/guest/songs/:songId', special.updateSong);

    // Delete a Song with songId
    // app.delete('/guest/songs/:songId', special.deleteSong);

    /*
    *Reviews
    */

    // Create a new Review
    // app.post('/guest/reviews', special.createReview);

    // Retrieve all Reviews
    app.get('/guest/reviews', special.findAllReviews);

    // Retrieve a single Review with noteId
    app.get('/guest/reviews/:reviewId', special.findOneReview);

    // Update a Review with reviewId
    // app.put('/guest/reviews/:reviewId', special.updateReview);

    // Delete a Review with reviewId
    // app.delete('/guest/reviews/:reviewId', special.deleteReview);

    /*
     *Ratings
     */

    // Create a new Rating
    // app.post('/guest/ratings', special.createReview);

    // Retrieve all Ratings
    app.get('/guest/ratings', special.findAllRatings);

    // Retrieve a single Rating with noteId
    app.get('/guest/ratings/:ratingId', special.findOneRating);

    // Update a Rating with ratingId
    // app.put('/guest/ratings/:ratingId', special.updateRating);

    // Delete a Rating with ratingId
    // app.delete('/guest/ratings/:ratingId', special.deleteRating);

    /*
     *Access
     */

    // Create a new Access
    // app.post('/guest/access', special.createReview);

    // Retrieve all Access
    app.get('/guest/access', special.findAllAccess);

    // Retrieve a single Access with noteId
    app.get('/guest/access/:accessId', special.findOneAccess);

    // Update a Access with accessId
    // app.put('/guest/access/:accessId', special.updateAccess);

    // Delete a Access with accessId
    // app.delete('/guest/access/:accessId', special.deleteAccess);

}
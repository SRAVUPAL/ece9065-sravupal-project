module.exports = (app) => {
    const special = require('../controllers/adminController.js');

    // Create a new Song
    app.post('/admin/songs', special.createSong);

    // Retrieve all Songs
    app.get('/admin/songs', special.findAllSongs);

    // Retrieve a single Song with noteId
    app.get('/admin/songs/:songId', special.findOneSong);

    // Update a Song with songId
    app.put('/admin/songs/:songId', special.updateSong);

    // Delete a Song with songId
    app.delete('/admin/songs/:songId', special.deleteSong);

    /*
    *Reviews
    */

    // Create a new Review
    app.post('/admin/reviews', special.createReview);

    // Retrieve all Reviews
    app.get('/admin/reviews', special.findAllReviews);

    // Retrieve a single Review with noteId
    app.get('/admin/reviews/:reviewId', special.findOneReview);

    // Update a Review with reviewId
    app.put('/admin/reviews/:reviewId', special.updateReview);

    // Delete a Review with reviewId
    app.delete('/admin/reviews/:reviewId', special.deleteReview);

    /*
     *Ratings
     */

    // Create a new Rating
    app.post('/admin/ratings', special.createReview);

    // Retrieve all Ratings
    app.get('/admin/ratings', special.findAllRatings);

    // Retrieve a single Rating with noteId
    app.get('/admin/ratings/:ratingId', special.findOneRating);

    // Update a Rating with ratingId
    app.put('/admin/ratings/:ratingId', special.updateRating);

    // Delete a Rating with ratingId
    app.delete('/admin/ratings/:ratingId', special.deleteRating);

    /*
     *Access
     */

    // Create a new Access
    app.post('/admin/access', special.createReview);

    // Retrieve all Access
    app.get('/admin/access', special.findAllAccess);

    // Retrieve a single Access with noteId
    app.get('/admin/access/:accessId', special.findOneAccess);

    // Update a Access with accessId
    app.put('/admin/access/:accessId', special.updateAccess);

    // Delete a Access with accessId
    app.delete('/admin/access/:accessId', special.deleteAccess);

}
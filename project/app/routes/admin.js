module.exports = (app) => {
    const special = require('../controllers/adminController.js');

    // Create a new Song
    app.post('/admin/songs/createSong', special.createSong);

    // Retrieve all Songs
    app.get('/admin/songs/getsong', special.findAllSongs);

    // Retrieve a single Song with noteId
    app.get('/admin/songs/getbyid/:songId', special.findOneSong);

    // Update a Song with songId
    app.put('/admin/songs/update/:songId', special.updateSong);

    // Delete a Song with songId
    app.delete('/admin/songs/remove/:songId', special.deleteSong);

    /*
    *Reviews
    */

    // Create a new Review
    app.post('/admin/reviews/createReview', special.createReview);

    // Retrieve all Reviews
    app.get('/admin/reviews/getReviews', special.findAllReviews);

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
    app.post('/admin/access', special.createAccess);

    // Retrieve all Access
    app.get('/admin/access/getAccess', special.findAllAccess);

    // Retrieve a single Access with noteId
    app.get('/admin/access/:accessId', special.findOneAccess);

    // Update a Access with accessId
    app.put('/admin/access/:accessId', special.updateAccess);

    // Delete a Access with accessId
    app.delete('/admin/access/:accessId', special.deleteAccess);

    /*
     *Playlist
     */

    // Create a new Playlist
    app.post('/admin/playlist/createPlaylists', special.createPlaylist);

    // Retrieve all Playlist
    app.get('/admin/playlist/getPlaylists', special.findAllPlaylist);

    // Retrieve a single Playlist with noteId
    app.get('/admin/playlist/:playlistId', special.findOnePlaylist);

    // Update a Playlist with playlistId
    app.put('/admin/playlist/:playlistId', special.updatePlaylist);

    // Delete a Playlist with playlistId
    app.delete('/admin/playlist/:playlistId', special.deletePlaylist);

    /*
     *All Playlists
     */

    // Create a new Playlist
    app.post('/admin/allPlaylists/addtoAllPlaylists', special.createAllPlaylists);

    // Retrieve all AllPlaylists
    app.get('/admin/allPlaylists/getAllPlaylists', special.findAllAllPlaylists);

    // Retrieve a single AllPlaylists with noteId
    app.get('/admin/allPlaylists/:allPlaylistsId', special.findOneAllPlaylists);

    // Update a AllPlaylists with allPlaylistsId
    app.put('/admin/allPlaylists/:allPlaylistsId', special.updateAllPlaylists);

    // Delete a AllPlaylists with allPlaylistsId
    app.delete('/admin/allPlaylists/:allPlaylistsId', special.deleteAllPlaylists);
}
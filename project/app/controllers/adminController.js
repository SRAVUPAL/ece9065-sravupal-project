const SongData = require('../schema/songs.js');
const ReviewData = require('../schema/reviews.js');
const reviews = require('../schema/reviews.js');
const RatingData = require('../schema/ratings.js');
const AccessData = require('../schema/access.js');
const PlaylistData = require('../schema/playlist.js');
const AllPlaylistsData = require('../schema/allPlaylists.js');

// Create and Save a new SongData
exports.createSong = (req, res, next) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "SongData content can not be empty"
        });
    }
    console.log(req.body.title);

    // Create new SongData
    const songReq = new SongData({
        title: req.body.title,
        rating: req.body.rating,
        artist: req.body.artist,
        album: req.body.album,
        length: req.body.length,
        year: req.body.year,
        genre: req.body.genre,
        comment: req.body.comment,
        Hidden: req.body.Hidden,
        thumbnail: req.body.thumbnail
    });

    // Save SongData in the database
    console.log(songReq);

    songReq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the SongData."
            });
        });
};

// Retrieve and return all songs from the database.
exports.findAllSongs = (req, res, next) => {
    SongData.find()
        .then(song => {
            res.send(song);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving SongData."
            });
        });
};

// Find a single song with a songId
exports.findOneSong = (req, res, next) => {
    SongData.findById(req.params.songId)
        .then(songReq => {
            if (!songReq) {
                return res.status(404).send({
                    message: "SongData not found with id " + req.params.songId
                });
            }
            res.send(songReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "SongData not found with id " + req.params.songId
                });
            }
            return res.status(500).send({
                message: "Error retrieving song with id " + req.params.songId
            });
        });
};

// Update a song identified by the songId in the request
exports.updateSong = (req, res, next) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "SongData content can not be empty"
        });
    }

    // Find song and update it with the request body
    SongData.findByIdAndUpdate(req.params.songId, {
        title: req.body.title,
        rating: req.body.rating,
        artist: req.body.artist,
        album: req.body.album,
        length: req.body.length,
        year: req.body.year,
        genre: req.body.genre,
        comment: req.body.comment,
        Hidden: req.body.Hidden,
        thumbnail: req.body.thumbnail
    }, { new: true })
        .then(songReq => {
            if (!songReq) {
                return res.status(404).send({
                    message: "SongData not found with id " + req.params.songId
                });
            }
            res.send(songReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "SongData not found with id " + req.params.songId
                });
            }
            return res.status(500).send({
                message: "Error updating song with id " + req.params.songId
            });
        });
};

// Delete a song with the specified songId in the request
exports.deleteSong = (req, res, next) => {
    SongData.findByIdAndRemove(req.params.songId)
        .then(songReq => {
            if (!songReq) {
                return res.status(404).send({
                    message: "SongData not found with id " + req.params.songId
                });
            }
            res.send({ message: "SongData deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "SongData not found with id " + req.params.songId
                });
            }
            return res.status(500).send({
                message: "Could not delete song with id " + req.params.songId
            });
        });
};

//CRUD operations for reviews

// Create and Save a new ReviewData
exports.createReview = (req, res, next) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "ReviewData content can not be empty"
        });
    }
    console.log(req.body);
    // Create new ReviewData
    const reviewReq = new reviews({
        reviwer: req.body.reviwer,
        title: req.body.title,
        review: req.body.review,
        rating: req.body.rating
    });
    console.log(reviewReq)
    // Save ReviewData in the database
    reviewReq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the ReviewData."
            });
        });
};

// Retrieve and return all reviews from the database.
exports.findAllReviews = (req, res, next) => {
    ReviewData.find()
        .then(review => {
            res.send(review);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ReviewData."
            });
        });
};

// Find a single review with a reviewId
exports.findOneReview = (req, res, next) => {
    ReviewData.findById(req.params.reviewId)
        .then(reviewReq => {
            if (!reviewReq) {
                return res.status(404).send({
                    message: "ReviewData not found with id " + req.params.reviewId
                });
            }
            res.send(reviewReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ReviewData not found with id " + req.params.reviewId
                });
            }
            return res.status(500).send({
                message: "Error retrieving review with id " + req.params.reviewId
            });
        });
};

// Update a review identified by the reviewId in the request
exports.updateReview = (req, res, next) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "ReviewData content can not be empty"
        });
    }

    // Find review and update it with the request body
    ReviewData.findByIdAndUpdate(req.params.reviewId, {
        reviwer: req.body.reviwer,
        title: req.body.title,
        review: req.body.review,
        rating: req.body.rating
    }, { new: true })
        .then(reviewReq => {
            if (!reviewReq) {
                return res.status(404).send({
                    message: "ReviewData not found with id " + req.params.reviewId
                });
            }
            res.send(reviewReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ReviewData not found with id " + req.params.reviewId
                });
            }
            return res.status(500).send({
                message: "Error updating review with id " + req.params.reviewId
            });
        });
};

// Delete a review with the specified reviewId in the request
exports.deleteReview = (req, res, next) => {
    ReviewData.findByIdAndRemove(req.params.reviewId)
        .then(reviewReq => {
            if (!reviewReq) {
                return res.status(404).send({
                    message: "ReviewData not found with id " + req.params.reviewId
                });
            }
            res.send({ message: "ReviewData deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "ReviewData not found with id " + req.params.reviewId
                });
            }
            return res.status(500).send({
                message: "Could not delete review with id " + req.params.reviewId
            });
        });
};

//CRUD operations for ratings

// Create and Save a new RatingData
exports.createRating = (req, res, next) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "RatingData content can not be empty"
        });
    }

    // Create new RatingData
    const ratingReq = new RatingData({
        rating: Number,
        overall_Rating: Number
    });

    // Save RatingData in the database
    ratingReq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the RatingData."
            });
        });
};

// Retrieve and return all ratings from the database.
exports.findAllRatings = (req, res, next) => {
    RatingData.find()
        .then(rating => {
            res.send(rating);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving RatingData."
            });
        });
};

// Find a single rating with a ratingId
exports.findOneRating = (req, res, next) => {
    RatingData.findById(req.params.ratingId)
        .then(ratingReq => {
            if (!ratingReq) {
                return res.status(404).send({
                    message: "RatingData not found with id " + req.params.ratingId
                });
            }
            res.send(ratingReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "RatingData not found with id " + req.params.ratingId
                });
            }
            return res.status(500).send({
                message: "Error retrieving rating with id " + req.params.ratingId
            });
        });
};

// Update a rating identified by the ratingId in the request
exports.updateRating = (req, res, next) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "RatingData content can not be empty"
        });
    }

    // Find rating and update it with the request body
    RatingData.findByIdAndUpdate(req.params.ratingId, {
        rating: Number,
        overall_Rating: Number
    }, { new: true })
        .then(ratingReq => {
            if (!ratingReq) {
                return res.status(404).send({
                    message: "RatingData not found with id " + req.params.ratingId
                });
            }
            res.send(ratingReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "RatingData not found with id " + req.params.ratingId
                });
            }
            return res.status(500).send({
                message: "Error updating rating with id " + req.params.ratingId
            });
        });
};

// Delete a rating with the specified ratingId in the request
exports.deleteRating = (req, res, next) => {
    RatingData.findByIdAndRemove(req.params.ratingId)
        .then(ratingReq => {
            if (!ratingReq) {
                return res.status(404).send({
                    message: "RatingData not found with id " + req.params.ratingId
                });
            }
            res.send({ message: "RatingData deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "RatingData not found with id " + req.params.ratingId
                });
            }
            return res.status(500).send({
                message: "Could not delete rating with id " + req.params.ratingId
            });
        });
};

//CRUD operations for access

// Create and Save a new AccessData
exports.createAccess = (req, res, next) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "AccessData content can not be empty"
        });
    }

    // Create new AccessData
    const accessReq = new AccessData({
        userid: String,
        token: String
    });

    // Save AccessData in the database
    accessReq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the AccessData."
            });
        });
};

// Retrieve and return all accesss from the database.
exports.findAllAccess = (req, res, next) => {
    AccessData.find()
        .then(access => {
            res.send(access);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving AccessData."
            });
        });
};

// Find a single access with a accessId
exports.findOneAccess = (req, res, next) => {
    AccessData.findById(req.params.accessId)
        .then(accessReq => {
            if (!accessReq) {
                return res.status(404).send({
                    message: "AccessData not found with id " + req.params.accessId
                });
            }
            res.send(accessReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "AccessData not found with id " + req.params.accessId
                });
            }
            return res.status(500).send({
                message: "Error retrieving access with id " + req.params.accessId
            });
        });
};

// Update a access identified by the accessId in the request
exports.updateAccess = (req, res, next) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "AccessData content can not be empty"
        });
    }

    // Find access and update it with the request body
    AccessData.findByIdAndUpdate(req.params.accessId, {
        userid: String,
        token: String
    }, { new: true })
        .then(accessReq => {
            if (!accessReq) {
                return res.status(404).send({
                    message: "AccessData not found with id " + req.params.accessId
                });
            }
            res.send(accessReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "AccessData not found with id " + req.params.accessId
                });
            }
            return res.status(500).send({
                message: "Error updating access with id " + req.params.accessId
            });
        });
};

// Delete a access with the specified accessId in the request
exports.deleteAccess = (req, res, next) => {
    AccessData.findByIdAndRemove(req.params.accessId)
        .then(accessReq => {
            if (!accessReq) {
                return res.status(404).send({
                    message: "AccessData not found with id " + req.params.accessId
                });
            }
            res.send({ message: "AccessData deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "AccessData not found with id " + req.params.accessId
                });
            }
            return res.status(500).send({
                message: "Could not delete access with id " + req.params.accessId
            });
        });
};

//CRUD operations for playlist

// Create and Save a new PlaylistData
exports.createPlaylist = (req, res, next) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "PlaylistData content can not be empty"
        });
    }

    // Create new PlaylistData
    const playlistReq = new PlaylistData({
        name: String,
        title: String,
        album: String
    });

    // Save PlaylistData in the database
    playlistReq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the PlaylistData."
            });
        });
};

// Retrieve and return all playlists from the database.
exports.findAllPlaylist = (req, res, next) => {
    PlaylistData.find()
        .then(playlist => {
            res.send(playlist);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving PlaylistData."
            });
        });
};

// Find a single playlist with a playlistId
exports.findOnePlaylist = (req, res, next) => {
    PlaylistData.findById(req.params.playlistId)
        .then(playlistReq => {
            if (!playlistReq) {
                return res.status(404).send({
                    message: "PlaylistData not found with id " + req.params.playlistId
                });
            }
            res.send(playlistReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "PlaylistData not found with id " + req.params.playlistId
                });
            }
            return res.status(500).send({
                message: "Error retrieving playlist with id " + req.params.playlistId
            });
        });
};

// Update a playlist identified by the playlistId in the request
exports.updatePlaylist = (req, res, next) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "PlaylistData content can not be empty"
        });
    }

    // Find playlist and update it with the request body
    PlaylistData.findByIdAndUpdate(req.params.playlistId, {
        name: String,
        title: String,
        album: String
    }, { new: true })
        .then(playlistReq => {
            if (!playlistReq) {
                return res.status(404).send({
                    message: "PlaylistData not found with id " + req.params.playlistId
                });
            }
            res.send(playlistReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "PlaylistData not found with id " + req.params.playlistId
                });
            }
            return res.status(500).send({
                message: "Error updating playlist with id " + req.params.playlistId
            });
        });
};

// Delete a playlist with the specified playlistId in the request
exports.deletePlaylist = (req, res, next) => {
    PlaylistData.findByIdAndRemove(req.params.playlistId)
        .then(playlistReq => {
            if (!playlistReq) {
                return res.status(404).send({
                    message: "PlaylistData not found with id " + req.params.playlistId
                });
            }
            res.send({ message: "PlaylistData deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "PlaylistData not found with id " + req.params.playlistId
                });
            }
            return res.status(500).send({
                message: "Could not delete playlist with id " + req.params.playlistId
            });
        });
};

//CRUD operations for allPlaylists

// Create and Save a new AllPlaylistsData
exports.createAllPlaylists = (req, res, next) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "AllPlaylistsData content can not be empty"
        });
    }

    // Create new AllPlaylistsData
    const allPlaylistsReq = new AllPlaylistsData({
        name: String,
        userid: String,
        description: String,
        privacy: String
    });

    // Save AllPlaylistsData in the database
    allPlaylistsReq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the AllPlaylistsData."
            });
        });
};

// Retrieve and return all allPlaylistss from the database.
exports.findAllAllPlaylists = (req, res, next) => {
    AllPlaylistsData.find()
        .then(allPlaylists => {
            res.send(allPlaylists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving AllPlaylistsData."
            });
        });
};

// Find a single allPlaylists with a allPlaylistsId
exports.findOneAllPlaylists = (req, res, next) => {
    AllPlaylistsData.findById(req.params.allPlaylistsId)
        .then(allPlaylistsReq => {
            if (!allPlaylistsReq) {
                return res.status(404).send({
                    message: "AllPlaylistsData not found with id " + req.params.allPlaylistsId
                });
            }
            res.send(allPlaylistsReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "AllPlaylistsData not found with id " + req.params.allPlaylistsId
                });
            }
            return res.status(500).send({
                message: "Error retrieving allPlaylists with id " + req.params.allPlaylistsId
            });
        });
};

// Update a allPlaylists identified by the allPlaylistsId in the request
exports.updateAllPlaylists = (req, res, next) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "AllPlaylistsData content can not be empty"
        });
    }

    // Find allPlaylists and update it with the request body
    AllPlaylistsData.findByIdAndUpdate(req.params.allPlaylistsId, {
        name: String,
        userid: String,
        description: String,
        privacy: String
    }, { new: true })
        .then(allPlaylistsReq => {
            if (!allPlaylistsReq) {
                return res.status(404).send({
                    message: "AllPlaylistsData not found with id " + req.params.allPlaylistsId
                });
            }
            res.send(allPlaylistsReq);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "AllPlaylistsData not found with id " + req.params.allPlaylistsId
                });
            }
            return res.status(500).send({
                message: "Error updating allPlaylists with id " + req.params.allPlaylistsId
            });
        });
};

// Delete a allPlaylists with the specified allPlaylistsId in the request
exports.deleteAllPlaylists = (req, res, next) => {
    AllPlaylistsData.findByIdAndRemove(req.params.allPlaylistsId)
        .then(allPlaylistsReq => {
            if (!allPlaylistsReq) {
                return res.status(404).send({
                    message: "AllPlaylistsData not found with id " + req.params.allPlaylistsId
                });
            }
            res.send({ message: "AllPlaylistsData deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "AllPlaylistsData not found with id " + req.params.allPlaylistsId
                });
            }
            return res.status(500).send({
                message: "Could not delete allPlaylists with id " + req.params.allPlaylistsId
            });
        });
};
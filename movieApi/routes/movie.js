var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails');

/* GET movie page. */
router.get('/:movieId', (req,res,next)=>{
 const movieId= req.params.movieId;
const results = movieDetails.find(movie=>
   movie.id == movieId
)
if(!results){
   res.json({
      msg: "Movie ID is not found"
   })
}
res.json(results)
})

module.exports = router;
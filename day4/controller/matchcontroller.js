const Match = require("../models/matches");


exports.getWon = async (req, res) => {
  try {
    const matches = await Match.find({ won: true });
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
exports.getMatches = async(req,res,next) => {
    try{
        const {sport,sort} = req.query;
        let filterQuery = {};

        if(sport){
            filterQuery.sport = sport;
        }

        let exe = Match.find(filterQuery);

        if(sort === 'points'){
            exe = exe.sort({points: 1});
        }
        const match =await exe;
        res.status(200).json(match);
    }
    catch(err){
        next(err);
    }
}

exports.getMatch = async(req,res,next) => {
    try{
        const id =req.params.id;
        const match =await Match.findById();
        if(!match){
            return res.status(404).json({
                message: "Match not found"
            });
        }
        res.status(200).json(match);
    }
    catch(err){
        next(err);
    }
}

exports.postMatch = async(req,res,next) => {
    try{
        const {team,point,sport} = req.body;
        if(!team){
            return res.status(400).json({
                message: "Name not found"
            })
        }
        if(point>=500){
            return res.status(400).json({
                message: "Points not Allowed"
            })
        }
        if(!sport){
            return res.status(400).json({
                message: "Sport not found"
            })
        }
        const match =await Match.create(req.body);
        
        return res.status(200).json(match);
    }
    catch(err){
        next(err);
    }
}

exports.updateMatch = async(req,res,next) => {
    try{
        const id = req.params.id;
         const product = await Product.findByIdAndUpdate(id, req.body, {
            returnDocument: "after", runValidators: true
        });
        if(!match){
            return res.status(400).json({
                message: "Match not found"
            })
        }
        
        return res.status(200).json(match);
    }
    catch(err){
        next(err);
    }
}

exports.deleteMatch = async(req,res,next) => {
        const id = req.params.id;
         const product = await Product.findByIdAndDelete(id);
        if(!match){
            return res.status(400).json({
                message: "Match not found"
            })
        }
        
        return res.status(200).json({
            message: "Match deleted successfully"
        })
}
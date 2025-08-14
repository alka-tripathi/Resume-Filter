import Candidate from "../models/Candidate"

export const getAllCanditates=async(req,res)=>{
    try{
        const candidate=await Candidate.find().sort({score:-1});
        res.json(candidate);
    }catch(err){
         res.status(500).json({ error: "Error fetching candidates" });
    }
}
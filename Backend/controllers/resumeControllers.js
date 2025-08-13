export const processResume=async(req,res)=>{
    try{

    }
    catch(err){
        console.log("ERROR IS:",err);
        res.status(500).json({error: "Internal Server Error"});
    }
}
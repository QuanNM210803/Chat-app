const User=require('../../models/UserModel')
const jwt=require('jsonwebtoken')
async function userDetails(request, response){
   try{
      const token=request?.cookies?.token || ''
      if(!token){
         return response.status(401).json({
            message: 'Unauthorized: No token Provided',
            error:true
         })
      }
      const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY)
      if(!decoded){
         return response.status(401).json({
            message: 'Unauthorized: Invalid Token',
            error:true
         })
      }
      const user=await User.findById(decoded.id).select('-password')
      if(!user){
         return response.status(404).json({
            message:'User not found',
            error:true
         })
      }
      return response.status(200).json({
         message:'User details',
         data: user
      })
   }catch(error){
      return response.status(500).json({
         message: error.message || error,
         error: true
      })
   }
}

module.exports=userDetails
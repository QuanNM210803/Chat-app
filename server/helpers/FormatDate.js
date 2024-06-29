function formatDate(createdAt){
   const currentDate = new Date()
   const createdAtDate = new Date(createdAt)
   
   const timeDifferenceInSeconds = Math.floor((currentDate - createdAtDate) / 1000)
   const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60)
   const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60)
   const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24)
   
   if (timeDifferenceInDays > 1) {
      return createdAtDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
   } else if (timeDifferenceInDays === 1) {
      return '1d'
   } else if (timeDifferenceInHours >= 1) {
      return `${timeDifferenceInHours}h`
   } else if (timeDifferenceInMinutes >= 1) {
      return `${timeDifferenceInMinutes}m`
   } else {
      return 'Now'
   }
}

module.exports=formatDate
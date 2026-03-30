export default function DoWork({work, isFit, duration}){
    if(isFit){
        return(
         <h2>Go for doing {work} Duration: {duration}min</h2>
        )
    }
    return <h2>Go to sleep</h2>
} 
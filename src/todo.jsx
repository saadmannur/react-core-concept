// export default function ToDo({task}){
//     return (
//         <div>
//             <h2>Task: {task} </h2>
//         </div>
//     )
// }

export default function ToDo({task, isDone, time}){
    if(isDone === true) {
        return <li>Done: {task} duration: {time}</li>
    }
    return <li>Pending: {task} duration: {time} </li>
}

// export default function ToDo({task, isDone}){
//     return isDone && <li>{task} is Done {isDone}</li>
// }
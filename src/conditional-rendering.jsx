// 4. use variable
export default function TaskDo({task, isDone, duration=0}){
    let listItem ;
    if(isDone){
        listItem = <li>DONE task: {task} duration {duration? "i am  done": 'not done'}</li>
    }
    else{
        listItem = <li>PENDING task:{task} duration {duration? "i am done": "not done"}</li>
    }
    return listItem
}

//1. ternary 
// export default function TaskDo({task, isDone, duration}){
//     return isDone ? <h2>the task: {task} is DONE, task duration {duration}min.</h2> :<h2>the task:{task} is NOT DONE, do it now task duration {duration}min</h2>
// }

//2. && [and]
// export default function TaskDo({ task, isDone, duration }) {
//     return isDone && <h2>the task: {task} is DONE, task duration {duration}min.</h2>
// }

//3.|| [or]
// export default function TaskDo({ task, isDone, duration }) {
//     return !isDone || <h2>the task: {task} is DONE, task duration {duration}min.</h2>
// }
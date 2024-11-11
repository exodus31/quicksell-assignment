import urgent from '../Assets/urgent.svg'
import highPriority from '../Assets/high-priority.svg'
import lowPriority from '../Assets/low-priority.svg'
import mediumPriority from '../Assets/medium-priority.svg'
import noPriority from '../Assets/no-priority.svg'
import cancelled from '../Assets/Cancelled.svg'
import done from '../Assets/Done.svg'
import inProgress from '../Assets/in-progress.svg'
import toDo from '../Assets/to-do.svg'
import backlog from '../Assets/Backlog.svg'

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src = {noPriority} alt="icon"></img>
        case "Low": return <img src = {lowPriority} alt="icon"></img>
        case "Medium": return <img src = {mediumPriority} alt="icon"></img>
        case "High": return <img src = {highPriority} alt="icon"></img>
        case "Urgent": return <img src = {urgent} alt="icon"></img>
        default: return <img src = {noPriority} alt="icon"></img>
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src = {backlog} alt="icon"></img>
        case "Todo": return <img src = {toDo} alt="icon"></img>
        case "In progress": return <img src = {inProgress} alt="icon"></img>
        case "Done": return <img src = {done} alt="icon"></img>
        case "Canceled": return <img src = {cancelled} alt="icon"></img>
        default: return <img src = {backlog} alt="icon"></img>
    }
}
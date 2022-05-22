import { Link } from 'react-router-dom';
import Task from '../DisplayTask/Task';


const TaskList = ({ tasks, setTasks }) => {

    function RemoveTask(taskName) {
        tasks = tasks.filter((e) => e.name !== taskName)
        setTasks(tasks)
    }

    return (
        <>
            <ul className='list'>
                {tasks.length > 0 ? tasks.map((element, key) => (
                    <li key={key}>
                        <Task nom={element.name}/>
                        <Link data-testid="modify-link" to={`/modify/${tasks.indexOf(element)}`} style={{ textDecoration: 'none' }}>
                            <button className='button modify' data-testid="button-modify">Modifier</button>
                        </Link>
                        <button className='button delete' data-testid="button-delete" onClick={() => RemoveTask(element.name)}>Supprimer</button>
                    </li>
                )) :

                    (<li key="0">Aucune Tâche créée</li>)}
            </ul>

            <Link to="/create">
                <button className='add button'>Ajouter une tâche</button>
            </Link>
        </>

    );
}

export default TaskList;
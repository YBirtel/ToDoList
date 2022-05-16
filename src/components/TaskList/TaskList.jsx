import { Link } from 'react-router-dom';
import Task from '../DisplayTask/Task';


const TaskList = ({ tasks, setTasks }) => {

    function RemoveTask(taskName) {
        return tasks.filter((e) => e.name !== taskName)
    }

    return (
        <>
            <ul className='list'>
                {tasks.length > 0 ? tasks.map((element, key) => (
                    <li key={key}>
                        <Task nom={element.name} duree={element.duration} />
                        <Link to={`/modify/${tasks.indexOf(element)}`} style={{ textDecoration: 'none' }}>
                            <button className='button modify'>Modifier</button>
                        </Link>
                        <button className='button delete' onClick={() => setTasks(RemoveTask(element.name))}>Supprimer</button>
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
import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md'



const Create = ({ tasks, setTasks }) => {

    function createTask(name, duration, e) {
        if (!name || !duration) {
            alert("Veuillez remplir les champs")
            e.preventDefault()
        }
        else{
            return setTasks([...tasks, { name: name, duration: duration }])
        }

        module.exports = createTask;

    }

    return (
        <>
            <label for="task-name">Nom de la tâche</label>
            <input type="text" id='task-name' required />
            <label for="task-duration">Durée de la tâche</label>
            <input type="number" id='task-duration' required />
            <Link to="/">
                <button className='button add' onClick={(e) => createTask(document.getElementById('task-name').value, document.getElementById('task-duration').value, e)}>Créer</button>
            </Link>
            <div className='back-div'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='button back'><MdOutlineArrowBackIos />Retour</button>
                </Link>
            </div>
        </>
    );
}

export default Create
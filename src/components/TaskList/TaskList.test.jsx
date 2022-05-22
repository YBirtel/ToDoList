import TaskList from './TaskList'
import userEvent from "@testing-library/user-event";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe('TaskList', () => {


    test('render without errors', () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <TaskList tasks={[]} />
            </Router>
        )
    })

    test('render without task', () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <TaskList tasks={[]} />
            </Router>
        )
        const noTask = screen.getByText(/Aucune tâche créée/i);
        expect(noTask).toBeInTheDocument();
    })

    test('render with one task', () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <TaskList tasks={[{ "name": "test" }]} />
            </Router>
        )
        const testTask = screen.getByText(/test/i);
        expect(testTask).toBeInTheDocument();
    })

    test('render delete button', () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <TaskList tasks={[{ "name": "test" }]} />
            </Router>
        )
        const suppButton = screen.getByTestId("button-delete")
        expect(suppButton).toBeInTheDocument();
    })

    test('render modify button', () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <TaskList tasks={[{ "name": "test" }]} />
            </Router>
        )
        const suppButton = screen.getByTestId("button-modify")
        expect(suppButton).toBeInTheDocument();
    })

    test('delete button click', async () => {
        const history = createMemoryHistory();
        const setTasks = jest.fn()
        const { getByTestId } = render(
            <Router location={history.location} navigator={history}>
                <TaskList tasks={[{ "name": "test" }]} setTasks={setTasks} />
            </Router>
        )
        const buttonTest = getByTestId("button-delete")
        userEvent.click(buttonTest)
        expect(setTasks).toHaveBeenCalled()
    })

    // test('modify button click', async () => {
    //     const history = createMemoryHistory();
    //     const { getByTestId, getByText } = render(
    //         <Router location={history.location} navigator={history}>
    //             <TaskList tasks={[{ "name": "test" }]} />
    //         </Router>
    //     )

    //     act(() => {
    //         // Find the link (perhaps using the text content)
    //         const goHomeLink = screen.getByTestId("modify-link");
    //         // Click it
    //         fireEvent.click(goHomeLink);
    //     });

    //     const modifyPage = getByText(/Modification de la tâche/i)
    //     expect(modifyPage).toBeInTheDocument()
    // })
})
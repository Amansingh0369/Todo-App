// App.jsx
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from "./components/Todos.jsx";

function App() {
    return (
        <>
            <CreateTodo />
            <Todos></Todos>
        </>
    )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from "./components/FormularioTarea";


function App() {

  return (
<>
    <Container className="my-4 main">
      <h1 className="display-1 text-center">Lista de Tareas</h1>
      <hr />
      <FormularioTarea></FormularioTarea>
    </Container>
    <Container fluid className="text-center text-bg-dark py-4">
      <footer>
        <p>&copy; Todos los derechos reservados.</p>
      </footer>
    </Container>
    </>
  )
}

export default App

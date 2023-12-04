import { Container } from 'react-bootstrap';
import './App.css';

import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Titulo } from './components/Title';
function App() {
  return (
    <main>
      <Container fluid>
        <section className='inicio'>
          <Banner />

          <Titulo />

          <NavBar />

          

          

        </section>
      </Container>
    </main>
  );
}

export default App;

//import Menu from './Components/Menu';
//import Footer from './Components/Footer';

//import Rotas from './rotas'; 
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {lazy, Suspense} from 'react';
import './App.css';

const Menu = lazy(() => import('./Components/Menu'));
const Rotas = lazy(() => import('./rotas'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {
  return (
    <BrowserRouter>
        <div className="App">

        <Suspense fallback={ <h1>Aguarde...</h1> }>
                <header>
                    <Menu/>
                  </header>
                              
             </Suspense>

          


          <Suspense fallback={ <h2>Carregando...</h2> }>
            
                  <main>
                    <Container fluid>
                      <Rotas/>
                    </Container>
                  </main>
                  
             </Suspense>

       

             <Suspense fallback={ <h3>Só um Momento...</h3> }>
                
                  <footer>
                    <Footer/>
                </footer>
             </Suspense>
          
        </div>
    </BrowserRouter>
    
  );
}

export default App;

import './Lojas.css';


function Lojas(){
    return(
        <div>
            <header>
                    <h2>Nossas Lojas</h2>
                    <hr/>
            </header> 
        
                
                <div className="lojas">
                    <h3>Rio de Janeiro</h3>
                    <p>Avenida Presidente Vargas, 5000</p>
                    <p>10&ordm; andar</p>
                    <p>Centro</p>
                    <p>(21) 3333-3333</p>
                </div>

                <div className="lojas">
                    <h3>São Paulo</h3>
                    <p>Avenida Paulista, 985</p>
                    <p>3&ordm; andar</p>
                    <p>Jardins</p>
                    <p>(11) 4444-4444</p>
                </div>

                <div className="lojas">
                    <h3>Santa Catarina</h3>
                    <p>Rua Major &Aacute;vila, 370</p>
                    <p>Vila Mariama</p>
                    <p>(47) 5555-5555</p>
                    
                </div>

          
           
        
        </div>
    );
};
export default Lojas;
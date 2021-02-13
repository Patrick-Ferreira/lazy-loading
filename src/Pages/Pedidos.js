import './Pedidos.css';
export default function Pedidos() {

    return (
                                  
                    <>
                    <h2> Pedidos </h2>
                    <hr />
                
                      <form action='pedido-realizado.html' method='POST'>
                        <h2>Informe seus dados:</h2>
                
                        <label for='nome'>Nome:</label>
                        <input type='text' name='nome' id='nome' placeholder='Pedro...' />
                
                        <label for='email'>Email:</label>
                        <input type='email' name='email' id='email' placeholder='exemplo@email.com'/>
                
                        <label for='endereco'>Endereço:</label>
                        <input type='text' name='endereco' id='endereco' placeholder='Rua A'/>
                
                        <label for='cep'>CEP:</label>
                        <input type='number' name='cep' id='cep' placeholder='00000-000'/>
                
                        <h2>Faça o seu Pedido!</h2>
                
                        <label for='quantidade'>Quantidade:</label>
                        <input type='number' name='quantidade' id='quantidade' placeholder='00'/>
                
                      
                        <input class='btn btn-info my-4 pr-1'  type='submit' value='Realizar Pedido!' />
                         
                        
                          
                      </form>
                
                     
                    </>
                    
    )
}
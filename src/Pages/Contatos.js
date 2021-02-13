
import './Contatos.css';
import email from '../imagens/email.jpg';
import Whatsapp_1 from '../imagens/Whatsapp_1.png';
export default function Contatos() {
    return (
       
            <>
                    <header>
                        <h2> Fale Conosco </h2>
                        <hr/>
                    </header>

                        <section className="completo-contatos">

                            <div className="contatos">

                                <img width='42px' src={email} alt="email" className="img"></img>
                                <p>contato@fullstackeletro.com</p>  

                            </div>
                            
                            <div className="contatos">

                                <img width='50px'src={Whatsapp_1} className="img"></img>
                                <p>(11) 99999-9999 </p>   

                            </div>
                   </section>  
                   <div>       
                  
                <form  method ="POST" action="" >
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Nome</label>
                            <input type="text" name="nome" className="form-control" id="exampleFormControlInput1"  placeholder="Pedro..." />
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Mensagem</label>
                            <textarea className="form-control" name="mensagem" id="exampleFormControlTextarea1" rows="3"placeholder="Eu estou ..."></textarea>
                        </div>
                        <input class="btn btn-info my-4 item-align-center" type="submit"  value="Enviar" />
                        
                 </form>

                 </div>    
       
       </>
       

     


    );
}

 
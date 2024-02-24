import "./app.css";
import logo from "./assets/IconAppClickgas.png";

const Home = () => {
  return (

    <section className="container h" >
      <img src={logo} alt="" className="img" />
      <article className="content">
        <h1 className="text-5xl font-bold text-[#bc000e]">Política de Privacidade Click Gás e Água</h1>
        <div className="">
          <h3 className="text-2xl mb-4 text-justify">
            Esta Política de Privacidade descreve como são coletados, usados e compartilhados os dados pessoais dos usuários do aplicativo Click Gás.
          </h3>
          <h3 className="text-2xl mb-2 text-center">Informações Coletadas</h3>
          <h3 className="text-2xl ">Informações de Pedido: </h3>
          <p className="text-lg ml-2">Quando um usuário realiza um pedido através do aplicativo, coletamos as seguintes informações:</p>
          <p className="text-lg ml-2">
            Nome da rua
            Número da casa
            Ponto de referência
            Bairro
            Forma de pagamento (Pix, cartão ou dinheiro)
          </p>
          <h3 className="text-2xl ">
            Localização:
          </h3>
          <p className="text-lg ml-2">O aplicativo coleta a localização atual do usuário para auxiliar na entrega do pedido. Esta localização é usada apenas durante o processo de entrega e não é armazenada pelo aplicativo.</p>
          <h3 className="text-2xl ">
            Uso das Informações
          </h3>
          <p className="text-base ml-2">
            As informações coletadas são usadas exclusivamente para os seguintes propósitos:
          </p>
          <p className="text-base ml-2">
            Processar e entregar os pedidos dos usuários.
            Facilitar a comunicação entre o usuário e o serviço de entrega, através da montagem de uma mensagem no WhatsApp com todas as informações fornecidas para realizar o pedido.
            Melhorar a experiência do usuário ao fornecer informações relevantes para a entrega dos pedidos.
          </p>
          <h3 className="text-2xl ">
            Compartilhamento de Informações
          </h3>
          <p className="text-base ml-2">
            As informações fornecidas pelos usuários não são compartilhadas com terceiros, exceto nos seguintes casos:
          </p>
          <p className="text-base ml-2">
            Compartilhamento com o serviço de entrega para facilitar a entrega dos pedidos.
            Quando exigido por lei ou por solicitação de autoridades governamentais.
          </p>
          <h3 className="text-2xl ">
            Segurança dos Dados
          </h3>
          <p className="text-base ml-2">
            Tomamos medidas razoáveis para proteger as informações pessoais dos usuários contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.
          </p>
          <h3 className="text-2xl ">
            Alterações nesta Política de Privacidade
          </h3>
          <p className="text-base ml-2">
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas práticas de privacidade do aplicativo. Recomendamos que os usuários revisem periodicamente esta política para estar cientes de quaisquer alterações.
          </p>
          <h3 className="text-2xl ">
            Contato
          </h3>
          <p className="text-base ml-2">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do seguinte endereço de e-mail: pedrosantosmaciel@gmail.com .
          </p>
        </div>
      </article>
    </section>

  );
};
export default Home;

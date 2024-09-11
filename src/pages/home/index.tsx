import { useState } from "react";
import clickGas from '../../assets/IconAppClickgas.png';
import ClickGas from '../../components/ClickGas';
import myDream from '../../assets/myDream.png';
import MyDream from "../../components/MyDream";
import { Link } from "react-router-dom";



const Home = () => {
  const [gas, setGas] = useState<boolean>(false);
  const [dream, setDream] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);



  const gasF = () => {
    setShow(true)
    setGas(true)
    setDream(false)
  }
  const dreamF = () => {
    setShow(true)
    setDream(true)
    setGas(false)

  }

  return (
    <section className="flex  flex-col p-1">


      <nav className="w-full border-2 h-20 bg-black rounded-2xl flex-wrap">
        <div className="w-4/5 border-2 h-12 mx-auto my-4 rounded-2xl">
          <ul className="flex justify-around w-full my-2 ">
            <li className="text-white hover:text-[#BC000D] hover:cursor-pointer" onClick={gasF}>Politica Click Gás e Água</li>
            <li className="text-white hover:text-[#B9307F] hover:cursor-pointer" onClick={dreamF}>Politica My Dream</li>
          </ul>
        </div>
      </nav>
      <h1 className="text-center text-4xl">Clique em cima de algum dos icones dos Apps, ou no menu acima pra visualizar as Politicas de privacidade referentes a cada um  </h1>

      <div className="flex justify-around items-center bg-slate-400 w-9/12 mx-auto p-8">

        <div className="bg-white p-12 rounded-2xl hover:cursor-pointer" onClick={gasF}>
          <img src={clickGas} alt="icone click gas" className='w-[175px] rounded-xl' />
          <h2 className="text-center font-semibold">Politica Click Gás e Água</h2>
        </div>

        <div className=" bg-white p-12 rounded-2xl hover:cursor-pointer" onClick={dreamF}>
          <img src={myDream} alt="icone my dream" className='w-[175px] rounded-xl' />
          <h2 className="text-center font-semibold">Politica My Dream</h2>
        </div>

      </div>
      {
        gas === true || dream === true ? <h3 className="text-center text-5xl font-extrabold my-3" onClick={()=>{setShow(false)}}>Limpar</h3>:' '
      }
        
      


      {show && (gas && <ClickGas />)}

      {show && (dream && <MyDream />)}


      <Link rel="stylesheet" to="/dist/controlstock/index.html" >Acessa controle de estoque Exemplo</Link>
    </section>
  );
}

export default Home;

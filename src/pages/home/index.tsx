import { useState } from "react";


const Home = () => {
const [gas, setGas] = useState<boolean>(false);



  const gasF = ()=> {
    console.log('clicou no gas');
  }
  const dream = ()=> {
    console.log('clicou no dream');
  }

  return (
    <section className="flex  flex-col p-1">


      <nav className="w-full border-2 h-20 bg-black rounded-2xl flex-wrap">
        <div className="w-4/5 border-2 h-12 mx-auto my-4 rounded-2xl">
          <ul className="flex justify-around w-full my-2 ">
            <li className="text-white hover:text-[#BC000D] hover:cursor-pointer" onClick={gasF}>Politica Click Gás e Água</li>
            <li className="text-white hover:text-[#B9307F] hover:cursor-pointer" onClick={dream}>Politica My Dream</li>
          </ul>
        </div>
      </nav>
      <h1 className="text-center text-4xl">Clique Em cima de algum dos icones dos Apps, ou no menu acima pra visualizar as Politicas de privacidades referentes a cada um </h1>

      <div className="flex">


      </div>
      {
        

      }

    </section> 
  );
}

export default Home;

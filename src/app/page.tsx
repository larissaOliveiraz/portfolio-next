import Image from "next/image";
import impactaImg from "../../public/impacta3.png";
import pucImg from "../../public/puc.png";
import cubosImg from "../../public/cubos.png";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-white font-[700] text-5xl">Larissa Oliveira</h1>
        <p className="text-white/80 font-[400] text-[2rem]">
          Desenvolvedora Fullstack
        </p>
      </header>

      <div className="my-8 flex flex-col gap-4">
        <p className="text-white text-[1.15rem]">
          Olá! Meu nome é Larissa, tenho 21 anos e moro em São Paulo/SP.
        </p>
        <p className="text-white text-[1.15rem]">
          Sou formada em Análise e Desenvolvimento de Sistemas pela Faculdade
          Impacta de Tecnologia e, atualmente, estou cursando minha segunda
          graduação em Sistemas de Informação pela PUC Minas na modalidade EAD.
        </p>
        <p className="text-white text-[1.15rem]">
          Estudo programação desde 2021, com foco em Desenvolvimento Fullstack.
        </p>
        <p className="text-white text-[1.15rem]">
          Em 2023 fui voluntária em um projeto durante 5 meses, onde trabalhei
          como Desenvolvedora Frontend, utilizando Javascript e NextJS além de
          outras bibliotecas. Durante este período desenvolvi não somente minhas
          habilidades técnicas, mas também minhas habilidades comportamentais
          que são essenciais no ambiente colaborativo de trabalho.
        </p>
      </div>

      <main className=" flex flex-col gap-5">
        <h2 className="text-white font-[600] text-[2rem]">Formação</h2>
        <div className="flex gap-5 text-white border border-white p-5 px-12 rounded-3xl">
          <div className="w-[400px]">
            <Image src={pucImg} alt="" width={190} />
          </div>
          <div>
            <h3 className="mt-2 font-[600] text-[1.5rem]">
              Pontifícia Universidade Católica (PUC Minas)
            </h3>
            <h3 className="mt-5 font-[600] text-[1.5rem]">
              Sistemas de Informação
            </h3>
            <div className="ml-5">
              <h4 className="font-[600] text-[1.15rem]">
                Modalidade à distância (EAD) - 1° Semestre
              </h4>
              <p>Previsão de conclusão: 06/2028</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-white border border-white p-5 rounded-3xl">
          <div className="w-[440px]">
            <Image src={impactaImg} alt="" width={400} />
          </div>
          <div>
            <h3 className="mt-2 font-[600] text-[1.5rem]">
              Faculdade Impacta de Tecnologia (FIT)
            </h3>
            <h3 className="mt-5 font-[600] text-[1.5rem]">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <div className="ml-5">
              <h4 className="font-[600] text-[1.15rem]">
                Modaliade Presencial e EAD - 5 Semestres
              </h4>
              <p>Conclusão: 06/2024</p>
            </div>
          </div>
        </div>

        <h2 className="text-white font-[600] text-[2rem]">Cursos</h2>
        <div className="flex gap-12 text-white border border-white p-5 px-16 rounded-3xl">
          <div className="w-[370px]">
            <Image src={cubosImg} alt="" width={300} />
          </div>
          <div>
            <h3 className="mt-2 font-[600] text-[1.5rem]">Cubos Academy</h3>
            <h3 className="mt-5 font-[600] text-[1.5rem]">
              Desenvolvimento de Software - Backend
            </h3>
            <div className="ml-5">
              <h4 className="font-[600] text-[1.15rem]">
                Modalidade à distância (EAD) - 5 Meses de duração
              </h4>
              <p>Conclusão: 11/2023</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

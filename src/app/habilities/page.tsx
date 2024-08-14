import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import tail from "../../../public/tail.png";
import next from "../../../public/next.png";
import java from "../../../public/java.png";
import csharp from "../../../public/csharp.png";
import spring from "../../../public/spring.png";
import net from "../../../public/net.png";
import express from "../../../public/express.png";
import nest from "../../../public/nest.png";
import postgres from "../../../public/postgre.png";
import mysql from "../../../public/mysql.png";
import vscode from "../../../public/vscode.png";
import vs from "../../../public/vs.png";
import intellij from "../../../public/intellij.png";
import insomnia from "../../../public/insomnia.png";
import Image from "next/image";

export default function Habilities() {
  return (
    <div className="text-white">
      <header>
        <h1 className="text-white font-[700] text-5xl">Habilidades</h1>
      </header>

      <div className="my-6 flex flex-col gap-4">
        <p className="text-white text-[1.15rem]">
          Meu primeiro contato com a programação foi através do HTML, CSS e
          Javascript. No começo, tive maior foco no Frontend incorporando,
          também, o aprendizado do React e do NextJS.
        </p>
        <p className="text-white text-[1.15rem]">
          Depois de 1 ano com foco total nos meus estudos de Frontend, meu
          interesse no Backend despertou. Decidi aprender a linguagem Java
          juntamente com o Spring depois de pesquisar as demandas do mercado.
        </p>
        <p className="text-white text-[1.15rem]">
          Recentemente iniciei meus estudos na linguagem C# juntamente com o
          .NET e o ASP.NET e, no momento, estou com maior foco no aprendizado do
          Backend.
        </p>
      </div>

      <main className="flex flex-col gap-5">
        <div>
          <h2 className="text-white font-[600] text-[2rem]">Frontend</h2>
          <div className="flex h-[50px] gap-3 mt-2">
            <Image src={js} alt="" width={50} />
            <Image src={ts} alt="" width={50} />
            <Image src={react} alt="" width={50} />
            <Image src={next} alt="" width={50} />
            <Image src={tail} alt="" width={50} />
          </div>
        </div>

        <div>
          <h2 className="text-white font-[600] text-[2rem]">Backend</h2>
          <div className="flex h-[50px] gap-3 mt-2">
            <Image src={java} alt="" width={50} />
            <Image src={spring} alt="" width={50} />
            <Image src={csharp} alt="" width={50} />
            <Image src={net} alt="" width={50} />
            <Image src={js} alt="" width={50} />
            <Image src={express} alt="" width={50} />
            <Image src={nest} alt="" width={50} />
            <Image src={postgres} alt="" width={50} />
            <Image src={mysql} alt="" width={50} />
          </div>
        </div>

        <div>
          <h2 className="text-white font-[600] text-[2rem]">Ferramentas</h2>
          <div className="flex h-[50px] gap-3 mt-2">
            <Image src={intellij} alt="" width={50} />
            <Image src={vscode} alt="" width={50} />
            <Image src={vs} alt="" width={50} />
            <Image src={insomnia} alt="" width={50} />
          </div>
        </div>
      </main>
    </div>
  );
}

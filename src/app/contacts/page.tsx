import { Bot, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <div>
      <header>
        <h1 className="text-white font-[700] text-5xl">Contato</h1>
      </header>

      <div className="mt-10 text-white flex flex-col gap-8">
        <Link
          href="mailto:oliveira.larissa.dv@gmail.com"
          className="flex items-center gap-3"
        >
          <Mail color="white" />
          oliveira.larissa.dv@gmail.com
        </Link>
        <div className="flex items-center gap-3">
          <Phone color="white" />
          <p>(11) 98129-6041</p>
        </div>
        <Link
          href={"https://www.linkedin.com/in/larissaoliveiraz/"}
          className="flex items-center gap-3"
        >
          <Linkedin color="white" />
          <p className="mt-[4px]">larissaoliveiraz</p>
        </Link>
        <div className="flex items-center gap-3">
          <Bot color="white" />
          <p>ID Discord - lari3084</p>
        </div>
      </div>
    </div>
  );
}

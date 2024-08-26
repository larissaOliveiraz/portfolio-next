interface FrontendProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: "DONE" | "DOING"
  functionalities: string[];
  website?: string;
  github: string;
  tech: string[];
  images: string[];
}

export const FrontendProjects: FrontendProject[] = [
  {
    id: "1",
    title: "Finance Next",
    subtitle: "Controle financeiro",
    description: "Essa aplicação possibilita o cadastro dos gastos mensais ou de qualquer outro período de tempo do usuário. O objetivo é ajudar as pessoas a gerenciarem melhor suas finanças pessoais. No final o sistema calcula seu saldo restante, ficando disponível a soma de ganhos, gastos e o total.",
    status: "DONE",
    functionalities: [
      "Cadastrar transações informando nome, categoria e valor.",
      "Deletar transações.",
      "Pesquisar transações pelo nome ou categoria.",
      "Visualizar o banlanço geral das transações."
    ],
    website: "https://finance-next-delta.vercel.app/",
    github: "https://github.com/larissaOliveiraz/finance-next",
    tech: ["Javascript", "Typescript", "NextJS", "TailwindCSS", "PhosphorIcons", "localStorage"],
    images: ["/projects/finance-app.png"]
  },
  {
    id: "2",
    title: "Space Travel Web",
    subtitle: "Landing page sobre viagens espaciais",
    description: "Essa aplicação tem fins informativos, seu principal objetivo é educar os usuários interessados em planetas, luas e outros astros do universo. Além disso, o site dispõe de mais informações sobre missões realizadas pela NASA e sua tripulação.",
    status: "DONE",
    functionalities: [
      "Acessar informações sobre planetas, luas e outros astros do universo.",
      "Acessar informações sobre missões realizadas pela NASA.",
      "Acessar informações sobre a tripulação das diferentes missões.",
      "Navegação intuitiva e leve."
    ],
    github: "https://github.com/larissaOliveiraz/space-travel-web",
    tech: ["Javascript", "Typescript", "React", "Styled-Components", "Axios", "React Router", "Vite"],
    images: ["/projects/space-travel.png"]
  }
]
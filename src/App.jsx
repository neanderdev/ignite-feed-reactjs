import { Header } from "./components/Header";
import { Post } from "./components/Post";

export default function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Neander de Souza" 
        content="Conteúdo do dia 15/06/2022, venha conhecer as novidade" 
      />
      <Post 
        author="Neander de Souza" 
        content="Conteúdo do dia 14/06/2022, venha conhecer as novidade" 
      />
    </div>
  )
}

import { RecoilRoot } from "recoil";
import "./App.css";
import Carrinho from "./componentes/Carrinho";

export default function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <h1>🛒 NERDWEAR</h1>
        <Carrinho />
      </div>
    </RecoilRoot>
  )
}
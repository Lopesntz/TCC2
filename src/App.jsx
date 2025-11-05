import './App.css'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/Hero/Hero'
import FeaturesSection from './Components/Feature/Feature'
import Informations from './Components/Informations/informations'
import Products from './Components/Products/Products'
import Teams from './Components/Teams/teams'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Prototipo from './Pages/Prototipo/prototipo'
import Contact from './Pages/Contatos/Contatos'
import Triagem from './Pages/Totem1triagem/Totemtriagem/Triagem'
import TotemModal from './Pages/TotemModal/TotemModal'
import FundoT from './Components/FundoTotem/FundoT'
import TotemReceita from './Pages/Totem1triagem/TotemReceita/TotemReceita'
import Foto from './Pages/Totem1triagem/TotemFotoReceita/Foto'
import Infotriagem from './Pages/Infotriagem/Infotriagem'
import Infopagamento from './Pages/Infopagamento/infopagamento'
import Dados from './Pages/Totem1triagem/Dados/dados'
import About from './Pages/SobreNos/about'
import CarrinhoConfirmacao from './Components/CarrinhoConfirmacao/CarrinhoConfirmacao'
import MedicamentosBalcao from './Components/MedicamentosBalcao/MedicamentosBalcao'
import TriagemFinalizada from './Components/TriagemFinalizada/TriagemFinalizada'
import TotemPagamento from './Pages/TotemPagamento/Pagamento'
import Scanner from './Pages/PagamentoScanner/Scanner'
import CarrinhoPagamento from './Pages/CarrinhoPagamento/CarrinhoPagamento'
import Cartao from './Pages/PamentoCartao/Cartao'
import PagamentoFim from './Pages/PagamentoFim/PagamentoFim'
import Pix from './Pages/PagamentoPix/Pix'



function HomePage() {
  return (
    <>
      <Header />
      <HeroSection /><br />
      <FeaturesSection />
      <Informations />
      
      <Products />
      <Teams />
      <Footer />
    </>
  )
}




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prototipo" element={<Prototipo />} />
        <Route path="/Contato" element={<Contact/>}> </Route>
        <Route path="/Triagem" element={<Triagem/>}> </Route>
        <Route path="/TotemModal" element={<TotemModal/>}></Route>
         <Route path="/TotemReceita" element={<TotemReceita/>}></Route>
         <Route path="/Foto" element={<Foto/>}></Route>
          <Route path="/Infotriagem" element={<Infotriagem/>}></Route>
          <Route path="/Infopagamento" element={<Infopagamento/>}></Route>
          <Route path="/Dados" element={<Dados/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/CarrinhoConfirmacao" element={<CarrinhoConfirmacao/>}></Route>
          <Route path="/MedicamentosBalcao" element={<MedicamentosBalcao/>}></Route>
          <Route path="/TriagemFinalizada" element={<TriagemFinalizada/>}></Route>
          <Route path="/TotemPagamento" element={<TotemPagamento/>}></Route>
          <Route path="/Scanner" element={<Scanner/>}></Route>
          <Route path="/CarrinhoPagamento" element={<CarrinhoPagamento/>}></Route>
          <Route path="/Cartao" element={<Cartao/>}></Route>
          <Route path="/Pix" element={<Pix/>}></Route>
          
          <Route path="/PagamentoFim" element={<PagamentoFim/>}></Route>
      </Routes>
    </Router>
  )
}



export default App
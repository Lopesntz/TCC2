import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import './CarrinhoPagamento.css';
import Header from '../../Components/Header/Header';
import FundoT from '../../Components/FundoTotem/FundoT';



const CarrinhoPagamento = () => {
  
  const [medicamentosBalcao, setMedicamentosBalcao] = useState([]);

  const medicamentosReceita = [
    { id: 101, nome: 'Amoxilina', descricao: 'Amoxilina 500mg - 21 comprimidos', preco: 45.90, imagem: '/public/images/Remedios/amoxicilina-500mg.jpg', tipo: 'receita' },
    { id: 102, nome: 'Avamys', descricao: 'Fluticasona 27,5mcg - 120 doses', preco: 89.50, imagem: '/public/images/Remedios/Avamys.png', tipo: 'receita' }
  ];

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      const medicamentos = JSON.parse(carrinhoSalvo).map(med => ({ ...med, tipo: 'balcao' }));
      setMedicamentosBalcao(medicamentos);
    }
  }, []);

  const removerMedicamento = (id) => {
    const novosMedicamentos = medicamentosBalcao.filter(med => med.id !== id);
    setMedicamentosBalcao(novosMedicamentos);
    localStorage.setItem('carrinho', JSON.stringify(novosMedicamentos));
  };

 

  const todosMedicamentos = [...medicamentosReceita, ...medicamentosBalcao];
  const subtotal = todosMedicamentos.reduce((total, med) => total + med.preco, 0);
  const desconto = 0.00;
  const total = subtotal - desconto;

  return (
    <> <div className="fundo-totem-wrapper">
            <FundoT />
          </div>
    <div className="pagamento-wrapper">
     
      <Header />

      <main className="pagamento-main">
        <div className="medicamentos-section">
          <h2>Medicamentos no Carrinho</h2>
          
          {medicamentosReceita.map(med => (
            <div key={med.id} className="medicamento-card receita">
              <img src={med.imagem} alt={med.nome} />
              <div className="detalhes">
                <h3>{med.nome}</h3>
                <p>{med.descricao}</p>
                <span>R$ {med.preco.toFixed(2)}</span>
              </div>
            </div>
          ))}

          {medicamentosBalcao.map(med => (
            <div key={med.id} className="medicamento-card balcao">
              <img src={med.imagem} alt={med.nome} />
              <div className="detalhes">
                <h3>{med.nome}</h3>
                <p>{med.descricao}</p>
                <span>R$ {med.preco.toFixed(2)}</span>
              </div>
              <button className="btn-remove" onClick={() => removerMedicamento(med.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="resumo-pedido">
          <h3>Resumo do Pedido</h3>
          <div className="itens-resumo">
            <div><span>Subtotal:</span><span>R$ {subtotal.toFixed(2)}</span></div>
            <div><span>Desconto:</span><span>R$ {desconto.toFixed(2)}</span></div>
            <div className="total"><span>Total:</span><span>R$ {total.toFixed(2)}</span></div>
          </div>

          <div className="botoes-pagamento">
            <Link to="/Cartao">
            <button className='CartaoCOR'>Pagar com Cartão</button>
            </Link>
            <Link to='/Pix'>
            <button  className='PixCor'>Pagar com PIX</button>
            </Link>
            <Link to='/TotemPagamento'>
            <button  className="cancelar">Cancelar</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default CarrinhoPagamento;

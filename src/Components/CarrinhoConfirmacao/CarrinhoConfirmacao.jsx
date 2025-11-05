import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarrinhoConfirmacao.css';
import Header from '../Header/Header';
import FundoT from '../FundoTotem/FundoT';

const CarrinhoConfirmacao = () => {
  const navigate = useNavigate();
  const [medicamentosBalcao, setMedicamentosBalcao] = useState([]);

  const medicamentosReceita = [
    {
      id: 101,
      nome: 'Amoxilina',
      descricao: 'Amoxilina 500mg - 21 comprimidos',
      preco: 45.90,
      imagem: '/public/images/Remedios/amoxicilina-500mg.jpg',
      tipo: 'receita'
    },
    {
      id: 102,
      nome: 'Avamys',
      descricao: 'Fluticasona 27,5mcg - 120 doses',
      preco: 89.50,
      imagem: '/public/images/Remedios/Avamys.png',
      tipo: 'receita'
    }
  ];

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      const medicamentos = JSON.parse(carrinhoSalvo).map((med) => ({
        ...med,
        tipo: 'balcao'
      }));
      setMedicamentosBalcao(medicamentos);
    }
  }, []);

  const removerMedicamento = (id) => {
    const novosMedicamentos = medicamentosBalcao.filter(med => med.id !== id);
    setMedicamentosBalcao(novosMedicamentos);
    localStorage.setItem('carrinho', JSON.stringify(novosMedicamentos));
  };

  const adicionarMaisMedicamentos = () => {
    navigate('/MedicamentosBalcao');
  };

  const finalizarTriagem = () => {
    navigate('/TriagemFinalizada');
  };

  const cancelarTriagem = () => {
    localStorage.removeItem('carrinho');
    navigate('/');
  };

  const todosMedicamentos = [...medicamentosReceita, ...medicamentosBalcao];
  const subtotal = todosMedicamentos.reduce((total, med) => total + med.preco, 0);
  const desconto = 0.00;
  const total = subtotal - desconto;

  return (
    <>
    <div className="fundo-totem-wrapper">
          <FundoT />
        </div>
    <div className="carrinho-confirmacao">
      
<Header />

    <main className="main-container">
        
         <div className="content-wrapper">
          <div className="medicamentos-section">
            <div className="section-header">
              <h2>Medicamentos Identificados na Receita</h2>
            </div>
            
            <div className="medicamentos-grid">
              {medicamentosReceita.map(medicamento => (
                <div key={medicamento.id} className="medicamento-card receita">
                  <div className="medicamento-image">
                    <img src={medicamento.imagem} alt={medicamento.nome} />
                  </div>
                  <div className="medicamento-details">
                    <h3>{medicamento.nome}</h3>
                    <p>{medicamento.descricao}</p>
                    <div className="medicamento-price">R$ {medicamento.preco.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>

            {medicamentosBalcao.length > 0 && (
              <>
                <div className="section-header balcao-header">
                  <h2>Medicamentos do Balcão Adicionados</h2>
                </div>
                
                <div className="medicamentos-grid">
                  {medicamentosBalcao.map(medicamento => (
                    <div key={medicamento.id} className="medicamento-card balcao">
                      <div className="medicamento-image">
                        <img src={medicamento.imagem} alt={medicamento.nome} />
                      </div>
                      <div className="medicamento-details">
                        <h3>{medicamento.nome}</h3>
                        <p>{medicamento.descricao}</p>
                        <div className="medicamento-price">R$ {medicamento.preco.toFixed(2)}</div>
                      </div>
                      <button
                        className="btn-remove"
                        onClick={() => removerMedicamento(medicamento.id)}
                        title="Remover medicamento"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="sidebar-resumo">
            <div className="resumo-container">
              <h3>Resumo do Pedido</h3>
              <div className="resumo-items">
                <div className="resumo-item">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="resumo-item">
                  <span>Desconto:</span>
                  <span>R$ {desconto.toFixed(2)}</span>
                </div>
                <div className="resumo-item total">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="action-buttons">
              
                <button className="btn-adicionar-medicamentos" onClick={adicionarMaisMedicamentos}>
                  Adicionar mais medicamentos do balcão
                </button>
              
                <button className="btn-finalizar-pedido" onClick={finalizarTriagem}>
                  Finalizar Triagem
                </button>
              
                <button className="btn-cancelar-pedido" onClick={cancelarTriagem}>
                  Cancelar Triagem
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </main>
       
    </div>
    </>
  );
};

export default CarrinhoConfirmacao;
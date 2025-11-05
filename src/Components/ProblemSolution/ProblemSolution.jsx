import React, { useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { RiEmotionSadFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { FaAngry } from 'react-icons/fa';
import { HiEmojiSad } from 'react-icons/hi';
import { GiSandsOfTime } from 'react-icons/gi';
import { MdOutlineDirectionsRun } from 'react-icons/md';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { FaHospital } from 'react-icons/fa';
import { MdAdfScanner } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { BiHappy } from 'react-icons/bi';
import { FaArrowTrendDown } from 'react-icons/fa6';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { BiAccessibility } from 'react-icons/bi';
import { MdElderly } from 'react-icons/md';
import { MdEmojiPeople } from 'react-icons/md';
const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState('problem');

  return (
    <section className="problem-solution-section">
      <h2 className="problem-solution-title">Análise do Problema & Nossa Solução</h2>
      
      
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'problem' ? 'active problem-tab' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
           Problematização
        </button>
        <button 
          className={`tab-button ${activeTab === 'solution' ? 'active solution-tab' : ''}`}
          onClick={() => setActiveTab('solution')}
        >
           Nossa Solução
        </button>
      </div>

      
      {activeTab === 'problem' && (
        <div className="tab-content problem-content">
          <div className="problem-overview">
            <h3 className="section-subtitle">Cenário Atual das Drogarias</h3>
            
           
            <div className="stats-grid">
              <div className="stat-card critical">
                <div className="stat-icon"><AiOutlineFieldTime></AiOutlineFieldTime></div>
                <div className="stat-number">7.3</div>
                <div className="stat-label">Nota de Desempenho<br/><small>(Pesquisa Decomposer)</small></div>
                <div className="stat-status">CRÍTICO</div>
              </div>
              
              <div className="stat-card warning">
                <div className="stat-icon"><RiEmotionSadFill></RiEmotionSadFill></div>
                <div className="stat-number">51%</div>
                <div className="stat-label">Farmacêuticos com Burnout<br/><small>(Int. Journal Clinical Pharmacy)</small></div>
                <div className="stat-status">ALARMANTE</div>
              </div>
              
              <div className="stat-card danger">
                <div className="stat-icon"><BsPeopleFill></BsPeopleFill></div>
                <div className="stat-number">62%</div>
                <div className="stat-label">Clientes não retornam<br/><small>após experiência negativa</small></div>
                <div className="stat-status">PERDA CRÍTICA</div>
              </div>
            </div>

           
            <div className="problem-flow">
              <h4>Ciclo Vicioso Atual</h4>
              <div className="flow-steps">
                <div className="flow-step">
                  <div className="step-icon"><MdOutlineDirectionsRun></MdOutlineDirectionsRun></div>
                  <div className="step-title">Cliente Chega</div>
                  <div className="step-desc">Precisa de medicamento com receita</div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-icon"><GiSandsOfTime></GiSandsOfTime></div>
                  <div className="step-title">Fila de Espera</div>
                  <div className="step-desc">Aguarda atendimento presencial</div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-icon"><FaAngry></FaAngry></div>
                  <div className="step-title">Sobrecarga</div>
                  <div className="step-desc">Funcionário acumula tarefas</div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-icon"><HiEmojiSad></HiEmojiSad></div>
                  <div className="step-title">Insatisfação</div>
                  <div className="step-desc">Cliente e funcionário frustrados</div>
                </div>
              </div>
            </div>

           
            <div className="impact-areas">
              <div className="impact-card">
                <h4><RiUserUnfollowFill></RiUserUnfollowFill> Impacto nos Funcionários</h4>
                <ul>
                  <li>Múltiplas tarefas simultâneas</li>
                  <li>Estresse e ansiedade constante</li>
                  <li>Risco de burnout elevado</li>
                  <li>Ambiente de trabalho prejudicado</li>
                </ul>
              </div>
              
              <div className="impact-card">
                <h4><BsPeopleFill></BsPeopleFill> Impacto nos Clientes</h4>
                <ul>
                  <li>Filas longas e tempo perdido</li>
                  <li>Experiência de compra negativa</li>
                  <li>Migração para concorrentes</li>
                  <li>Perda de fidelização</li>
                </ul>
              </div>
              
              <div className="impact-card">
                <h4><FaHospital></FaHospital> Impacto no Negócio</h4>
                <ul>
                  <li>Redução nas vendas</li>
                  <li>Alta rotatividade de funcionários</li>
                  <li>Reputação prejudicada</li>
                  <li>Ineficiência operacional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

     
      {activeTab === 'solution' && (
        <div className="tab-content solution-content">
          <div className="solution-overview">
            <h3 className="section-subtitle">TotSimple - Revolução no Atendimento</h3>
            
          
            <div className="brand-showcase">
              <div className="brand-logo">
                <div className="totem-icon"></div>
                <div className="brand-name">TotSimple</div>
              </div>
              <p className="brand-tagline">Autoatendimento Inteligente para Drogarias</p>
            </div>

           
            <div className="features-showcase">
              <div className="feature-card">
                <div className="feature-icon"><MdAdfScanner></MdAdfScanner></div>
                <h4>Escaneamento Inteligente</h4>
                <p>Leitura rápida e segura de receitas médicas com tecnologia OCR avançada</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon"><FaClipboardList></FaClipboardList></div>
                <h4>Pedidos Automatizados</h4>
                <p>Envio direto de pedidos para o farmacêutico com pré-seleção de medicamentos</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon"><MdOutlinePayment></MdOutlinePayment></div>
                <h4>Pagamento Ágil</h4>
                <p>Interface interativa para pagamento rápido e seguro</p>
              </div>
            </div>

           
            <div className="solution-flow">
              <h4>Novo Fluxo Otimizado</h4>
              <div className="flow-timeline">
                <div className="timeline-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5> Tot Triagem</h5>
                    <p>Cliente insere receita no totem e sistema digitaliza automaticamente</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5> Personalização</h5>
                    <p>Adiciona outros medicamentos necessários ao pedido</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5> Liberdade</h5>
                    <p>Explora a drogaria enquanto pedido é preparado</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5> Atendimento Humanizado</h5>
                    <p>Farmacêutico chama pelo nome para entrega personalizada</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h5> Pagamento Flexível</h5>
                    <p>Finaliza no totem ou caixa tradicional</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="beneficios-grid">
              <div className="beneficios-card">
                <div className="beneficios-icon"><FaArrowTrendDown></FaArrowTrendDown></div>
                <h4>Eficiência</h4>
                <p>Redução de até <strong>70%</strong> no tempo de atendimento</p>
              </div>
              
              <div className="beneficios-card">
                <div className="beneficios-icon"><BiHappy></BiHappy></div>
                <h4>Satisfação</h4>
                <p>Experiência <strong>personalizada</strong> e sem filas</p>
              </div>
              
              <div className="beneficios-card">
                <div className="beneficios-icon"><BsPeopleFill></BsPeopleFill></div>
                <h4>Bem-estar</h4>
                <p>Funcionários focam em <strong>tarefas especializadas</strong></p>
              </div>
              
              <div className="beneficios-card">
                <div className="beneficios-icon"><FaArrowTrendUp></FaArrowTrendUp></div>
                <h4>Crescimento</h4>
                <p>Aumento na <strong>fidelização</strong> e vendas</p>
              </div>
            </div>

          
            <div className="adaptability-section">
              <h4> Adaptado para Todos os Perfis</h4>
              <div className="user-profiles">
                <div className="profile-card">
                  <div className="profile-icon"><MdElderly></MdElderly></div>
                  <h5>Idosos</h5>
                  <p>Interface simplificada com letras grandes e navegação intuitiva</p>
                </div>
                
                <div className="profile-card">
                  <div className="profile-icon"><MdEmojiPeople></MdEmojiPeople></div>
                  <h5>Jovens</h5>
                  <p>Navegação rápida e interface moderna e responsiva</p>
                </div>
                
                <div className="profile-card">
                  <div className="profile-icon"><BiAccessibility></BiAccessibility></div>
                  <h5>Acessibilidade</h5>
                  <p>Recursos de acessibilidade para pessoas com necessidades especiais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProblemSolution;
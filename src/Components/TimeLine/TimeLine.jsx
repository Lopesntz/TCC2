import React from 'react';

const Timeline = () => {
  const timelineItems = [
    { date: "Q1 2024", content: "Pesquisa e Desenvolvimento" },
    { date: "Q2 2024", content: "Prototipagem e Testes" },
    { date: "Q3 2024", content: "Desenvolvimento do MVP" },
    { date: "Q4 2024", content: "Testes Piloto" },
    { date: "Q1 2025", content: "Lançamento Comercial" }
  ];

  return (
    <div className="timeline">
      {timelineItems.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <span>{item.content}</span>
          </div>
         
          <div className="timeline-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
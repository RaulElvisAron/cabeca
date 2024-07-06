import React, { useState } from 'react';
import './Tutorial.css';

const steps = [
    {
        title: "Bem-vindo ao Mapa Interativo",
        description: "Este tutorial irá guiá-lo através das principais funcionalidades do mapa interativo.",
        element: null
    },
    {
        title: "Adicionar Marcadores",
        description: "Clique em qualquer ponto do mapa para adicionar um marcador.",
        element: "map"
    },
    {
        title: "Mover Marcadores",
        description: "Clique e arraste um marcador para movê-lo para uma nova localização.",
        element: "map"
    },
    {
        title: "Remover Marcadores",
        description: "Clique com o botão direito em um marcador para removê-lo.",
        element: "map"
    },
    {
        title: "Adicionar Pinos",
        description: "Clique com o botão direito do mouse em qualquer ponto do mapa para adicionar um pino.",
        element: "map"
    },
    {
        title: "Descrições de Marcadores e Pinos",
        description: "Clique em qualquer marcador ou pino para adicionar ou editar uma descrição para aquela sinalização no mapa.",
        element: "map"
    },
    {
        title: "Pesquisar Regiões",
        description: "Digite o nome de uma região no campo de busca para centralizar o mapa nessa região.",
        element: ".search-container"
    },
    {
        title: "Visualização de Camadas",
        description: "Use o controle de visualização de camadas para alternar entre diferentes camadas do mapa, como divisões territoriais e nomes de regiões.",
        element: ".leaflet-control-layers-toggle"
    },
    {
        title: "Distância dos Marcadores",
        description: "Veja a distância total entre marcadores colocados no mapa.",
        element: ".info-container .info-item.distance"
    },
    {
        title: "Modo de Transporte",
        description: "Selecione o modo de transporte entre marcadores.",
        element: ".info-container .info-item.controls"
    },
    {
        title: "Tempo de Viagem",
        description: "Veja o tempo estimado de viagem pela distância total no modo de transporte selecionado.",
        element: ".info-container .info-item.traveltime"
    },
    {
        title: "Rolador de Dados",
        description: "Use os botões de dados na parte inferior para lançar dados no mapa. E clique no botão 'Limpar' para remover todos os dados do rolador.",
        element: ".info-container .dices"
    },
    {
        title: "Exportar dados de navegação do Mapa",
        description: "Clique no botão 'Exportar' para salvar os dados de navegação que você fez no mapa (Marcadores, Pinos e Descrições).",
        element: ".info-container .export"
    },
    {
        title: "Importar dados de navegação do Mapa",
        description: "Clique no botão 'Importar' para carregar os dados de navegação que você tem salvo em .json (Marcadores, Pinos e Descrições).",
        element: ".info-container .import"
    }
];

const Tutorial = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const currentElement = document.querySelector(steps[currentStep].element);
    let rect = currentElement ? currentElement.getBoundingClientRect() : {};

    if (steps[currentStep].element === 'map') {
        rect = {
            top: '20%',
            left: '45%',
            width: '150px',
            height: '150px'
        }
    }

    return (
        <div className="tutorial-overlay">
            <div className="tutorial-highlight" style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}></div>
            <div className="tutorial-content">
                <h3>{steps[currentStep].title}</h3>
                <p>{steps[currentStep].description}</p>
                <div className="tutorial-buttons">
                    {currentStep > 0 && <button onClick={prevStep}>Anterior</button>}
                    {currentStep < steps.length - 1 && <button onClick={nextStep}>Próximo</button>}
                    {currentStep === steps.length - 1 && <button onClick={onClose}>Fechar</button>}
                </div>
                <button className="tutorial-close" onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default Tutorial;

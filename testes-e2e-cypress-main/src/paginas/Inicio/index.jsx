import React from 'react';
import ilustracaoBanner from 'assets/ilustracao-banner.svg';
import estilos from './Inicio.module.css';
import presente from 'assets/presente.svg';
import saque from 'assets/saque.svg';
import estrela from 'assets/estrela.svg';
import dispositivo from 'assets/dispositivo.svg';

export default function Inicio() {
  return (
    <>
      <div className={estilos.container}data-test="container">
        <div className={estilos.conteudo}data-test="conteudo">
          <div className={estilos.banner} data-test="saque">
            <h1 data-test="titulo-principal">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>

            <h2 data-test="subtitulo" >
              Bem-vindo ao nosso site
            </h2>
            
            <img
              src={ilustracaoBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
            />
          </div>
          <div className={estilos.vantagens}data-test="vantagens">
            <h2 data-test="titulo-vantagens">Vantagens do nosso banco:</h2>
            <div className={estilos.vantagens__itens} data-test="vantagens-itens">
              <div className={estilos.vantagens__item} data-test="vantagens-item">
                <img src={presente} alt="ícone de um presente" data-test="imagem" />
                <h3 data-test="beneficios">Conta e cartão gratuitos</h3>
                <p data-test="descrição-beneficios">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="vantagens-item">
                <img src={saque} alt="ícone de uma mão segurando um dinheiro" data-test="imagem" />
                <h3 data-test="sem-custos">Saques sem custo</h3>
                <p data-test="descrição-beneficios">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className={estilos.vantagens__item}data-test="vantagens-item">
                <img src={estrela} alt="ícone de uma estrela" data-test="imagem"/>
                <h3 data-test="programa-pontos">Programa de pontos</h3>
                <p data-test="acumulo-pontos">
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="vantagens-item">
                <img
                  src={dispositivo}
                  alt="ícone de um dispositivo como notebook"
                  data-test="imagem"
                />
                <h3 data-test="seg-dispositivos">Seguro Dispositivos</h3 >
                <p data-test="descrição-seg">
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

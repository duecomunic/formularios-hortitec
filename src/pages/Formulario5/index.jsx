import react, { useState } from "react";
import axios from "axios";

import "./style.css";
export function Formulario5() {
  return (
    <div className="container">
      <div className="header">
        <img
          src="https://www.hortitec.com.br/formularios/imagem/testeira.jpg"
          alt="Logotipo"
        />
      </div>
      <div className="textHeader">
        <h1 className="titulo">Formulário 05</h1>
        <span>ENTRADA/SAÍDA DE MATERIAIS</span>
        <strong className="noPrint">
          Entregar duas vias para o segurança na entrada feira
        </strong>
        <p className="textRed">ESTA RELAÇÃO SERÁ CONFERIDA PELO SEGURANÇA</p>

        <p>
          Relacionamos abaixo todo material a ser utilizado em nosso estande no
          Hortitec: (descrever apenas equipamentos eletrônicos, móveis e peças
          de decoração).
        </p>
        <p>Organização da Hortitec </p>
        <p className="textNormal">
          {" "}
          R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.
        </p>
      </div>
      <div className="filds">
        <div className="input1">
          <label>Empresa *</label>
          <input type="text" required />
        </div>
        <div className="input1">
          <label>Telefone *</label>
          <input type="text" required />
        </div>
        <div className="input1">
          <label>Email *</label>
          <input type="text" required />
        </div>
        <div className="input1">
          <label>Pavilhão *</label>
          <input type="text" required />
        </div>
        <div className="input1">
          <label>Nº do estande *</label>
          <input type="text" required />
        </div>
      </div>

      <table className="tabela">
        <tr>
          <th>Quantidade</th>
          <th className="thMeio">Descrição do material </th>
          <th>Nota de transporte</th>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>

        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
          <td>
            <input className="inputT" type="text" />
          </td>
        </tr>
      </table>

      <h3 className="resp">Responsável pelo preenchimento</h3>
      <div className="input1">
        <label>Nome *</label>
        <input type="text" required />
      </div>
      <div className="input1">
        <label>Email *</label>
        <input type="text" required />
      </div>
      <h3 className="textRed">
        Imprimir e entregar ao segurança na entrada da feira. * Preenchimento
        obrigatório
      </h3>
      <button className="buttonCalcular noPrint" onClick={() => window.print()}>
        Imprimir
      </button>
    </div>
  );
}

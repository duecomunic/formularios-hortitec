import react, { useState } from "react";
import axios from "axios";

import "./style.css";
export function Formulario3() {
  const [EQ, setEQ] = useState([
    { equipamento: "Ar-condicionado 7.000 Btus", kwa: 1.05, qtdEquipamento: 0 },
    { equipamento: "Ar-condicionado 7.500 Btus", kwa: 1.12, qtdEquipamento: 0 },
    { equipamento: "Ar-condicionado 10.000 Btus", kwa: 1.5, qtdEquipamento: 0 },
    { equipamento: "Ar-condicionado 10.500 Btus", kwa: 1.57, qtdEquipamento: 0 },
    { equipamento: "Ar-condicionado 12.000 Btus", kwa: 1.8, qtdEquipamento: 0 },
    { equipamento: "Ar-condicionado 18.000 Btus", kwa: 2.7, qtdEquipamento: 0 },
    { equipamento: "Ar-condicionado 24.000 Btus", kwa: 3.6, qtdEquipamento: 0 },
    { equipamento: "Lâmpada LED 150 W", kwa: 0.02, qtdEquipamento: 0 },
    { equipamento: "Lâmpada LED 250 W", kwa: 0.04, qtdEquipamento: 0 },
    { equipamento: "Lâmpadas LED 300 W", kwa: 0.04, qtdEquipamento: 0 },
    { equipamento: "Lap Top", kwa: 0.03, qtdEquipamento: 0 },
    { equipamento: "Microcomputador com monitor", kwa: 0.35, qtdEquipamento: 0 },
    { equipamento: "Monitor ", kwa: 0.25, qtdEquipamento: 0 },
    { equipamento: "Motor 0,25 CV ou HP", kwa: 0.2, qtdEquipamento: 0 },
    { equipamento: "Motor 0,50 CV ou HP", kwa: 0.4, qtdEquipamento: 0 },
    { equipamento: "Motor 0,75 CV ou HP", kwa: 0.6, qtdEquipamento: 0 },
    { equipamento: "Motor 1 CV ou HP", kwa: 0.8, qtdEquipamento: 0 },
    { equipamento: "Motor 2 CV ou HP", kwa: 1.6, qtdEquipamento: 0 },
    { equipamento: "Motor 3 CV ou HP", kwa: 2.4, qtdEquipamento: 0 },
    { equipamento: "Motor 4 CV ou HP", kwa: 3.2, qtdEquipamento: 0 },
    { equipamento: "Motor 5 CV ou HP", kwa: 4, qtdEquipamento: 0 },
    { equipamento: "Néon por metro", kwa: 0.03, qtdEquipamento: 0 },
    { equipamento: "TV", kwa: 0.6, qtdEquipamento: 0 },
    { equipamento: "DVD", kwa: 0.3, qtdEquipamento: 0 },
    { equipamento: "Vídeo wall 9/ TV 29 pol", kwa: 0.6, qtdEquipamento: 0 },
    { equipamento: "Cafeteira elétrica caseira", kwa: 0.8, qtdEquipamento: 0 },
    {
      equipamento: "Cafeteira elétrica comercial grande",
      kwa:2,
      qtdEquipamento: 0,
    },
    {
      equipamento: "Cafeteira elétrica comercial pequena",
      kwa: 1.4,
      qtdEquipamento: 0,
    },
    { equipamento: "Canhão de luz 300 Watts", kwa: 0.3, qtdEquipamento: 0 },
    { equipamento: "Canhão de luz 500 Watts", kwa: 0.5, qtdEquipamento: 0 },
    { equipamento: "Canhão de luz 1000 Watts", kwa: 1, qtdEquipamento: 0 },
    { equipamento: "CPU", kwa: 0.5, qtdEquipamento: 0 },
    { equipamento: "Forno elétrico pequeno", kwa: 1.5, qtdEquipamento: 0 },
    { equipamento: "Forno elétrico grande", kwa: 3, qtdEquipamento: 0 },
    { equipamento: "Forno de microondas", kwa: 1.35, qtdEquipamento: 0 },
    { equipamento: "Freezer horizontal/vertical", kwa: 0.5, qtdEquipamento: 0 },
    { equipamento: "Frigobar ", kwa: 0.3, qtdEquipamento: 0 },
    { equipamento: "Geladeira residencial", kwa: 0.5, qtdEquipamento: 0 },
    { equipamento: "Impressora linha PC", kwa: 0.2, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
    { equipamento: "", kwa: 0, qtdEquipamento: 0 },
  ]);

  const [empresa, setEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [pavilhao, setPavilhao] = useState("");
  const [nEstande, setNEstande] = useState("");
  const [area, setArea] = useState(0);

  const [nomeRemente, setNomeRemente] = useState("");
  const [emailRemente, setEmailRemente] = useState("");

  const [calcular, setCalcular] = useState(false);

  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [op3, setOp3] = useState("");

  const [total2, setTotal2] = useState(0);
  const [valorIncluso, setValorIncluso] = useState(0);
  const [saldoKva, setSaldoKva] = useState(0);

  function handleKwaValeu(ev, index) {
    let temp = [...EQ];
    temp[index].kwa = ev.target.value;
    setEQ(temp);
  }

  function handleEquipamentoValeu(ev, index) {
    let temp = [...EQ];
    temp[index].equipamento = ev.target.value;
    setEQ(temp);
  }

  function handleEQValeu(ev, index) {
    let temp = [...EQ];
    temp[index].qtdEquipamento = ev.target.value;
    setEQ(temp);
  }

  function saldoTotal() {
    const saldoKva = total2 - valorIncluso;
    return saldoKva;
  }

  function valorFinal() {
    const saldoKva = total2 - valorIncluso;
    return saldoKva * 250;
  }

  function meuFor() {
    for (var i = 0; i < 9; i++) {
      console.log("teste");
    }
  }

  function countTotal() {
    setCalcular(true);
    console.log(EQ);
    let total = 0;
    EQ.forEach((item) => {
      total += item.kwa * item.qtdEquipamento;
    });
    setTotal2(total);
    setValorIncluso(area * 0.06);
  }
  function componentDidMount() {
    if (empresa === "") {
      alert("Preencher o campo empresa.");
      return;
    }
    if (telefone === "") {
      alert("Preencher o campo telefone.");
      return;
    }
    if (email === "") {
      alert("Preencher o campo email.");
      return;
    }
    if (pavilhao === "") {
      alert("Preencher o campo pavilhão.");
      return;
    }
    if (nEstande === "") {
      alert("Preencher o campo Nº do estande.");
      return;
    }
    if (area === "") {
      alert("Preencher o campo Área total do estande (m²)");
      return;
    }
    if (nomeRemente === "") {
      alert("Preencher o campo nome do remetente");
      return;
    }
    if (emailRemente === "") {
      alert("Preencher o campo email do remetente");
      return;
    }
    if (calcular === false) {
      alert(
        "Antes de enviar você deve realizar pelo menos um calculo do botão de calcular."
      );
      return;
    }
    //   const article = {
    //     personalizations: [
    //       {
    //         to: [
    //           {
    //             email: "montagemhortitec@rbbeventos.com.brgit",
    //           },
    //         ],
    //         subject: "Formulario 04",
    //       },
    //     ],
    //     from: {
    //       email: "form@hortitec.com.br",
    //     },
    //     content: [
    //       {
    //         type: "text/html",
    //         value: `
    //         <html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head>
    //         <body>
    //         <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
    //         <tr>
    //             <td align="center"><b>FORMULÁRIO 04<br></b></td>
    //         </tr>
    //         <tr>
    //             <td align="center">SOLICITAÇÃO DE ELÉTRICA<br /></td>
    //         </tr><tr><td align="center"><b>&nbsp;<br></b></td></tr>
    //         <tr><td>&nbsp;</td></tr>
    //         <tr><td class="data_limite">ATENÇÃO: Não permitiremos o uso de lâmpadas Halógenas,  HQI ou outros tipos de lâmpadas “quentes”.<br><br>Data limite para credenciamento 22/05/2020<br><br>LEMBRAMOS QUE APÓS A DATA LIMITE NÃO GARANTIREMOS O FORNECIMENTO DE ENERGIA ADICIONAL</td></tr>
    //         <tr><td>&nbsp;</td></tr>
    //         <tr>
    //             <td class="texto_formulario">A energia elétrica será fornecida em unidade de KVA fracionado, deverá ser arredondado<br />
    //             para mais visando à segurança dos equipamentos.<br />
    //             A instalação elétrica (até o estande) é de responsabilidade da empresa instaladora<br />
    //             contratada pela coordenação do evento.</td>
    //         </tr>
    //         <tr><td class="texto_formulario">&nbsp;</td></tr>
    //         <tr><td class="texto_formulario">Organização da Hortitec<br />
    //             R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.</td>
    //         </tr>
    //         <tr><td>&nbsp;</td></tr>
    //         <tr></table>

    //         <table width="100%" border="1" cellspacing=0 cellpadding=2>
    //       <tr>
    //         <td colspan="2" align="right" bgcolor="#D9D9D9">Empresa </td>
    //         <td colspan="5" align="left">${empresa} </td>
    //       </tr>
    //       <tr>
    //         <td colspan="2" align="right" bgcolor="#D9D9D9">Telefone:</td>
    //         <td colspan="5" align="left">${telefone}</td>
    //       </tr>
    //       <tr>
    //         <td colspan="2" align="right" bgcolor="#D9D9D9">Pavilhão:</td>
    //         <td colspan="5" align="left">${pavilhao}</td>
    //       </tr>
    //       <tr>
    //         <td colspan="2" align="right" bgcolor="#D9D9D9">Nº do estande:</td>
    //         <td colspan="5" align="left">${nEstande}</td>
    //       </tr>
    // 	<tr>
    //         <td colspan="2" align="right" bgcolor="#D9D9D9">Área total do estande:</td>
    //         <td colspan="5" align="left">${area}</td>
    //       </tr>
    //       </table>
    //       <br>
    //       <table width="100%" border="1" cellspacing=0 cellpadding=2>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario" bgcolor="#D9D9D9">Equipamentos</td>
    //       </tr>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario">&nbsp;</td>
    //       </tr>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario">
    //             <table width="80%" align="center" border="0" cellspacing="0" cellpadding="0">
    //            <tr>
    //             <td width="50%">EQUIPAMENTOS </td>
    //             <td width="20%">KVA</td>
    //             <td width="20%">Qtde</td>

    //           </tr>

    //           ${EQ.map((item) => {
    //             return `<tr>
    //             <td >${item.equipamento} </td>
    //             <td >${item.kwa}</td>
    //             <td > ${item.qtdEquipamento}</td>
    //            </tr>`;
    //           })}

    //             <tr>
    //               <td colspan="7" align="center" class="texto_formulario">&nbsp;</td>
    //           </tr>
    // </table>
    //       <table width="100%" border="1" cellspacing=0 cellpadding=2>
    //       <tr>
    //         <td width="50%" align="right" bgcolor="#D9D9D9">TOTAL de KVA´s necessários:</td>
    //         <td align="left"><h3>${total2.toFixed(2)}</h3></td>
    //       </tr>
    //       <tr>
    //         <td width="50%" align="right" bgcolor="#D9D9D9">Total de KVA´s incluso no valor do estande (60 watts por m²):</td>
    //         <td align="left" ><h3>${valorIncluso.toFixed(2)}</h3></td>
    //       </tr>
    //       <tr>
    //         <td width="50%" align="right" bgcolor="#D9D9D9">Saldo a pagar em KVA´s:</td>
    //         <td align="left"><h3>${saldoTotal().toFixed(2)}</h3></td>
    //       </tr>
    //       <tr>
    //         <td width="50%" align="right" bgcolor="#D9D9D9">Total R$:</td>
    //         <td align="left"><h2>${valorFinal().toFixed(2)}</h2></td>
    //       </tr>
    //       </table>
    //       <br>
    //       <table width="100%" border="1" cellspacing=0 cellpadding=2>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario">Caso precise ser listado um equipamento que não conste na tabela (itens), favor colocar o valor em KVA’s com a descrição do equipamento.······.<br />
    //           1 KVA = 1000 WATS<br />
    //           <span class="data_limite">Valor adicional: R$ 180,00/KVA</span></td>
    //       </tr>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario">Durante o evento a empresa responsável pelo cabeamento mede o
    //           consumo de cada estande, caso seja comprovada a utilização de KVAS
    //           maior do que o permitido, o excedente será cobrado mediante boleto
    //           bancário.</td>
    //       </tr>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario"><span class="data_limite">Lembramos que após a data limite não garantimos o fornecimento dos serviços</span></td>
    //       </tr>
    // 	</table>
    // 	<br>
    // 	<table width="100%" border="1" cellspacing=0 cellpadding=2>
    //       <tr>
    //         <td colspan="7" align="center" class="texto_formulario">Responsável pelo preenchimento</td>
    //       </tr>
    //       <tr>
    //         <td colspan="2" align="right" bgcolor="#D9D9D9">Nome:</td>
    //         <td colspan="5" align="left">${nomeRemente}</td>
    //       </tr>

    //         <td colspan="2" align="right" bgcolor="#D9D9D9">E-mail:</td>
    //         <td colspan="5" align="left">${emailRemente}</td>
    //       </tr>

    //     </table>
    //     </body>
    //     </html>
    //         `,
    //       },
    //     ],
    //   };
    //   const headers = {
    //     Authorization:
    //       "Bearer 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",
    //   };

    const body = `
    <html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head>
    <body>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center"><b>FORMULÁRIO 04<br></b></td>
    </tr>
    <tr>
        <td align="center">SOLICITAÇÃO DE ELÉTRICA<br /></td>
    </tr><tr><td align="center"><b>&nbsp;<br></b></td></tr>
    <tr><td>&nbsp;</td></tr>
    <tr><td class="data_limite">ATENÇÃO: Não permitiremos o uso de lâmpadas Halógenas,  HQI ou outros tipos de lâmpadas “quentes”.<br><br>Data limite para credenciamento 22/05/2022<br><br>LEMBRAMOS QUE APÓS A DATA LIMITE NÃO GARANTIREMOS O FORNECIMENTO DE ENERGIA ADICIONAL</td></tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td class="texto_formulario">A energia elétrica será fornecida em unidade de KVA fracionado, deverá ser arredondado<br />
        para mais visando à segurança dos equipamentos.<br />
        A instalação elétrica (até o estande) é de responsabilidade da empresa instaladora<br />
        contratada pela coordenação do evento.</td>
    </tr>
    <tr><td class="texto_formulario">&nbsp;</td></tr>
    <tr><td class="texto_formulario">Organização da Hortitec<br />
        R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.</td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr></table>

    <table width="100%" border="1" cellspacing=0 cellpadding=2>
  <tr>
    <td colspan="2" align="right" bgcolor="#D9D9D9">Empresa </td>
    <td colspan="5" align="left">${empresa} </td>
  </tr>
  <tr>
    <td colspan="2" align="right" bgcolor="#D9D9D9">Telefone:</td>
    <td colspan="5" align="left">${telefone}</td>
  </tr>
  <tr>
    <td colspan="2" align="right" bgcolor="#D9D9D9">Pavilhão:</td>
    <td colspan="5" align="left">${pavilhao}</td>
  </tr>
  <tr>
    <td colspan="2" align="right" bgcolor="#D9D9D9">Nº do estande:</td>
    <td colspan="5" align="left">${nEstande}</td>
  </tr>
<tr>
    <td colspan="2" align="right" bgcolor="#D9D9D9">Área total do estande:</td>
    <td colspan="5" align="left">${area}</td>
  </tr>
  </table>
  <br>
  <table width="100%" border="1" cellspacing=0 cellpadding=2>
  <tr>
    <td colspan="7" align="center" class="texto_formulario" bgcolor="#D9D9D9">Equipamentos</td>
  </tr>
  <tr>
    <td colspan="7" align="center" class="texto_formulario">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="7" align="center" class="texto_formulario">
        <table width="80%" align="center" border="0" cellspacing="0" cellpadding="0">
       <tr>
        <td width="50%">EQUIPAMENTOS </td>
        <td width="20%">KVA</td>
        <td width="20%">Qtde</td>

      </tr>

      ${EQ.map((item) => {
        return `<tr>
        <td >${item.equipamento} </td>
        <td >${item.kwa}</td>
        <td > ${item.qtdEquipamento}</td>
       </tr>`;
      })}

        <tr>
          <td colspan="7" align="center" class="texto_formulario">&nbsp;</td>
      </tr>
</table>
  <table width="100%" border="1" cellspacing=0 cellpadding=2>
  <tr>
    <td width="50%" align="right" bgcolor="#D9D9D9">TOTAL de KVA´s necessários:</td>
    <td align="left"><h3>${total2.toFixed(2)}</h3></td>
  </tr>
  <tr>
    <td width="50%" align="right" bgcolor="#D9D9D9">Total de KVA´s incluso no valor do estande (60 watts por m²):</td>
    <td align="left" ><h3>${valorIncluso.toFixed(2)}</h3></td>
  </tr>
  <tr>
    <td width="50%" align="right" bgcolor="#D9D9D9">Saldo a pagar em KVA´s:</td>
    <td align="left"><h3>${saldoTotal().toFixed(2)}</h3></td>
  </tr>
  <tr>
    <td width="50%" align="right" bgcolor="#D9D9D9">Total R$:</td>
    <td align="left"><h2>${valorFinal().toFixed(2)}</h2></td>
  </tr>
  </table>
  <br>
  <table width="100%" border="1" cellspacing=0 cellpadding=2>
  <tr>
    <td colspan="7" align="center" class="texto_formulario">Caso precise ser listado um equipamento que não conste na tabela (itens), favor colocar o valor em KVA’s com a descrição do equipamento.······.<br />
      1 KVA = 1000 WATS<br />
      <span class="data_limite">Valor adicional: R$ 250,00/KVA</span></td>
  </tr>
  <tr>
    <td colspan="7" align="center" class="texto_formulario">Durante o evento a empresa responsável pelo cabeamento mede o
      consumo de cada estande, caso seja comprovada a utilização de KVAS
      maior do que o permitido, o excedente será cobrado mediante boleto
      bancário.</td>
  </tr>
  <tr>
    <td colspan="7" align="center" class="texto_formulario"><span class="data_limite">Lembramos que após a data limite não garantimos o fornecimento dos serviços</span></td>
  </tr>
</table>
<br>
<table width="100%" border="1" cellspacing=0 cellpadding=2>
  <tr>
    <td colspan="7" align="center" class="texto_formulario">Responsável pelo preenchimento</td>
  </tr>
  <tr>
    <td colspan="2" align="right" bgcolor="#D9D9D9">Nome:</td>
    <td colspan="5" align="left">${nomeRemente}</td>
  </tr>

    <td colspan="2" align="right" bgcolor="#D9D9D9">E-mail:</td>
    <td colspan="5" align="left">${emailRemente}</td>
  </tr>

</table>
</body>
</html>
    `;

    const headers = {
      "api-key":
        "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",
    };

    axios
      .post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          sender: {
            name: "Formulario Hortitec",
            email: "form@hortitec.com.br",
          },
          to: [
            {
              email: "montagemhortitec@rbbeventos.com.br",
              name: "Montagem Hortitec",
            },
            {
              email: emailRemente,
              name: nomeRemente,
            },
          ],
          subject: "Formulario 3",
          htmlContent: body,
        },
        { headers }
      )
      .then(() => {
        window.location.replace(
          "https://hortitec.com.br/formularios/MsgSucesso.html"
        );
      })
      .catch(() => {
        alert(
          "Ocorreu um erro com o servidor de email, tente novamente mais tarde"
        );
      });
  }
  return (
    <div className="container">
      <div className="header">
        <img
          src="https://www.hortitec.com.br/formularios/imagem/testeira.jpg"
          alt="Logotipo"
        />
      </div>
      <div className="textHeader">
        <h1>Formulário 03</h1>
        <span>SOLICITAÇÃO DE ELÉTRICA</span>
        <p className="textRed">
          ATENÇÃO: Não permitiremos o uso de lâmpadas Halógenas, HQI ou outros
          tipos de lâmpadas “quentes”.
        </p>
        <p className="textRed">Data limite para credenciamento 22/05/2022</p>
        <p className="textRed">
          LEMBRAMOS QUE APÓS A DATA LIMITE NÃO GARANTIREMOS O FORNECIMENTO DE
          ENERGIA ADICIONAL
        </p>
        <p className="textNormal">
          A energia elétrica será fornecida em unidade de KVA fracionado, deverá
          ser arredondado para mais visando à segurança dos equipamentos.
        </p>
        <p className="textNormal">
          A instalação elétrica (até o estande) é de responsabilidade da empresa
          instaladora contratada pela coordenação do evento.
        </p>
        <p>Organização da Hortitec </p>
        <p className="textNormal">
          {" "}
          R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.
        </p>
      </div>
      <div className="fildsOne">
        <div className="typeInput1">
          <label>Empresa *</label>
          <input
            type="text"
            value={empresa}
            onChange={(ev) => setEmpresa(ev.target.value)}
            required
          />
        </div>
        <div className="typeInput2">
          <label>Telefone*</label>
          <input
            type="text"
            value={telefone}
            onChange={(ev) => setTelefone(ev.target.value)}
            required
          />
        </div>
        <div className="typeInput3">
          <label>Email*</label>
          <input
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </div>
        <div className="typeInput4">
          <label>Pavilhão*</label>
          <input
            type="text"
            value={pavilhao}
            onChange={(ev) => setPavilhao(ev.target.value)}
            required
          />
        </div>
        <div className="typeInput5">
          <label>Nº do estande*</label>
          <input
            type="text"
            value={nEstande}
            onChange={(ev) => setNEstande(ev.target.value)}
            required
          />
        </div>

        <div className="typeInput6">
          <label>Área total do estande (m²)*</label>
          <input
            type="number"
            onChange={(ev) => setArea(ev.target.value)}
            value={area}
            required
          />
        </div>
      </div>

      <h2 className="tituloEquipamentos">Equipamentos</h2>
      <div className="containerEquipamentos">
        <table className="tabela1">
          <tr>
            <th class="test">EQUIPAMENTOS</th>
            <th>KVA</th>
            <th>Qtde</th>
          </tr>
          {EQ.map((item, index) => {
            if (index >= 25) {
              return "";
            }
            if (index >= 100) {
              return "";
            }
            return (
              <tr key={index}>
                <td>{item.equipamento}</td>
                <td>{item.kwa.toFixed(2)}</td>
                <td>
                  <input
                    className="inputNumber"
                    min={0}
                    type="number"
                    value={EQ[index].qtdEquipamento}
                    onChange={(ev) => handleEQValeu(ev, index)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
        <table className="tabela1">
          <tr className="thMobile">
            <th class="test">EQUIPAMENTOS</th>
            <th>KVA</th>
            <th>Qtde</th>
          </tr>
          {EQ.map((item, index) => {
            if (index < 25) {
              return "";
            }
            if (index >= 39) {
              return "";
            }
            return (
              <tr key={index}>
                <td>{item.equipamento}</td>
                <td>{item.kwa.toFixed(2)}</td>
                <td>
                  <input
                    className="inputNumber"
                    min={0}
                    type="number"
                    value={EQ[index].qtdEquipamento}
                    onChange={(ev) => handleEQValeu(ev, index)}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input
                type="text"
                value={EQ[39]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 39)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[39]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 39)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[39]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 39)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[40]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 40)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[40]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 40)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[40]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 40)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[41]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 41)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[41]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 41)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[41]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 41)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[42]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 42)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[42]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 42)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[42]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 42)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[43]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 43)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[43]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 43)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[43]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 43)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[44]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 44)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[44]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 44)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[44]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 44)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[45]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 45)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[45]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 45)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[45]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 45)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[46]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 46)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[46]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 46)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[46]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 46)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[47]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 47)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[47]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 47)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[47]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 47)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[48]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 48)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[48]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 48)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[48]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 48)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[49]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 49)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[49]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 49)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[49]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 49)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[50]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 50)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[50]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 50)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[50]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 50)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={EQ[51]?.equipamento}
                onChange={(ev) => handleEquipamentoValeu(ev, 51)}
              />
            </td>
            <td>
              <input
                className="input2"
                type="number"
                value={EQ[51]?.kwa}
                onChange={(ev) => handleKwaValeu(ev, 51)}
              />
            </td>
            <td>
              <input
                className="inputNumber"
                type="number"
                value={EQ[51]?.qtdEquipamento}
                onChange={(ev) => handleEQValeu(ev, 51)}
              />
            </td>
          </tr>
        </table>
      </div>

      <button className="buttonCalcular" onClick={countTotal}>
        Calcular
      </button>
      <div>
        <table className="results" border="1">
          <tr>
            <td>TOTAL de KVAs necessários:</td>
            <td>
              <strong>{total2.toFixed(2)}</strong>
            </td>
          </tr>
          <tr>
            <td>
              Total de KVAs incluso no valor do estande (60 watts por m²):{" "}
            </td>
            <td>
              <strong>{valorIncluso} KVAs</strong>
            </td>
          </tr>
          <tr>
            <td>Saldo a pagar em KVAs:</td>
            <td>
              <strong>{saldoTotal().toFixed(2)} KVAs</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong> Total R$:</strong>
            </td>
            <td>
              <strong> R$ {valorFinal().toFixed(2)}</strong>{" "}
            </td>
          </tr>
        </table>
      </div>
      <div className="containerFooter">
        <div className="containerInterno">
          <p>
            Caso precise ser listado um equipamento que não conste na tabela
            (itens), favor colocar o valor em KVAs com a ·. descrição do
            equipamento.······. 1 KVA = 1000 WATS
          </p>
          <p className="textRed1">Valor adicional: R$ 250,00/KVA</p>
        </div>
        <p className="pFooter">
          Durante o evento a empresa responsável pelo cabeamento mede o consumo
          de cada estande, caso seja comprovada a utilização de KVAS maior do
          que o permitido, o excedente será cobrado mediante boleto bancário.
        </p>
        <p className="textRed pFooter">
          Para os estandes com estrutura metálica será obrigatório o uso de
          aterramento, conforme exigências do Corpo de Bombeiros.
        </p>
        <p>Responsável pelo preenchimento</p>
      </div>
      <label>Nome*</label>
      <input
        className="inputFooter"
        type="text"
        value={nomeRemente}
        onChange={(ev) => setNomeRemente(ev.target.value)}
        required
      />
      <label>Email*</label>
      <input
        className="inputFooter"
        type="email"
        value={emailRemente}
        onChange={(ev) => setEmailRemente(ev.target.value)}
        required
      />
      <button className="buttonCalcular" onClick={() => componentDidMount()}>
        Enviar
      </button>
    </div>
  );
}

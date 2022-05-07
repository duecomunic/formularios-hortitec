import react, { useState } from "react";
import axios from "axios";

import "./style.css";
export function Formulario2() {
  const [expositor, setExpositor] = useState("");
  const [pavilhao, setPavilhao] = useState("");
  const [nEstande, setNEstande] = useState("");

  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [ie, setIe] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [celular2, setCelular2] = useState("");
  const [email2, setEmail2] = useState("");

  const [nomeRemente, setNomeRemente] = useState("");
  const [emailRemente, setEmailRemente] = useState("");

  function componentDidMount() {

    if (expositor === "") {
      alert("Preencher o campo Expositor.");
      return;
    }

    if (pavilhao === "") {
      alert("Preencher o campo Pavilhão.");
      return;
    }

    if (nEstande === "") {
      alert("Preencher o campo Nº do estande.");
      return;
    }

    if (nomeFantasia === "") {
      alert("Preencher o campo Nome Fantasia.");
      return;
    }

    if (razaoSocial === "") {
      alert("Preencher o campo Razão Social.");
      return;
    }

    if (cnpj === "") {
      alert("Preencher o campo CNPJ.");
      return;
    }

    if (endereco === "") {
      alert("Preencher o campo Endereço.");
      return;
    }

    if (cidade === "") {
      alert("Preencher o campo Cidade.");
      return;
    }

    if (cep === "") {
      alert("Preencher o campo CEP.");
      return;
    }

    if (uf === "") {
      alert("Preencher o campo UF.");
      return;
    }

    if (telefone === "") {
      alert("Preencher o campo Telefone.");
      return;
    }

    if (celular === "") {
      alert("Preencher o campo Celular.");
      return;
    }

    if (email === "") {
      alert("Preencher o campo Email.");
      return;
    }

    if (nome === "") {
      alert("Preencher o campo Nome.");
      return;
    }

    if (cargo === "") {
      alert("Preencher o campo Cargo.");
      return;
    }

    if (email2 === "") {
      alert("Preencher o campo Email.");
      return;
    }

    if (nomeRemente === "") {
      alert("Preencher o campo Nome do Remente.");
      return;
    }

    if (emailRemente === "") {
      alert("Preencher o campo Email do Remente.");
      return;
    }

    const body = `
    <html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head>
    <body>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center"><b>FORMULÁRIO 02<br></b></td>
        </tr>
        <tr>
            <td align="center">AUTORIZAÇÃO E CADASTRO DE MONTADORA (este formulário deve ser enviado pelo expositor)<br /></td>
        </tr>
		<tr><td align="center"><b>&nbsp;</b></td></tr>
		<tr>
		<td class="mensagem"><strong>ATENÇÃO<br>
 O ACABAMENTO FINAL DO ESTANDE NÃO PODERÁ EM<br>HIPÓTESE ALGUMA ULTRAPASSAR  O LIMITE DA ÁREA LOCADA.<br> <br>A RAMPA DE ACESSO À DEFICIENTES DEVERÁ FICAR DENTRO<br>DA ÁREA LOCADA ATENDENDO AS NORMAS DO MANUAL DO EXPOSITOR.</strong></td>
  </tr>
			<td class="data_limite">Data limite para devolução 27/05/2022</td>
		  </tr>
		<tr><td align="center"><b>&nbsp;</b></td></tr>
		<tr>
			<td class="texto_formulario">Organização da Hortitec<br />
			R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.</td>
		  </tr>
		<tr><td align="center"><b>&nbsp;</b></td></tr>
		<tr>
		<td class="texto_formulario">Solicitamos o credenciamento da empresa que foi por nós contratada<br />
		  para efetuar os serviços de (montagem, decoração, manutenção técnica ou<br />
		desmontagem) durante a Hortitec</td>
	  </tr>
	  <tr><td align="center"><b>&nbsp;<br></b></td></tr>		
	</table>

  <table width="100%" border=1 cellspacing=0 cellpadding=2>
       <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Expositor:</td>
          <td colspan="5" align="left">${expositor}</td>
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
            <td align="center" colspan="5" class="sub_titulo">Cadastro da Montadora</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Nome Fantasia:</td>
          <td colspan="3" align="left">${nomeFantasia}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Razão Social:</td>
          <td colspan="3" align="left">${razaoSocial}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">CNPJ:</td>
          <td colspan="3" align="left">${cnpj}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">IE:</td>
          <td colspan="3" align="left">${ie}</td>
        </tr>
        <tr>
          <td colspan="2" align="right"> </td>
          <td colspan="3" align="left"> </td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Endereço:</td>
          <td colspan="3" align="left">${endereco}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Cidade:</td>
          <td colspan="3" align="left">${cidade}</td>
          </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">CEP:</td>
          <td width="197" align="left">${cep}</td>
          <td width="16" align="right" bgcolor="#D9D9D9">UF</td>
          <td width="393" align="left">${uf}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Telefone:</td>
          <td colspan="3" align="left">${telefone}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Celular:</td>
          <td colspan="3" align="left">${celular}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">E-mail:</td>
          <td colspan="3" align="left">${email}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Site:</td>
          <td colspan="3" align="left">${site}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9"> </td>
          <td colspan="3" align="left"> </td>
        </tr>
        <tr>
          <td colspan="5" align="center" class="texto_formulario">NESSE QUADRO COLOCA A PESSOA QUE ESTARÁ RESPONSÁVEL PELA MONTADORA<br />
            DURANTE O PERÍODO DE MONTAGEM, REALIZAÇÃO E DESMONTAGEM DO EVENTO.</td>
          </tr>
        <tr>
          <td colspan="2" align="right"> </td>
          <td colspan="3" align="left"> </td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Nome:</td>
          <td colspan="3" align="left">${nome}</td>
        </tr>
        
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Cargo:</td>
          <td colspan="3" align="left">${cargo}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">E-mail:</td>
          <td colspan="3" align="left">${email2}</td>
        </tr>
        <tr>
          <td colspan="5" align="center" class="texto_formulario"> </td>
        </tr>
        <tr>
          <td colspan="5" align="center" class="texto_formulario">Estamos cientes que como expositor, somos responsáveis pela permanência dos funcionários da empresa acima citada no recinto da feira.<br />
            Comprometemo-nos ainda a informar à montadora sobre a disponibilidade do Manual do<br />
            Expositor no site <a href="http://wwwwww.hortitec.com.br" target="_blank">www.hortitec.com.br</a></td>
        </tr>
        <tr>
          <td colspan="5" align="center" class="texto_formulario">Responsável pelo preenchimento</td>
          </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Nome:</td>
          <td colspan="3" align="left" >${nomeRemente}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">E-mail:</td>
          <td colspan="3" align="left">${emailRemente}</td>
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
          subject: "Formulario 2",
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
        <h1>Formulário 02</h1>
        <span>AUTORIZAÇÃO E CADASTRO DE MONTADORA</span>
        <p>
          (este formulário deve ser enviado pelo expositor) Enviar o formulário
          para: montagemhortitec@rbbeventos.com.br
        </p>
        <div className="containerRed">
          <p>
            ATENÇÃO O ACABAMENTO FINAL DO ESTANDE NÃO PODERÁ EM HIPÓTESE ALGUMA
            ULTRAPASSAR O LIMITE DA ÁREA LOCADA.
          </p>
          <p>
            A RAMPA DE ACESSO À DEFICIENTES DEVERÁ FICAR DENTRO DA ÁREA LOCADA
            ATENDENDO AS NORMAS DO MANUAL DO EXPOSITOR.
          </p>
        </div>
        <p className="textRed">Data limite para devolução 27/05/2022</p>

        <p>Organização da Hortitec </p>
        <p className="textNormal">
          {" "}
          R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.
        </p>
        <p>
          Solicitamos o credenciamento da empresa que foi por nós contratada
          para efetuar os serviços de (montagem, decoração, manutenção técnica
          ou desmontagem) durante a Hortitec 2018.
        </p>
      </div>
      <div className="filds">
        <div className="input1">
          <label>Expositor *</label>
          <input
            type="text"
            value={expositor}
            onChange={(ev) => setExpositor(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Pavilhão *</label>
          <input
            type="text"
            value={pavilhao}
            onChange={(ev) => setPavilhao(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Nº do estande *</label>
          <input
            type="text"
            value={nEstande}
            onChange={(ev) => setNEstande(ev.target.value)}
            required
          />
        </div>
      </div>
      <h2 className="cadastro">Cadastro da Montadora</h2>
      <div className="filds">
        <div className="input1">
          <label>Nome Fantasia *</label>
          <input
            type="text"
            value={nomeFantasia}
            onChange={(ev) => setNomeFantasia(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Razão Social *</label>
          <input
            type="text"
            value={razaoSocial}
            onChange={(ev) => setRazaoSocial(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>CNPJ *</label>
          <input
            type="text"
            value={cnpj}
            onChange={(ev) => setCnpj(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>IE </label>
          <input
            type="text"
            value={ie}
            onChange={(ev) => setIe(ev.target.value)}
            required
          />
        </div>

        <div className="input1">
          <label>Endereço *</label>
          <input
            type="text"
            value={endereco}
            onChange={(ev) => setEndereco(ev.target.value)}
            required
          />
        </div>

        <div className="input1">
          <label>Cidade *</label>
          <input
            type="text"
            value={cidade}
            onChange={(ev) => setCidade(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>CEP *</label>
          <input
            type="text"
            value={cep}
            onChange={(ev) => setCep(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>UF *</label>
          <input
            type="text"
            value={uf}
            onChange={(ev) => setUf(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Telefone *</label>
          <input
            type="text"
            value={telefone}
            onChange={(ev) => setTelefone(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Celular *</label>
          <input
            type="text"
            value={celular}
            onChange={(ev) => setCelular(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Email *</label>
          <input
            type="text"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Site </label>
          <input
            type="text"
            value={site}
            onChange={(ev) => setSite(ev.target.value)}
            required
          />
        </div>
        <p className="pContainer">
          NESSE QUADRO COLOCA A PESSOA QUE ESTARÁ RESPONSÁVEL PELA MONTADORA
          DURANTE O PERÍODO DE MONTAGEM, REALIZAÇÃO E DESMONTAGEM DO EVENTO.{" "}
        </p>
      </div>
      <div className="filds">
        <div className="input1">
          <label>Nome *</label>
          <input
            type="text"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Cargo *</label>
          <input
            type="text"
            value={cargo}
            onChange={(ev) => setCargo(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Email *</label>
          <input
            type="text"
            value={email2}
            onChange={(ev) => setEmail2(ev.target.value)}
            required
          />
        </div>
      </div>
      <p className="pFooter">
        Estamos cientes que como expositor, somos responsáveis pela permanência
        dos funcionários da empresa acima citada no recinto da feira.
      </p>
      <p className="textRed">
        Comprometemo-nos ainda a informar à montadora sobre a disponibilidade do
        Manual do
      </p>
      <p className="textRed">Expositor no site www.hortitec.com.br</p>
      <h3 className="resp">Responsável pelo preenchimento</h3>
      <div className="input1">
        <label>Nome *</label>
        <input
          type="text"
          value={nomeRemente}
          onChange={(ev) => setNomeRemente(ev.target.value)}
          required
        />
      </div>
      <div className="input1">
        <label>Email *</label>
        <input
          type="text"
          value={emailRemente}
          onChange={(ev) => setEmailRemente(ev.target.value)}
          required
        />
      </div>
      <p className="textRed">As credenciais de montadores, limpeza, e segurança deverão ser solicitadas diretamente à Promotora no guichê de atendimento na entrada do pavilhão</p>
      <button className="buttonCalcular" onClick={() => componentDidMount()}>
        Enviar
      </button>
    </div>
  );
}

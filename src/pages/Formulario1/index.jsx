import react, { useState } from "react";
import axios from "axios";

import "./style.css";
export function Formulario1() {
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [pais, setPais] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [tel0800, setTel0800] = useState("0800");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [setor, setSetor] = useState("");
  const [principaisProdutos, setPrincipaisProdutos] = useState("");
  const [lancamentos, setLancamentos] = useState("");
  const [empresaR, setEmpresaR] = useState("");
  const [testeira, setTesteira] = useState("");
  const [mediasSociais, setMediaSocials] = useState("")

  const [nomeRemente, setNomeRemente] = useState("");
  const [emailRemente, setEmailRemente] = useState("");

  function componentDidMount() {
    if (nomeFantasia === "") {
      alert("Preencher o campo Nome Fantasia.");
      return;
    }
    if (razaoSocial === "") {
      alert("Preencher o campo Razão Social.");
      return;
    }
    if (endereco === "") {
      alert("Preencher o campo Endereço .");
      return;
    }
    if (numero === "") {
      alert("Preencher o campo Numero.");
      return;
    }
    if (cidade === "") {
      alert("Preencher o campo Cidade.");
      return;
    }
    if (cep === "") {
      alert("Preencher o campo Cidade.");
      return;
    }
    if (uf === "") {
      alert("Preencher o campo UF .");
      return;
    }
    if (pais === "") {
      alert("Preencher o campo País.");
      return;
    }
    if (telefone === "") {
      alert("Preencher o campo Telegone.");
      return;
    }
    if (email === "") {
      alert("Preencher o campo Email .");
      return;
    }
    if (setor === "") {
      alert("Preencher o campo Setor de Atividade.");
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
            <td align="center"><b>FORMULÁRIO 01<br></b></td>
        </tr>
        <tr>
            <td align="center">INSERÇÃO GRATUITA NO CATÁLOGO OFICIAL<br /></td>
        </tr>
		 <tr><td>&nbsp;</td></tr>
		 <tr><td class="data_limite">Data limite para devolução 22/04/2022</td></tr>
        <tr><td>&nbsp;</td></tr>        
        <tr>
            <td class="texto_formulario">Organização da Hortitec<br />
            R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.</td>
        </tr>
		<tr><td align="center"><b>&nbsp;<br></b></td></tr>
		</table>
        <table width=100% border=1 cellspacing=1 cellpadding=2>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Nome Fantasia:</td>
          <td colspan="3" align="left"><label>${nomeFantasia}</label></td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Razão Social:</td>
          <td colspan="3" align="left">${razaoSocial}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Endereço:</td>
          <td colspan="3" align="left">${endereco}</td>
        </tr>
		<tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">n&#176;:</td>
          <td colspan="3" align="left">${numero}</td>
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
          <td colspan="2" align="right" bgcolor="#D9D9D9">Tel. 0800:</td>
          <td colspan="3" align="left">${tel0800}</td>
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
          <td colspan="2" align="right" bgcolor="#D9D9D9">Midias Sociais:</td>
          <td colspan="3" align="left">${mediasSociais}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Setor de Atividade:</td>
          <td colspan="3" align="left">${setor}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Principais Produtos:</td>
          <td colspan="3" align="left">${principaisProdutos}</td>
        </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Lançamentos na Feira:</td>
          <td colspan="3" align="left">${lancamentos}</td>
        </tr>
		<tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Empresas Representadas:</td>
          <td colspan="3" align="left">${empresaR}</td>
        </tr>
		<tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Nome na Testeira:<br> (somente para estandes com montagem básica)</td>
          <td colspan="3" align="left">${testeira}</td>
        </tr>
        <tr>
          <td colspan="5" align="center" class="texto_formulario">Responsável pelo preenchimento</td>
          </tr>
        <tr>
          <td colspan="2" align="right" bgcolor="#D9D9D9">Nome:</td>
          <td colspan="3" align="left">${nomeRemente}</td>
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
          subject: "Formulario 1",
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
        <h1>Formulário 01</h1>
        <span>INSERÇÃO GRATUITA NO CATÁLOGO OFICIAL</span>
        <p className="textRed">Data limite para devolução 22/04/2022</p>

        <p>Organização da Hortitec </p>
        <p className="textNormal">
          {" "}
          R. Solidagos, 391 - Morada das Flores - Holambra - SP - 13825-000.
        </p>
      </div>
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
          <label>Endereço *</label>
          <input
            type="text"
            value={endereco}
            onChange={(ev) => setEndereco(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Numero *</label>
          <input
            type="text"
            value={numero}
            onChange={(ev) => setNumero(ev.target.value)}
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
          <label>País *</label>
          <input
            type="text"
            value={pais}
            onChange={(ev) => setPais(ev.target.value)}
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
          <label>Celular </label>
          <input
            type="text"
            value={celular}
            onChange={(ev) => setCelular(ev.target.value)}
            required
          />
        </div>
        <div className="input1">
          <label>Tel. 0800 </label>
          <input
            type="text"
            value={tel0800}
            onChange={(ev) => setTel0800(ev.target.value)}
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

        <div className="textAreaSocial">
          <label>Midias Sóciais </label>
          <textarea onChange={(ev) => setMediaSocials(ev.target.value)}>
            {mediasSociais}
          </textarea>
        </div>

        <div className="input1">
          <label>Setor de Atividade *</label>
          <input
            type="text"
            value={setor}
            onChange={(ev) => setSetor(ev.target.value)}
            required
          />
        </div>
        <div className="textArea">
          <label>Principais Produtos: máximo 200 caracteres </label>
          <textarea onChange={(ev) => setPrincipaisProdutos(ev.target.value)}>
            {principaisProdutos}
          </textarea>
        </div>
        <div className="textArea2">
          <label>Lançamerntos na Feira </label>
          <textarea onChange={(ev) => setLancamentos(ev.target.value)}>
            {lancamentos}
          </textarea>
        </div>
        <div className="textArea3">
          <label>Empresas Representada </label>
          <textarea onChange={(ev) => setEmpresaR(ev.target.value)}>
            {empresaR}
          </textarea>
        </div>
        <div className="input1">
          <label>Nome na Testeira</label>
          <input
            type="text"
            value={testeira}
            onChange={(ev) => setTesteira(ev.target.value)}
            required
          />
        </div>
        <div className="imageC">
          <p>
            Nome da empresa a ser aplicado em letras padrão. (Somente para
            estandes com montagem básica)
          </p>
          <img
            src="https://hortitec.com.br/formularios/imagem/stand_form_01_esq.jpg"
            alt="Testeira"
          />
        </div>
      </div>
      <h2 className="resp">Responsável pelo preenchimento</h2>
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
      <button className="buttonCalcular" onClick={() => componentDidMount()}>
        Enviar
      </button>
    </div>
  );
}

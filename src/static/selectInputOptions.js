const incomes = `
<option value="RENDA_MENOR_1000">Até R$ 1.000</option>
<option value="RENDA_MENOR_2000">De R$ 1.000 até R$ 2.000</option>
<option value="RENDA_MENOR_3000">De R$ 2.000 até R$ 3.000</option>
<option value="RENDA_MENOR_4000">De R$ 3.000 até R$ 4.000</option>
<option value="RENDA_MENOR_5000">De R$ 4.000 até R$ 5.000</option>
<option value="RENDA_MAIOR_5000">Acima de R$ 5.000</option>
`

const jobs = `
<option value="APOSENTADO_PENSIONISTA">Aposentado ou Pensionista</option>
<option value="AUTONOMO">Autônomo</option>
<option value="EMPRESARIO">Empresário ou Empregador</option>
<option value="PROFISSIONAL_LIBERAL">Profissional Liberal</option>
<option value="ASSALARIADO">Funcionário com carteira assinada (CLT)</option>
<option value="FUNCIONARIO_PUBLICO">Funcionário Público ou Militar</option>
<option value="DESEMPREGADO">Desempregado</option>
`

const states = `
<option value="AC">Acre</option>
<option value="AL">Alagoas</option>
<option value="AP">Amapá</option>
<option value="AM">Amazonas</option>
<option value="BA">Bahia</option>
<option value="CE">Ceará</option>
<option value="DF">Distrito Federal</option>
<option value="ES">Espírito Santo</option>
<option value="GO">Goiás</option>
<option value="MA">Maranhão</option>
<option value="MT">Mato Grosso</option>
<option value="MS">Mato Grosso do Sul</option>
<option value="MG">Minas Gerais</option>
<option value="PA">Pará</option>
<option value="PB">Paraíba</option>
<option value="PR">Paraná</option>
<option value="PE">Pernambuco</option>
<option value="PI">Piauí</option>
<option value="RJ">Rio de Janeiro</option>
<option value="RN">Rio Grande do Norte</option>
<option value="RS">Rio Grande do Sul</option>
<option value="RO">Rondônia</option>
<option value="RR">Roraima</option>
<option value="SC">Santa Catarina</option>
<option value="SP">São Paulo</option>
<option value="SE">Sergipe</option>
<option value="TO">Tocantins</option>
`

const degrees = `
<option value='NAO_ALFABETIZADO'>Não Alfabetizado</option>
<option value='ENSINO_FUNDAMENTAL_INCOMPLETO'>Ensino fundamental incompleto</option>
<option value='ENSINO_FUNDAMENTAL_COMPLETO'>Ensino fundamental completo</option>
<option value='ENSINO_MEDIO_INCOMPLETO'>Ensino médio incompleto</option>
<option value='ENSINO_MEDIO_COMPLETO'>Ensino médio completo</option>
<option value='ENSINO_SUPERIOR_INCOMPLETO'>Ensino superior incompleto</option>
<option value='ENSINO_SUPERIOR_COMPLETO'>Ensino superior completo</option>
<option value='POS_GRADUACAO'>Pós-graduação</option>
`

const maritalStatuses = `
<option value='CASADO'>Casado(a)</option>
<option value='DIVORCIADO'>Divorciado(a)</option>
<option value='VIUVO'>Viúvo(a)</option>
<option value='SEPARADO'>Separado(a)</option>
<option value='SOLTEIRO'>Solteiro(a)</option>
<option value='COMPANHEIRO'>Companheiro(a)</option>
<option value='UNIAO_ESTAVEL'>União Estavel</option>
<option value='SEPARADO_JUDICIALMENTE'>Separado Judicialmente</option>
`

const idType = `
<option value='RG'>RJ</option>
<option value='CNH'>CNH</option>
<option value='CONSELHO_CLASSE'>Conselho de Classe</option>
`

const idIssuer = `
<option value='SSP'>SSP</option>
<option value='DETRAN'>DETRAN</option>
<option value='POLICIA_MILITAR'>POLICIA MILITAR</option>
<option value='POLICIA_CIVIL'>POLICIA CIVIL</option>
<option value='INSTITUTO_FELIX_PACHECO'>INSTITUTO FELIX PACHECO</option>
<option value='MINISTERIO_DA_FAZENDA'>MINISTERIO DA FAZENDA</option>
<option value='SJS'>SJS</option>
<option value='CTPS'>CTPS</option>
<option value='OAB'>OAB</option>
<option value='TRIBUNAL_REGIONAL_DO_TRABALHO'>TRIBUNAL REGIONAL DO TRABALHO</option>
<option value='DPF'>DPF</option>
<option value='CREA'>CREA</option>
<option value='CRC'>CRC</option>
<option value='AERON'>AERON</option>
<option value='MINISTERIO_DA_MARINHA'>MINISTERIO DA MARINHA</option>
<option value='CONS_REG_ECONOMIA'>CONS REG ECONOMIA</option>
<option value='SSI'>SSI</option>
<option value='MIN_EXERCITO'>MIN EXERCITO</option>
<option value='IML'>IML</option>
<option value='CRM'>CRM</option>
<option value='COREN'>COREN</option>
<option value='SJTC'>SJTC</option>
<option value='MAER'>MAER</option>
<option value='CRA_CONSELHO_ADMINISTRATIVO'>CRA CONSELHO ADMINISTRATIVO</option>
<option value='RBF'>RBF</option>
<option value='CRO'>CRO</option>
<option value='CONSELHO_REGIONAL_PSICOLOGIA'>CONSELHO REGIONAL PSICOLOGIA</option>
<option value='BM'>BM</option>
<option value='EXERC'>EXERC</option>
<option value='SJT'>SJT</option>
<option value='ME'>ME</option>
<option value='DPMAF'>DPMAF</option>
<option value='INST_NAC_PROPRIEDADE_INDUSTRIA'>INST NAC PROPRIEDADE INDUSTRIA</option>
<option value='MINEX'>MINEX</option>
<option value='CPROF'>CPROF</option>
<option value='CREME'>CREME</option>
`

const loanIntent = `
<option value='PAGAR_CONTAS'>Pagar contas</option>
<option value='COMECAR_UM_NOVO_NEGOCIO'>
Começar um novo negócio</option><option value='PAGAR_OUTRAS_DIVIDAS'>Pagar outras dívidas</option>
<option value='FAZER_COMPRAS'>Fazer compras</option>
<option value='OUTRAS'>Outras</option>
<option value='COMPRAR_REFORMAR_UMA_CASA'>Comprar ou reformar uma casa</option>
<option value='EDUCACAO'>Educação</option>
<option value='AJUDAR_UMA_OUTRA_PESSOA_DA_FAMILIA'>Ajudar uma outra pessoa da família</option>
<option value='COMPRAR_CONSERTAR_UM_CARRO'>Comprar ou consertar um carro</option>
<option value='BELEZA_E_SAUDE'>Beleza e saúde</option>
<option value='FERIAS_VIAGENS'>Férias e viagens</option>
<option value='EVENTOS_FESTAS'>Eventos e festas</option>
`

export {
  incomes,
  jobs,
  states,
  degrees,
  maritalStatuses,
  idType,
  idIssuer,
}
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import steps from './images/passo-2.jpg'

import cities from './static/citiesToState'

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Nome não pode ter números')
    .required('Esse campo é necessário'),
  email: yup
    .string()
    // .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Esse campo é necessário'),
})

export const Passo2 = (props) => {
  const { setValues, data } = useData()
  const history = useHistory()
  const { register, watch, handleSubmit, errors } = useForm({
    defaultValues: {
      mother_full_name: data.mother_full_name,
      gender: data.gender,
      birth_state: data.birth_state,
      birth_city: data.birth_city,
      degree: data.degree,
      marital_status: data.marital_status,
      id_type: data.id_typ,
      id_num: data.id_num,
      id_issuer: data.id_issuer,
      id_issuer_state: data.id_issuer_state,
      id_exp: data.id_exp,
      bank_name: data.bank_name,
      bank_account_type: data.bank_account_type,
      bank_account_num: data.bank_account_num,
      loan_intent: data.loan_intent,
    },
    mode: 'onBlur',
    // resolver: yupResolver(schema),
  })

  // const birthState = watch('birth_state', false)
  // {birthState &&
  //   cities[birthState].map((city) => (
  //     <option key={city} value={city}>
  //       {city}
  //     </option>
  //   ))}

  const onSubmit = (data) => {
    console.log('data', data)
    history.push('./passo3')
    setValues(data)
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>
        precisamos saber um pouco mais sobre você.
        <br />
        <strong>
          Em seguida selecionaremos as melhores ofertas de acordo com o seu
          perfil.
        </strong>
        <img
          style={{ marginTop: 30, width: 445, height: 79 }}
          src={steps}
          alt='Steps'
        />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome completo mãe</label>
        <input
          ref={register}
          id='mother_full_name'
          type='text'
          label='Nome completo mãe'
          name='mother_full_name'
        />
        <label className='helper-text'>
          {errors?.mother_full_name?.message}
        </label>

        <label>Gênero</label>
        <select
          ref={register}
          className='select optional valid'
          label='Gênero'
          name='gender'
          id='gender'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='FEMALE'>Feminino</option>
          <option value='MALE'>Masculino</option>
        </select>
        <label className='helper-text'>{errors?.gender?.message}</label>
        <label className='helper-text'>{errors?.gender?.message}</label>

        <label>Nascido em qual estado</label>
        <select
          ref={register}
          className='select optional valid'
          label='Nascido em qual estado'
          name='birth_state'
          id='birth_state'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='AC'>Acre</option>
          <option value='AL'>Alagoas</option>
          <option value='AP'>Amapá</option>
          <option value='AM'>Amazonas</option>
          <option value='BA'>Bahia</option>
          <option value='CE'>Ceará</option>
          <option value='DF'>Distrito Federal</option>
          <option value='ES'>Espírito Santo</option>
          <option value='GO'>Goiás</option>
          <option value='MA'>Maranhão</option>
          <option value='MT'>Mato Grosso</option>
          <option value='MS'>Mato Grosso do Sul</option>
          <option value='MG'>Minas Gerais</option>
          <option value='PA'>Pará</option>
          <option value='PB'>Paraíba</option>
          <option value='PR'>Paraná</option>
          <option value='PE'>Pernambuco</option>
          <option value='PI'>Piauí</option>
          <option value='RJ'>Rio de Janeiro</option>
          <option value='RN'>Rio Grande do Norte</option>
          <option value='RS'>Rio Grande do Sul</option>
          <option value='RO'>Rondônia</option>
          <option value='RR'>Roraima</option>
          <option value='SC'>Santa Catarina</option>
          <option value='SP'>São Paulo</option>
          <option value='SE'>Sergipe</option>
          <option value='TO'>Tocantins</option>
        </select>
        <label className='helper-text'>
          {errors?.id_issuer_state?.message}
        </label>

        <label>Nascido em qual cidade</label>
        <select
          ref={register}
          className='select optional valid'
          label='Nascido em qual cidade'
          name='birth_city'
          id='birth_city'
          aria-invalid='false'
        >
          <option>Selecione</option>
        </select>
        <label className='helper-text'>{errors?.birth_city?.message}</label>

        <label>Escolaridade</label>
        <select
          ref={register}
          className='select optional valid'
          label='Escolaridade'
          name='degree'
          id='degree'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='NAO_ALFABETIZADO'>Não Alfabetizado</option>
          <option value='ENSINO_FUNDAMENTAL_INCOMPLETO'>
            Ensino fundamental incompleto
          </option>
          <option value='ENSINO_FUNDAMENTAL_COMPLETO'>
            Ensino fundamental completo
          </option>
          <option value='ENSINO_MEDIO_INCOMPLETO'>
            Ensino médio incompleto
          </option>
          <option value='ENSINO_MEDIO_COMPLETO'>Ensino médio completo</option>
          <option value='ENSINO_SUPERIOR_INCOMPLETO'>
            Ensino superior incompleto
          </option>
          <option value='ENSINO_SUPERIOR_COMPLETO'>
            Ensino superior completo
          </option>
          <option value='POS_GRADUACAO'>Pós-graduação</option>
        </select>
        <label className='helper-text'>{errors?.degree?.message}</label>

        <label>Estado civil</label>
        <select
          ref={register}
          className='select optional valid'
          label='Estado civil'
          name='marital_status'
          id='marital_status'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='CASADO'>Casado(a)</option>
          <option value='DIVORCIADO'>Divorciado(a)</option>
          <option value='VIUVO'>Viúvo(a)</option>
          <option value='SEPARADO'>Separado(a)</option>
          <option value='SOLTEIRO'>Solteiro(a)</option>
          <option value='COMPANHEIRO'>Companheiro(a)</option>
          <option value='UNIAO_ESTAVEL'>União Estavel</option>
          <option value='SEPARADO_JUDICIALMENTE'>Separado Judicialmente</option>
        </select>
        <label className='helper-text'>{errors?.marital_status?.message}</label>

        <h2>Informações de identidade</h2>

        <label>Documento de identidade</label>
        <select
          ref={register}
          className='select optional valid'
          label='Documento de identidade'
          name='id_type'
          id='id_type'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='RG'>RJ</option>
          <option value='CNH'>CNH</option>
          <option value='CONSELHO_CLASSE'>Conselho de Classe</option>
        </select>
        <label className='helper-text'>{errors?.id_type?.message}</label>

        <label>Número do documento</label>
        <input
          ref={register}
          id='id_num'
          type='text'
          label='Número do documento'
          name='id_num'
        />
        <label className='helper-text'>{errors?.id_num?.message}</label>

        <label>Emissor do documento</label>
        <select
          ref={register}
          className='select optional valid'
          label='Emissor do documento'
          name='id_issuer'
          id='id_issuer'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='SSP'>SSP</option>
          <option value='DETRAN'>DETRAN</option>
          <option value='POLICIA_MILITAR'>POLICIA MILITAR</option>
          <option value='POLICIA_CIVIL'>POLICIA CIVIL</option>
          <option value='INSTITUTO_FELIX_PACHECO'>
            INSTITUTO FELIX PACHECO
          </option>
          <option value='MINISTERIO_DA_FAZENDA'>MINISTERIO DA FAZENDA</option>
          <option value='SJS'>SJS</option>
          <option value='CTPS'>CTPS</option>
          <option value='OAB'>OAB</option>
          <option value='TRIBUNAL_REGIONAL_DO_TRABALHO'>
            TRIBUNAL REGIONAL DO TRABALHO
          </option>
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
          <option value='CRA_CONSELHO_ADMINISTRATIVO'>
            CRA CONSELHO ADMINISTRATIVO
          </option>
          <option value='RBF'>RBF</option>
          <option value='CRO'>CRO</option>
          <option value='CONSELHO_REGIONAL_PSICOLOGIA'>
            CONSELHO REGIONAL PSICOLOGIA
          </option>
          <option value='BM'>BM</option>
          <option value='EXERC'>EXERC</option>
          <option value='SJT'>SJT</option>
          <option value='ME'>ME</option>
          <option value='DPMAF'>DPMAF</option>
          <option value='INST_NAC_PROPRIEDADE_INDUSTRIA'>
            INST NAC PROPRIEDADE INDUSTRIA
          </option>
          <option value='MINEX'>MINEX</option>
          <option value='CPROF'>CPROF</option>
          <option value='CREME'>CREME</option>
        </select>
        <label className='helper-text'>{errors?.id_issuer?.message}</label>

        <label>UF do documento</label>
        <select
          ref={register}
          className='select optional valid'
          label='UF do documento'
          name='id_issuer_state'
          id='id_issuer_state'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='AC'>Acre</option>
          <option value='AL'>Alagoas</option>
          <option value='AP'>Amapá</option>
          <option value='AM'>Amazonas</option>
          <option value='BA'>Bahia</option>
          <option value='CE'>Ceará</option>
          <option value='DF'>Distrito Federal</option>
          <option value='ES'>Espírito Santo</option>
          <option value='GO'>Goiás</option>
          <option value='MA'>Maranhão</option>
          <option value='MT'>Mato Grosso</option>
          <option value='MS'>Mato Grosso do Sul</option>
          <option value='MG'>Minas Gerais</option>
          <option value='PA'>Pará</option>
          <option value='PB'>Paraíba</option>
          <option value='PR'>Paraná</option>
          <option value='PE'>Pernambuco</option>
          <option value='PI'>Piauí</option>
          <option value='RJ'>Rio de Janeiro</option>
          <option value='RN'>Rio Grande do Norte</option>
          <option value='RS'>Rio Grande do Sul</option>
          <option value='RO'>Rondônia</option>
          <option value='RR'>Roraima</option>
          <option value='SC'>Santa Catarina</option>
          <option value='SP'>São Paulo</option>
          <option value='SE'>Sergipe</option>
          <option value='TO'>Tocantins</option>
        </select>
        <label className='helper-text'>
          {errors?.id_issuer_state?.message}
        </label>

        <label>Data de expedição do documento</label>
        <input
          ref={register}
          id='id_exp'
          type='text'
          label='Data de expedição do documento'
          name='id_exp'
        />
        <label className='helper-text'>{errors?.id_exp?.message}</label>

        <h2>Informações bancárias</h2>

        <label>Selecione seu Banco</label>
        <select
          ref={register}
          className='select optional valid'
          label='Selecione seu Banco'
          name='bank_name'
          id='bank_name'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='BANCO_341'>Itaú Unibanco S.A.</option>
          <option value='BANCO_237'>Banco Bradesco S.A.</option>
          <option value='BANCO_104'>Caixa Econômica Federal</option>
          <option value='BANCO_001'>Banco do Brasil S.A.</option>
          <option value='BANCO_033'>Banco Santander (Brasil) S. A.</option>
          <option value='BANCO_003'>BCO DA AMAZONIA S.A.</option>
          <option value='BANCO_004'>BCO DO NORDESTE DO BRASIL S.A.</option>
          <option value='BANCO_007'>BNDES</option>
          <option value='BANCO_010'>CREDICOAMO</option>
          <option value='BANCO_011'>C.SUISSE HEDGING-GRIFFO CV S/A</option>
          <option value='BANCO_012'>BANCO INBURSA</option>
          <option value='BANCO_014'>STATE STREET BR S.A. BCO COMERCIAL</option>
          <option value='BANCO_015'>UBS BRASIL CCTVM S.A.</option>
          <option value='BANCO_016'>SICOOB CREDITRAN</option>
          <option value='BANCO_017'>BNY MELLON BCO S.A.</option>
          <option value='BANCO_018'>BCO TRICURY S.A.</option>
          <option value='BANCO_021'>BCO BANESTES S.A.</option>
          <option value='BANCO_024'>BCO BANDEPE S.A.</option>
          <option value='BANCO_025'>BCO ALFA S.A.</option>
          <option value='BANCO_029'>BANCO ITAÚ CONSIGNADO S.A.</option>
          <option value='BANCO_036'>BCO BBI S.A.</option>
          <option value='BANCO_037'>BCO DO EST. DO PA S.A.</option>
          <option value='BANCO_040'>BCO CARGILL S.A.</option>
          <option value='BANCO_041'>BCO DO ESTADO DO RS S.A.</option>
          <option value='BANCO_047'>BCO DO EST. DE SE S.A.</option>
          <option value='BANCO_060'>CONFIDENCE CC S.A.</option>
          <option value='BANCO_062'>HIPERCARD BM S.A.</option>
          <option value='BANCO_063'>BANCO BRADESCARD</option>
          <option value='BANCO_064'>GOLDMAN SACHS DO BRASIL BM S.A</option>
          <option value='BANCO_065'>BCO ANDBANK S.A.</option>
          <option value='BANCO_066'>BCO MORGAN STANLEY S.A.</option>
          <option value='BANCO_069'>BCO CREFISA S.A.</option>
          <option value='BANCO_070'>BRB - BCO DE BRASILIA S.A.</option>
          <option value='BANCO_074'>BCO. J.SAFRA S.A.</option>
          <option value='BANCO_075'>BCO ABN AMRO S.A.</option>
          <option value='BANCO_076'>BCO KDB BRASIL S.A.</option>
          <option value='BANCO_077'>BANCO INTER</option>
          <option value='BANCO_078'>HAITONG BI DO BRASIL S.A.</option>
          <option value='BANCO_079'>BCO ORIGINAL DO AGRO S/A</option>
          <option value='BANCO_080'>B&amp;T CC LTDA.</option>
          <option value='BANCO_081'>BANCOSEGURO S.A.</option>
          <option value='BANCO_082'>BANCO TOPÁZIO S.A.</option>
          <option value='BANCO_083'>BCO DA CHINA BRASIL S.A.</option>
          <option value='BANCO_084'>UNIPRIME NORTE DO PARANÁ - CC</option>
          <option value='BANCO_085'>COOP CENTRAL AILOS</option>
          <option value='BANCO_089'>CREDISAN CC</option>
          <option value='BANCO_091'>CCCM UNICRED CENTRAL RS</option>
          <option value='BANCO_092'>BRK S.A. CFI</option>
          <option value='BANCO_093'>POLOCRED SCMEPP LTDA.</option>
          <option value='BANCO_094'>BANCO FINAXIS</option>
          <option value='BANCO_095'>TRAVELEX BANCO DE CÂMBIO S.A.</option>
          <option value='BANCO_096'>BCO B3 S.A.</option>
          <option value='BANCO_097'>
            CREDISIS CENTRAL DE COOPERATIVAS DE CRÉDITO LTDA.
          </option>
          <option value='BANCO_098'>CREDIALIANÇA CCR</option>
          <option value='BANCO_099'>UNIPRIME CENTRAL CCC LTDA.</option>
          <option value='BANCO_100'>PLANNER CV S.A.</option>
          <option value='BANCO_101'>RENASCENCA DTVM LTDA</option>
          <option value='BANCO_102'>XP INVESTIMENTOS CCTVM S/A</option>
          <option value='BANCO_105'>LECCA CFI S.A.</option>
          <option value='BANCO_107'>BCO BOCOM BBM S.A.</option>
          <option value='BANCO_108'>PORTOCRED S.A. - CFI</option>
          <option value='BANCO_111'>OLIVEIRA TRUST DTVM S.A.</option>
          <option value='BANCO_113'>MAGLIANO S.A. CCVM</option>
          <option value='BANCO_114'>
            CENTRAL COOPERATIVA DE CRÉDITO NO ESTADO DO ESPÍRITO SANTO
          </option>
          <option value='BANCO_117'>ADVANCED CC LTDA</option>
          <option value='BANCO_119'>BCO WESTERN UNION</option>
          <option value='BANCO_120'>BCO RODOBENS S.A.</option>
          <option value='BANCO_121'>BCO AGIBANK S.A.</option>
          <option value='BANCO_122'>BCO BRADESCO BERJ S.A.</option>
          <option value='BANCO_124'>BCO WOORI BANK DO BRASIL S.A.</option>
          <option value='BANCO_125'>PLURAL BCO BM</option>
          <option value='BANCO_126'>BR PARTNERS BI</option>
          <option value='BANCO_127'>CODEPE CVC S.A.</option>
          <option value='BANCO_128'>MS BANK S.A. BCO DE CÂMBIO</option>
          <option value='BANCO_129'>UBS BRASIL BI S.A.</option>
          <option value='BANCO_130'>CARUANA SCFI</option>
          <option value='BANCO_131'>TULLETT PREBON BRASIL CVC LTDA</option>
          <option value='BANCO_132'>ICBC DO BRASIL BM S.A.</option>
          <option value='BANCO_133'>CRESOL CONFEDERAÇÃO</option>
          <option value='BANCO_134'>BGC LIQUIDEZ DTVM LTDA</option>
          <option value='BANCO_136'>UNICRED</option>
          <option value='BANCO_138'>GET MONEY CC LTDA</option>
          <option value='BANCO_139'>INTESA SANPAOLO BRASIL S.A. BM</option>
          <option value='BANCO_140'>EASYNVEST - TÍTULO CV SA</option>
          <option value='BANCO_142'>BROKER BRASIL CC LTDA.</option>
          <option value='BANCO_143'>TREVISO CC S.A.</option>
          <option value='BANCO_144'>BEXS BCO DE CAMBIO S.A.</option>
          <option value='BANCO_145'>LEVYCAM CCV LTDA</option>
          <option value='BANCO_146'>GUITTA CC LTDA</option>
          <option value='BANCO_149'>FACTA S.A. CFI</option>
          <option value='BANCO_157'>ICAP DO BRASIL CTVM LTDA.</option>
          <option value='BANCO_159'>CASA CREDITO S.A. SCM</option>
          <option value='BANCO_163'>
            COMMERZBANK BRASIL S.A. - BCO MÚLTIPLO
          </option>
          <option value='BANCO_169'>BCO OLÉ BONSUCESSO CONSIGNADO S.A.</option>
          <option value='BANCO_173'>BRL TRUST DTVM SA</option>
          <option value='BANCO_174'>PERNAMBUCANAS FINANC S.A. CFI</option>
          <option value='BANCO_177'>GUIDE</option>
          <option value='BANCO_180'>CM CAPITAL MARKETS CCTVM LTDA</option>
          <option value='BANCO_183'>SOCRED SA - SCMEPP</option>
          <option value='BANCO_184'>BCO ITAÚ BBA S.A.</option>
          <option value='BANCO_188'>ATIVA S.A. INVESTIMENTOS CCTVM</option>
          <option value='BANCO_189'>HS FINANCEIRA</option>
          <option value='BANCO_190'>SERVICOOP</option>
          <option value='BANCO_191'>NOVA FUTURA CTVM LTDA.</option>
          <option value='BANCO_194'>PARMETAL DTVM LTDA</option>
          <option value='BANCO_196'>FAIR CC S.A.</option>
          <option value='BANCO_197'>STONE PAGAMENTOS S.A.</option>
          <option value='BANCO_208'>BANCO BTG PACTUAL S.A.</option>
          <option value='BANCO_212'>BANCO ORIGINAL</option>
          <option value='BANCO_213'>BCO ARBI S.A.</option>
          <option value='BANCO_217'>BANCO JOHN DEERE S.A.</option>
          <option value='BANCO_218'>BCO BS2 S.A.</option>
          <option value='BANCO_222'>BCO CRÉDIT AGRICOLE BR S.A.</option>
          <option value='BANCO_224'>BCO FIBRA S.A.</option>
          <option value='BANCO_233'>BANCO CIFRA</option>
          <option value='BANCO_241'>BCO CLASSICO S.A.</option>
          <option value='BANCO_243'>BCO MÁXIMA S.A.</option>
          <option value='BANCO_246'>BCO ABC BRASIL S.A.</option>
          <option value='BANCO_249'>BANCO INVESTCRED UNIBANCO S.A.</option>
          <option value='BANCO_250'>BCV</option>
          <option value='BANCO_253'>BEXS CC S.A.</option>
          <option value='BANCO_254'>PARANA BCO S.A.</option>
          <option value='BANCO_259'>MONEYCORP BCO DE CÂMBIO S.A.</option>
          <option value='BANCO_260'>NU PAGAMENTOS S.A.</option>
          <option value='BANCO_265'>BCO FATOR S.A.</option>
          <option value='BANCO_266'>BCO CEDULA S.A.</option>
          <option value='BANCO_268'>BARI CIA HIPOTECÁRIA</option>
          <option value='BANCO_269'>HSBC BANCO DE INVESTIMENTO</option>
          <option value='BANCO_270'>SAGITUR CC LTDA</option>
          <option value='BANCO_271'>IB CCTVM S.A.</option>
          <option value='BANCO_272'>AGK CC S.A.</option>
          <option value='BANCO_273'>CCR DE SÃO MIGUEL DO OESTE</option>
          <option value='BANCO_274'>MONEY PLUS SCMEPP LTDA</option>
          <option value='BANCO_276'>SENFF S.A. - CFI</option>
          <option value='BANCO_278'>GENIAL INVESTIMENTOS CVM S.A.</option>
          <option value='BANCO_279'>CCR DE PRIMAVERA DO LESTE</option>
          <option value='BANCO_280'>AVISTA S.A. CFI</option>
          <option value='BANCO_281'>CCR COOPAVEL</option>
          <option value='BANCO_283'>RB CAPITAL INVESTIMENTOS DTVM LTDA.</option>
          <option value='BANCO_285'>FRENTE CC LTDA.</option>
          <option value='BANCO_286'>CCR DE OURO</option>
          <option value='BANCO_288'>CAROL DTVM LTDA.</option>
          <option value='BANCO_289'>DECYSEO CC LTDA. </option>
          <option value='BANCO_290'>PAGSEGURO</option>
          <option value='BANCO_292'>BS2 DTVM S.A.</option>
          <option value='BANCO_293'>LASTRO RDV DTVM LTDA</option>
          <option value='BANCO_296'>VISION S.A. CC</option>
          <option value='BANCO_298'>VIPS CC LTDA.</option>
          <option value='BANCO_299'>SOROCRED CFI S.A.</option>
          <option value='BANCO_300'>BCO LA NACION ARGENTINA</option>
          <option value='BANCO_301'>BPP IP S.A.</option>
          <option value='BANCO_306'>PORTOPAR DTVM LTDA</option>
          <option value='BANCO_307'>TERRA INVESTIMENTOS DTVM</option>
          <option value='BANCO_309'>CAMBIONET CC LTDA</option>
          <option value='BANCO_310'>VORTX DTVM LTDA.</option>
          <option value='BANCO_315'>PI DTVM S.A.</option>
          <option value='BANCO_318'>BCO BMG S.A.</option>
          <option value='BANCO_319'>OM DTVM LTDA</option>
          <option value='BANCO_320'>BCO CCB BRASIL S.A.</option>
          <option value='BANCO_321'>CREFAZ SCMEPP LTDA</option>
          <option value='BANCO_322'>CCR DE ABELARDO LUZ</option>
          <option value='BANCO_323'>MERCADO PAGO</option>
          <option value='BANCO_325'>ÓRAMA DTVM S.A.</option>
          <option value='BANCO_326'>PARATI - CFI S.A.</option>
          <option value='BANCO_329'>QI SCD S.A.</option>
          <option value='BANCO_330'>BANCO BARI S.A.</option>
          <option value='BANCO_331'>FRAM CAPITAL DTVM S.A.</option>
          <option value='BANCO_332'>ACESSO</option>
          <option value='BANCO_335'>BANCO DIGIO</option>
          <option value='BANCO_336'>BCO C6 S.A.</option>
          <option value='BANCO_340'>
            SUPER PAGAMENTOS E ADMINISTRACAO DE MEIOS ELETRONICOS S.A.
          </option>
          <option value='BANCO_342'>CREDITAS SCD</option>
          <option value='BANCO_343'>FFA SCMEPP LTDA.</option>
          <option value='BANCO_348'>BCO XP S.A.</option>
          <option value='BANCO_349'>AMAGGI S.A. CFI</option>
          <option value='BANCO_352'>TORO CTVM LTDA</option>
          <option value='BANCO_354'>NECTON INVESTIMENTOS S.A CVM</option>
          <option value='BANCO_355'>ÓTIMO SCD S.A.</option>
          <option value='BANCO_364'>GERENCIANET PAGTOS BRASIL LTDA</option>
          <option value='BANCO_365'>SOLIDUS S.A. CCVM</option>
          <option value='BANCO_366'>BCO SOCIETE GENERALE BRASIL</option>
          <option value='BANCO_367'>VITREO DTVM S.A.</option>
          <option value='BANCO_370'>BCO MIZUHO S.A.</option>
          <option value='BANCO_373'>UP.P SEP S.A.</option>
          <option value='BANCO_376'>BCO J.P. MORGAN S.A.</option>
          <option value='BANCO_389'>BCO MERCANTIL DO BRASIL S.A.</option>
          <option value='BANCO_394'>BCO BRADESCO FINANC. S.A.</option>
          <option value='BANCO_399'>KIRTON BANK</option>
          <option value='BANCO_412'>BCO CAPITAL S.A.</option>
          <option value='BANCO_422'>BCO SAFRA S.A.</option>
          <option value='BANCO_456'>BCO MUFG BRASIL S.A.</option>
          <option value='BANCO_464'>BCO SUMITOMO MITSUI BRASIL S.A.</option>
          <option value='BANCO_473'>BCO CAIXA GERAL BRASIL S.A.</option>
          <option value='BANCO_479'>BCO ITAUBANK S.A.</option>
          <option value='BANCO_487'>DEUTSCHE BANK S.A.BCO ALEMAO</option>
          <option value='BANCO_488'>JPMORGAN CHASE BANK</option>
          <option value='BANCO_492'>ING BANK N.V.</option>
          <option value='BANCO_495'>BCO LA PROVINCIA B AIRES BCE</option>
          <option value='BANCO_505'>BCO CREDIT SUISSE S.A.</option>
          <option value='BANCO_545'>SENSO CCVM S.A.</option>
          <option value='BANCO_600'>BCO LUSO BRASILEIRO S.A.</option>
          <option value='BANCO_604'>BCO INDUSTRIAL DO BRASIL S.A.</option>
          <option value='BANCO_610'>BCO VR S.A.</option>
          <option value='BANCO_611'>BCO PAULISTA S.A.</option>
          <option value='BANCO_612'>BCO GUANABARA S.A.</option>
          <option value='BANCO_613'>OMNI BANCO S.A.</option>
          <option value='BANCO_623'>BANCO PAN</option>
          <option value='BANCO_626'>BCO FICSA S.A.</option>
          <option value='BANCO_630'>SMARTBANK</option>
          <option value='BANCO_633'>BCO RENDIMENTO S.A.</option>
          <option value='BANCO_634'>BCO TRIANGULO S.A.</option>
          <option value='BANCO_637'>BCO SOFISA S.A.</option>
          <option value='BANCO_643'>BCO PINE S.A.</option>
          <option value='BANCO_652'>ITAÚ UNIBANCO HOLDING S.A.</option>
          <option value='BANCO_653'>BCO INDUSVAL S.A.</option>
          <option value='BANCO_654'>BCO A.J. RENNER S.A.</option>
          <option value='BANCO_655'>BCO VOTORANTIM S.A.</option>
          <option value='BANCO_707'>BCO DAYCOVAL S.A</option>
          <option value='BANCO_712'>BCO OURINVEST S.A.</option>
          <option value='BANCO_735'>BANCO NEON</option>
          <option value='BANCO_739'>BCO CETELEM S.A.</option>
          <option value='BANCO_741'>BCO RIBEIRAO PRETO S.A.</option>
          <option value='BANCO_743'>BANCO SEMEAR</option>
          <option value='BANCO_745'>BCO CITIBANK S.A.</option>
          <option value='BANCO_746'>BCO MODAL S.A.</option>
          <option value='BANCO_747'>BCO RABOBANK INTL BRASIL S.A.</option>
          <option value='BANCO_748'>BCO COOPERATIVO SICREDI S.A.</option>
          <option value='BANCO_751'>SCOTIABANK BRASIL</option>
          <option value='BANCO_752'>BCO BNP PARIBAS BRASIL S A</option>
          <option value='BANCO_753'>NOVO BCO CONTINENTAL S.A. - BM</option>
          <option value='BANCO_754'>BANCO SISTEMA</option>
          <option value='BANCO_755'>BOFA MERRILL LYNCH BM S.A.</option>
          <option value='BANCO_756'>BANCOOB</option>
          <option value='BANCO_757'>BCO KEB HANA DO BRASIL S.A.</option>
        </select>
        <label className='helper-text'>{errors?.bank_name?.message}</label>

        <label>Tipo de conta</label>
        <select
          ref={register}
          className='select optional valid'
          label='Tipo de conta'
          name='bank_account_type'
          id='bank_account_type'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='CONTA_CORRENTE_INDIVIDUAL'>Conta Corrente</option>
          <option value='CONTA_POUPANCA_INDIVIDUAL'>Conta Poupança</option>
        </select>
        <label className='helper-text'>
          {errors?.bank_account_type?.message}
        </label>

        <div
          style={{
            fontSize: 12,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#FEFBF1',
            marginBottom: 10,
          }}
        >
          <p>
            <strong>Dica:</strong> Você tem chances maiores de ser aprovado se
            tiver conta nos bancos: Banco do Brasil, Bradesco, Caixa, Itaú e
            Satander.
          </p>
        </div>

        <label>Número da agência sem o dígito</label>
        <input
          ref={register}
          id='bank_account_num'
          type='text'
          label='Tipo de conta'
          name='bank_account_num'
        />
        <label className='helper-text'>
          {errors?.bank_account_num?.message}
        </label>

        <h2>Objetivo do crédito</h2>

        <label>Qual é a finalidade da sua solicitação?</label>
        <select
          ref={register}
          className='select optional valid'
          label='Qual é a finalidade da sua solicitação?'
          name='loan_intent'
          id='loan_intent'
          aria-invalid='false'
        >
          <option>Selecione</option>
          <option value='PAGAR_CONTAS'>Pagar contas</option>
          <option value='COMECAR_UM_NOVO_NEGOCIO'>
            Começar um novo negócio
          </option>
          <option value='PAGAR_OUTRAS_DIVIDAS'>Pagar outras dívidas</option>
          <option value='FAZER_COMPRAS'>Fazer compras</option>
          <option value='OUTRAS'>Outras</option>
          <option value='COMPRAR_REFORMAR_UMA_CASA'>
            Comprar ou reformar uma casa
          </option>
          <option value='EDUCACAO'>Educação</option>
          <option value='AJUDAR_UMA_OUTRA_PESSOA_DA_FAMILIA'>
            Ajudar uma outra pessoa da família
          </option>
          <option value='COMPRAR_CONSERTAR_UM_CARRO'>
            Comprar ou consertar um carro
          </option>
          <option value='BELEZA_E_SAUDE'>Beleza e saúde</option>
          <option value='FERIAS_VIAGENS'>Férias e viagens</option>
          <option value='EVENTOS_FESTAS'>Eventos e festas</option>
        </select>
        <label className='helper-text'>{errors?.loan_intent?.message}</label>

        <button>Próximo</button>
      </form>
    </div>
  )
}

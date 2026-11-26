// ============================================================
//  CONFIGURAÇÃO DO SITE — edite aqui sem mexer nos componentes
// ============================================================

export const LINKS = {
  // Link público do relatório Power BI.
  // Para incorporar (embed), use o link "Publicar na Web" (app.powerbi.com/view?r=...)
  powerBI: '',

  // Link público do mapa ArcGIS (ArcGIS Online / StoryMaps / Web App).
  arcGIS: '',

  // (Opcional) repositório do projeto
  repositorio: 'https://github.com/Itsanthonnyz/Projeto-de-Business-Intelligence---UBS-na-Regiao-de-Betim',
}

export const PROJETO = {
  titulo: 'UBS de Betim em dados',
  subtitulo:
    'Mapeamento e análise das 41 Unidades Básicas de Saúde de Betim – MG com Business Intelligence: distribuição territorial, estrutura e produção da atenção primária.',
  disciplina: 'Business Intelligence',
  curso: 'Sistemas de Informação',
  instituicao: 'PUC Minas · campus Betim',
  semestre: '2º semestre de 2026',
  professor: 'Prof. Clovis Tavares',
}

// Valores calculados a partir de "Postos de saúde - Betim.xlsx".
export const INDICADORES = [
  { valor: '41', rotulo: 'UBS mapeadas', detalhe: 'todas georreferenciadas' },
  { valor: '9', rotulo: 'Regionais', detalhe: 'divisões administrativas' },
  { valor: '1.329', rotulo: 'Profissionais', detalhe: 'somando todas as unidades' },
  { valor: '227,5 mil', rotulo: 'Procedimentos/mês', detalhe: 'média mensal, somando as UBS' },
]

// Origem da maior parte dos dados. Coloque `url` se quiser que o nome vire link.
export const FONTES = [
  { nome: 'Meu Postinho', url: 'https://www.meupostinho.com.br/brasil/sudeste/mg/minas-gerais/3106705-betim' },
  { nome: 'CNES — DATASUS', url: 'https://cnes.datasus.gov.br/' },
  { nome: 'Prefeitura de Betim', url: 'https://www.betim.mg.gov.br/portal/secretarias-paginas/89/unidades-basicas-de-saude' },
]

export const PERGUNTAS = [
  'Como as UBS estão distribuídas entre as 9 regionais de Betim?',
  'Quais unidades e regionais concentram mais procedimentos, em média, por mês?',
  'A estrutura (profissionais e consultórios) acompanha a demanda?',
  'Como varia a oferta de serviços — odontologia, pré-natal e especialidades?',
]

export const EQUIPE = [
  'Anthony Augusto Neindite Nunes da Silva',
  'Breno Viana do Espirito Santo',
  'Davi Silva Santos',
  'Gabriel Santos Arpini',
  'Gardenia Iris Anselmo Rodrigues da Fonseca',
  'Geovanna Quezia Oliveira de Cassia',
]

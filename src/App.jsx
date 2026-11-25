import { LINKS, PROJETO, INDICADORES, PERGUNTAS, EQUIPE, FONTES } from './config.js'

function Fontes() {
  return FONTES.map((f, i) => (
    <span key={f.nome}>
      {i > 0 && (i === FONTES.length - 1 ? ' e ' : ', ')}
      {f.url ? <a href={f.url} target="_blank" rel="noopener noreferrer">{f.nome}</a> : <strong>{f.nome}</strong>}
    </span>
  ))
}
import LinkCard from './components/LinkCard.jsx'
import HeroMap from './components/HeroMap.jsx'
import { IconChart, IconMap, IconTable, IconFilter, IconCube, IconPin, IconCross } from './components/Icons.jsx'

const ETAPAS = [
  { icon: IconTable, titulo: 'Coleta', texto: 'Dados reais das 41 UBS, extraídos em sua maioria do Meu Postinho, do CNES/DATASUS e do portal da Prefeitura de Betim, consolidados em planilha.' },
  { icon: IconFilter, titulo: 'Tratamento (ETL)', texto: 'Limpeza, padronização de nomes e bairros, tipagem e remoção de inconsistências no Power Query.' },
  { icon: IconCube, titulo: 'Modelagem', texto: 'Modelo estrela com tabelas fato e dimensão e medidas DAX para os indicadores.' },
  { icon: IconPin, titulo: 'Geocodificação', texto: 'Coordenadas das unidades levadas ao ArcGIS para análise espacial e de cobertura.' },
  { icon: IconChart, titulo: 'Visualização', texto: 'Dashboards interativos no Power BI e mapa público no ArcGIS Online.' },
]

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <a href="#topo" className="brand">
            <span className="brand__mark"><IconCross width={18} height={18} /></span>
            UBS Betim <span className="brand__bi">BI</span>
          </a>
          <nav className="nav__links" aria-label="Seções">
            <a href="#sobre">Sobre</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#resultados">Resultados</a>
            <a href="#equipe">Equipe</a>
          </nav>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <p className="eyebrow">{PROJETO.disciplina} · PUC Minas Betim</p>
              <h1>{PROJETO.titulo}</h1>
              <p className="lead">{PROJETO.subtitulo}</p>
              <div className="hero__actions">
                <a href="#resultados" className="btn btn--primary">Ver dashboards e mapa</a>
                <a href="#sobre" className="btn btn--light">Conhecer o projeto</a>
              </div>
            </div>
            <HeroMap />
          </div>
        </section>

        {/* INDICADORES */}
        <section className="container stats" aria-label="Indicadores">
          {INDICADORES.map((k) => (
            <div className="stat" key={k.rotulo}>
              <strong>{k.valor}</strong>
              <span>{k.rotulo}</span>
              <small>{k.detalhe}</small>
            </div>
          ))}
          <p className="stats__note">
            Procedimentos: média mensal por unidade, somada entre as 41 UBS. Fontes: <Fontes />.
          </p>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section container about">
          <div>
            <p className="eyebrow">Sobre o projeto</p>
            <h2>Por que olhar para as UBS?</h2>
            <p>
              As Unidades Básicas de Saúde são a porta de entrada do SUS. Entender onde estão,
              como estão estruturadas e quanto atendem ajuda a identificar desigualdades de acesso
              e a apoiar decisões de gestão na atenção primária.
            </p>
            <p>
              Neste trabalho, transformamos dados reais das UBS de Betim – MG em um painel
              analítico e em um mapa interativo. A maior parte das informações foi extraída
              de fontes públicas: <Fontes />. Esses dados foram consolidados em uma planilha
              que serviu de base para o Power BI e o ArcGIS.
            </p>
          </div>
          <div className="questions">
            <h3>Perguntas que guiaram a análise</h3>
            <ol>
              {PERGUNTAS.map((q) => <li key={q}>{q}</li>)}
            </ol>
          </div>
        </section>

        {/* METODOLOGIA */}
        <section id="metodologia" className="section section--tint">
          <div className="container">
            <p className="eyebrow">Metodologia</p>
            <h2>Da planilha ao insight</h2>
            <ol className="pipeline">
              {ETAPAS.map(({ icon: Icon, titulo, texto }, i) => (
                <li key={titulo}>
                  <span className="pipeline__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pipeline__icon"><Icon /></span>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </li>
              ))}
            </ol>
            <div className="stack">
              <span>Excel</span><span>Power Query</span><span>DAX</span><span>Power BI</span><span>ArcGIS Online</span>
            </div>
          </div>
        </section>

        {/* RESULTADOS / LINKS */}
        <section id="resultados" className="section container">
          <p className="eyebrow">Resultados</p>
          <h2>Explore os dados</h2>
          <p className="section__intro">
            Os resultados estão publicados em duas ferramentas complementares: o painel analítico
            com os indicadores e o mapa com a distribuição territorial das unidades.
          </p>
          <div className="links-grid">
            <LinkCard
              id="powerbi"
              variante="bi"
              icon={IconChart}
              tag="Power BI"
              titulo="Dashboard analítico"
              descricao="Gráficos interativos com filtros por regional e por unidade."
              itens={['Procedimentos por unidade e regional', 'Profissionais e consultórios por UBS', 'Oferta de serviços e avaliação no Google']}
              url={LINKS.powerBI}
              cta="Abrir no Power BI"
            />
            <LinkCard
              id="arcgis"
              variante="gis"
              icon={IconMap}
              tag="ArcGIS"
              titulo="Mapa interativo"
              descricao="Localização das UBS de Betim com camadas de análise espacial."
              itens={['Pontos de cada UBS com detalhes', 'Distribuição pelas 9 regionais', 'Concentração e lacunas de atendimento']}
              url={LINKS.arcGIS}
              cta="Abrir mapa no ArcGIS"
            />
          </div>
        </section>

        {/* EQUIPE */}
        <section id="equipe" className="section section--tint">
          <div className="container">
            <p className="eyebrow">Equipe</p>
            <ul className="team">
              {EQUIPE.map((nome) => <li key={nome}>{nome}</li>)}
            </ul>
            <p className="team__meta">
              {PROJETO.curso} · {PROJETO.instituicao} · {PROJETO.professor} · {PROJETO.semestre}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong>{PROJETO.titulo}</strong>
            <p>{PROJETO.disciplina} · {PROJETO.curso} · {PROJETO.instituicao} · {PROJETO.semestre}</p>
            <p>Fontes dos dados: <Fontes /></p>
          </div>
          {LINKS.repositorio && (
            <a href={LINKS.repositorio} target="_blank" rel="noopener noreferrer">Repositório no GitHub ↗</a>
          )}
        </div>
      </footer>
    </>
  )
}

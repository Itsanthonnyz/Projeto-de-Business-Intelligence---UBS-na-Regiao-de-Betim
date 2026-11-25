import { useState } from 'react'
import { IconExternal, IconEye } from './Icons.jsx'

/**
 * Card de acesso a um recurso externo (Power BI / ArcGIS).
 * Se `url` estiver vazio, mostra um estado "link em breve".
 * O botão "Visualizar aqui" incorpora o recurso em um iframe.
 */
export default function LinkCard({ id, icon: Icon, tag, titulo, descricao, url, cta, itens, variante }) {
  const [aberto, setAberto] = useState(false)
  const disponivel = Boolean(url)

  return (
    <article id={id} className={`link-card link-card--${variante}`}>
      <div className="link-card__head">
        <span className="link-card__icon"><Icon /></span>
        <span className="tag">{tag}</span>
      </div>

      <h3>{titulo}</h3>
      <p>{descricao}</p>

      <ul className="link-card__list">
        {itens.map((i) => <li key={i}>{i}</li>)}
      </ul>

      <div className="link-card__actions">
        {disponivel ? (
          <>
            <a className="btn btn--primary" href={url} target="_blank" rel="noopener noreferrer">
              {cta} <IconExternal />
            </a>
            <button className="btn btn--ghost" onClick={() => setAberto((v) => !v)} aria-expanded={aberto}>
              <IconEye /> {aberto ? 'Ocultar' : 'Visualizar aqui'}
            </button>
          </>
        ) : (
          <span className="btn btn--disabled" aria-disabled="true">Link em breve</span>
        )}
      </div>

      {disponivel && aberto && (
        <div className="embed">
          <iframe src={url} title={titulo} loading="lazy" allowFullScreen />
        </div>
      )}
    </article>
  )
}

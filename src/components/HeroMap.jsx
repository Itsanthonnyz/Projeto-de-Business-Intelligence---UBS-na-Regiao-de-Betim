import { UBS } from '../data/ubs.js'

// Mini-mapa com a posição real das 41 UBS (coordenadas da planilha),
// projetadas em um plano simples. Passe o mouse sobre um ponto para ver o nome.
const SIZE = 400
const PAD = 36

const lats = UBS.map((u) => u.lat)
const lons = UBS.map((u) => u.lon)
const minLat = Math.min(...lats), maxLat = Math.max(...lats)
const minLon = Math.min(...lons), maxLon = Math.max(...lons)
const kx = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180)) // corrige distorção da longitude
const escala = (SIZE - PAD * 2) / Math.max((maxLon - minLon) * kx, maxLat - minLat)
const offX = (SIZE - (maxLon - minLon) * kx * escala) / 2
const offY = (SIZE - (maxLat - minLat) * escala) / 2

const PONTOS = UBS.map((u) => ({
  ...u,
  x: offX + (u.lon - minLon) * kx * escala,
  y: offY + (maxLat - u.lat) * escala,
}))

export default function HeroMap() {
  return (
    <figure className="hero-map-wrap">
      <svg className="hero-map" viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="Mapa com a localização das 41 UBS de Betim">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity=".08" />
          </pattern>
        </defs>
        <rect width={SIZE} height={SIZE} rx="24" fill="url(#grid)" />
        {PONTOS.map((p, i) => (
          <g key={p.nome} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`} className="hero-map__ubs">
            <title>{`${p.nome} — Regional ${p.regional}`}</title>
            <circle className="hero-map__pulse" r="5" style={{ animationDelay: `${(i % 8) * 0.35}s` }} />
            <circle className="hero-map__dot" r="5" />
          </g>
        ))}
      </svg>
      <figcaption>Localização real das 41 UBS · passe o mouse sobre os pontos</figcaption>
    </figure>
  )
}

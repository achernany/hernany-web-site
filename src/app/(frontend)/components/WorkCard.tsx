type Cover = { url?: string | null; alt?: string | null } | number | null | undefined

interface WorkCardProps {
  name: string
  description: string
  cover?: Cover
}

export function WorkCard({ name, description, cover }: WorkCardProps) {
  const media = cover && typeof cover === 'object' ? cover : null

  return (
    <article className="work-card">
      <div className="work-media">
        {media?.url ? (
          <img src={media.url} alt={media.alt || name} loading="lazy" />
        ) : (
          <span className="work-media-placeholder">{name.charAt(0)}</span>
        )}
      </div>
      <h3 className="work-title">{name}</h3>
      <p className="work-desc">{description}</p>
    </article>
  )
}

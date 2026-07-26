import type { Paragraph, Span } from '../content'

export function Spans({ spans }: { spans: Span[] }) {
  return (
    <>
      {spans.map((s, i) => (
        <span key={i} className={s.a ? 'accent' : s.s ? 'strong' : undefined}>
          {s.t}
        </span>
      ))}
    </>
  )
}

export function RichBody({ paragraphs }: { paragraphs: Paragraph[] }) {
  return (
    <div className="body-rich narrow">
      {paragraphs.map((p, i) => (
        <p key={i}>
          <Spans spans={p} />
        </p>
      ))}
    </div>
  )
}

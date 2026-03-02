import { Container } from "../components/ui/Container";
import { Typography, Accent } from "../components/ui/Typography";
import { Tag } from "../components/ui/Tag";
import { DetailHeader } from "../components/layout/DetailHeader";
import { PageFooter } from "../components/layout/PageFooter";
import { useI18n } from "../i18n";

interface ExtendedWorkDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

interface ExtendedDetailTranslation {
  backTitle: string;
  title: string;
  descriptionAccent: string;
  descriptionRest: string;
  tags: string[];
}

function slugToKey(slug: string): "applied" | "consulting" {
  return slug === "consulting" ? "consulting" : "applied";
}

export function ExtendedWorkDetail({ slug, onNavigate }: ExtendedWorkDetailProps) {
  const { tn } = useI18n();
  const key = slugToKey(slug);
  const content = tn(`extendedWorkDetail.${key}`) as ExtendedDetailTranslation;

  return (
    <Container>
      <section className="extended-detail">
        <DetailHeader title={content.backTitle} onBack={() => onNavigate("/extended-works")} />
        <div className="extended-detail__hero" aria-hidden />
        <div className="extended-detail__content">
          <Typography variant="h2" center>{content.title}</Typography>
          <Typography variant="bodyLg" center>
            <Accent>{content.descriptionAccent}</Accent> {content.descriptionRest}
          </Typography>
          <div className="extended-detail__tags">
            {content.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </section>
      <PageFooter />
    </Container>
  );
}

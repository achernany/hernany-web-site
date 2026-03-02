import { ArrowLeft } from "lucide-react";
import { IconButton } from "../ui/IconButton";
import { useI18n } from "../../i18n";

interface DetailHeaderProps {
  title: string;
  onBack: () => void;
}

export function DetailHeader({ title, onBack }: DetailHeaderProps) {
  const { t } = useI18n();

  return (
    <div className="detail-header">
      <div className="detail-header__left">
        <IconButton back onClick={onBack} aria-label={t("common.actions.back")}>
          <ArrowLeft size={16} />
        </IconButton>
        <span className="detail-header__title">{title}</span>
      </div>
      <span className="detail-header__brand">{t("common.brand")}</span>
    </div>
  );
}

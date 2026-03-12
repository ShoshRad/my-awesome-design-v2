interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return <h2 className="section-header">{title}</h2>;
}

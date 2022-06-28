export type SectionTitleProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  right?: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  right,
}) => {
  return (
    <div className="section-title w-full mb-6 pt-3">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="text-xs font-light text-gray-500 uppercase">
            {title}
          </div>

          <div className="text-xl font-bold">{subtitle}</div>
        </div>

        {right}
      </div>
    </div>
  );
};

export default SectionTitle;

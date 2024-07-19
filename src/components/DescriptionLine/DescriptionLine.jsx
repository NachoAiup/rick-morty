export const DescriptionLine = ({ label, value }) => {
  return (
    <div className="flex gap-2 mt-2">
      <p className="font-light text-sm text-[#ABABAB]">{label}:</p>
      <p className="font-semibold text-sm text-[#3E3C3C] text-nowrap text-ellipsis overflow-hidden">
        {value}
      </p>
    </div>
  );
};

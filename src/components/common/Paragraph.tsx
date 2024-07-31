interface Paraprops{
    paraText: string;
    className?: string;
}

const Paragraph = ({paraText,className}:Paraprops) => {
  return (
      <p className={`font-poppins font-normal text-base text-dark-grey ${className}`}>{paraText}</p>
  )
}

export default Paragraph

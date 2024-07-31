interface Paraprops{
    paraText: string;
    className?: string;
}

const Paragraph = ({paraText,className}:Paraprops) => {
  return (
      <p className={`font-poppins font-normal sm:text-base text-sm leading-150 text-dark-grey ${className}`}>{paraText}</p>
  )
}

export default Paragraph

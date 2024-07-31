interface Paraprops{
    paraText: string;
    ClassName?: string;
}

const Paragraph = ({paraText,ClassName}:Paraprops) => {
  return (
      <p className={`font-poppins font-normal text-base text-dark-grey ${ClassName}`}>{paraText}</p>
  )
}

export default Paragraph

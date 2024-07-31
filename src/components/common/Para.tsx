interface Paraprops{
    paraName: string;
    className: string;
}

const Para = ({paraName,className}:Paraprops) => {
  return (
      <p className={`font-poppins font-normal text-base text-dark-grey ${className} `}>{paraName}</p>
  )
}

export default Para

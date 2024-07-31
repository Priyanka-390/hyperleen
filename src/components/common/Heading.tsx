interface HeadingProps {
  name: string;
  className: string;
  darkBlueText: string;
}

const Heading = ({name,className,darkBlueText}:HeadingProps) => {
  return (
    <h2 className={`font-gilroy-medium font-medium text-5xl leading-120 text-black ${className}`}>
      {name} <span className="text-dark-blue">{darkBlueText}</span>
    </h2>
  )
}

export default Heading
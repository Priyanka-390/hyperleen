interface HeadingProps {
  name?: string;
  className?: string;
  darkBlueText?: string;
  name2?:string;
}

const Heading = ({name,className,darkBlueText,name2}:HeadingProps) => {
  return (
    <h2 className={`ff-gilroy-medium font-medium text-5xl leading-120 text-black ${className}`}>
      {name} <span className="text-dark-blue font-medium">{darkBlueText}</span> {name2}
    </h2>
  )
}

export default Heading
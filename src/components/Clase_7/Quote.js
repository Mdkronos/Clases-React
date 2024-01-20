



const Quote = ({quote}) => {

    const {text, author} = quote;
  
    return (
      <blockquote>
        <p>{text}</p>
        <h3>- {author}</h3>

      </blockquote>
  )
}

export default Quote
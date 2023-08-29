function Movies(props) {
  return (
    <div className="movie">
          <img src={props.image} alt="" />
          <h3>{props.title}</h3>
          <p>Release Year: {props.year}</p>
    </div>
  )
}

export default Movies
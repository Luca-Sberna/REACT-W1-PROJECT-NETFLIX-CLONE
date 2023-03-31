import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class SecondGallery extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=60534065&s=lord-of-the-rings",
    );
    const data = await response.json();
    const movies = data.Search.slice(0, 6); // Mostra solo i primi 4 film
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container fluid className="py-5">
        <Row className="justify-content-center ">
          <h2 className="text-light text-start p-2">Lord Of The Rings Saga</h2>
          <Col xs={12}>
            {movies.map((movie) => (
              <img
                key={movie.imdbID}
                src={movie.Poster}
                alt={movie.Title}
                className="movie-poster p-2"
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SecondGallery;

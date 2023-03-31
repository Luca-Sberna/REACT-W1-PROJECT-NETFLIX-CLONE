import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class FirstGallery extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=60534065&s=harry%20potter",
    );
    const data = await response.json();
    const movies = data.Search.slice(0, 6);
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container fluid>
        <Row className="justify-content-center ">
          <h2 className="text-light text-start p-2">Harry Potter Saga</h2>
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

export default FirstGallery;

import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import { Component } from "react";

class SecondGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=60534065&s=lord-of-the-rings",
    );
    const data = await response.json();
    this.setState({ movies: data.Search });
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

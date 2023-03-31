import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Component } from "react";

class SecondGallery extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=60534065&s=lord-of-the-rings",
      );
      const data = await response.json();
      const movies = data.Search.slice(0, 6);
      this.setState({ movies });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { movies, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <Container fluid className="py-5">
        <Row className="justify-content-center ">
          <h2 className="text-light text-start p-2">Lord Of The Rings Saga</h2>
          <Col xs={12}>
            <Carousel indicators={null}>
              {[...Array(Math.ceil(movies.length / 3))].map((_, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {movies.slice(index * 3, (index + 1) * 6).map((movie) => (
                      <Col xs={2} key={movie.imdbID}>
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="img-fluid h-100"
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SecondGallery;

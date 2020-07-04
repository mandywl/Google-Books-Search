import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";
// import { useStoreContext } from "../utils/GlobalState";
// import { SET_CURRENT_BOOK, ADD_FAVORITE } from "../utils/actions";

function Search(props) {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");
  // const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getFavouriteBooks(props.match.params.id)
      // .then((res) => dispatch({ type: SET_CURRENT_BOOK, book: res.data }))
      .catch((err) => console.log(err));
  }, []);

  const addFavorite = (book) => {
    API.saveFavouriteBook({
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      href: book.volumeInfo.infoLink,
      thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
    })
      // .then((result) => {
      //   console.log(result);
      //   dispatch({
      //     type: ADD_FAVORITE,
      //     favorites: result.data,
      //   });
      // })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <Jumbotron />
        <Row>
          <Col size="xs-3 sm-12">
            <Card title="Book Search">
              <Input
                name="RecipeSearch"
                onChange={handleInputChange}
                placeholder="Search For a Book"
              />
              <Button
                onClick={handleFormSubmit}
                size="btn-lg"
                type="success"
                className="input-lg"
              >
                Search
              </Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="xs-3 sm-12">
            <Card title="Result">
              {!books ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {books.map((book) => {
                    return (
                      <BookListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        description={book.volumeInfo.description}
                        href={book.volumeInfo.infoLink}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        onclick={() => addFavorite(book)}
                      />
                    );
                  })}
                </BookList>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;

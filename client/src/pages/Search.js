import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

function Search(props) {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");
  const [bookSaved, setBookSaved] = useState(false);

  useEffect(() => {
    API.getFavouriteBooks(props.match.params.id)
      .catch((err) => console.log(err));
  }, []);

  const getBook = id => {
    API.getFavouriteBook(id)
      .then((res) => {
        console.log("res is", res.data);
        if(res.data._id===id) {
          setBookSaved(true);
        } else {
          setBookSaved(false);
        }
      }
      )
      .catch((err) => console.log(err));
  };

  const addFavorite = (book) => {
    console.log(book.volumeInfo);
    API.saveFavouriteBook({
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      href: book.volumeInfo.infoLink,
      author: book.volumeInfo.authors[0],
      thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
    })
      .then((result) => {
        console.log(result.data._id);
        getBook(result.data._id);
      })
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
                        author={book.volumeInfo.authors}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        buttonName="Save"
                        className={bookSaved? ("disable"):("test")}
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

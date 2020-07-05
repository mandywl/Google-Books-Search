import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

function Favorites() {
  const [favourites, setFavourites] = useState([]);



  const getBooks = () => {
    API.getFavouriteBooks()
      .then((res) => setFavourites(res.data))
      .catch((err) => console.log(err));
  };

  const removeBooks = id => {
    API.deleteFavouriteBook(id)
      .then(() => {
        getBooks();
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <Container>
        <Jumbotron />
        <Row>
          <Col size="xs-3 sm-12">
            <Card title="Saved Books">
              {favourites.length<1 ? (
                <h1 className="text-center">No Favorites to Display</h1>
              ) : (
                <BookList>
                  {favourites.map((book) => {
                    return (
                      <BookListItem
                        key={book.title}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        href={book.href}
                        buttonName="Delete"
                        onclick={() => removeBooks(book._id)}
                        thumbnail={book.thumbnail}
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

export default Favorites;

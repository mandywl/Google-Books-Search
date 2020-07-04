import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import { useStoreContext } from "../utils/GlobalState";
import Card from "../components/Card";
// import {
//   SET_CURRENT_BOOK,
//   REMOVE_FAVORITE,
//   UPDATE_FAVORITES,
// } from "../utils/actions";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

function Favorites() {
  // const [state, dispatch] = useStoreContext();
  const [favourites, setFavourites] = useState([]);

  const getBooks = () => {
    API.getFavouriteBooks()
      .then((res) => setFavourites(res.data))

      .catch((err) => console.log(err));
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
              {!favourites ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {favourites.map((book) => {
                    return (
                      <BookListItem
                        key={book.title}
                        title={book.title}
                        description={book.description}
                        href={book.href}
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

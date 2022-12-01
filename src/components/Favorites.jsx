import { Col, Row, Button, Container } from "react-bootstrap";
import { House, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Cart now needs to read and write to the store, reading the value of cart.Data
// and being able to dispatch an action for removing an element from the cart

const Favorites = ({ cart = [] }) => {
  const cartData = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  return (
    <Container style={{ height: "80vh" }}>
      <Row>
        <Col sm={12}>
          {cartData.length > 0 ? (
            <h3 className="mt-5">Your favourite companies:</h3>
          ) : (
            ""
          )}
          <ul style={{ listStyle: "none" }}>
            {cartData.length > 0 ? (
              cartData.map((company, i) => (
                <li key={i} className="my-4 ">
                  <House className="mr-3" />
                  <Link to={`/${company.company_name}`}>
                    {company.company_name}
                  </Link>
                  <Button
                    className="ml-4"
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: i,
                      });
                    }}
                  >
                    <Trash />
                  </Button>
                </li>
              ))
            ) : (
              <h1 className="text-center mt-5">
                You have no companies selected
              </h1>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Favorites;

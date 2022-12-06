import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      <Row className="mx-0 mt-3">
        <Col xs={3}>
          <h5>Company</h5>
        </Col>
        <Col xs={6}>
          <h5>Position</h5>
        </Col>
        <Col xs={3}>
          <h5>Add</h5>
        </Col>
      </Row>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={6}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={3}>
          <Button
            variant="success"
            onClick={() => {
              dispatch(addToCartAction(data));
            }}
          >
            to Favs
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Job;

import { useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const jobsFromRedux = useSelector((state) => state.stock.stock);
  const areJobsError = useSelector((state) => state.stock.isError);

  const areJobsLoading = useSelector((state) => state.stock.isLoading);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {areJobsError ? (
            <Alert variant="danger" className="text-center">
              Whoopsie, something went wrong
            </Alert>
          ) : (
            <>
              {areJobsLoading ? (
                <Spinner variant="danger" animation="border" />
              ) : (
                jobsFromRedux.map((jobData) => (
                  <Job key={jobData._id} data={jobData} />
                ))
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

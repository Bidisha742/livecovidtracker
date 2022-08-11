import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json", {
        mode: "cors",
        "Content-Type": "application/json",
      });
      const jsonData = await res.json();
      const arrayOfData = [
        {
          title: "Our Country",
          color: "rgb(22, 83, 103)",
          count: "INDIA",
        },
        {
          title: "Total Confirmed",
          color: " rgb(116, 116, 209)",
          count: jsonData.statewise[0].confirmed,
        },
        {
          title: "Total Recovered",
          color: "rgb(12, 168, 108)",
          count: jsonData.statewise[0].recovered,
        },
        {
          title: "Total Active",
          color: "rgb(209, 116, 163)",
          count: jsonData.statewise[0].active,
        },
        {
          title: "Total Deaths",
          color: "rgb(189, 209, 116)",
          count: jsonData.statewise[0].deaths,
        },
        {
          title: "Last Updated",
          color: "rgb(196, 140, 19)",
          count: jsonData.statewise[0].lastupdatedtime,
        },
      ];
      setData(arrayOfData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <Container className="p-4 h-100">
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONA VIRUS TRACKER</h2>
      <Row className="h-50">
        {data.map((item) => (
          <Col className="h-50 my-4" md={6}>
            <Card className="h-100" style={{ backgroundColor: item.color }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.count}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

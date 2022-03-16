import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAds } from "../services/Ads";
import { Table } from "react-bootstrap";
const Advertisements = (props) => {
  const { ads } = props;
  console.log("props", ads);
  useEffect(() => {
    getAds().then((res) => {
      console.log("res", res);
      props.dispatch({
        type: "GET_ADS",
        payload: res.data.ads,
      });
    });
  }, []);
  return (
    <div className="appointments">
      <h4>Ads</h4>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ads?.map((ad, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{ad.title}</td>
                <td>{ad.createdAt.slice(0, 10)}</td>
                <td>{ad.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ...state, ads: state.ads };
};
export default connect(mapStateToProps)(Advertisements);

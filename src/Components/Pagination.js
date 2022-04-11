import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { getAppointments } from "../services/AppointmentService";
const Paginate = (props) => {
  const pages = props?.pages;
  console.log("Paginateeeee pages", pages);
  let active = 1;
  let items = [];
  const handleRequest = (num) => {
    getAppointments(num).then((res) => {
      let active = num;
      props.dispatch({
        type: "GET_APPOINTMENTS",
        payload: res.data.appointments,
      });
    });
  };
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleRequest(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};
export default connect(mapStateToProps)(Paginate);

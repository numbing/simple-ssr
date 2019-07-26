import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  rednderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}sadsa</li>;
    });
  }

  render() {
      console.log("admins",this.props.admins)
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.rednderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps =  state =>({
    admins: state.admins
})

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};

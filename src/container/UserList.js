import React, { Component } from "react";
import { usersRequestApiData , modalOpen , modalClose, showNext } from "../redux/action/action";
import { connect } from "react-redux";
import UserListPage from "../component/UserListPage";

class UserList extends Component {
  componentDidMount() {
    this.props.actionForShowList();
  }
  
  handleShow = list => {
  this.props.actionForShowModal(list)
  }
  handleClose = e => {
    this.props.actionForHideModal()
  }
  showNext = e => {
    if(this.props.count < 1000){
      const number= (this.props.count+50)
    this.props.actionForShowNext(number)
    }
     
  }
  render() {
    
    return (
      <div >
        <UserListPage userDetail = {this.props.userDetail} handleShow = {this.handleShow} show = {this.props.show} handleClose = {this.handleClose} user = {this.props.user} showNext = {this.showNext}
        count = {this.props.count} isLoading={this.props.isLoading}/>
        
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actionForShowList: data => dispatch(usersRequestApiData(data)),
    actionForShowModal: value => dispatch(modalOpen(value)),
    actionForHideModal: () => dispatch(modalClose()),
    actionForShowNext: value => dispatch(showNext(value))
  };
};
const mapStateToProps = state => {
  return {
    userDetail: state.userListReducer.userDetail,
    show: state.userListReducer.show,
    user:state.userListReducer.user,
    count:state.userListReducer.count,
    isLoading:state.userListReducer.isLoading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

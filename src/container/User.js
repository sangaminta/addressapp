import React, { Component } from "react";
import UserPage from "../component/UserPage";
import { connect } from "react-redux";
import { usersAgainRequestApiData } from "../redux/action/action";

class User extends Component {
  componentDidMount() {
    this.props.actionForShowList();
  }
  render() {
    const id = this.props.match.params.id;
    const userDetail = this.props.singleUser.results;
    const singleUser ="" ;
    if(this.props.singleUser && this.props.singleUser.results) {
        userDetail.forEach((value, key)=> {
            console.log(value.login.uuid  ,"llllllllllllllllllllll");
            if(value.login.uuid === id) {
                
                singleUser = value;
            // return{
            //     }
            }
            // return null;
            })
        }
        
    // }

    
    console.log(userDetail,'iiiiiiiiii')
    return (
      <div>
        <UserPage />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionForShowList: data => dispatch(usersAgainRequestApiData(data))
  };
};
const mapStateToProps = state => {
  return {
    singleUser: state.singleListReducer.singleUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

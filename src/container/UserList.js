import React, { Component } from 'react'
import{ usersRequestApiData } from '../redux/action/action';
import { connect } from 'react-redux';
import UserListPage from '../component/UserListPage';
class UserList extends Component {
    
    componentDidMount(){
        this.props.actionForShowList();
    }
    render() {
        console.log('USER-DATA' , this.props.userDetail)
        return (
            <UserListPage  userDetail={this.props.userDetail} />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    actionForShowList:(data) => dispatch(usersRequestApiData(data))
    }
}
const  mapStateToProps = (state) => {
    
    return {
        userDetail:state
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserList);


import React, { Component } from "react";
import "../style/userlistpage.scss";
import Modal from "react-bootstrap/Modal";
import { Button,Spinner } from "react-bootstrap";

class UserListPage extends Component {
  render() {

    const { userDetail, user ,isLoading } = this.props;

    return (
      <div >
        <div>
          <nav className="navbar navbar-dark " id = 'nav'>
            
          </nav>
          
        </div>
        <div className = 'mainPage' >
          
          {userDetail &&
            userDetail.results.slice(0, this.props.count).map((list, index) => {
              return (
                <div key={index} className = 'single-user'>
                  <img className="image" src={list.picture.large} />
                  <div className="user-info">
                    <span>
                      {list.name.title} {list.name.first}
                    </span>
                    <br />
                    <span> {list.name.last} </span> <br />
                    <span> {list.login.username} </span> <br />
                    <span>{list.email}</span>
                  </div>
                  <Button
                    
                    onClick={() => this.props.handleShow(list)}
                    className="view"
                  >
                    Launch demo modal
                  </Button>
                </div>
              );
            })}
        </div>
        <button className="next-page" onClick={this.props.showNext}>
          load more
        </button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {}
            
            {user && <div className='detail'>
            <span>Street : {user.location.street}</span><br/>
            <span>City : {user.location.city}</span><br/>
            <span>State : {user.location.state}</span><br/>
            <span>Postcode: {user.location.postcode}</span><br/>
            <span>Phone: {user.phone}</span><br/>
            <span>Nationality: {user.nat}</span><br/>
            </div>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {isLoading ? 
            <div className='spin'>
            <Spinner animation="border" variant="primary" />
          </div>:''}
      </div>
    );
  }
}

export default UserListPage;

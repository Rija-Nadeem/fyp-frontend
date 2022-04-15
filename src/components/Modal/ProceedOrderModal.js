import React, {Component} from 'react';
import { Label } from 'react-bootstrap';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios'
import './ProceedOrderModal.css'

class ProceedOrderModal extends Component{
    constructor(props){
        super(props);
        this.state={
          msg:''
        }
    }
    ResponseFormSubmitHandler=()=>{
      const response={
        responseMessage:this.state.msg,
        requestedItem_id:this.props.reqId,
        donor_id:localStorage.getItem('loginId')
      }
      console.log('data of response', response)
      axios.post('/api/storeResponse',response)
      .then(res=>{
        console.log('success', res)
        this.props.onHide()
      })
      .catch(err=>console.log('error',err))
    }
    responseMsgHandler=(event, fieldName)=>{
      this.setState({[fieldName]: event.target.value });
      // console.log(event.target.value);
  };

    render(){
        return(
            <Modal
      {...this.props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Proceed Donation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form action="/" noValidate>
          <div className="form-group">
              <label htmlFor="requestResponse" >Response Message (optional)</label>
              <textarea name="requestResponse" 
                      rows="10"
                      // cols="50"
                      value={this.state.msg}  
                      onChange={event=> this.responseMsgHandler(event, "msg")}  
                      id="requestResponse" 
                      placeholder="Send a message to NGO"
                      className="form-control">
              </textarea>
          </div> 
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
        <Button variant='success' onClick={this.ResponseFormSubmitHandler}>Submit</Button>
        {/* <Button variant="primary">Submit</Button> */}
      </Modal.Footer>
    </Modal>
        );
    }
}
export default ProceedOrderModal;
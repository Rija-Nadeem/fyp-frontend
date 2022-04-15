import React from 'react';
import ProceedOrderModal from '../Modal/ProceedOrderModal';

class RequestCard extends React.Component{
    state = {
        addModalShow: false,
    };
    render() {
        let addModalClose=()=> this.setState({addModalShow:false});
        return(
        <div>
            <div class="card-body ngo-request-card-body">
            <img width="200px" height="200px" style={{marginBottom:'10px', objectFit:'cover'}} src={this.props.image} alt="..."/>
                <h5 class="card-title ngo-request-card-title">{this.props.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted ngo-request-card-subtitle">{this.props.ngoname}</h6>
        <p class="card-text ngo-request-card-text">{this.props.des}</p>
        <h6 className="reply-date card-subtitle mb-2 text-muted donor-reply-card-subtitle">{this.props.date}</h6>
                <div class="text-right"><button onClick={()=>this.setState({addModalShow:true})} class="btn btn-primary .ngo-request-card-btn" style={{fontWeight:"bold", padding: "10px 1.25rem"}}>Donate NOW</button></div>
            </div>
            
            <ProceedOrderModal
                show={this.state.addModalShow}
                reqId={this.props.reqId}
                onHide={addModalClose}
            />
        </div>
        );

    }
}
export default RequestCard;
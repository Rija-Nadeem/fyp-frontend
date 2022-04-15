import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card'
// import {CardDeck} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'



import "./CardsAdminPanel.css";

import "bootstrap/dist/css/bootstrap.min.css";





class CardsAdminPanel extends Component{
    constructor() {
        super();
       
        this.state = {
          userClick: false,
           
//****THIS arrayforcards is for testing, its contents will be replaced by actual values from DATABASE***
          arrayforcards : [
            {
              id:'1',
              title: 'Pending Requests from Donors',
              image: 'https://thumbs.dreamstime.com/b/clothes-donation-cute-hand-drawn-woman-girl-holding-boxes-vector-illustration-147311307.jpg',
              description: 'we are new ngo and we managed to make 100 people happy with this platform thanks here is a pic'
            },
            {
              id:'2',
              title: 'Pending Requests from NGOs',
              image: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/27852537/original/c25b4307292b75a5e9c2db717c866801fae4c177/help-poor-peoples-of-azad-kashmir-with-your-donations.jpg',
              description: 'my name is abc i recovered by your ddonations keep doanting thanks'
            },
            {
              id:'3',
              title: 'Partner NGO Records',
              image: 'https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Organization/Our%20Insights/Leadership%20and%20Organization%20Blog/The%20critical%20importance%20of%20the%20HR%20business%20partner/08EngineeringHRBPstemplateenhancedheroOriginal.jpg',
              description: 'You saved a life. What is Lorem Ipsum it is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
            },
            {
              id:'4',
              title: 'NGO Join Requests ',
              image: 'https://cdn.lynda.com/course/612174/612174-637286221687605579-16x9.jpg',
              description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
            },
            {
              id:'5',
              title: 'User Feedback',
              image: 'https://previews.123rf.com/images/makc76/makc761804/makc76180400013/98562149-rating-satisfaction-feedback-in-form-of-emotions-excellent-good-normal-bad-awful-vector-illustration.jpg',
              description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
            },
            {
              id:'6',
              title: 'Statistics',
              image: 'https://blackpinkupdate.com/wp-content/uploads/2018/07/cover-blackpink-update-youtube-statistic-3.jpg',
              description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
            },
          ]

//****THIS arrayforcards is for testing, its contents will be replaced by actual values from DATABASE***
        };
    }


navigateFromCard(id) {
   console.log(id);
  
   let path ; 
 if(id==='1'){
    path = `/adminPanelDonorRequests`; 
 }
 else if (id==='2'){
   path = `/adminPanelNGORequests`; 
  }
  else if (id==='3'){
    path = `/adminPanelNGORecords`; 
 }
  else if (id==='4'){
    path = `/adminPanelNGOJoin`; 
}
else if (id==='5'){
  path = `/adminPanelUserFeedback`; 
}
else if (id==='6'){
  path = `/adminPanelStatistics`; 
}

      this.setState({userClick:true, goto: path})
}





    render(){
      if (this.state.userClick === true) {
        // return <Redirect to={this.state.goto} /> 
        return <Redirect to={this.state.goto} push/>
    }
        return(

                            <Card className="carddeckclass"    >
                              {this.state.arrayforcards.map(data => (
                      
                              <div className="">                                             

                                    <Card className="bg-dark text-white  basic-size" >
                                    
                                      <Card.Img src={data.image} alt="Card image" className="img-in-card-admin cardimgsize" />
                                      <Card.ImgOverlay className="img-in-card-admin allowscroll" id="style-1" >
                                        <Card.Title>{data.title}</Card.Title>
                                        <br></br>
{/* 
                                        <Card.Text className="img-in-card-admin" style={{align : "justify"}} >
                                        {data.description}
                                            </Card.Text> */} 

                                      
                                      <Button variant="primary" className="bold-text" onClick={() => this.navigateFromCard(data.id)}> {this.props.buttontext} </Button>
                                            
                                      </Card.ImgOverlay>
                                  </Card>

                              </div>
                              ) )}
                              </Card>

                              


         

            );
        }
    
    
    }
    
    
    
    
    
    export default CardsAdminPanel;
    
    

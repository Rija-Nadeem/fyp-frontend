import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import history from "./history";
import history from './assets/history';
import MainPage from './components/MainPage/MainPage';
import AboutUs from './components/AboutUs/AboutUs';
import LoginForm from './components/Login/LoginForm';
import Help from './components/Help/Help';
import Signup from './components/Signup/Signup';
import DonationForm from './components/DonationForm/DonationForm';
import Profile from './components/Profile/Profile';
import ViewStory from './components/ViewStory/ViewStory';
import SuccessStoryForm from './components/SuccessStoryForm/SuccessStoryForm';
import AskDonationForm from './components/AskDonationForm/AskDonationForm';
import ManageDonations from './components/ManageDonations/ManageDonations';
import ManageStories from './components/ManageStories/ManageStories';
import DonorReplies from './components/DonorReplies/DonorReplies';
import NGORequests from './components/NGORequests/NGORequests';
import GoogleMap from './components/GoogleMap/GoogleMap';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminPanelNGORecords from './components/AdminPanelNGORecords/AdminPanelNGORecords';
import AdminPanelNGOJoin from './components/AdminPanelNGOJoin/AdminPanelNGOJoin'; 
import AdminPanelDonorRequests from './components/AdminPanelDonorRequests/AdminPanelDonorRequests'; 
import AdminPanelNGORequests from './components/AdminPanelNGORequests/AdminPanelNGORequests'; 
import AdminPanelUserFeedback from './components/AdminPanelUserFeedback/AdminPanelUserFeedback';
import NGOStatusPending from './components/NGOStatusPending/NGOStatusPending'
import NGOStatusRejected from './components/NGOStatusRejected/NGOStatusRejected'
import AdminPanelStatistics from './components/AdminPanelStatistics/AdminPanelStatistics';


const App=()=>{ 
    return(
        <Router>
        <Switch>
           <Route path="/" exact component={MainPage}/>
           <Route path="/viewStory" exact component={ViewStory}/>
           <Route path="/signup" exact component={Signup}/>
           <Route path="/aboutUs" component={AboutUs}/>
           <Route path="/login" component={LoginForm}/>
           <Route path="/help" component={Help}/>
           <Route path="/donationForm" component={DonationForm}/>
           <Route path="/adminPanelStatistics" component={AdminPanelStatistics} />
           <Route path="/profile" component={Profile}/>
           <Route path="/ngoRequests" component={NGORequests}/>
           <Route path="/googleMap" component={GoogleMap}/>
           <Route path="/adminPanelMain" component={AdminPanel}/>
           <Route path="/adminPanelDonorRequests" component={AdminPanelDonorRequests}/>
           <Route path="/adminPanelNGORequests" component={AdminPanelNGORequests}/>
           <Route path="/adminPanelNGORecords" component={AdminPanelNGORecords}/>
           <Route path="/adminPanelNGOJoin" component={AdminPanelNGOJoin}/>
           <Route path="/adminPanelUserFeedback" component={AdminPanelUserFeedback}/>
           <Route path="/ngostatuspending" component={NGOStatusPending}/>
           <Route path="/ngostatusrejected" component={NGOStatusRejected}/>

           <Route path="/manage-donations"
                component={() => <ManageDonations  
                                    pageheading={"Manage Donations"}  />}/>

            <Route path="/askdonation" 
                    component={() => <AskDonationForm
                            formheading={"Ask for a Donation!"}
                            descplaceholder={"Describe the need in detail" }
                            buttontext={"Submit Request"}
                            iconimageurl={"../../images/pngdonat.png"} 
                            bgclass={"my-background-4"}
                            />}/>

            <Route path="/donor-replies" 
                    component={DonorReplies}/>   

            <Route path="/manage-stories"
                    component={() => <ManageStories  
                                        pageheading={"Manage Stories"}  />}/>
            
            <Route path="/addstory" 
                    component={() => <SuccessStoryForm  
                                    formheading={"Publish a life-changing Story!"}
                                    descplaceholder={"Add Story Description" }
                                    buttontext={"Upload Story" }
                                    iconimageurl={"../../images/icondiam.png"}
                                    bgclass={"my-background-3"} 
                                  />}/>
            

       </Switch>
       </Router>
    );
};
export default App;
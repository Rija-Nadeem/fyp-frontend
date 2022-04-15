import React from 'react';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import dummy from '../../images/grayscale-kid.jpg'
import './NGORequests.css';
import axios from 'axios';
// import ProceedOrderModal from '../Modal/ProceedOrderModal';
import RequestCard from './RequestCard';
import { filter } from 'lodash';

class NGORequests extends React.Component {
    componentDidMount(){
        axios.get('/api/getRequestedItemsByStatus/approved')
        .then(res=>{
            axios.get('/api/getUsers/ngo')
            .then(list=>{
                // console.log('ngo list',list.data.users)
                this.setState({ngoList:[...list.data.users]})
                // console.log(this.state)
        })
            .catch(error=>console.log(error));
     
                this.setState({requests:[...res.data]})
          
       
            // console.log(this.state)
    })
        .catch(err=>console.log(err));
 
      
    }
    state = {
        siderDrawerOpen: false,
        donor: true,
        selectedNgo: '',
        selectedCategory:'',
        requests:[],
        ngoList:[],
        // addModalShow: false,
    };
    filteredContent=()=>{
        console.log('ngo: ', this.state.selectedNgo, 'category: ', this.state.selectedCategory)
        if(this.state.selectedCategory && this.state.selectedNgo){

            axios.get(`/api/getRequestedItemsByNgoId/${this.state.selectedNgo}`)
            .then(res=>{
                const newList= res.data.filter(item=>item.category===this.state.selectedCategory)
                this.setState({requests:[...newList]})
                // console.log('filtered req with ngo n category', newList)
        })
            .catch(error=>console.log(error));
        }else if(this.state.selectedNgo && !(this.state.selectedCategory)){
            axios.get(`/api/getRequestedItemsByNgoId/${this.state.selectedNgo}`)
            .then(res=>{
                // const newList= res.data.filter(item=>item.category===this.state.selectedCategory)
                this.setState({requests:[...res.data]})
                // console.log('filtered req with ngo', res.data)
        })
            .catch(error=>console.log(error));
        }else if(!(this.state.selectedNgo) && this.state.selectedCategory){
            axios.get('/api/getRequestedItemsByStatus/approved')
            .then(res=>{
                const newList= res.data.filter(item=>item.category===this.state.selectedCategory)
                this.setState({requests:[...newList]})
                // console.log('filtered req with category', newList)
            })
            .catch(err=>console.log(err))
        }else{
            axios.get('/api/getRequestedItemsByStatus/approved')
            .then(res=>{
                // const newList= res.data.filter(item=>item.category===this.state.selectedCategory)
                this.setState({requests:[...res.data]})
                // console.log('filtered req with nothing', res.data)
            })
            .catch(err=>console.log(err))
        }
    }
    drawerToggleHandler = () => {
        this.setState(prevState => {
            return { siderDrawerOpen: !prevState.siderDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ siderDrawerOpen: false });
    };
    // filterByName=()=>{
    //     axios.get(`/api/getRequestedItemsByNgoId/${this.state.selectedNgo}`)
    //         .then(res=>{
    //             const newList= res.data.filter(item=>item.category===this.state.selectedCategory)
    //             // this.setState({requests:[...res.data]})
    //             console.log('filtered req', newList)
    //     })
    //         .catch(error=>console.log(error));
    // }
    // filterByAll=()=>{
    //     axios.get('/api/getRequestedItemsByStatus/approved')
    //     .then(res=>{ this.setState({requests:[...res.data]}) })
    //     .catch(err=>console.log(err))
    // }
    // filterCategory=(category)=>{
    //     const newList= this.state.requests.filter((item)=>item.category === category)
    //   this.setState({requests:[...newList]})
    // }
    render() {
        let backdrop;
        if (this.state.siderDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />;
        }
        // let addModalClose=()=> this.setState({addModalShow:false});
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleHandler} about={true} />
                <SideDrawer about={true} show={this.state.siderDrawerOpen} />
                {backdrop}
                <div className="ngo-main-div">
                    <div className="filter-area">
                        <h2 className="filter-heading">Filter By NGO:</h2>
                        <ul className="filter-options">
                        
                            <li><a
                            style={{backgroundColor: this.state.selectedNgo===''?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedNgo:''},()=>this.filteredContent())}}>All</a></li>
                            {/* {this.state.ngoList.map((ngo)=>{
                                return(
                 
                                    <li><a
                                    style={{backgroundColor: this.state.selectedNgo===ngo.id?'#579df8':'#4a89dc'}} onClick={()=>{
                                        this.setState({selectedNgo: ngo.id},()=>this.filteredContent())
                                        
                                
                                    }
                                    }>{ngo.name}</a></li>
                                );
                            })} */}

                            <li><a >Human Rights Organization </a></li>
                            <li><a >Helping Hands</a></li>
                            <li><a >Justice For You</a></li>
                            <li><a >Little Care</a></li>
                            <li><a >Speak For Change</a></li>
                            <li><a >We Work Together</a></li>
                            
                        </ul>
                        <h2 className="filter-heading">Filter By Category:</h2>
                        <ul className="filter-options">
                            <li><a
                            style={{backgroundColor: this.state.selectedCategory===''?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory:''},()=>this.filteredContent())}}>All</a></li>
                            <li><a 
                            style={{backgroundColor: this.state.selectedCategory==='Clothes'?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory: 'Clothes'},()=>this.filteredContent())}}>Clothes</a></li>
                            <li><a
                            style={{backgroundColor: this.state.selectedCategory==='Medicines'?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory: 'Medicines'},()=>this.filteredContent())}}>Medicines</a></li>
                            <li><a
                            style={{backgroundColor: this.state.selectedCategory==='Toys'?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory: 'Toys'},()=>this.filteredContent())}}>Toys</a></li>
                            <li><a
                            style={{backgroundColor: this.state.selectedCategory==='Books'?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory: 'Books'},()=>this.filteredContent())}}>Books</a></li>
                            <li><a
                            style={{backgroundColor: this.state.selectedCategory==='Food'?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory: 'Food'},()=>this.filteredContent())}}>Food</a></li>
                            <li><a
                            style={{backgroundColor: this.state.selectedCategory==='School Fees'?'#579df8':'#4a89dc'}}
                            onClick={()=>{this.setState({selectedCategory: 'School Fees'},()=>this.filteredContent())}}>School Fees</a></li>
                         
                            
                        </ul>
                    </div>
                    <div class="request-area">
                        <h3 className="request-area-heading">NGO'S REQUESTS</h3>
                        {this.state.requests.map(request=>{
                            return(
                                <RequestCard
                                image={`http://localhost:8000/storage/cover_images/${request.image[0].imageurl}`}
                                title={request.title}
                                reqId={request.requestedItem_id}
                                ngoname={request.ngo[0].name}
                                des={request.description}
                                date={request.created_at}
                                />
                            );
                        })}
                        <RequestCard
                                image={dummy}
                                title={'Title'}
                                reqId={1}
                                ngoname={'NGO Name'}
                                des={'Descrption here...'}
                                date={'12 March 2021'}
                                />
                        {/* <div style={{display:'flex',  flexWrap:'wrap'}}>

                         <RequestCard
                                image={dummy}
                                title={'Title'}
                                reqId={1}
                                ngoname={'NGO Name'}
                                des={'Descrption here...'}
                                date={'12 March 2021'}
                                />
                                 <RequestCard
                                image={dummy}
                                title={'Title'}
                                reqId={1}
                                ngoname={'NGO Name'}
                                des={'Descrption here...'}
                                date={'12 March 2021'}
                                />
                                 <RequestCard
                                image={dummy}
                                title={'Title'}
                                reqId={1}
                                ngoname={'NGO Name'}
                                des={'Descrption here...'}
                                date={'12 March 2021'}
                                />
                                 <RequestCard
                                image={dummy}
                                title={'Title'}
                                reqId={1}
                                ngoname={'NGO Name'}
                                des={'Descrption here...'}
                                date={'12 March 2021'}
                                />
                        </div> */}
                       
                    </div>
                </div>
                <Footer/>
            </div>
        );
        }
}
export default NGORequests;
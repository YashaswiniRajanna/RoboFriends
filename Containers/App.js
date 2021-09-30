import React,{Component} from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
	constructor(){
	super()
	this.state={
		 robots: [],
	     searchfield:''
	     }	
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>{this.setState({robots:users})});

	}
    onSearchChange=(event)=> {
    	this.setState({searchfield:event.target.value})	
    }

	render(){
		const{robots,searchfield}=this.state;
    	 const filteredrobots=robots.filter(robot=>{
    	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	    })
     return !robots.length?
    	<h1> Loading...</h1>:
        (
	       <div  className='tc'>
		     <h1 className='f1'>MY❤ ROBOFRIENDS🤖</h1>
		      <SearchBox searchChange={this.onSearchChange}/>
		      <Scroll>
		          <ErrorBoundary>
		      		    <CardList robots={filteredrobots} />
		      	  </ErrorBoundary>
		      </Scroll>

		  </div>
		);
	}
   }
export default App;
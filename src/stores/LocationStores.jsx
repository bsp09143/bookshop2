import Alt from '../alt';
import LocationActions from '../actions/LocationActions.jsx';


class LocationStores
{
    
    constructor()
    {        
        this.locations = [];
        this.bindListeners({
            handleUpdateLocation: LocationActions.UPDATE_LOCATIONS,          
            handleRemoveItem:LocationActions.REMOVE_ITEM,
            handleAddItem:LocationActions.addItem
        });
        this.state = {data:[],newLocationName:"",counter : 3};
    }

    handleUpdateLocation(locations)
    {
        //this.locations = locations;
        // locations = [
        //     {id: 0, name:'Mumbai'},
        //     {id: 1, name:'Pune'},
        //     {id: 2, name:'Jalgaon'},
        //     {id: 3, name:'New Bombay'},
        // ];        
        //this.setState({data: this.locations});
        fetch(`http://localhost:3000/books`)
        .then(result=>result.json())
        .then(items=>this.setState({data:items}));

        return true;
    }

    async handleRemoveItem(listData)
    {        
        // let array = this.state.data;    
        // let index = array.indexOf(listData.data);        
        // array.splice(index, 1);              
        // this.setState({ data: array});     
        
        const response = await fetch('http://localhost:3000/books/'+listData.data.id, {
        method: 'DELETE'
        });
        this.handleUpdateLocation();    
    }
    
    async handleAddItem(newLocationName)
    {       
        
        this.state.counter = this.state.counter +1;
        // let oldArray = this.state.data;           
        // let newArray = {data:[...oldArray,{id:this.state.counter, name:newLocationName.newLocationName}]};
        // this.setState({ data: newArray.data});                        
        const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify( {id:this.state.counter, name: newLocationName.newLocationName })
        }); 
        
        if (response.status === 201) 
        {          
          console.log('Success ' + response.status);
          this.handleUpdateLocation();         
          return;
        }
        
        
    }

}

export default Alt.createStore(LocationStores,'LocationStores');
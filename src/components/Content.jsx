import React, {Component} from 'react';
import LocationStore from '../stores/LocationStores.jsx';
import LocationActions from '../actions/LocationActions.jsx';
import "../components/Content.css";
import { Label } from 'react-bootstrap';
import { Button,Form, Input, FormModal,FormInline, FormGroup, PageHeader, FormControl, Grid, Row, Col} from 'react-bootstrap';
import MultiSelectStaticComponent from './MultiSelectStaticComponent.jsx';

class Content extends Component
{
    constructor()
    {        
        super();
        this.state= {data:LocationStore.getState().data,newLocationName:''};
        this.onChange = this.onChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddLocation = this.handleAddLocation.bind(this);        
    }
    
    componentDidMount()
    {        
        LocationStore.listen(this.onChange);
        LocationActions.updateLocations();
    }

    componentWillUnmount()
    {
        
        LocationStore.unlisten(this.onChange);
    }

    onChange()
    {
        
        this.setState({data:LocationStore.getState().data});
    }

    removeItem(currList) 
    {    
            
        LocationActions.removeItem(currList);
    }

    handleChange(e) 
    {        
        this.setState({ newLocationName:e.target.value });
    }

    handleAddLocation()
    {
        
        LocationActions.addItem( this.state.newLocationName );
    }
    
    render()
    {
        const formInstance = (            
            <Col xs={12} md={12} className="removeBootPad">
            {
                <Form inline className="subContainer">                    
                    <Col xs={12} md={2}>                    
                        <FormGroup>
                            <Button  onClick={this.handleAddLocation} className="btn-custom" bsSize="small">Add Location</Button>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={7}>
                        <FormGroup controlId="formHorizontalName">
                            <FormControl  type="text" value={this.state.newLocationName} placeholder="Enter text" onChange={this.handleChange}/>                 
                        </FormGroup>
                    </Col>                  
                </Form>                          
            }           
            <div> 
                <MultiSelectStaticComponent />
            </div>      
            <div className="bhairav">
                    <h1 >ABCD</h1>                    
            </div>      
            </Col>               
        );        
        const listInstance = (
                this.state.data.map((currLocation) =>{
                    return (
                        <h3 key = {currLocation.id} >
                                <Label onClick={this.removeItem.bind(null,currLocation)}  bsStyle="info">  {currLocation.name}</Label>
                        </h3>
                    );
                })            
        );
        return (
            <div>
                {listInstance}
                {formInstance}
            </div>
        )
    }
}

export default Content;
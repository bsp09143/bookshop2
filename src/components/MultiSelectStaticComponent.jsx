import React from 'react';
//import {Multiselect} from 'react-bootstrap-multiselect';
var Multiselect = require('react-bootstrap-multiselect');

class MultiSelectStaticComponent extends React.Component
{
    constructor(){
        super();
        this.state = {myData:[{value:'One',selected:true},{value:'Two'}]};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {           
        if (this.refs.myRef)    
        {            
            console.log("Value:"+e[0].value);
            console.log("Selected:"+e[0].selected);            
            console.log("-------------------------------------")
        }
    }

    render(){
        return(
            <div ref="myRef">
                <Multiselect onChange={this.handleChange} ref="myRef" data={this.state.myData} multiple />
            </div>
        );
    }
}

export default MultiSelectStaticComponent;
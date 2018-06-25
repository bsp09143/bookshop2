import Alt from '../alt';

class LocationActions
{
    updateLocations(locations)
    {
        
        return this.setState = ({data:locations});
    }
    removeItem(itemData)
    {       
        
        return this.setState = ({data:itemData});
    }
    addItem(newLocationName)
    {
        
        return this.setState = ({newLocationName:newLocationName});
    }
}
export default Alt.createActions(LocationActions);
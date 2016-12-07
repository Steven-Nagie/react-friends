import React from "react";
import Friend from "./Friend.js";
import friends from "../friends.js";

class FriendsList extends React.Component {
    //This function is constructing the props for this component. It initializes state, so that there's something there. Not necessary if we aren't going to bother initializing state or bind methods to a state property.
    constructor(props) {
      //As I understand, super is basically assigning the this keyword to props, so we can change the state.
      super(props);

      this.state = {
        searchText: "",
        orderBy: "name",
        order: "ascending"
      }
    }

    // "Field" is the state property containing the value we're interested in. Event.target.value is the value contained within that field, as an event occurs, for instance typing a letter into the search box.
    handleChange(field, event) {
      this.setState( { [ field ]: event.target.value});
    }

    render() {
        const friendsList = friends
        .filter (friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1)
        .map(friend => (
          <Friend
            key={ friend.$$hashkey }
            currentLocation={ friend.current_location || {} }
            friendCount={ friend.friend_count }
            name={ friend.name }
            pictureUrl={ friend.pic_square }
            status={ friend.status ? friend.status.message : "" }
          />
        ));
        return (
  <div>
    <form className="form-inline searchForm" role="form">
        <div className="form-group">

            <input
              className="form-control"
              onChange={ this.handleChange.bind( this, "searchText" )}
              placeholder="Search For Friends"
              value={ this.state.searchText} />

            <select className="input-medium" value={this.state.orderBy}
            onChange={this.handleChange.bind(this, "orderBy")}>
                <option>Name</option>
                <option>#Friends</option>
            </select>

            <select className="input-medium" value={this.state.order}
            onChange={this.handleChange.bind(this, "order")}>
                <option>Descending</option>
                <option>Ascending</option>
            </select>

        </div>
    </form>

    <ul>
      { friendsList }
    </ul>
</div>
        )
    }
}

export default FriendsList

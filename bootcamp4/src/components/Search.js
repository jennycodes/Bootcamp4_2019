import React from 'react';

class Search extends React.Component {
		 // Here you will need to update the value of the filter with the value from the textbox
	filterUpdate() {
		const val = this.searchValue.value
		this.props.filterUpdate(val)
	}
	render() {
		
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		console.log("reaches Search.js")
		return (
			<input type="text" placeholder="Type to Filter" value={this.props.filterText} onChange={this.filterUpdate.bind(this)} ref={(value) => {
				this.searchValue = value
			}}/>
		);
	}
}
export default Search;

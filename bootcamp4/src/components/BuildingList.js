import React from 'react';

class BuilingList extends React.Component {

	render() {
		console.log('reaches BuildingList.js', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data.filter(directory => {
			console.log("my filter text", filterText)
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 
		})
		.map(directory => {
		
			return (
				<tr key={directory.id}>
					<td onClick={() => selectedUpdate(directory.id)}>{directory.code} </td>
					<td onClick={() => selectedUpdate(directory.id)}> {directory.name} </td>
				</tr>
				
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;

//onClick={selectedUpdate.bind(this.directory.id)}
//<tr key={directory.id}>
{/* <td >{directory.code} </td>
<td > {directory.name} </td>
</tr> */}
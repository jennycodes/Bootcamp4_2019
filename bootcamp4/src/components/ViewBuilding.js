import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props

		console.log("reaches ViewBuilding.js", selectedBuilding)

		const building = data[selectedBuilding];
		const { name, coordinates, address } = building
		console.log("please work:'(", name, coordinates, address)
		// const buildingList = data.map(id => {
		// 	const { name, coordinates, address} = data[id]
		// 	console.log("information about selectedBuilding", name, coordinates, address)
		// 	return (

		// 		<li 
		// 			key={name}
		// 			className={coordinates}>
		// 			{address} 
		// 		</li>
		// 	)
		// })




	return (
		<div>
			<li
				key={name}
				className={coordinates}
			>
				{address !== undefined ? address : "N/A"}
			</li>
		</div>
	)
	}
}
export default ViewBuilding;

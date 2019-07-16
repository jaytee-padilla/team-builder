import React from 'react'

export default function TeamList(props) {
	return (
		<div className="team-list">
			{props.teamList.map(teamMember => {
				return (
					<div>
						<p>Name: {teamMember.name}</p>
						<p>Email: {teamMember.email}</p>
						<p>Role: {teamMember.role}</p>
						<button disabled={props.isEditing} onClick={(event) => props.updateHandler(event, teamMember)}>Update</button>
						<hr />
					</div>
				)
			})}
		</div>
	)
}

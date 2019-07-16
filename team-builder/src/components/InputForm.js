import React from 'react';

export default function InputForm(props) {
	return (
		<div className="input-form">
			<form onSubmit={props.submitHandler}>
				<label>
					Name:
					<input type="text" name="name" placeholder="Name" value={props.teamMember.name} onChange={props.onChangeHandler} />
				</label>
				<label>
					Email:
					<input type="email" name="email" placeholder="Email" value={props.teamMember.email} onChange={props.onChangeHandler} />
				</label>
				<label>
					Role:
					<input type="text" name="role" placeholder="Role" value={props.teamMember.role} onChange={props.onChangeHandler} />
				</label>

				<button>Add Member</button>
			</form>
		</div>
	)
}

import React, {useState, useEffect} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TeamList from './components/TeamList';
import uuid from 'uuid';

function App() {
	const [teamMember, setTeamMember] = useState({
		name: "",
		email: "",
		role: "",
		id: uuid.v4()
	});

	const [teamList, setTeamList] = useState([
		{
			name: "Jaytee",
			email: "Jaytee@Lambda.com",
			role: "Front End Developer",
			id: uuid.v4()
		},
	]);

	const [memberToEdit, setMemberEdit] = useState({});
	const [isEditing, setIsEditing] = useState(false);

	const submitHandler = event => {
		event.preventDefault();

		setTeamList([...teamList, teamMember]);
		setTeamMember({
			name: "",
			email: "",
			role: "",
			id: uuid.v4()
		});
		setIsEditing(false);
	}

	const onChangeHandler = event => {
		setTeamMember({...teamMember, [event.target.name]: event.target.value});
	}

	const updateHandler = (event, memberClicked) => {
		event.preventDefault();
		setIsEditing(!isEditing);

		setMemberEdit(memberClicked);
	}

	useEffect(() => {
		setTeamMember({memberToEdit});
	}, [memberToEdit]);

  return (
    <div className="App">
      <InputForm teamMember={teamMember} submitHandler={submitHandler} onChangeHandler={onChangeHandler} memberToEdit={memberToEdit} isEditing={isEditing} updateHandler={updateHandler} />
			<TeamList teamList={teamList} updateHandler={updateHandler} isEditing={isEditing} />
    </div>
  );
}

export default App;

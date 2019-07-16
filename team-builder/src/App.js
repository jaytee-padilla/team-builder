import React, {useState} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TeamList from './components/TeamList';

function App() {
	const [teamMember, setTeamMember] = useState({
		name: "",
		email: "",
		role: ""
	});

	const [teamList, setTeamList] = useState([
		{
			name: "Jaytee",
			email: "Jaytee@Lambda.com",
			role: "Front End Developer"
		},
	]);

	const [memberToEdit, setMemberEdit] = useState({});

	const submitHandler = event => {
		event.preventDefault();

		setTeamList([...teamList, teamMember]);
		setTeamMember({
			name: "",
			email: "",
			role: ""
		});
	}

	const onChangeHandler = event => {
		setTeamMember({...teamMember, [event.target.name]: event.target.value});
	}

	const updateHandler = (event, teamMember) => {
		event.preventDefault();

		console.log(teamMember);
	}

  return (
    <div className="App">
      <InputForm teamMember={teamMember} submitHandler={submitHandler} onChangeHandler={onChangeHandler} memberToEdit={memberToEdit} />
			<TeamList teamList={teamList} updateHandler={updateHandler} />
    </div>
  );
}

export default App;

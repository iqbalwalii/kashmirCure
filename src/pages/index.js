import Dashboard from '../Components/Dashboard';
import Consultations from '../Components/Consultations';
import Side from '../Components/Navigator';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Doctors from '../Components/Doctors';
import Patients from '../Components/Patients';
import Reviews from '../Components/Reviews';
import Device from '../Components/Device';

async function getDocs() {
	try {
		fetch('https://kashmircure.herokuapp.com/api/doctors')
			.then((result) => result.json())
			.then((result) => console.log('first', result))
			.catch((err) => console.log('inside err', err));
	} catch (error) {
		console.log('http errr: >>', error);
	}
}



function Home(props) {
	getDocs()
	return (
		<>
			<Device />
			<Row className='main'>
				<Col xs={12} sm={2}>
					<Side />
				</Col>
				<Col xs={12} sm={10}>
					{props.tab === 'dashboard' ? (
						<Dashboard />
					) : props.tab === 'app' ? (
						<Consultations />
					) : props.tab === 'doctor' ? (
						<Doctors />
					) : props.tab === 'patient' ? (
						<Patients />
					) : (
						<Reviews />
					)}
				</Col>
			</Row>
		</>
	);
}
const mapStateToProps = (state) => {
	return { ...state };
};
export default connect(mapStateToProps)(Home);

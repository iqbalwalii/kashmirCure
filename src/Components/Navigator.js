import React from 'react';
import Sidebar from '../styles/Sidebar.module.css';
import {
	GridFill,
	BriefcaseFill,
	PersonFill,
	PeopleFill,
	Journal,
	ArrowBarRight,
	StarFill,
} from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
const Navigator = (props) => {
	const onTabHandler = (value) => {
		props.dispatch({
			type: 'SET_ACTIVE_TAB',
			payload: value,
		});
	};
	// useEffect(() => {
	//   console.log(props);
	// }, [props.tab]);
	return (
		<div className={Sidebar.main}>
			<h3>Kashmir Cure</h3>
			<ul>
				<li onClick={() => onTabHandler('dashboard')}>
					{props.tab === 'dashboard' ? (
						<div
							style={{
								color: '#0579ff',
								fontWeight: '600',
								backgroundColor: '#0579ff20',
								width: '100%',
							}}
						>
							<GridFill /> &nbsp;
							<span>Dashboard</span>
						</div>
					) : (
						<div>
							<GridFill /> &nbsp;
							<span>Dashboard</span>
						</div>
					)}
				</li>
				<li onClick={() => onTabHandler('app')}>
					{props.tab === 'app' ? (
						<div style={{ color: '#0579ff' }}>
							<BriefcaseFill /> &nbsp;
							<span>Appointments</span>
						</div>
					) : (
						<div>
							<BriefcaseFill /> &nbsp;
							<span>Appointments</span>
						</div>
					)}
				</li>
				<li onClick={() => onTabHandler('doctor')}>
					{props.tab === 'doctor' ? (
						<div style={{ color: '#0579ff' }}>
							<PersonFill /> &nbsp;
							<span>Doctors</span>
						</div>
					) : (
						<div>
							<PersonFill /> &nbsp;
							<span>Doctors</span>
						</div>
					)}
				</li>
				<li onClick={() => onTabHandler('patient')}>
					{props.tab === 'patient' ? (
						<div style={{ color: '#0579ff' }}>
							<PeopleFill /> &nbsp;
							<span>Patients</span>
						</div>
					) : (
						<div>
							<PeopleFill /> &nbsp;
							<span>Patients</span>
						</div>
					)}
				</li>
				<li onClick={() => onTabHandler('reviews')}>
					{props.tab === 'reviews' ? (
						<div style={{ color: '#0579ff' }}>
							<StarFill /> &nbsp;
							<span>Reviews</span>
						</div>
					) : (
						<div>
							<StarFill /> &nbsp;
							<span>Reviews</span>
						</div>
					)}
				</li>
			</ul>
			<hr />
			<ul className={Sidebar.bottomNav}>
				<li>
					<Journal /> &nbsp; <span> Blog</span>
				</li>
				<li>
					<ArrowBarRight /> &nbsp; <span> Logout</span>
				</li>
			</ul>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { tab: state.tab };
};
export default connect(mapStateToProps)(Navigator);

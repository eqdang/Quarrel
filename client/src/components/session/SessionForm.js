import React from "react";
import Login from "./Login";
import Register from "./Register";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: this.props.errors
		}
	}

	render() {
		return (
			<div className="background-container">
				{/* <div className="login-error">{this.state.errors}</div> */}
				<div className="session-form-container">
					<label className="main-logo">Quarrel</label>
					<p className="tag-description">A place to pick verbal fights with other likedminded individuals from the safety of your own bed.</p>
					<div className="form-container">
						<div className="signup-form-container">
							<Register errors={this.props.errors}/>
						</div>
						<div className="login-form-container">
							<Login />
						</div>
					</div>
				</div>
				{/* <div className="footer">
					Splash does not look good with a footer...
				</div> */}
			</div>
		);
	}
}

export default SessionForm;
import React from 'react';
import Scrollchor from 'react-scrollchor';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Header = props => {
	return (
		<div className="main-menu" id="menu">
			<div className="main-img">
				<div className="main-content">
					<div className="title">
						<img
							className="name-logo"
							src="../../public/name_logo.png"
							alt="Maria St. Louis-Sanchez"
						/>

						<div className="button-bar">
							<button className="nav-button">
								{' '}
								<Scrollchor to="#skills-section" className="nav-link">
									Skills
								</Scrollchor>{' '}
							</button>
							<button className="nav-button">
								{' '}
								<Scrollchor to="#portfolio" className="nav-link">
									Portfolio
								</Scrollchor>{' '}
							</button>
						</div>
						<div className="icon-bar">
							<a
								className="social-link github-link"
								href="https://github.com/mariastlouis"
							>
								{' '}
								<FaGithub />{' '}
							</a>
							<a
								className="social-button"
								href="../../public/mariaSanchezResume.pdf"
								download
							>
								{' '}
								<button className="resume-link">
									{' '}
									RESUME <FaDownload />
								</button>{' '}
							</a>
							<a
								className="social-link linkedin-link"
								href="https://www.linkedin.com/in/mariastlouissanchez/"
							>
								{' '}
								<FaLinkedin />{' '}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

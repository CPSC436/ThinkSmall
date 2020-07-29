import React from 'react'
import classes from '../modules/contact.module.css'
import hyesun from '../assets/hyesun.jpeg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Square = ({
    name, github, linkedin, src,
}) => (
    <div className={classes.square}>
        <div>
            <img src={src} className={classes.img} alt={name} />
            <h3>{name}</h3>
            <a href={github}> <GitHubIcon /></a>
            <a href={linkedin}> <LinkedInIcon /></a>
        </div>
    </div>
)

const Contact = () => (
    <div className={classes.root}>
        
        <div className={classes.container}>
            <h2> Contact Developers </h2>
        </div>
        
        <div className={classes.container}>
            <h3> Team DaeBak </h3>
            <h4>DaeBak is Korean slang for “awesome”,” cool”, or “great success”. We want to make an awesome community for small businesses that will eventually bring them this great success. </h4>
        </div>
        <div className={classes.container}>
            <h3> Team members </h3>
            <h4>We are 4th-year students who are looking for an internship and full-time opportunity. Please feel free to reach out to us. </h4>
        </div>

        <div className={classes.container}>
            <Square 
                name="Alice Kim"
                github="https://github.com/alice-0-kim"
                linkedin="https://www.linkedin.com/in/alice-0-kim/"
                src="hyesun" 
            />
            <Square 
                name="John Kim"
                github="https://github.com/johnskimca"
                linkedin="https://www.linkedin.com/in/johnskimca/"
                src="C:\Users\I534893\git\CPSC436i\ThinkSmall\client\src\assets\john.jpeg"
            />
            <Square 
                name="Hyesun An"
                github="https://github.com/anhyesun"
                linkedin="https://www.linkedin.com/in/anhyesun/"
                src="C:\Users\I534893\git\CPSC436i\ThinkSmall\client\src\assets\hyesun.jpeg" 
            />
            <Square 
                name="Yuree Jang"
                github="https://github.com/OriginalJangster"
                linkedin="https://www.linkedin.com/in/yuree-jang-81993aaa/"
                src="C:\Users\I534893\git\CPSC436i\ThinkSmall\client\src\assets\yuree.jpeg" 
            />
        </div>
    </div>
)

export default Contact

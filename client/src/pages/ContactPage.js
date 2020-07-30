import React from 'react'
import classes from '../modules/contact.module.css'
import hyesun from '../assets/hyesun.jpg'
import alice from '../assets/alice.jpeg'
import john from '../assets/john.jpg'
import yuree from '../assets/yuree.jpeg'
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
        
        <div className={classes.title}>
            <h2> Contact Developers </h2>
        </div>
        <div className={classes.subtitle}> <h3> Team DaeBak </h3> </div>
        <div className={classes.sub}>
            <p>DaeBak is Korean slang for “awesome”,” cool”, or “great success”. We want to make an awesome community for small businesses that will eventually bring them this great success. </p>
        </div>
        <div className={classes.sub}>
            <p>We are 4th-year UBC students who are looking for an internship and full-time opportunity. Please feel free to reach out to us. </p>
        </div>
        <div className={classes.container}>
            <Square 
                name="Yuree Jang"
                github="https://github.com/OriginalJangster"
                linkedin="https://www.linkedin.com/in/yuree-jang-81993aaa/"
                src={yuree} 
            />
            <Square 
                name="Alice Kim"
                github="https://github.com/alice-0-kim"
                linkedin="https://www.linkedin.com/in/alice-0-kim/"
                src={alice} 
            />
            <Square 
                name="Hyesun An"
                github="https://github.com/anhyesun"
                linkedin="https://www.linkedin.com/in/anhyesun/"
                src={hyesun} 
            />
            <Square 
                name="John Kim"
                github="https://github.com/johnskimca"
                linkedin="https://www.linkedin.com/in/johnskimca/"
                src={john}
            />
        </div>
    </div>
)

export default Contact

import React from 'react';
import image from '../../Images/My image.jpg';
const About = () => {
    return (
        <div className='container pb-5 mb-5'>
            <h1 className='mt-5 fw-bold'>About</h1>
            <div className='d-flex flex-lg-row flex-md-row flex-sm-column-reverse  align-items-center mt-5 text-start'>
                <div>
                    <h1 className='mt-sm-3'>I'm Md Shahriur
                        <br /> Ahmed</h1>
                    <p>Web Development Learner</p>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" style={{ width: '200px' }} />
                </div>
            </div>
            <div className='text-start mt-5'>
                <h2 className='fw-bold'>About me</h2>
                <hr />
                <p>I am Md Shahriur Ahmed. I have completed my B.Sc. Engg. in CSE from Bangladesh University of Business &amp; Technology. Currently I am learning front-end development from Programming Hero. My goal is to build my career in web development. Firstly i want to start job as a front-end developer, after gathering some experiences i will move for back-end development. <br />
                    For reaching out to my goal i follow a daily routine for practice. And currently i am practicing technologies to develop front-end of a website. </p>
            </div>
        </div>
    );
};

export default About;
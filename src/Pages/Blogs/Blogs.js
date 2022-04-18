import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='fw-bold my-5'>BLOGS</h1>
            <div>
                <h4 className='fw-bold text-start'>Difference between authorization and authentication?</h4>
                <hr />
                <p className='text-start'>In terms of knowledge security, both authentication and authorization are used to ensure the safety of a computerized data system. As major components of its service architecture, each area unit incredibly important themes usually associated to the online. Each of the terms, on the other hand, has an entirely distinct meaning. While they're often used in the same situation with the same tool, they're completely different.

                    The identity of users is validated during the authentication process before they are granted system access. The person's or user's authority to access the resources is evaluated during the authorization procedure. Authentication comes first, followed by authorization.</p>
            </div>
            <div>
                <h4 className='fw-bold text-start'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <hr />
                <p className='text-start'>In the database, Firebase maintains all data in real time. As a result, data transfer to and from the database is simple and speedy. As a result, Firebase can be used to construct mobile apps such as live streaming, chat messaging, and so on. Firebase allows you to sync real-time data across all of your devices, including Android, iOS, and the web, without having to refresh the page. Firebase integrates with Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack to help you manage and maintain your app more efficiently and accurately. Firebase includes everything from databases to analytics to crashing reports. As a result, the app development teams would be able to concentrate on improving the user experience.</p>
                <p className='text-start'>We have alternative option of firebase for authentication. We can use <b>Back4App, Parse,  AWS Amplify, Backendless, Kuzzle, Supabase, appwrite, Hasura, Nhost, Deployd</b> etc.</p>
            </div>
            <div className='pb-5 mb-5'>
                <h4 className='fw-bold text-start'>What other services does firebase provide other than authentication?</h4>
                <hr />
                <p className='text-start'>Firebase was created by Firebase Inc. and eventually purchased by Google. It offers a variety of services to assist you in developing high-quality mobile and web applications to help you build your business.Firebase is a complete package that may help you construct mobile or web applications faster and more efficiently with fewer resources. We already known to authentication service of firebase. Let's see some other services of firebase. </p>
                <ul className='text-start'>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
                <p className='text-start'>Clients for Firebase include Web, iOS, Android, and OS X. Backend programming, authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), file storage, and other issues are all taken care of by Firebase. All of the services provided by Firebase are extremely efficient and quick.</p>
            </div>
        </div>
    );
};

export default Blogs;
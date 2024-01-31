import Project from '../components/Project'

const repoUrl = [
    'https://github.com/CaveManEN/FlickFinder',
    'https://github.com/lildano50/DevJobs',
    'https://github.com/lmansilla92/rooster-tail',
    'https://github.com/lmansilla92/mvc-tech-blog',
    'https://github.com/lmansilla92/express-note-taker',
    'https://github.com/lmansilla92/first-weather-app',
    'https://github.com/lmansilla92/schedule-the-day',
];

const deployedUrl = [
    'https://flick-finder-snd9.onrender.com/',
    'https://shielded-hollows-32035-7796c32f6e6c.herokuapp.com/',
    'https://lmansilla92.github.io/rooster-tail/',
    'https://sleepy-woodland-43418-bc3903ee6c50.herokuapp.com/',
    'https://mansilla-express-note-taker-095a92239421.herokuapp.com/',
    'https://lmansilla92.github.io/first-weather-app/',
    'https://lmansilla92.github.io/schedule-the-day/',
];

const imgSrc = [
    'flick-finder-deployed.png',
    'dev-jobs.png',
    'rooster-tail.png',
    'mvc-tech-blog.png',
    'express-note-taker.png',
    'first-weather-app.png',
    'schedule-the-day.png',

]

const projectName = [
    'Flick Finder',
    'Dev Jobs',
    'Rooster Tail',
    'MVC Tech Blog',
    'Express Note Taker',
    'First Weather App',
    'Schedule The Day',
]

export default function Projects() {
    return (
        <section className='project-container'>
            <Project 
                repoUrl={repoUrl[0]}
                deployedUrl={deployedUrl[0]}
                imgSrc={imgSrc[0]}
                projectName={projectName[0]}
            />
            <Project 
                repoUrl={repoUrl[1]}
                deployedUrl={deployedUrl[1]}
                imgSrc={imgSrc[1]}
                projectName={projectName[1]}
            />
            <Project 
                repoUrl={repoUrl[2]}
                deployedUrl={deployedUrl[2]}
                imgSrc={imgSrc[2]}
                projectName={projectName[2]}
            />
            <Project 
                repoUrl={repoUrl[3]}
                deployedUrl={deployedUrl[3]}
                imgSrc={imgSrc[3]}
                projectName={projectName[3]}
            />
            <Project 
                repoUrl={repoUrl[4]}
                deployedUrl={deployedUrl[4]}
                imgSrc={imgSrc[4]}
                projectName={projectName[4]}
            />
            <Project
                repoUrl={repoUrl[5]}
                deployedUrl={deployedUrl[5]}
                imgSrc={imgSrc[5]}
                projectName={projectName[5]}
            />
            <Project
                repoUrl={repoUrl[6]}
                deployedUrl={deployedUrl[6]}
                imgSrc={imgSrc[6]}
                projectName={projectName[6]}
            />
        </section>
    )
}
export default function Project({ repoUrl, deployedUrl, imgSrc, projectName }) {
    return (
        <div className='project-card' style={{ backgroundImage: `url(${imgSrc})` }}>
            <section className='label-container'>
                <a className='project-label' href={deployedUrl}>
                    <h3 className='project-label-name'>{projectName}</h3>
                </a>
                <a href={repoUrl}><img className='project-github-img' src='github.svg' /></a>
            </section>
        </div>
    );
};
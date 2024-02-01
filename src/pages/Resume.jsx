export default function Resume() {
    const handleDownload = () => {
        window.open('Luis_Mansilla_Resume.pdf', '_blank');
    }
    return (
        <>
            <h1 className="resume-h1">Resume</h1>
            <p className="resume-p">Download my <a href='Luis_Mansilla_Resume.pdf' download onClick={handleDownload}>resume</a></p>
        </>

    )
}
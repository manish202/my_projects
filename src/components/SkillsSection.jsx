const SkillsSection = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="title">
                    <h1>my skills</h1>
                </div>
                <div className="d-flex skill-group">
                    <div className="card">
                        <h2>front end</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SVG</li>
                            <li>SASS</li>
                            <li>Bootstrap</li>
                            <li>JAVASCRIPT</li>
                            <li>JQUERY</li>
                            <li>REACTJS</li>
                            <li>NEXTJS (some knowledge)</li>
                            <li>TYPESCRIPT (some knowledge)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>backend</h2>
                        <ul>
                            <li>PHP</li>
                            <li>MYSQL</li>
                            <li>WORDPRESS CMS (some knowledge)</li>
                            <li>LARAVEL FRAMEWORK</li>
                            <li>NODEJS</li>
                            <li>EXPRESSJS</li>
                            <li>MONGODB</li>
                            <li>MONGOOSE</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>Additional</h2>
                        <ul>
                            <li>GIT-GITHUB</li>
                            <li>AJAX</li>
                            <li>REST API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SkillsSection;
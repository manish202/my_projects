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
                            <li>Bootstrap 5</li>
                            <li>JAVASCRIPT (ES6+)</li>
                            <li>JQUERY</li>
                            <li>REACTJS</li>
                            <li>NEXTJS (Basic)</li>
                            <li>TYPESCRIPT (Basic)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h2>backend</h2>
                        <ul>
                            <li>PHP</li>
                            <li>MYSQL</li>
                            <li>WORDPRESS CMS (Basic)</li>
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
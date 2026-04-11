import {useState} from "react";

const Card = ({id,title,description,thumbnail,approx_date,keywords,source_code,live_preview,highlighted,private_repo}) => {
    const [view, setView] = useState(false);
    return (
        <div className='card' title={id}>
            <div className="thumbnail"><img src={`images/projects/${thumbnail}`} alt={title} /></div>
            <h2>{title}</h2>
            <h3>({approx_date})</h3>
            <div className={`desc ${view ? 'active':''}`}>
                <p>{description}</p>
                <p>Tech: {keywords.join(', ')}</p>
            </div>
            <div className='d-flex btn-box'>
                <button type='button' className='btn view' onClick={() => setView(o => !o)}>{view ? 'close':'view'}</button>
                <a href={source_code} className='btn source' target='_blank'>{private_repo ? "Private Repo":"Source Code"}</a>
                {live_preview && <a href={live_preview} className='btn live' target='_blank'>Live Preview</a>}
            </div>
        </div>
    )
}

export default Card;
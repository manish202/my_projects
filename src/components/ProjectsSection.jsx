import {useState,useEffect} from 'react';
import projects from '../static_assets/projects';
const highlighted_projects = [44,56,58,62,79,85,90,93,98,101,102,107,108,110,118];
const Card = ({id,title,description,thumbnail,approx_date,keywords,source_code,live_preview}) => {
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
                <a href={source_code} className='btn source' target='_blank'>Source Code</a>
                {live_preview && <a href={live_preview} className='btn live' target='_blank'>Live Preview</a>}
            </div>
        </div>
    )
}
const handleCalculation = (state) => {
    const sort_by = state.sort_by ?? 'L_first';
    const search_in = state.search_in ?? 'title';
    const search = state.search?.trim()?.toLowerCase() ?? '';
    const cur_page = state.cur_page ?? 1;
    const limit = 6;
    const offset = (cur_page - 1)*limit;
    const searched_projects = search.length > 0 ? projects.filter(p => p[search_in].includes(search)) : projects;
    const total_records = searched_projects.length;
    const updated_projects = searched_projects.sort((a,b) => sort_by === 'L_first' ? b.id - a.id : a.id - b.id).slice(offset,offset+limit);
    const total_pages = Math.ceil(total_records / limit);
    const show_prev = cur_page > 1;
    const show_next = cur_page < total_pages;
    return {...state,sort_by,search_in,search,cur_page,total_pages,total_records,show_prev,show_next,projects:updated_projects}
}
const initialState = handleCalculation({});
const TitleAndSearch = ({resetSearch}) => {
    const [searchIn,setSearchIn] = useState(initialState.search_in);
    const [search,setSearch] = useState(initialState.search);
    useEffect(() => {
        setSearchIn(initialState.search_in);
        setSearch(initialState.search);
    },[resetSearch]);
    return (
        <>
            <select id="search_in" name='search_in' value={searchIn} onChange={(e) => setSearchIn(e.target.value)}>
                <option value="title">title</option>
                <option value="keywords">keywords</option>
            </select>
            <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`search in ${searchIn}`} />
        </>
    )
}
const ProjectsSection = () => {
    const [state,setState] = useState(initialState);
    const [resetSearch, setResetSearch] = useState(false);
    const handleSorting = (e) => setState(old => handleCalculation({...old, sort_by: e.target.value, cur_page: 1}));
    const handleSearch = (e) => {
        e.preventDefault();
        const {search_in,search} = e.target;
        setState(old => handleCalculation({...old, search_in: search_in.value, search: search.value, cur_page: 1}));
    }
    const handleReset = () => {
        setState(initialState);
        setResetSearch(old => !old);
    }
    const handlePagination = (dir) => {
        setState(old => {
            const cur_page = old.cur_page + (dir === 'next' ? +1:-1);
            return handleCalculation({...old,cur_page});
        });
    }
    return (
        <section id="projects">
            <div className="container">
                <div className="title">
                    <h1>highlighted projects</h1>
                </div>
                <div className="card_container d-flex">
                    {projects.filter(p => highlighted_projects.includes(p.id)).sort((a,b) => a.id - b.id).map(pro => <Card key={pro.id} {...pro} />)}
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h1>my all projects</h1>
                </div>
                <div className="filters d-flex">
                    <form id="search" onSubmit={handleSearch}>
                        <select id="order" name='sort_by' value={state.sort_by} onChange={handleSorting}>
                            <option value="L_first">latest first</option>
                            <option value="O_first">oldest first</option>
                        </select>
                        <TitleAndSearch resetSearch={resetSearch} />
                        <button className="btn" type="submit">search</button>
                        <button className="btn" type="button" id="reset" onClick={handleReset}>reset</button>
                    </form>
                </div>
                <div className="card_container d-flex">
                    {state.projects.map(pro => <Card key={pro.id} {...pro} />)}
                </div>
                <div className="d-flex pagination">
                    {state.show_prev && <button className="btn" type="button" onClick={() => handlePagination('prev')}>prev</button>}
                    {state.show_next && <button className="btn" type="button" onClick={() => handlePagination('next')}>next</button>}
                    <button className="btn disabled" type="button">total {state.total_records}</button>
                    <button className="btn disabled" type="button">page {state.cur_page}/{state.total_pages}</button>
                </div>
            </div>
        </section>
    )
}
export default ProjectsSection;
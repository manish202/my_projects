import {useState} from 'react';
import projects from '../static_assets/projects';
import Card from './Card';

const handleCalculation = (state) => {
    const sort_by = state.sort_by ?? 'L_first';
    const search = state.search?.trim()?.toLowerCase() ?? '';
    const cur_page = state.cur_page ?? 1;
    const limit = 6;
    const offset = (cur_page - 1)*limit;
    const searched_projects = search.length > 0 ? projects.filter(p => p.title.includes(search)) : projects;
    const total_records = searched_projects.length;
    const updated_projects = searched_projects.sort((a,b) => sort_by === 'L_first' ? b.id - a.id : a.id - b.id).slice(offset,offset+limit);
    const total_pages = Math.ceil(total_records / limit);
    const show_prev = cur_page > 1;
    const show_next = cur_page < total_pages;
    return {...state,sort_by,search,cur_page,total_pages,total_records,show_prev,show_next,projects:updated_projects}
}
const initialState = handleCalculation({});

const ProjectsSection = () => {
    const [state,setState] = useState(initialState);
    const [search,setSearch] = useState(initialState.search);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setState(prev => handleCalculation({...prev, [name]: value,cur_page: 1}));
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setState(prev => handleCalculation({...prev,search,cur_page: 1}));
    }
    const handleReset = () => {
        setState(initialState);
        setSearch(initialState.search);
    }
    const handlePagination = (dir) => {
        setState(prev => {
            const cur_page = prev.cur_page + (dir === 'next' ? +1:-1);
            return handleCalculation({...prev,cur_page});
        });
    }
    return (
        <section id="projects">
            <div className="container">
                <div className="title">
                    <h1>highlighted projects</h1>
                </div>
                <div className="card_container d-flex">
                    {projects.filter(p => p.highlighted).sort((a,b) => b.id - a.id).map(pro => <Card key={pro.id} {...pro} />)}
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h1>my all projects</h1>
                </div>
                <div className="filters d-flex">
                    <form id="search" onSubmit={handleSearch}>
                        <select id="order" name='sort_by' value={state.sort_by} onChange={handleChange}>
                            <option value="L_first">latest first</option>
                            <option value="O_first">oldest first</option>
                        </select>
                        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search" />
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
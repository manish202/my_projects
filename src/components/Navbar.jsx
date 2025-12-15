import { FaBars } from "react-icons/fa6";
import {useEffect,useState} from 'react';
const menu = [
    {id:1,href:'#home',title:'home', class:'active'},
    {id:2,href:'#skills',title:'skills', class:''},
    {id:3,href:'#projects',title:'projects', class:''}
]
const Navbar = () => {
    const [toggleHeader,setToggleHeader] = useState(false);
    const [toggleMenu,setToggleMenu] = useState(false);
    const [menuLinks, setMenuLinks] = useState(menu);
    const handleScroll = () => {
        setToggleHeader(() => window.scrollY > 30); 
    }
    const handleToggleMenu = () => setToggleMenu(o => !o);
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            let visibleSection = null;
            entries.forEach((entry) => {
                if(entry.isIntersecting){ visibleSection = entry.target.id; }
            });
            if(visibleSection){
                const id = "#" + visibleSection;
                setMenuLinks(old => old.map(m => ({...m,class: m.href === id ? 'active':''})));
            }
        },
        {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        });
        const sections = document.querySelectorAll("section[id]");
        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);
    return (
        <header className={`d-flex ${toggleHeader ? 'active':''}`} id="header">
            <a href="#home" className="logo">
                <h1>manish prajapati</h1>
            </a>
            <button id="toggle_btn" onClick={handleToggleMenu} type="button"><FaBars /></button>
            <nav className={`navbar ${toggleMenu ? 'active':''}`} id="navbar">
                <ul className="d-flex" onClick={handleToggleMenu}>
                    {menuLinks.map(m => <li key={m.id}><a className={m.class} href={m.href}>{m.title}</a></li>)}
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;
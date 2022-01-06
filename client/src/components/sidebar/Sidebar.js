import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories");
            setCats(res.data)
        }
        getCats();
    })

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://timviec365.com/pictures/images/developer-la-gi-4.jpg" alt=""/>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((cat,key) => (
                        <Link to={`/?cat=${cat.name}`} className="link">
                            <li className="sidebarListItem">
                                {cat.name}
                            </li>
                        </Link>
                    ))}
                    
                    <li className="sidebarListItem">
                        Music
                    </li>
                    <li className="sidebarListItem">
                        Style
                    </li>
                    <li className="sidebarListItem">
                        Sport
                    </li>
                    <li className="sidebarListItem">
                        Tech
                    </li>
                    <li className="sidebarListItem">
                        Cinema
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

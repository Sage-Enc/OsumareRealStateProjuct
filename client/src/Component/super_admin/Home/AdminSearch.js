import { FiPlus } from "react-icons/fi";
import "../../pages/CssFile/super_admin/Home/admin_search.css";


import React from 'react'

const AdminSearch = () => {
  return (
    <div className="admin_nav">
            <nav className="Nav_item">
                <div className="dash_link">
                    <a href="url">Dashabord /</a>
                    <a href="url">Home</a>
                </div>
                <div className="search-bar">
                    <div className="Search-input">
                        <div className="se-input">
                           <input type="text" placeholder="Search" />
                        </div>
                        <div className="search-btn">
                            <button> Search</button>
                        </div>
                    </div>
                        <div className="abt-btn">
                      <button>
                        <FiPlus />
              About
            </button>
                          
          </div>
                </div>     
            </nav>
        </div>
  )
}

export default AdminSearch;

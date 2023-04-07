import React from 'react';
import "./index.scss";
import {Post} from "../../UI/Card/Cards.jsx";

function Posts(props) {
    return (
        <section className='posts'>
            <div className="container">
                <div className="posts__inner">
                    <h2 className="posts-title"></h2>
                    <div className="posts-extras">
                    <p className="posts-subtitle">
                    Recent posts
                    </p>
                    <a href="#" className='view-all'>View all</a>
                    </div>
                    <div className="posts-cards">
                        {Post()}
                        {Post("Creating pixel perfect icons in Figma", "12 Feb 2020" ,"Figma, Icon Design")}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
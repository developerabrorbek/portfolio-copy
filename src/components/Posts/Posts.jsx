import React from 'react';
import "./index.scss";

function Posts(props) {
    return (
        <section className='posts'>
            <div className="container">
                <div className="posts__inner">
                    <h2 className="posts-title"></h2>
                    <p className="posts-subtitle">
                    Recent posts
                    </p>
                    <div className="posts-cards">
                        <div className="posts-card">
                            <h3 className='posts-card__title'>Making a design system from scratch</h3>
                            <div className="posts-card__extra">
                                <span className='posts-card__extra-first'>12 Feb 2020</span>
                                <span className="posts-card__extra-second">Design, Pattern</span>
                            </div>
                            <div className="posts-card__subtitle">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </div>
                        </div>

                        <div className="posts-card">
                            <h3 className='posts-card__title'>Making a design system from scratch</h3>
                            <div className="posts-card__extra">
                                <span className='posts-card__extra-first'>12 Feb 2020</span>
                                <span className="posts-card__extra-second">Design, Pattern</span>
                            </div>
                            <div className="posts-card__subtitle">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
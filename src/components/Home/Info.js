import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Veniam perferendis quidem nisi, fugit esse nam vitae a. 
                            Omnis itaque modi ipsum laudantium et illo voluptates odio. 
                            Repellendus nisi quisquam expedita quos illo aperiam voluptatum, 
                            molestias laborum. Voluptates accusamus est sed quas officiis 
                            quo hic at assumenda pariatur tempore mollitia distinctio 
                            laudantium iste dolorum similique sint, labore deserunt expedita! 
                            Harum, at!
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info

import React from 'react'
import Title from '../Globals/Title'

const Contact = () => {
    return (
       <section className="contact py-5">
           <Title title="contact us" />
           <div className="row">
               <div className="col-10 col-sm-8 col-md-6 mx-auto">
                   <form action="https://formspree.io/f/xeqpzljp"
  method="POST">
                       {/* name */}
                        <div className="form-group">
                               <label htmlFor="name">Name</label>
                               <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="John Smith"  
                                className="form-control"/>
                        </div>  
                         {/* email */}
                         <div className="form-group">
                               <label htmlFor="email">Email</label>
                               <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="email@email.com" 
                                className="form-control"/>
                        </div>  
                          {/* description */}
                          <div className="form-group">
                              <label htmlFor="description">Description</label>
                             <textarea 
                                name="description" 
                                id="description" 
                                rows="10" 
                                placeholder="Leave a message" 
                                className="form-control"></textarea>
                          </div>
                          {/* submit */}
                          <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
                            submit
                          </button>
                   </form>
               </div>
           </div>
       </section>
    )
}

export default Contact

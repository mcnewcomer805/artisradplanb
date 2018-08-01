import React from "react";

class Item extends Component {
   render() {
       return (
           <div>
               <h1>{item.name}</h1>
               <br />
               <div>
                   {item.description}
               </div>
               <div>
                   <div>
                      <h3>Comments</h3>
                   </div>
                   <div>
                      {item.comments.map(
                          comment=> 
                          <div>
                            <hr />
                            <p>{comment}</p> 
                          </div>
                      )
                      }
                   </div>
                   <form>
                       {/* code for posting new comment goes here
                        
                     */}
                   </form>
               </div>
           </div>
       )
   }
};
export default Item;
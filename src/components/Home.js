import React from 'react';

function Home(){
  return(
      <div>
         <div className="add-to-cart">
           <img src ="https://cdn3.vectorstock.com/i/1000x1000/62/87/flat-design-shopping-cart-vector-13576287.jpg" /> 
         </div>

        <h1>Home Components</h1>
        <div className="cart-wrapper  ">
            <div className="img-wrapper item">

                <img src="https://www.maxbhi.com/images/thumbnails/950/950/detailed/2449/lcd_screen_for_apple_iphone_x_plus_replacement_display_by_maxbhi.com_83922.jpg" />
            </div>
            <div className="text-wrapper item">
            <span>   
               I-Phone 
            </span>

            <span>   
            Price: $1000.00
            </span>
        
            </div>
            <div className="btn-wrapper item">
            <button>Add To Cart</button>
            </div> 
        </div>
      </div>
  )
}

export default Home;
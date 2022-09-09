import React from 'react'

function Get_Started() {
  return (
    <div>
      <div class="get-started-container">
                <h1 class="font">Unlimited movies, TV <br/> shows and more.</h1>
                <h2 class="font">Watch anywhere. Cancel anytime.</h2>
                <div class="child_get-started-container font">
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div class="select_get-started-container flex_row">
                        <input type="email" placeholder="Email Address"/>
                        <input type="button" value="Get Started "/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Get_Started

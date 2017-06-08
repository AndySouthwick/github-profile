import React, { Component } from 'react'
class Leftbar extends Component{


    constructor () {
        super()
        this.state = {
            imageUrl: 'https://avatars2.githubusercontent.com/u/4855248?v=3&s=460'
        }
    }

    render(){
        return(
            <div>
            <div className="row">
                <img src={this.state.imageUrl} alt="" /><br/>
            </div>

                <div className="row">
                  <h3>AndySouthwick</h3>
                </div>

              <div className="row">
                  <a href="#">Add a Bio</a>
              </div>
                <div className="row">
                    <button className="btn btn-default">
                        Edit Profile
                    </button>

                </div>
                <hr/>
                <div className="row">
                    <h4>Organizations</h4>
                </div>

            </div>
        )
    }
}
export default Leftbar
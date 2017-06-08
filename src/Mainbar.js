import React, {Component}  from 'react'
class Mainbar extends Component{
    render(){
        return(
            <div>
            <div className="row bluebg">
                <div className="col-md-7">
                    ProTip! Updating your profile with your name, location, and a profile picture helps other GitHub users get to know you.
                </div>
                <div className="col-md-2">
                    <button className="btn btn-success">
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="row ptop2 ">
                <div className="col-md-2">Overview</div>
                <div className="col-md-2">Repositories</div>
                <div className="col-md-2">Stars</div>
                <div className="col-md-2">Followers</div>
                <div className="col-md-1">Following</div>
            </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="borderbox m2 p2">
                                whats this
                        </div>
                        <div className="borderbox m2 p2">
                            some stuff
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="borderbox m2 p2">
                        whats this
                    </div>
                    <div className="borderbox m2 p2">
                        some stuff
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Mainbar
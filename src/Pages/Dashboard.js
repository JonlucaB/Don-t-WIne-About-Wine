import React, { Component } from "react";
import { Navigate, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Navigate to="/profile" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li className="signout">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
            <p>Welcome to your Account</p>
            <div class="row">
    <div class="col-md-4">
        <div class="widget-container">
            <div class="widget">
                <div class="profile-card">
                    <div class="card-header">
                        <div class="header-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="andy"/>
                        </div>
                        <div class="header-name">
                          <a href="https://bit.ly/3m9avif">Anderson Charlotte</a>
                        </div>
                    </div>
                    <div class="card-body bg-warning">
                        <div class="body-description">
                            A user profile is a group of settings that define how Outlook is set up for a particular user. For example, a profile may include access to a mailbox on Microsoft Exchange Server, and specify that the Outlook Address Book appear in the Address Book dialog box. A profile can contain any number of information services.
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="footer-social">
                            <div class="row">
                                <div class="col-xs-3">
                                    <a href="">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </div>
                                <div class="col-xs-3">
                                    <a href="">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="col-xs-3">
                                    <a href="">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </div>
                                <div class="col-xs-3">
                                    <a href="">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

</div>
        </main>
      </div>
    );
  }
}
 
export default Dashboard;
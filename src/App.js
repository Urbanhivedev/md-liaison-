import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from './others/Helper/Loader';
import ScrollToTop from './others/Helper/ScrollToTop';
import Home from './pages/Home';
import './index.css'
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Jobs from './pages/Jobs';
import ViewJob from './pages/ViewJobs';
import AppliedJobs from './pages/AppliedJobs';
import MyJobs from './pages/MyJobs';
import Layout from './components/Layout/layout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      window.scrollTo(0, 0);
  });
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  });
  return (
    <>
        {loading && (
            <div className={`veegil-loader ${loading ? 'active' : ''}`}>
                <Loader />
            </div>
        )}
        <div className={`veegil-visible ${loading === false ? 'active' : ''}`}>
            <Router>
                <ScrollToTop>
                    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/my-jobs" component={MyJobs} />
                    <Route path="/view-job/:id" component={ViewJob} />
                     <Route path="/view-job/" component={ViewJob} />
                    
                    <Route path="/applied-jobs" component={AppliedJobs} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
    </>
);
}

export default App

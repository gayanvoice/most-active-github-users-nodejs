import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Country from './components/Country';
import GitHubButton from 'react-github-btn';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    PocketShareButton,
    InstapaperShareButton,
    EmailShareButton

} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
    EmailIcon
} from 'react-share';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-collapse" id="navbarsExampleDefault">
              <nav className="nav nav-underline">
                <span className="nav-link">
                <a className="text-light" href="/">Home <span className="sr-only">(current)</span></a>
                </span>
                  <span className="nav-link">
                <a className="text-light" href="https://github.com/gayanvoice/GitHubStats" target={'_blank'}>GitHub</a>
                  </span>
              </nav>
          </div>
        </nav>
        <div className="nav-scroller bg-white rounded shadow-sm m-2 p-2">
            <nav className="nav nav-underline">
              <span className="nav-link"><Link to="/country/albania/0/25">Albania</Link></span>
              <span className="nav-link"><Link to="/country/argentina/0/25">Argentina</Link></span>
              <span className="nav-link"><Link to="/country/australia/0/25">Australia</Link></span>
              <span className="nav-link"><Link to="/country/austria/0/25">Austria</Link></span>
              <span className="nav-link"><Link to="/country/bangladesh/0/25">Bangladesh</Link></span>
            <span className="nav-link"><Link to="/country/belgium/0/25">Belgium</Link></span>
            <span className="nav-link"><Link to="/country/brazil/0/25">Brazil</Link></span>
            <span className="nav-link"><Link to="/country/canada/0/25">Canada</Link></span>
            <span className="nav-link"><Link to="/country/china/0/25">China</Link></span>
            <span className="nav-link"><Link to="/country/croatia/0/25">Croatia</Link></span>
              <span className="nav-link"><Link to="/country/czechrepublic/0/25">Czech Republic</Link></span>
            <span className="nav-link"><Link to="/country/denmark/0/25">Denmark</Link></span>
            <span className="nav-link"><Link to="/country/estonia/0/25">Estonia</Link></span>
            <span className="nav-link"><Link to="/country/finland/0/25">Finland</Link></span>
            <span className="nav-link"><Link to="/country/france/0/25">France</Link></span>
            <span className="nav-link"><Link to="/country/germany/0/25">Germany</Link></span>
            <span className="nav-link"><Link to="/country/greece/0/25">Greece</Link></span>
            <span className="nav-link"><Link to="/country/hongkong/0/25">Hong Kong</Link></span>
            <span className="nav-link"><Link to="/country/india/0/25">India</Link></span>
              <span className="nav-link"><Link to="/country/indonesia/0/25">Indonesia</Link></span>
              <span className="nav-link"><Link to="/country/ireland/0/25">Ireland</Link></span>
              <span className="nav-link"><Link to="/country/israel/0/25">Israel</Link></span>
              <span className="nav-link"><Link to="/country/italy/0/25">Italy</Link></span>
              <span className="nav-link"><Link to="/country/japan/0/25">Japan</Link></span>
              <span className="nav-link"><Link to="/country/latvia/0/25">Latvia</Link></span>
              <span className="nav-link"><Link to="/country/luxembourg/0/25">Luxembourg</Link></span>
              <span className="nav-link"><Link to="/country/macedonia/0/25">Macedonia</Link></span>
              <span className="nav-link"><Link to="/country/malaysia/0/25">Malaysia</Link></span>
              <span className="nav-link"><Link to="/country/mexico/0/25">Mexico</Link></span>
              <span className="nav-link"><Link to="/country/nepal/0/25">Nepal</Link></span>
              <span className="nav-link"><Link to="/country/netherlands/0/25">Netherlands</Link></span>
              <span className="nav-link"><Link to="/country/newzealand/0/25">New Zealand</Link></span>
            <span className="nav-link"><Link to="/country/norway/0/25">Norway</Link></span>
            <span className="nav-link"><Link to="/country/pakistan/0/25">Pakistan</Link></span>
            <span className="nav-link"><Link to="/country/philippines/0/25">Philippines</Link></span>
              <span className="nav-link"><Link to="/country/poland/0/25">Poland</Link></span>
            <span className="nav-link"><Link to="/country/portugal/0/25">Portugal</Link></span>
            <span className="nav-link"><Link to="/country/romania/0/25">Romania</Link></span>
            <span className="nav-link"><Link to="/country/russia/0/25">Russia</Link></span>
            <span className="nav-link"><Link to="/country/serbia/0/25">Serbia</Link></span>
            <span className="nav-link"><Link to="/country/singapore/0/25">Singapore</Link></span>
            <span className="nav-link"><Link to="/country/spain/0/25">Spain</Link></span>
            <span className="nav-link"><Link to="/country/srilanka/0/25">Sri Lanka</Link></span>
            <span className="nav-link"><Link to="/country/sweden/0/25">Sweden</Link></span>
            <span className="nav-link"><Link to="/country/taiwan/0/25">Taiwan</Link></span>
            <span className="nav-link"><Link to="/country/thailand/0/25">Thailand</Link></span>
            <span className="nav-link"><Link to="/country/ukraine/0/25">Ukraine</Link></span>
            <span className="nav-link"><Link to="/country/unitedkingdom/0/25">United Kingdom</Link></span>
            <span className="nav-link"><Link to="/country/unitedstates/0/25">United States</Link></span>
          </nav>
        </div>
          <div className={'align-items-center p-3 mb-4 rounded shadow-sm mt-3 text-center'}>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice" data-size="large" data-show-count="true" aria-label="Follow @gayanvoice on GitHub">Follow @gayanvoice</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star gayanvoice/githubstats on GitHub">Star</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork gayanvoice/githubstats on GitHub">Fork</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch gayanvoice/githubstats on GitHub">Watch</GitHubButton></span>
              <div>Like this open-source project? Support it by a Star</div>
          </div>
          <div className="d-flex align-items-center p-3 mb-4 rounded shadow-sm mt-3">
              <a className="nav-link" href="https://github.com/gayanvoice/GitHubStats"><img className="mr-3" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub Logo"  height="48"/></a>
              <div className="lh-100">
                  <h4 className="mb-2 lh-100">GitHubStats - Get the list of most active users in GitHub by country</h4>
                  <div className={'mb-1'}>Check out the repository on GitHub <a href={'https://github.com/gayanvoice/githubstats'} target={'_blank'}>https://github.com/gayanvoice/githubstats</a></div>
                  <div className={'mb-1'}>Go to the HTTP site <a href={'http://www.githubstats.com/'} target={'_blank'}>http://www.githubstats.com/</a> or HTTPS Secured site <a href={'https://githubstats-com.herokuapp.com/'} target={'_blank'}>https://githubstats-com.herokuapp.com/</a></div>
                  <div className={'mb-1'}>Updates in 24 hours. This React.js app fetches active users from GitHub GraphQL API using Express.js in Node.js.</div>

                  <nav className="navbar navbar-expand-lg">
                      <div id="navbarNav">
                          <nav className="nav nav-underline">
                                <span className="nav-link">
                                  <FacebookShareButton url={window.location.href}>
                                      <FacebookIcon size={32} round={true}/>
                                  </FacebookShareButton>
                                </span>
                              <span className="nav-link">
                                  <TwitterShareButton url={window.location.href}>
                                      <TwitterIcon size={32} round={true}/>
                                  </TwitterShareButton>
                              </span>
                              <span className="nav-link">
                                  <TelegramShareButton url={window.location.href}>
                                      <TelegramIcon size={32} round={true}/>
                                  </TelegramShareButton>
                              </span>
                              <span className="nav-link">
                                  <WhatsappShareButton url={window.location.href}>
                                      <WhatsappIcon size={32} round={true}/>
                                  </WhatsappShareButton>
                              </span>
                              <span className="nav-link">
                                  <LinkedinShareButton url={window.location.href}>
                                      <LinkedinIcon size={32} round={true}/>
                                  </LinkedinShareButton>
                              </span>
                              <span className="nav-link">
                                  <VKShareButton url={window.location.href}>
                                      <VKIcon size={32} round={true}/>
                                  </VKShareButton>
                              </span>
                              <span className="nav-link">
                                  <OKShareButton url={window.location.href}>
                                      <OKIcon size={32} round={true}/>
                                  </OKShareButton>
                              </span>
                              <span className="nav-link">

                                  <RedditShareButton url={window.location.href}>
                                      <RedditIcon size={32} round={true}/>
                                  </RedditShareButton>
                              </span>
                              <span className="nav-link">
                                  <TumblrShareButton url={window.location.href}>
                                      <TumblrIcon size={32} round={true}/>
                                  </TumblrShareButton>
                              </span>
                              <span className="nav-link">
                                  <LivejournalShareButton url={window.location.href}>
                                      <LivejournalIcon size={32} round={true}/>
                                  </LivejournalShareButton>
                              </span>
                              <span className="nav-link">
                                  <MailruShareButton url={window.location.href}>
                                      <MailruIcon size={32} round={true}/>
                                  </MailruShareButton>
                              </span>
                              <span className="nav-link">
                                  <ViberShareButton url={window.location.href}>
                                      <ViberIcon size={32} round={true}/>
                                  </ViberShareButton>
                              </span>
                              <span className="nav-link">
                                  <WorkplaceShareButton url={window.location.href}>
                                      <WorkplaceIcon size={32} round={true}/>
                                  </WorkplaceShareButton>
                              </span>
                              <span className="nav-link">
                                  <LineShareButton url={window.location.href}>
                                      <LineIcon size={32} round={true}/>
                                  </LineShareButton>
                              </span>
                              <span className="nav-link">
                                  <PocketShareButton url={window.location.href}>
                                      <PocketIcon size={32} round={true}/>
                                  </PocketShareButton>
                              </span>
                              <span className="nav-link">
                                  <InstapaperShareButton url={window.location.href}>
                                      <InstapaperIcon size={32} round={true}/>
                                  </InstapaperShareButton>
                              </span>
                              <span className="nav-link">
                                  <EmailShareButton url={window.location.href}>
                                      <EmailIcon size={32} round={true}/>
                                  </EmailShareButton>
                              </span>
                          </nav>
                      </div>
                  </nav>
              </div>

          </div>
          <main role="main" className="container">
              <Switch>
                  <Route path="/country/:country/:from/:to" component={Country} exact/>
              </Switch>
          </main>
          <div className={'align-items-center p-3 mb-4 rounded shadow-sm mt-3 text-center'}>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice" data-size="large" data-show-count="true" aria-label="Follow @gayanvoice on GitHub">Follow @gayanvoice</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star gayanvoice/githubstats on GitHub">Star</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork gayanvoice/githubstats on GitHub">Fork</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch gayanvoice/githubstats on GitHub">Watch</GitHubButton></span>
              <div>Like this open-source project? Support it by a Star </div>
              <div>Made by <a href={'https://github.com/gayanvoice'} target={'_blank'}>@gayanvoice</a> See the source on <a href={'https://github.com/gayanvoice/githubstats'} target={'_blank'}>GitHub</a></div>
              <small>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small>
              <div><small>This project is not affiliated with the GitHub company in any way</small></div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

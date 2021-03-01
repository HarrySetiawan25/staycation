import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Header(props) {
   const getNavLinkClass = (path) => {
      return props.location.pathname === path ? " active" : "";
   };

   return (
      <Fade>
         <header className="spacing-sm">
            <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <BrandIcon />
                  <button
                     class="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarNavigation"
                     aria-controls="navbarNavigation"
                     aria-label="Toggle navigation"
                  >
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                     className="collapse navbar-collapse"
                     id="navbarNavigation"
                  >
                     <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                           <Button className="nav-link" type="link" href="/">
                              Home
                           </Button>
                        </li>
                        <li
                           className={`nav-item${getNavLinkClass(
                              "/browse-by"
                           )}`}
                        >
                           <Button
                              className="nav-link"
                              type="link"
                              href="/browse-by"
                           >
                              Browse By
                           </Button>
                        </li>
                        <li
                           className={`nav-item${getNavLinkClass("/stories")}`}
                        >
                           <Button
                              className="nav-link"
                              type="link"
                              href="/stories"
                           >
                              Stories
                           </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                           <Button
                              className="nav-link"
                              type="link"
                              href="/agents"
                           >
                              Agents
                           </Button>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
      </Fade>
   );
}

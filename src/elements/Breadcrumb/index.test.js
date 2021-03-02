import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
// import { screen } from "@testing-library/dom";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
   const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
   ];
   const { container } = render(
      <Router>
         <Breadcrumb data={breadcrumbList} />
      </Router>
   );
   const breadcrumb = container.querySelector(`.breacrumb`);
   return { breadcrumb };
};
test("Should have tag <ol> with class name .breadcrub and have text Home and House Detail", () => {
   const { breadcrumb } = setup();
   expect(breadcrumb).toBeInTheDocument;
});

console.log("We're working fine");

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:'child1'},[
        React.createElement("h1",{id:'heading1'},"This is heading inside parent --> child"),
        React.createElement("p",{id:'para1'},"this is para sibling of heading")
    ]),
    React.createElement("div",{id:'child2'},[
        React.createElement("h2",{id:'heading2'},"this is heading2 child of parent3")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
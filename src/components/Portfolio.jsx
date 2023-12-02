import React from "react";
//import { data } from "../data";
import { useState } from "react";
import { Single } from "./Single";
import { useEffect } from "react";
import { getData } from "../getData";
const url="https://raw.githubusercontent.com/mkatay/projects_json/main/json"

export const Portfolio = () => {
  const [projects, setProjects] = useState(null);
  useEffect(()=>{
    getData(url,setProjects)
  },[])
 console.log(projects)
  return (
    <div id="Portfolio" className="portfolio">
     
      {projects && projects.map((obj) => (
        <section>
          <Single {...obj} key={obj.id} />
        </section>
      ))}
    </div>
  );
};

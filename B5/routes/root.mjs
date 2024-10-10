import express  from "express";

let workExperience = [
    {
      name : "KO",
    start_date : "Jan 2022",
    end_date: "Jan 2025",
    description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste",
    },
    {
      name : "OK",
    start_date : "Jan 2022",
    end_date: "Jan 2025",
    description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste",
    }
    
  
  ];
  
  let education = [
    {
      nameE: "London Business School",
      year: "2000 - 2003",
      content: "Web Development! All I need to know in one place",
    },
    {
      nameE: "London Business School",
      year: "2000 - 2003",
      content: "Web Development! All I need to know in one place",
    }
  ];

  

const rootRouter = express.Router();
rootRouter.get("/about", (req, res) =>{
    res.send(`<h1><em>Day la trang About</em></h1>`);
});

rootRouter.get("/", (req, res) =>{
  res.render("index", {title: "Homepage", workExperience, education});

});




export default rootRouter;
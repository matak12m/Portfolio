
let projectSpace = document.getElementById("projects-space")
let mainInfo = document.getElementById("info")
let buttonsSection = document.getElementById("folder-buttons")
let projectsSection = document.getElementById("projects-space")

let allProj = document.getElementsByClassName("project"); //project is a standalone class only for the purposes of this array - may change later

console.log(allProj);

let projName;

function sortProjects(projType) {
    //changes the visibility of projects in the "projects" space depending on what type they are
    //each button shows a different array of projects
    //the function changes the classes of the elements instead of changing the style directly
    console.log("sorting projects, " + projType)

   
    
        

            if (projType.includes('all')) {
                projectSpace.style.backgroundColor = 'rgb(255,204,0)';
            }
            else if (projType.includes('art')) {
                projectSpace.style.backgroundColor = 'red';
            }
            else if (projType.includes('design')) {
                projectSpace.style.backgroundColor = 'pink';

            }
            else if (projType.includes('programming')) {
                projectSpace.style.backgroundColor = 'rgb(27, 192, 27)';
            }
            else if (projType.includes('other')) {
                projectSpace.style.backgroundColor = 'lightblue';
            }


            for (i = 0; i < allProj.length; i++) {
                //console.log("iterating");

                projName = allProj[i].getAttribute("name");

                if (projName.includes(projType)){  //checks if the name of the project includes the keyword

                    
                    allProj[i].className = 'project project-card-visible';
                    
                    //console.log("making a project visible");

                }
                else {
                    
                    allProj[i].className = 'project project-card-hidden';
                    //console.log("making a project hidden");
                }
            }
            

}





function copyEmail() {
 navigator.clipboard.writeText("matak12m@seznam.cz");
 alert("email copied!")
}

let currentProject; //stores the current element being expanded


function expandProject(projectCard) {
    console.log("expanding project")
    //expand the card and append text, images
    //change the css to project-card-expanded
    //add event listener for clicks outside the project card - main + the 2 following sections?
    

    if (projectCard.includes("GGJ24")) {
        currentProject = document.getElementById("GGJ24")
        currentProject.className = 'project project-card-expanded'
        currentProject.innerHTML = "surprise!"  // fill in actual content of the card. remove in minimizeProject()
        console.log("expanding GGJ24")

    }
    //listen for click anywhere outside the expanded project card - elements outside it
    mainInfo.addEventListener("click",minimizeProject);
    buttonsSection.addEventListener("click",minimizeProject);
}



function minimizeProject() {
    console.log("minimizing project")
    //return the project to its menu form
    currentProject.className = 'project project-card-visible'
    mainInfo.removeEventListener("click",minimizeProject); 
    buttonsSection.removeEventListener("click",minimizeProject);

}
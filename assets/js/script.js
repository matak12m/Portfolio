
let projectSpace = document.getElementById("projects-space")
let mainInfo = document.getElementById("info")
let buttonsSection = document.getElementById("folder-buttons")
let projectsSection = document.getElementById("projects-space")

let allProj = document.getElementsByClassName("project"); //project is a standalone class only for the purposes of this array - may change later

console.log(allProj);

let projName;
let CurrentProjType = "all"


function sortProjects(projType) {
    //changes the visibility of projects in the "projects" space depending on what type they are
    //each button shows a different array of projects
    //the function changes the classes of the elements instead of changing the style directly
    console.log("sorting projects, " + projType)
    CurrentProjType = projType;
   
    
        

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
let storedHTML;

function expandProject(projectCard) {
    console.log("expanding project")
    //expand the card and the inner HTML of the card
    //change the css to project-card-expanded
    //add event listener for clicks outside the project card space
    //change css of all other project cards to hide them
    

    if (projectCard.includes("GGJ24")) {


        currentProject = document.getElementById(projectCard)

        
        storedHTML = '<img src = "assets/img/clowning-around.png"> <br> Global Game Jam 2024'  //stores the minimized version of the card
        

        currentProject.className = 'project project-card-expanded'
        currentProject.innerHTML = ClowningAroundHTML

        for (i = 0; i < allProj.length; i++) {  //hides all other project cards
         

            projName = allProj[i].getAttribute("id");

            if (projName.includes("GGJ24")){  
                //do nothing
            }
            else {
                
                allProj[i].className = 'project project-card-hidden';
               
            }
        } 

    }
    else if (projectCard.includes("GGJ23")) {

        currentProject = document.getElementById(projectCard)

        
        storedHTML = '<img src = "assets/img/Erootica.png"> <br>Global Game Jam 2023'  //stores the minimized version of the card
        

        currentProject.className = 'project project-card-expanded'
        currentProject.innerHTML = ErooticaHTML;

        for (i = 0; i < allProj.length; i++) {  //hides all other project cards
            

            projName = allProj[i].getAttribute("id");

            if (projName.includes("GGJ23")){  
                //do nothing
            }
            else {
                
                allProj[i].className = 'project project-card-hidden';
               
            }
        } 
    }
    else if (projectCard.includes("Hooked")) {

        currentProject = document.getElementById(projectCard)

        
        storedHTML = '<img src = "assets/img/shopWithItems.png"> <br> Hooked!'  //stores the minimized version of the card
        

        currentProject.className = 'project project-card-expanded'
        currentProject.innerHTML = HookedHTML;

        for (i = 0; i < allProj.length; i++) {  //hides all other project cards
           
            projName = allProj[i].getAttribute("id");

            if (projName.includes("Hooked")){  
                //do nothing
            }
            else {
                
                allProj[i].className = 'project project-card-hidden';
               
            }
        } 
    }


    //listen for click anywhere outside the expanded project card - elements outside it
    mainInfo.addEventListener("click",minimizeProject);
    buttonsSection.addEventListener("click",minimizeProject);
}



function minimizeProject() {
    console.log("minimizing project")
    //return the project to its menu form

    for (i = 0; i < allProj.length; i++) {
        //console.log("iterating");

        projName = allProj[i].getAttribute("name");

        if (projName.includes(CurrentProjType)){  //checks if the name of the project includes the keyword

            
            allProj[i].className = 'project project-card-visible';
            
            //console.log("making a project visible");

        }
        else {
            
            allProj[i].className = 'project project-card-hidden';
            //console.log("making a project hidden");
        }
    } 

    currentProject.innerHTML = storedHTML;

    mainInfo.removeEventListener("click",minimizeProject); 
    buttonsSection.removeEventListener("click",minimizeProject);

}
//known bugs: 
//aboutMe() doesn't allow for getting rid of the text upon second call, yet.





let projectSpace = document.getElementById("projects-space")
let mainInfo = document.getElementById("info")
let buttonsSection = document.getElementById("folder-buttons")
let projectsSection = document.getElementById("projects-space")

let aboutMeArticle = document.getElementById("aboutMe")
let learnMoreText = document.getElementById("learnMore")

let AlertContainer = document.getElementById("alert-container")

let BackButton = document.getElementById("back-button");


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
AlertContainer.style.visibility = "visible";
AlertContainer.style.opacity = "1";


}

function closeAlert(){

    AlertContainer.style.visibility = "hidden";
    AlertContainer.style.opacity = "0";

}

let currentProject; //stores the current element being expanded
let storedHTML;

function expandProject(projectCard) {
    console.log("expanding project")
    //expand the card and the inner HTML of the card
    //change the css to project-card-expanded
    //add event listener for clicks outside the project card space
    //change css of all other project cards to hide them
    
  
    
    currentProject = document.getElementById(projectCard);


    currentProject.className = 'project project-card-expanded' //expand the proper card

    if (projectCard.includes("GGJ24")) {      //change the html of the expanded card

        storedHTML = '<img src = "assets/img/clowning-around.png"> <br> Global Game Jam 2024'  //stores the minimized version of the card
        currentProject.innerHTML = ClowningAroundHTML


    }
    else if (projectCard.includes("GGJ23")) {

        
        storedHTML = '<img src = "assets/img/Erootica.png"> <br>Global Game Jam 2023'  //stores the minimized version of the card
        currentProject.innerHTML = ErooticaHTML;

        
    }
    else if (projectCard.includes("Hooked")) {


        
        storedHTML = '<img src = "assets/img/shopWithItems.png"> <br> Hooked!'  //stores the minimized version of the card
        currentProject.innerHTML = HookedHTML;

        
    }
    else if (projectCard.includes("onTheClock")) {

        
        storedHTML = '<img src = "assets/img/clock.png"> <br>On the Clock'  //stores the minimized version of the card
        currentProject.innerHTML = OnTheClockHTML;

        
    }
    else if (projectCard.includes("cheatYourWayThrough")) {

        
        storedHTML = '<img class = "halfImg" src = "assets/img/player-sprite cropped.png"> <img class = "halfImg" src = "assets/img/desk and chair croopped.png"> <br> Cheat Your Way Through'  //stores the minimized version of the card
        currentProject.innerHTML = CheatYourWayThroughHTML;

        
    }
    else if (projectCard.includes("ThreeDArt")) {

        
        storedHTML =  '<img src = "assets/img/3DGreenhouse.png"> <br> 3D modelling project'  //stores the minimized version of the card
        currentProject.innerHTML = ThreeDArtHTML;

        
    }
    else if (projectCard.includes("ToDoApp")) {

        
        storedHTML =  '<img src = "assets/img/ToDoAppDesktopLight.png"> <br> To-Do App design'  //stores the minimized version of the card
        currentProject.innerHTML = ToDoAppHTML;

        
    }
    else if (projectCard.includes("EduSite")) {

        
        storedHTML =  ' <img src = "assets/img/EduSiteThumbnail.png"> <br> Educational Website design'  //stores the minimized version of the card
        currentProject.innerHTML = EduSiteHTML;

        
    }
    
    

    for (i = 0; i < allProj.length; i++) {  //hides all other project cards
           
        projName = allProj[i].getAttribute("id");

        if (projName.includes(projectCard)){  
            //do nothing
        }
        else {
            
            allProj[i].className = 'project project-card-hidden';
           
        }
    }


    //listen for click anywhere outside the expanded project card - elements outside it
    mainInfo.addEventListener("click",minimizeProject);
    buttonsSection.addEventListener("click",minimizeProject);
    BackButton.style.visibility = "visible"
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
    BackButton.style.visibility = "hidden"

}

let aboutMeCounter = 0;
function aboutMe() {

    aboutMeCounter++;

    if (aboutMeCounter == 1) {
        console.log("showing about me")
        learnMoreText.innerHTML = ' to learn less about me.' // fun little detail
       

        aboutMeArticle.innerHTML = aboutMeHTML; 

    }
    else if (aboutMeCounter == 2){
        console.log("hiding about me")
        learnMoreText.innerHTML = ' to learn more about me.' // fun little detail
        

        aboutMeArticle.innerHTML = ""
        aboutMeCounter = 0;

    }
    else {
        console.log("error with about me button")
    }

    

   
}
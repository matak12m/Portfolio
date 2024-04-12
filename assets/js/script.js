


let allProj = document.getElementsByClassName("project"); //project is a standalone class only for the purposes of this array - may change later

console.log(allProj);

let projName;

function sortProjects(projType) {
    //changes the visibility of projects in the "projects" space depending on what type they are
    //each button shows a different array of projects
    //the function changes the classes of the elements instead of changing the style directly
    console.log("sorting projects, " + projType)

   
    
        let selectedProj = document.getElementsByName(projType)
        console.log(allProj);




            for (i = 0; i < allProj.length; i++) {
                console.log("iterating");

                projName = allProj[i].getAttribute("name");

                if (projName.includes(projType)){  //checks if the name of the project includes the keyword

                    
                    allProj[i].className = 'project project-card-visible';
                    
                    console.log("making a project visible");

                }
                else {
                    
                    allProj[i].className = 'project project-card-hidden';
                    console.log("making a project hidden");
                }
            }

}





function copyEmail() {
 navigator.clipboard.writeText("matak12m@seznam.cz");
 alert("email copied!")
}
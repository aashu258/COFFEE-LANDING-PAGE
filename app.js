function toggleMenu(){
    const navlinks = document.getElementById("nav-links");
    const menuicon = document.getElementById("menuicon");
    
    navlinks.classList.toggle("show");

    if(navlinks.classList.contains("show")){
        menuicon.classList.remove("fa-bars");
        menuicon.classList.add("fa-xmark");
    } else{
        menuicon.classList.remove("fa-xmark");
        menuicon.classList.add("fa-bars");
    }
}
let current = "HOME";

function Goto(name){

    if(current == name){
        return
    }
    
    document.getElementById('m-'+current).classList.remove('active');
    document.getElementById('m-'+name).classList.add('active');

    let page = document.getElementById(current);
    let next = document.getElementById(name);
    page.style.width = "0";
    page.style.height = "0";
    page.style.padding = "0";
    next.style.width = "100%";
    next.style.height = "100%";
    current = name;
}
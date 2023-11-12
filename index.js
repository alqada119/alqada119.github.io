
// var click=1;
// button.addEventListener("click",displaynav);
// function displaynav(){
//     
//     if(click%2!=0){button.style.backgroundColor="red"
//     navbar.style.cssText="visibility:visible;backgroundColor:red;transform:scale(1.8);"
//     click++;
//     console.log(click)}
    
//     else{
//         navbar.style.cssText="visibilty:hidden;"
//         click++;
//     }
    
// }
//better way to do it is to set a variable to check state of navbar
//code below
function isElementVisible(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}
function showscrollbar(){
    let showscroll=document.querySelector(".scrollup")
    if (isElementVisible(showscroll)){
        showscroll.style.visibility="visible";
    }
    else{
        showscroll.style.visibility="hidden";
    }
}

window.addEventListener("scroll", showscrollbar);
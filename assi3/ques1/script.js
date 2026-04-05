function go(page){
  history.pushState({}, "", page); // change URL
  load(page);
}

function load(page){
  let app = document.getElementById("app");

  if(page === "about"){
    app.innerHTML = "<h1>About Page</h1>";
  }
  else if(page === "contact"){
    app.innerHTML = "<h1>Contact Page</h1>";
  }
  else{
    app.innerHTML = "<h1>Home Page</h1>";
  }
}

// back/forward support
window.onpopstate = () => {
  load(location.pathname.slice(1));
};

// first load
load("home");
let body = document.body;

// Start Application


let app = document.createElement('div');
app.className = 'appContiner';


let conApp = document.createElement('div');
conApp.className = 'ingAppContiner';


let imgApp = document.createElement('img');
imgApp.src = 'logo.png';
imgApp.className = 'imgApp';


app.appendChild(conApp);
conApp.appendChild(imgApp);
body.appendChild(app);


// End Application

// Start Application Home Page


let appHome = document.createElement('div');
appHome.className = 'app-home';

let taskBar = document.createElement('div');
taskBar.className = 'taskBar';

let iconTaskBar = document.createElement('div');
iconTaskBar.className = 'iconTaskBar';


let spanHeader = document.createElement('span');
spanHeader.className = 'close';

let spanHeader1 = document.createElement('span');
spanHeader1.className = ' ';

let spanHeader2 = document.createElement('span');
spanHeader2.className = 'hide';



iconTaskBar.appendChild(spanHeader);
iconTaskBar.appendChild(spanHeader1);
iconTaskBar.appendChild(spanHeader2);
taskBar.appendChild(iconTaskBar);
appHome.appendChild(taskBar);



body.appendChild(appHome);


// End Application Home Page
imgApp.onclick = function () {
    imgApp.classList.add('scaleOut');
    imgApp.classList.add('scaleOps');
    appHome.classList.add('scaleOutApp');
}
spanHeader.onclick = function () {
    appHome.classList.remove('scaleOutApp');
    imgApp.classList.remove('scaleOut');
    imgApp.classList.remove('scaleOps');
}
spanHeader1.onclick = function () {
    appHome.classList.toggle('scaleCen');
}
spanHeader2.onclick = function () {
    appHome.classList.remove('scaleOutApp');
    imgApp.classList.remove('scaleOut');
    imgApp.classList.remove('scaleOps');
}




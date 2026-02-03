// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    ba(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.textContent = 'CATopalian JavaScript Alarm Clock';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Alarm_Clock';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(170, 170, 170)';
    titleOfApp.style.fontFamily = 'Arial';
    titleOfApp.style.paddingTop = '2px';
    mainDiv.append(titleOfApp);

    //-//

    let clockDiv = ce("div");
    clockDiv.id = "clock";
    mainDiv.append(clockDiv);

    //-//

    let alarm001Input = ce('input');
    alarm001Input.type = 'time';
    alarm001Input.oninput = function()
    {
        inputSound();
    };
    alarm001Input.onchange = function()
    {
        // adds :00 seconds
        setAlarm(alarm001Input.value + ':00');
    };
    mainDiv.append(alarm001Input);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


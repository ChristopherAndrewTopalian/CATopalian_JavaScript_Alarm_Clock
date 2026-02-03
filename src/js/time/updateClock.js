// updateClock.js

function updateClock(whichElement)
{
    // checks if clock exists
    if (ge(whichElement))
    {
        // gets current date and time
        let dateTime = new Date();

        // updates the text on the screen to show the current time (ex. 5:30:00 PM)
        ge(whichElement).textContent = dateTime.toLocaleTimeString('en-US');

        // if an alarm is set AND it hasn't been triggered yet
        if (alarmTime && !alarmTriggered)
        {
            // gets the current time in a format like "17:30:00"
            let current = dateTime.toTimeString().split(' ')[0];

            // checks if the current clock time matches the user's alarm time
            if (current === alarmTime)
            {
                // flips the switch so this 'if' block won't run again
                alarmTriggered = true;

                // plays the sound for the very first second
                alarmSound001();

                // starts a SECOND timer that runs every 1000ms (1 second)
                let alarm001Timer = setInterval(function()
                {
                    // if we haven't reached 10 seconds yet...
                    if (alarm001Counter < 10)
                    {
                        // play the sound again
                        alarmSound001();

                        // add 1 to our count
                        alarm001Counter += 1;
                    }
                    else
                    {
                        // when it hits 10, stop this specific timer
                        clearInterval(alarm001Timer);

                        // reset the counter to 0 for the next time an alarm is set
                        alarm001Counter = 0;
                    }
                }, 1000); // This inner timer runs every 1 second
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


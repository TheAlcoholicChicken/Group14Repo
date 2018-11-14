function load_auth() {  
          scoretobeat = 0;
          //Get elements
          const txtEmail        = document.getElementById('emailInput');
          const txtPassword     = document.getElementById("pwInput");
          const btnLogin        = document.getElementById('loginBtn');
          const btnSignup       = document.getElementById('registerBtn');
          const btnLogout       = document.getElementById('logoutBtn');
          const authmsg         = document.getElementById('authmessage');
          const gameContent     = document.getElementById('gamecontent');
          const btnSave         = document.getElementById('saveBtn');

          //Add Login event
          btnLogin.addEventListener('click', e=> {
              //Get email and password
              console.log("click login");
              const email       = txtEmail.value;
              const pass        = txtPassword.value;
          })
    
          //Add Sign up event
          btnSignup.addEventListener('click', e=> {
                console.log("signup")
                //Get email and password
                const email     = txtEmail.value;
                const pass      = txtPassword.value;
          })
    
          //Add log out event
          btnLogout.addEventListener('click', e=> {
          });
    
        // Get Elements
        var boardPosition     = [];
        var boardName         = [];
        var boardScore        = []; 
        boardPosition         = document.getElementsByClassName('position');
        boardName             = document.getElementsByClassName('boardname');
        boardScore            = document.getElementsByClassName('boardscore');
        
        // Addn save button listener
        btnSave.addEventListener('click', e=> {
                var index               = -1;
                var uname = document.getElementById("addName").value;
                for(let i = 0; i < 5; i++) {
                        if(boardScore[i] == scoretobeat)
                        index = i + 1;
                }                
        });

};

    // Disables button once the word bank is updated
function buttonClicked() {
        tempLetter      = this.getAttribute("id");
        letter          = tempLetter.toLowerCase();
        this.setAttribute("disabled", "disabled");

        checkLetter(letter, scoretobeat);
};

function resetClicked() {
        let buttoncontainer           = document.getElementById("buttonHolder");
        let wordHolder                = document.getElementById("wordHolder");
        let defHolder                 = document.getElementById("defHolder");
        let messagecontainer          = document.getElementById("message");
        buttoncontainer.innerHTML     = "";
        wordHolder.innerHTML          = "";
        defHolder.innerHTML           = "";
        messagecontainer.innerHTML    = "";
        resetChance();
        startGame();
        
};

function to_register() {
        window.location.href="Register.html";
}


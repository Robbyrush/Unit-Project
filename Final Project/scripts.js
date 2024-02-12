document.addEventListener("DOMContentLoaded", function() {

let name = prompt("What is your name?");
let nameHead = document.getElementById("h1");
nameHead.textContent = "Welcome to the Memory Game," + " " + name + "!";

// First Array, stores the game "pieces"
const pieces = ["skele.jpg", "dhunter.jpg", "druid.jpg", "hunter.jpg", "knight.jpg", "mage.jpg", "evoker.jpg",
               "monk.jpg", "paladin.jpg", "priest.jpg", "rogue.jpg", "shaman.jpg", "warlock.jpg", "warrior.jpg",
               "skele.jpg", "dhunter.jpg", "druid.jpg", "hunter.jpg", "knight.jpg", "mage.jpg", "evoker.jpg",
               "monk.jpg", "paladin.jpg", "priest.jpg", "rogue.jpg", "shaman.jpg", "warlock.jpg", "warrior.jpg"]
pieces.sort(()=> 0.5 - Math.random())
    
// Second Array, temporarily holds clicked tiles.
const clicked = [];

// Third Array, stores matches.
const match = [];

// Button
let btn = document.querySelector(".btnRetry");
btn.addEventListener("click", () => {
    location.reload();
});

// Gameboard
for (let i = 0; i < pieces.length; i++)

    {
        // Creating divs to place on the board
        let board = document.createElement("div")
        board.className = "boardPiece";
        document.querySelector(".gameBoard").appendChild(board);

        // Preloading image to place in divs
        let image = new Image();
        image.src = "wow.jpg";
        board.appendChild(image);

        // Click event to swap images
        image.addEventListener("click", () => {
            if (clicked.includes(image)) {
                return;
            }

        image.src = pieces[i];
        clicked.push(image);

        // Uses the 2nd array
        if (clicked.length == 2) 
        {
            let first = clicked[0];
            let second = clicked[1];    

            if (first.src === second.src) 
            {
                clicked.length = 0;

                // Uses the 3rd array
                match.push(first,second);

                    if (match.length == 28) 
                    {
                        alert("Congratulations" + name + ","+" you win!")
                    }
            }
            else 
            {
                // Swaps the image back
                setTimeout(() => 
                {
                    first.src = "wow.jpg";
                    second.src = "wow.jpg";
                }, 300);
            }
            
            
            clicked.length = 0;
        }

        });
    }
});

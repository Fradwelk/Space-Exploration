alert (" Hello there! \n This webstie is all about Space Exploration \n\n It talks about the various equipment we use to study the universe, as well as all the weird and wonderful things we can find in outer space"); 
function validateForm() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "" || password === "") {
                alert("Please fill in all fields");
                return false;
            }
        }
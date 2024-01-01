var user = "";
var temp = "";

window.onload = function(){

    document.getElementById("chat").style.display = "none";

    document.getElementById("senduser").onclick = function(){
        user = document.getElementById("user").value;
        console.log("User is: " + user);

        document.getElementById("chat").style.display = "block";
        document.getElementById("start").style.display = "none";
        temp = setTimeout("loop()", 1000);
    }

    document.getElementById("message").onkeyup = function(e){
        if(e.key == "Enter"){
            let message = this.value;
            console.log("Sent message: " + message);
            this.value = "";
            fetch("server.php?user=" + encodeURI(user) + "&message=" + encodeURI(message));
        }
    }
}

function loop(){
    let date = new Date();
    fetch("messages.json?date=" + date.getUTCSeconds())
        . then(function(response){
            return response.json();
        })
        . then(function(data){
            chain = "";
            for(let i=0; i<data.length; i++){
                chain += `
                    <div class="message">
                        <div class="user">`+data[i].user+`</div>
                        <div class="date">`+data[i].date+`</div>
                        <div class="message">`+data[i].message+`</div>
                    </div>`
            }

            document.getElementById("containsmessages").innerHTML = chain;
            document.getElementById("containsmessages").scrollTop = 100000000;
        })
        .catch(function(error){
            console.log(error)
        })

    clearTimeout(temp);
    temp = setTimeout("loop()", 1000);
}

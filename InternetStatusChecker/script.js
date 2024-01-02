window.addEventListener("load",checkInternetConnection)

function checkInternetConnection(){

    const statusText = document.getElementById("statustext");/*shift+alt+down arrow key to copy*/
    const ipadresstext = document.getElementById("ipadresstext");
    const networktext = document.getElementById("networktext");

    statusText.textContent=" Checking...";

    if(navigator.onLine)
    {
        fetch('https://api.ipify.org?format=json')/*using the ipify api */
        .then((response)=>response.json())
        .then((data)=>{
            ipadresstext.textContent=data.ip; 
            statusText.textContent="Connnected";

            const connection=navigator.connection;

            const networkStrength =connection?connection.downlink+"Mbps":"Unkown";
            networktext.textContent=networkStrength;

        })
        .catch(()=>{/*this tell when the website is down */
        statusText.textContent="Disconnected";
        ipadresstext.textContent="-";
        networktext.textContent="-";
    })

    }
    else{
        statusText.textContent="Disconnected";
        ipadresstext.textContent="-";
        networktext.textContent="-";
    }


}
const hearts = document.getElementsByClassName("heartIcon");
for (let heart of hearts) {
    heart.addEventListener("click", function(e) {
        e.preventDefault();
       document.getElementById("loveCount").innerText = parseInt(document.getElementById("loveCount").innerText) + 1;
    
})};





const copyButtons = document.getElementsByClassName("copyButton");
for (let button of copyButtons) {
    button.addEventListener("click", function(e) {
        e.preventDefault();
         text=button.parentElement.parentElement.children[3].innerText;
         navigator.clipboard.writeText(text);
         document.getElementById("copyCount").innerText = parseInt(document.getElementById("copyCount").innerText) + 1;
         alert( "Number copied "+text);
    })}; 
const callButtons = document.getElementsByClassName("callButton");
for (let button of callButtons) {
   
       
    button.addEventListener("click",function(e){
        e.preventDefault();
        if(parseInt(document.getElementById("goldCount").innerText)<20){
            alert("❌ You don't have enough coins. You must have at least 20 coins to make a call.");
            return;
        }
        alert("📞 Calling " + button.parentElement.parentElement.children[2].innerText+" "+button.parentElement.parentElement.children[3].innerText+"...");
        document.getElementById("goldCount").innerText=parseInt(document.getElementById("goldCount").innerText)-20;
        const historyBox =document.getElementById("historyContent");
        const box=document.createElement("div");
        box.className=`flex flex-row text-[0.8rem] justify-between items-center  p-[10px] m-[10px] rounded-xl bg-gray-100`;
        const left=document.createElement("div");
        left.className=`flex flex-col`;
        const leftUpper=document.createElement("p");
        leftUpper.innerText=button.parentElement.parentElement.children[1].innerText;
        leftUpper.className=`font-bold`;
        const leftDown=document.createElement("p");
        leftDown.innerText=button.parentElement.parentElement.children[3].innerText;
        left.appendChild(leftUpper);
        left.appendChild(leftDown);
        box.appendChild(left);
        

        const right=document.createElement("div");
        right.className=`flex justify-center items-center`;
        const time=document.createElement("p");
        const currentDate = new Date();
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        hours = hours.toString().padStart(2, '0');
        time.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
        right.appendChild(time);
        box.appendChild(right);
        historyBox.appendChild(box);
    })

};

document.getElementById("clearButton").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("historyContent").innerHTML="";
});
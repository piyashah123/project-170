AFRAME.registerComponent("create-buttons",{
    init: function(){
        var button1 = document.createElement("button");
        button1.innerHTML = "RATE US";
        button1.setAttribute("id","rating-button");
        button1.setAttribute("class","btn btn-warning");
        
        var button2 =  document.createElement("button");
        button1.innerHTML = "ORDER NOW  ";
        button1.setAttribute("id","Order-button");
        button1.setAttribute("class","btn btn-warning");

        var buttonDiv = document.getElementById("button-div");
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
    },
    getAllToys : async function(){
        return await firebase
        .firestore()
        .collection("toys")
        .get()
        .then(snap => {
            return snap.docs.map(doc=>doc.data());
        });
    }
});
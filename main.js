var gridParent = document.getElementById("gridParent")

var xLabel = ["a", "b", "c", "alfa", "beta", "gama"]

for(i = 0; i < 6;i++)
{
    var para = document.createElement("p")
    para.appendChild(document.createTextNode(xLabel[i]))
    gridParent.appendChild(para)
}

for(i = 0; i < 6;i++)
{
    var para = document.createElement("input")
    gridParent.appendChild(para)
}

function calculate(){
    //do later
}

function clear_(){
    console.log("cleared");
    for(i = 0;i<6; i++){
        gridParent.children[6+i].value = "";
    }
}
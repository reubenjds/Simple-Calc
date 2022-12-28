const operators = ["/","*","-","+"];


function handleClick(evt) {
    var node = evt.target || evt.srcElement;
    
    if (operators.includes(node.name)) {
        var text = document.getElementById('myDiv').innerText;
        var last = text.charAt(text.length-1)
        if (operators.includes(last)) {
            let r = text.replace(last,node.name);
            document.getElementById('myDiv').innerHTML = r;
        } else {
            document.getElementById('myDiv').innerHTML += node.name
        }
        
    }
    else if (node.name === "+/-") {
        num = parseFloat(document.getElementById('myDiv').innerText);
        num *=-1;
        console.log(document.getElementById('myDiv'));
        document.getElementById('myDiv').innerHTML = num;

    }
    else if (node.name === "%") {
        document.getElementById('myDiv').innerHTML = parseFloat(document.getElementById('myDiv').innerText) / 100;
    }
    else if (node.name === "=") {
        document.getElementById('myDiv').innerHTML = eval(document.getElementById('myDiv').innerText);
    }
    else if (node.name === "."){
        if (!(document.getElementById('myDiv').innerHTML.includes("."))) {
            document.getElementById('myDiv').innerHTML += node.name;
        }
        
    }
    else if (node.name === "AC"){
        document.getElementById('myDiv').innerHTML = 0;
        operators.forEach(operator => {
            document.getElementById(operator).style.backgroundColor = 'orange';
        });
    }
    else if (node.name != undefined) {
        if (document.getElementById('myDiv').innerHTML === "0.") {
            document.getElementById('myDiv').innerHTML += node.name;
        }
        else if (document.getElementById('myDiv').innerHTML == 0) {
            document.getElementById('myDiv').innerHTML = node.name;
        } else {
            document.getElementById('myDiv').innerHTML += node.name;
        }
        
    }
  }


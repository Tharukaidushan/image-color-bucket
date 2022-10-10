let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),

outputHex = document.querySelector('.hexColor'),
outputRGB = document.querySelector('.rgbColor'),
outputText = document.querySelector('.hexText'),
outputRGBText = document.querySelector('.rgbText'),


recentColorsDiv = document.querySelector('.recent-colors'),
recentColors = [],
noti = document.querySelector('.notify'),
canvasImage;

window.onload = getImagePreview(false, 'image/demo.jpg')

function getImagePreview(event, img)
  {
    event ? image = URL.createObjectURL(event.target.files[0]) : image = img;
    const newimg = new Image();
    newimg.src =  image
    // var newimg=document.createElement('canvas');
    canvas.style.borderRadius = "15px"
    newimg.onload = function () {
        var height = this.height;
            if (height > "4000") {
                newimg.width= "500";
                canvas.width = newimg.width;
                canvas.height = "600";

            } else {
                newimg.width= "500";
                canvas.width = newimg.width;
                canvas.height = "400";
            }
                ctx.drawImage(newimg, 0, 0, canvas.width, canvas.height);
            }
            canvasImage=newimg;

        }
    


  // Active Choose file btn

  const defaultBtn = document.querySelector("#upload_file")
  const customBtn = document.querySelector("#customBtn")

  function defaultBtnActive(){
    defaultBtn.click();

  }

  //Get MouseMove Color
  const getColorMouseMove = function(evt){
    hex = extractColor(evt)
    outputHex.style.background = hex;
    outputText.value = hex;
    let hexCode = outputText.value;
    let rgbArr = [];
    if(/^#?[A-Fa-f0-9]{6}$/.test(hexCode)) {
        hexCode = hexCode.split("#")[1] || hexCode;
        for(let i=0; i<hexCode.length; i+=2){
            rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
        }
        outputRGBText.value = "rgb("+ rgbArr + ")";
        outputRGB.style.background = "rgb("+ rgbArr + ")";
    }
}

//GetColor mouse click and add color palet box
var c = 0;
var count = 1;
function getColorMouseClick() {
    if(c < 5) {
        hexValue = outputText.value;
        const spanEl = document.createElement("span");
        spanEl.innerHTML = "";
        spanEl.style.backgroundColor = hexValue;
        spanEl.setAttribute("class", "color-box");
        spanEl.setAttribute("id", "color-box-sp-"+count+"");
        const newText = document.createElement("p");
        newText.innerHTML = hexValue;
        newText.style.color = "#ffffff";
        newText.setAttribute("class", "color-code");
        // Append to another element:
        document.getElementById("color-palet-box").appendChild(spanEl);
        document.getElementById("color-box-sp-"+count+"").appendChild(newText);
        count++;
        c++;
    } else{
        alert("Maximum color plate size has 5 plates");
    }
}



//  function to extract pixel data and convert to hex
function extractColor(evt){
    // img.crossOrigin = "Anonymous";
    let {data} = ctx.getImageData(evt.offsetX, evt.offsetY, 1, 1),
    rgb = `rgb(${data[0]}, ${data[1]}, ${data[2]})`
    return RGBToHex(rgb)
}


// function to display recent colors on screen
function showRecentColors(color){
    console.log(recentColors);
    recentColorsDiv.innerHTML = ''
    if(recentColors.length<=0){
        return;
    }else{
        recentColors.slice(0, 18).forEach(color=>{
            let span = document.createElement('span');
            span.classList.add('color');
            span.style.backgroundColor = color;
            span.setAttribute('onclick', 'getRecentColorCode(this)')
            recentColorsDiv.appendChild(span);
        })
    }
}

// Get Recent Color onclick color selector
function getRecentColorCode(el){
    let rgb = window.getComputedStyle(el).getPropertyValue('background-color')
    let bgColor = RGBToHex(rgb)
    copyColor(bgColor);
    notify(bgColor)
}

// function to copy the color on click
// function copyColor(color){
//     let elem = document.createElement("textarea");
//     document.body.appendChild(elem);
//     elem.value = color;
//     elem.select();
//     document.execCommand("copy");
//     document.body.removeChild(elem);
// }

// function to convert rgb to hex
function RGBToHex(color) {
    // Choose correct separator
    let sep = color.indexOf(",") > -1 ? "," : " ";
    // Turn "color(r,g,b)" into [r,g,b]
    color = color.substr(4).split(")")[0].split(sep);
  
    let r = (+color[0]).toString(16),
        g = (+color[1]).toString(16),
        b = (+color[2]).toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    //   outputRGB.nextElementSibling.innerText = "rgb("+r+','+g+','+b+")";
    return "#" + r + g + b;
  }



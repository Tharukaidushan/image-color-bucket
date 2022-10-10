<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link type="text/css" rel="stylesheet" href="magiczoomplus/magiczoomplus.css"/>
    <script type="text/javascript" src="magiczoomplus/magiczoomplus.js"></script>
    <title>Image Color Bucket</title>
</head>
<style>

</style>
<body>

<div class="header">
    <nav>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Color thems</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        <img src="image/Logo.png" class="logo">
        <div>
            <a href="#" class="sign-up-btn">Sign Up</a>
            <a href="#" class="join-btn">Join Now</a>
        </div>
    </nav>

    <div class="container">
        <h1>Pick Your Color from Image</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam saepe, natus distinctio, a non pariatur fugiat quidem laboriosam ipsam.</p>

        <div class="row">
            <div class="col-1">
                <div id="image-holder">
                    
                    <canvas id="canvas" ondblclick='getColorMouseClick()' onmousemove="getColorMouseMove(event)">
                </div>
                <input type="file" accept="image/*" name="upload_file" id="upload_file" onchange="getImagePreview(event)" hidden>
                <button class="uplod-btn" id="customBtn" onclick="defaultBtnActive()">Choose Image</button>
            </div>
            <div class="col-2">
                <span class="picker-topic">Copy color code here</span>
                <div class="color-pickers">
                    <div>
                        <span class="hexColor"></span><input type="text"class="text hexText"><i class="fa-solid fa-copy"></i>
                    </div>
                    <div>
                        <span class="rgbColor"></span><input type="text"class="text rgbText"><i class="fa-solid fa-copy"></i>
                    </div>
                </div>

                <div class="color-palet" id="color-palet-box">
                    
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">


</div>

 


</body>
<script src="js/app.js"></script>

</html>
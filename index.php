<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tempELOELOE</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="header">30 Secondes</div>
    
    <div class="vragen">
        
    </div>
    <div >
        <a href="#"             class="antwoord" id="antwoord1" >
        <a href="#"             class="antwoord" id="antwoord2" >
        <a href="#"             class="antwoord" id="antwoord3" >
        <a href="#"             class="antwoord" id="antwoord4" >
    </div>

    <div class="timer">
        <progress  id="progress" min="0" value="100" max="100"></progress>
        <br>
            <button id="button" onclick="move()">Click Me</button> 
        </br>
    </div>
     
    <script>
    function move() {
        let progress = document.getElementById('progress');
        if(progress.value != 0) {
            progress.value = progress.value - (1/5)
            setTimeout(move, 60)
        }
    }
</script>
</body>

</html>
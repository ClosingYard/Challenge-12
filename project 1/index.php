<?php
    require_once("database.inc.php");
    $sql = "SELECT * FROM vraag";
    $result = getData($sql);
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>30seconds groep9</title>
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
    <?php
        foreach($result as $key=>$value) {
            print_r($value);
        }
    ?>



    <div class="header">30 Seconds <progress  id="progress" min="0" value="100" max="100"></progress></div>
    
    <div class="vragen">
          <p id="vraag" style='display: none'>HIER MOETEN DE VRAGEN INKOMEN</p>
          <button class="button" type='button' onclick="toggleText()&move()">Click mij</button>
    </div>

    <div>
        <a href="#"             class="antwoord" id="antwoord1" >
        <a href="#"             class="antwoord" id="antwoord2" >
        <a href="#"             class="antwoord" id="antwoord3" >
        <a href="#"             class="antwoord" id="antwoord4" >
    </div>

    <!-- <div class="timer">
        <progress  id="progress" min="0" value="100" max="100"></progress>
    </div> -->
     
    
    <script>
    function move() {
        let progress = document.getElementById('progress');
        if(progress.value != 0) {
            progress.value = progress.value - (1/5)
            setTimeout(move, 60)
        }
    }


    function toggleText() {
            var text = document.getElementById("vraag");
            if (text.style.display === "none") {
              text.style.display = "block";
            } else {
              text.style.display = "none";
            }
          }
</script>
</body>

</html>
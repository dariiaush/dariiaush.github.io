<?php

$daysn = date('t',$_POST["date"]);
$percent = 0.9;
$daysy = 365 + date('L',$_POST["date"]);

$year = $_POST["time"][2];

if (isset($_POST["refill"])) { 
    $dR = ($_POST["refill"]);
        if ($dR == "yes") {
            $result = $_POST["sum"] + ($_POST["sum"] + $_POST["deposit"]) * $daysn * ($percent / $daysy);
            echo json_encode($result);
        } else {
            $result = $_POST["sum"] + $_POST["sum"] * $daysn * ($percent / $daysy);
            echo json_encode($result);
        }
}

?>
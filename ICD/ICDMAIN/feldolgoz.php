

<?php
$conn = new mysqli('localhost', 'root', '', 'adattarolo');

if($conn->connect_error){
    die("Hiba:" . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nev = $_POST['nev'];
    $email = $_POST['Email'];
    echo "Név: $nev <br>";
    echo "Email: $email <br>";

    $sql = "INSERT INTO adatok (Név, email) VALUES ('" . $nev . "' , '" . $email . "')";

    echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "Sikeres hozzáadás";
    }
    else{
        echo "Hiba történt";
    }
}
else{
    echo "Hiba";
}
?>
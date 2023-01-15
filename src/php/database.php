<?php
    # Zugangsdaten
    $db_server = 'rdbms.strato.de';
    $db_benutzer = 'dbs5963972';
    $db_passwort = '#Kemmeten1985!';
    $db_name = 'dbu205794'; 
    
    $mysqli = new mysqli($db_server, $db_benutzer, $db_passwort,  $db_name);
    if($mysqli->connect_error) {
        exit('Could not connect');
    } else {
        echo "Connected...";
    }

    $sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
    FROM customers WHERE customerid = ?";

    $stmt = $mysqli->prepare($sql);
    $stmt->execute();
    $stmt->fetch();
    $stmt->close();

    echo "test...";
?>
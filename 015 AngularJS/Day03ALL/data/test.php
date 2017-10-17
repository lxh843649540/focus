<?php

header("Content-Type:application/json");

@$name = $_REQUEST['name'];

$result = [];
$result = [
'tip'=> 'welcome '.$name
];

echo json_encode($result);

?>
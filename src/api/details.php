<?php
/**
 * @Author: Marte
 * @Date:   2018-02-08 11:17:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 13:28:03
 */
require('connect.php');

$id = isset($_GET['id']) ? $_GET['id'] : '0001';

$sql = "select * from goodslist where gid=$id";

$data = $conn->query($sql);

$res = $data->fetch_assoc();

echo json_encode($res);

$conn->close();
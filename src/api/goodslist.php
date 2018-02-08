<?php
/**
 * @Author: Marte
 * @Date:   2018-02-08 08:59:20
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 13:28:01
 */
require('connect.php');

 $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
 $qty = isset($_GET['qty']) ? $_GET['qty'] : 20;


$sql = "select * from goodslist";

$set = $conn->query($sql);

$data = $set->fetch_all(MYSQLI_ASSOC);

$res = array(
    'data'=>array_slice($data,($pageNo -1)*$qty,$qty),
    'total'=>count($data),
    'pageNo'=>$pageNo,
    'qty'=>$qty
);


echo json_encode($res,JSON_UNESCAPED_UNICODE);

$conn->close();


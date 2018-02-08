<?php
/**
 * @Author: Marte
 * @Date:   2018-02-08 15:22:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 17:30:06
 */
require('connect.php');

$sql = "select * from shopcar";

$data = $conn->query($sql);

$data = $data->fetch_all(MYSQLI_ASSOC);

$res = array(
    'data'=>$data,
    'count'=>count($data),
    );

echo json_encode($res,JSON_UNESCAPED_UNICODE);
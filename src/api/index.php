<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 19:17:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-07 21:12:03
 */
require('connect.php');

//获取所有
$sql = "select * from goodslist";

//获取葡萄酒种类
$sql1 = "select * from goodslist where category='红葡萄酒'";
//获取洋酒烈酒
$sql2 = "select * from goodslist where category='洋酒'";
//获取中国白酒
$sql3 = "select * from goodslist where category='白酒'";
//获取陈年老酒
$sql4 = "select * from goodslist where category='老酒'";
//获取酒具
$sql5 = "select * from goodslist where category='酒具'";


$all = $conn->query($sql);
$wineset = $conn->query($sql1);
$xoset = $conn->query($sql2);
$chinaBjset = $conn->query($sql3);
$oldWineset = $conn->query($sql4);
$set = $conn->query($sql5);


$wine = $wineset->fetch_all(MYSQLI_ASSOC);
$xo = $xoset->fetch_all(MYSQLI_ASSOC);
$chinaBj = $chinaBjset->fetch_all(MYSQLI_ASSOC);
$oldWine = $oldWineset->fetch_all(MYSQLI_ASSOC);
$set = $set->fetch_all(MYSQLI_ASSOC);
$goodslist = $all->fetch_all(MYSQLI_ASSOC);

$res = array(
    'wine'=>$wine,
    'xo'=>$xo,
    'chinaBj'=>$chinaBj,
    'oldWine'=>$oldWine,
    'set'=>$set,
    'goodslist'=>$goodslist
);

// echo json_encode($res,JSON_UNESCAPED_UNICODE);
echo json_encode($res,JSON_UNESCAPED_UNICODE);
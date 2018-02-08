<?php
/**
 * @Author: Marte
 * @Date:   2018-02-08 13:16:20
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 16:52:28
 */
require('connect.php');

$id = isset($_GET['id'])?$_GET['id']:'';
$goodsname = isset($_GET['goodsname'])?$_GET['goodsname']:'';
$price = isset($_GET['price'])?$_GET['price']:'';
$imgurl = isset($_GET['imgurl'])?$_GET['imgurl']:'';
$qty = isset($_GET['qty'])?$_GET['qty']: 1 ;
$isdelete = isset($_GET['isdelete'])?$_GET['isdelete']: '';

echo $qty;
$sql = "select * from shopcar where gid='$id'";



$goods = $conn->query($sql);
//添加到购物车表
if($goods->num_rows == 0){

    $sql1 = "insert into shopcar(gid,goodsname,price,qty,imgurl) values($id,'$goodsname','$price','$qty','$imgurl')";

    $res = $conn->query($sql1);

    if($res){
        echo 'success';
    }else{
        echo 'fail';
    }
}
//更新购物车表
else{
    $data = $goods->fetch_assoc();

    $count = $data['qty'];

    $count+=$qty;

    $sql_update = "update shopcar set qty='$count' where gid='$id'";

    $res = $conn->query($sql_update);

    if($res){
        echo "update_success";
    }else{
        echo "update_fail";
    }
}
//删除购物车商品数据
if($isdelete == true){
    $sql_delete = "delete from shopcar where gid=$id";

    $res = $conn->query($sql_delete);

    if($res){
        echo 'delete_success';
    }else{
        echo 'delete_fail';
    }
}

$conn->close();
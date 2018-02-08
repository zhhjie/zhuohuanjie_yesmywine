<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 13:42:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 17:54:30
 */
    require('connect.php');
    
    $uname = isset($_GET['uname'])?$_GET['uname']:'';
    $pwd = isset($_GET['pwd'])?$_GET['pwd']:'';

    $pwd = md5($pwd);

    $data = $conn->query("select * from userlist where user='$uname'");
    
    // var_dump($data);
    if($data->num_rows == 0){
        // 密码md5加密  

        
        // 写入数据sql语句
        $sql = "insert into userlist(user,password) values('$uname','$pwd')";
    
        $res = $conn->query($sql);
    
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }else{
        echo 'fail';
    }
$conn->close();
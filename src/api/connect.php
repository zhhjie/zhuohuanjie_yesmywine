<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 13:39:13
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-07 13:42:32
 */

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'yesmywine';

//创建链接

$conn = new mysqli($servername,$username,$password,$dbname);

// 检测连接
// 如果失败提示错误信息
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
// 设置字符集
$conn->set_charset('utf8');
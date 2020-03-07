<?php
  $umail = $_POST['mail'];
  $upass = $_POST['pass'];
  $link = mysqli_connect('localhost', 'root', 'root', 'project');
  $sql = "SELECT * FROM `email` WHERE `mail`='$umail' AND `password`='$upass'";
  $res = mysqli_query($link, $sql);
  $row = mysqli_fetch_assoc($res);
  mysqli_close($link);
  if ($row) {
    $arr = array("message" => "登录成功", "code" => 1);
  } else {
    $arr = array("message" => "登录失败", "code" => 0);
  }
  print_r(json_encode($arr));

?>

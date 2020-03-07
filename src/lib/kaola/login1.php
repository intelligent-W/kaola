<?php
  $utel = $_POST['tel'];
  $upsd = $_POST['password'];
  $link = mysqli_connect('localhost', 'root', 'root', 'project');
  $sql = "SELECT * FROM `tel` WHERE `tel`='$utel' AND `password`='$upsd'";
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

<?php
    require_once("../../init.php");
    function getIndexBanner(){
        global $conn;
        $sql =  "SELECT * FROM index_banner_carousel";
        $result = mysqli_query($conn,$sql);
        $banner = mysqli_fetch_all($result ,1);
        echo json_encode($banner);
    }

    function getIndexTopic() {
        global $conn;
        $sql = "SELECT * FROM index_commend_topic ORDER BY peoplecount";
        $result = mysqli_query($conn,$sql);
        $topic = mysqli_fetch_all($result,1);
        echo json_encode($topic);
    }
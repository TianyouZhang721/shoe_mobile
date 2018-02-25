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

    function getIndexTopicCommend() {
        global $conn;
        $sql= "SELECT tid,avator,author_name,release_date,content,topic,imgs,view_like FROM today_commend";
        $result = mysqli_query($conn,$sql);
        $message = mysqli_fetch_all($result,1);
        $output = [];
        $output["message"] = $message;
        $sql = "SELECT comment FROM today_commend";
        $result = mysqli_query($conn,$sql);
        $comment = mysqli_fetch_all($result,1);
        $output["comment"] = $comment;
        $sql = "SELECT reply FROM today_commend";
        $result = mysqli_query($conn,$sql);
        $reply = mysqli_fetch_all($result,1);
        $output["reply"] = $reply;
        echo json_encode($output);
    }
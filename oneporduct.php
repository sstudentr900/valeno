<?php
    require_once 'includefun.php';
    $value = $_SERVER['QUERY_STRING'];
    $valueall = explode('=',$value);
    $id = end($valueall);
    if(!$id){
        echo "<script>window.location='index.php';</script>";
    }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="bower/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="bower/tinymce/codepen.min.css">
  </head>
  <body>
    <div id="wrapper">
      <div class="contenttop" id="oneporduct">
<!--        <div class="nav">-->
<!--          <div class="top">-->
<!--            <div class="left"><img src="img/logo.jpg" alt=""></div>-->
<!--            <div class="right">-->
<!--              <h2>0800-000-070</h2>-->
<!--              <p>周一到周日 9:00-18:00</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="bottom row no-gutters align-items-center">-->
<!--            <div class="left col-lg-7">-->
<!--              <ul class="list-inline">-->
<!--                <li><a href="index.php">首頁</a></li>-->
<!--                <li><a href="#">關於品牌</a></li>-->
<!--                <li><a href="#">產品介紹</a></li>-->
<!--                <li><a href="#">通路資訊</a></li>-->
<!--                <li><a href="#">防伪查詢</a></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="right col-lg-5">-->
<!--              <div class="serch">-->
<!--                <input class="form-control" type="text" placeholder="查詢商品">-->
<!--                <button class="btn btn-block" type="submit">查詢</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
          <?php
          require_once 'nav.php';
          ?>
        <div class="header"></div>
        <div class="content oneporductContent">
            <?php
            $pros=oneGetPrduct($id);
            if(!$pros){
                echo "<script>window.location='index.php'</script>";
            }
            //                print_r($pros);
            foreach($pros as $pro):
            ?>
            <div class="row no-gutters item">
                <div class="col-sm-5">
                    <div class="left">
                        <img src="<?php echo $pro['Cover'];?>" class="img-responsive">
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="right">
                        <h2><?php echo $pro['Pname'];?></h2>
                        <p><?php echo $pro['Content'];?></p>
                        <p class="price">NT$<?php echo $pro['Price'];?></p>
                    </div>
                </div>
            </div>
            <div class="row no-gutters item">
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">商品特色</button>
                    <button class="tablinks" onclick="openCity(event, 'Paris')">商品規格</button>
                    <button class="tablinks" onclick="openCity(event, 'Tokyo')">退/換貨需知</button>
                </div>

                <div id="London" class="tabcontent mce-content-body">
<!--                    <span onclick="this.parentElement.style.display='none'" class="topright">x</span>-->
                    <?php echo $pro['features'];?>
                </div>

                <div id="Paris" class="tabcontent mce-content-body">
                    <?php echo $pro['specification'];?>
                </div>

                <div id="Tokyo" class="tabcontent mce-content-body">
                    <?php echo $pro['returns'];?>
                </div>
            </div>
            <?php
            endforeach;
            ?>
            <div class="headerbottom row no-gutter" id="headNew">
                <?php
                $newPrducts = getNewPrduct();
                foreach($newPrducts as $newPrduct):
                    ?>
                    <div class="col-sm-4">
                        <div class="item row no-gutters">
                            <div class="left col-lg-6">
                                <h4><?php echo $newPrduct['Pname'];?></h4>
                                <p class="text-two"><?php echo $newPrduct['Content'];?></p>
<!--                                <p class="price">$--><?php //echo $newPrduct['Price'];?><!--</p>-->
                                <a href="oneporduct.php?id=<?php echo $newPrduct['id'];?>" class="btn">看更多..</a>
                            </div>
                            <div class="right col-lg-6">
                                <p><img src="<?php echo $newPrduct['Cover'];?>" class="img-responsive"></p>
                            </div>
                        </div>
                    </div>
                <?php endforeach;?>
            </div>
        </div>
      </div>
        <script>
            function openCity(evt, cityName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(cityName).style.display = "block";
                evt.currentTarget.className += " active";
            }

            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();
        </script>
      <div class="footer">
        <div class="row no-gutters">
          <div class="left col-md-8">
            <p>POWERERMF BY <span>OPENCADS</span> JKLFJ @ 2017
            </p>
          </div>
          <div class="right col-md-4">
            <ul class="list-inline">
              <li><a href="#">
                  <p><i class="fa fa-facebook"></i>twitter</p></a></li>
              <li><a href="#">
                  <p><i class="fa fa-twitter"></i>facebook</p></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
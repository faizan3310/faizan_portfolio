<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = 'About';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="heading">
    <h1>Our Product</h1>
    <p>Show Now, Buy Now & Get Best Discount Ever</p>
   
</div>


<section class="category">

    <h1 class="title"> Our <span>Category</span> </h1>

    <div class="box-container">

        <a href="/site/category?category_id=Fruits" class="box">
            <img src="/image/cat-1.png" alt="">
            <h3>Fruits</h3>
        </a>

        <a href="/site/category?category_id=Vegetables" class="box">
            <img src="/image/cat-2.png" alt="">
            <h3>Vegetables</h3>
        </a>

        <a href="/site/category?category_id=Dairy Product" class="box">
            <img src="/image/cat-3.png" alt="">
            <h3>Dairy Products</h3>
        </a>

         <a href="/site/category?category_id=Other Items" class="box">
            <img src="/image/cat-5.png" alt="">
            <h3>Other Items</h3>
        </a>

     <!--    <a href="#" class="box">
            
            <h3>Others</h3>
        </a> -->

       

    </div>

</section>

<section class="products">

    <h1 class="title"> Our <span>products</span>  </h1>

    <div class="box-container">
    	<div class="row">
            <?php 
            if (Yii::$app->user->id) {
                $u_id = Yii::$app->user->id;
            }else{
                $u_id = NULL;
            }
            foreach($product as $val){ 
                $p_id = $val['id'];
                ?>
                <div class="col-md-3 form-group">
                <div class="box itemcard">           
                    <div class="image">
                        <?php $pi = $val['file_path'] ? $val['file_path'] : 'image/a1.jpg' ?>
                        <img src="/<?= $pi ?>" alt="">
                    </div>
                    <div class="content">
                        <h3><?= $val['name'] ?></h3>
                        <div class="price"><?= $val['rate'] ?>/- Per <?= $val['unit_msr'] ?> 
                        <?php 
                         if (Yii::$app->user->id) {
                        $cadded = Yii::$app->db->createCommand("SELECT * FROM user_cart WHERE user_id = $u_id AND product_id =  $p_id")->queryOne(); 
                        if(empty($cadded)){
                            $cadded = NULL;
                        }
                    }else{
                         $cadded = NULL;
                    }
                        ?>

                        <?php if($cadded){ ?>
                            <span style="color: green; font-size: 10px;">Added</span>
                        <?php }else{ ?>
                             <a href="/site/additemtocart?p_id=<?= $p_id ?>" class="fas fa-shopping-cart"></a>
                        <?php } ?>
                         

                    </div>   
                                 
                    </div>
                </div>
            </div>
            <?php } ?>
    		
    		
    	</div>
    	

    </div>

</section>
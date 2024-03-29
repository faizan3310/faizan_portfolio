<?php



use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\helpers\Url; 

$model = new \app\models\LoginForm;
?>

<header class="header">

    <a href="/" class="logo"> <i class="fas fa-shopping-basket"></i> Grocery Shopping </a>

    <nav class="navbar">
        <a href="/">Home</a>
        <a href="/site/category">Category</a>
        <a href="/site/about">About</a>
       <!--  <a href="site/review">review</a>
        <a href="site/blog">blog</a> -->
        <a href="/site/contact">Contact</a>
    </nav>

    <div class="icons">
        <div id="menu-btn" class="fas fa-bars"></div>
        <div id="search-btn" class="fas fa-search" style="display: none;"></div>
       
            <a href="/site/checkout" style="font-size: 22px;">
                <i class="fas fa-shopping-cart"></i>
                 <?php 
                         if (Yii::$app->user->id) {
                        $cadded = Yii::$app->db->createCommand("SELECT * FROM user_cart WHERE user_id =".Yii::$app->user->id)->queryAll(); 
                        if(empty($cadded)){
                            $cartcount = NULL;
                        }else{
                          $cartcount = sizeof($cadded);
                        }
                    }else{
                         $cartcount = NULL;
                    }
                        ?>

                <small style="color: red;"><?= $cartcount ?></small>
            </a>
       
        <div id="login-btn" class="fas fa-user"></div>
    </div>

    
    


    <div class="login-form">
       <?php
    if(Yii::$app->user->id){
        echo 'Hello <b>'.(Yii::$app->user->identity->first_name.' '.Yii::$app->user->identity->last_name).'</b>';
        echo   Html::a('Logout',['/site/logout'],['title'=> 'Hi '.Yii::$app->user->identity->username.' click to sign out' ,'data-method' => 'post','class'=> 'btn btn-warning']);

    }else{
      if(Yii::$app->session->has('user')){
    $user = Yii::$app->session->get('user');
     echo 'Hello <b>'.($user['name']).'</b>';
       echo  Html::a('Logout',['/site/alogout'],['title'=> 'Hi '.$user['name'].' click to sign out' ,'data-method' => 'post','class'=> 'btn btn-warning']);
      }else{ ?>
        <h1>Login Form</h1><hr>
       <?php $form = ActiveForm::begin([
        'id' => 'login-form',
       
       'action'=>'/site/login'
    ]); ?>

        <?= $form->field($model, 'username')->textInput(['autofocus' => true])->label('Email Id') ?>

        <?= $form->field($model, 'password')->passwordInput() ?>

        <!--?= $form->field($model, 'rememberMe')->checkbox([
            'template' => "<div class=\"col-lg-offset-1 col-lg-3\">{input} {label}</div>\n<div class=\"col-lg-8\">{error}</div>",
        ]) ?-->


                <?= Html::submitButton('Login', ['class' => 'btn btn-warning', 'name' => 'login-button']) ?>
         
    <?php ActiveForm::end(); ?>
    <p>Don't have an Account? <a href="/site/register">Create Account</a></p>
  <?php  }
    } ?>
  </div>
        
   

   
</header>

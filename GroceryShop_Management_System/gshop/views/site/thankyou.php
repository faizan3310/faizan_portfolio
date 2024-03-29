<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\widgets\Alert;
/* @var $this yii\web\View */
/* @var $model app\models\Product */
/* @var $form yii\widgets\ActiveForm */
?>
<style type="text/css">
	.fade:not(.show){
		opacity: 1;
	}
</style>
<div class="heading">
<h1>Thank You</h1>
   <p>Be a part of us</p>
</div>
<section class="register">
	<div style="border: 1px solid black; padding: 20px; font-size: 20px;">
		  <?= Alert::widget() ?>
	</div>
</section>
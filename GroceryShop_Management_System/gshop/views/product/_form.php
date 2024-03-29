<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Product */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="product-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'type')->dropdownlist(['Fruits'=>'Fruits','Vegetables'=>'Vegetables','Dairy Product'=>'Dairy Product','Other Items'=>'Other Items'],['prompt'=>'Please select product category']) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

   
    <?= $form->field($model, 'unit_msr')->dropdownlist(['KG'=>'KG','Ltr'=>'Ltr','Pcs'=>'Pcs'],['prompt'=>'Please select unit'])->label('Unit of Measure') ?>


    <?= $form->field($model, 'rate')->textInput() ?>

    

   <?php if($model->file_path){ ?>
     <b>Product Image</b> If you want to update the product image then <a href="/product/upimage?id=<?= $model->id ?>">click Here</a><br>      <br>    
        <img src="/<?= $model->file_path ?>" style="height: 150px;" > 
    <?php }else{
        if($model->id){ ?>
             Upload product image <a href="/product/upimage?id=<?= $model->id ?>">click Here</a><br>      <br>  
        
   <?php }else{ 
    echo $form->field($model, 'file_path')->fileInput();
    }
    } ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>

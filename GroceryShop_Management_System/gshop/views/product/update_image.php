<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
/* @var $this yii\web\View */
/* @var $model app\models\Product */

$this->title = 'Update Product Image : ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Products', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="product-update">

    <h3><?= Html::encode($this->title) ?></h3>
    <?php $form = ActiveForm::begin(); ?>

   <?php if($model->file_path){ ?>
     <b>Old Product Image</b> <br>      <br>    
        <img src="/<?= $model->file_path ?>" style="height: 150px;" > 
    <?php }
        echo $form->field($model, 'update_file_path')->fileInput();
     ?>
      <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>
   

</div>

<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Product */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Products', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="product-view">

    <h3>Product Detail View</h3>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <!--?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?-->
    </p>
<div class="row">
<div class="col-md-6">
     <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'type',
            'name',
            'unit_msr',          
            'rate',
            
        ],
    ]) ?>
</div>
<div class="col-md-6">
   <?php if($model->file_path){ ?>
        <b>Product Image</b><br>      <br>    
        <img src="/<?= $model->file_path ?>" style="height: 150px;" > 
   <?php }else{ ?>
        <b>Default Image</b><br>      <br>    
        <img src="/image/a1.jpg" style="height: 150px;" > 
   <?php } ?>
   <br><br>Note: Press Ctrl+F5 if product image not appear
</div>
</div>
   
  

</div>

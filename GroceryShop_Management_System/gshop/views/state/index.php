<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'States';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="state-index">

    <h3><?= Html::encode($this->title) ?></h3>

   

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'state',
            'tin_no',
            'code',

           // ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>

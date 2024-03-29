<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'All Sale Bills';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="sale-index">

    <h3><?= Html::encode($this->title) ?></h3>

    <p>
        <?= Html::a('Sale Report', ['report'], ['class' => 'btn btn-success']) ?>
    </p>


    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'summary'=>'',
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

       
           
             ['header'=>'Order Details','format'=>'raw','value'=>function($data){
                return 'ID: '.$data->invoice_no.' <br> Date: '.date('d M Y',strtotime($data->invoice_date));
            }],
            ['header'=>'User Details','format'=>'raw','value'=>function($data){
                return $data->user->first_name.' '.$data->user->last_name.' <br> '.$data->user->mobile;
            }],
            'total_bill',
            'delivery_charge',
            'net_amt',            
            'invoice_status',

            ['class' => 'yii\grid\ActionColumn','template'=>'{view}'],
        ],
    ]); ?>


</div>

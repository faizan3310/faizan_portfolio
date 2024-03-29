<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\ActiveForm;
use kartik\date\DatePicker;
use kartik\select2\Select2;
/* @var $this yii\web\View */
/* @var $model app\models\Productstock */

$this->title = 'Completed Sale Between Date Report';
//$this->params['breadcrumbs'][] = 'Reports';
//$this->params['breadcrumbs'][] = $this->title;

?>

    <h3><?= Html::encode($this->title) ?></h3>
    
    <div class="panel panel-warning">
    <div class="panel-heading">
        <div class="row">
            <?php
            $form = ActiveForm::begin(['id' => 'bws', 'method' => 'get']);
           
            ?>

            <div class="col-lg-2">

                <?=
               $form->field($model, 'from_date')->widget(
                    DatePicker::className(), [
                'type' => DatePicker::TYPE_INPUT,
                'options' => ['readonly' => true],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'dd-mm-yyyy'
                ]
            ]);
                ?>
            </div>
            <div class="col-lg-2">

                <?=
                $form->field($model, 'to_date')->widget(
                    DatePicker::className(), [
                'type' => DatePicker::TYPE_INPUT,
                'options' => ['readonly' => true],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'dd-mm-yyyy'
                ]
            ]);
                ?>
            </div>
          
            <div class="form-group col-lg-2" style="margin-top: 25px;">
                <?= Html::submitButton(Yii::t('yii', 'Search'), ['class' => 'btn btn-warning']) ?>
            </div>
          
          
            <?php ActiveForm::end(); ?>
        </div>
    </div>
    <div class="panel-body">

    <?= GridView::widget([
        'dataProvider' => $model->sale_btw_date(),
        'summary'=>'',
         'showFooter' => TRUE,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

       
           
             ['header'=>'Order Details','format'=>'raw','value'=>function($data){
                return 'ID: '.$data->invoice_no.' <br> Date: '.date('d M Y',strtotime($data->invoice_date));
            }],
            ['header'=>'User Details','format'=>'raw','footer' => '<b class="pull-right">Total</b>','value'=>function($data){
                return $data->user->first_name.' '.$data->user->last_name.' <br> '.$data->user->mobile;
            }],
            ['header' => 'Total Bill', 'format' => 'raw', 'footer' => '0', 'value' => function($model, $key, $index, $obj) {
                $obj->footer+=$model->total_bill;
                return $model->total_bill;
            }],
            ['header' => 'Delivery Chanrge', 'format' => 'raw', 'footer' => '0', 'value' => function($model, $key, $index, $obj) {
                $obj->footer+=$model->delivery_charge;
                return $model->delivery_charge;
            }],
            ['header' => 'Net Amt', 'format' => 'raw', 'footer' => '0', 'value' => function($model, $key, $index, $obj) {
                $obj->footer+=$model->net_amt;
                return $model->net_amt;
            }],

              ['header' => 'Order Status', 'format' => 'raw', 'value' => function($model, $key, $index, $obj) {
               
                return $model->invoice_status;
            }],
       
         

           
        ],
    ]); ?>

    </div>
</div>
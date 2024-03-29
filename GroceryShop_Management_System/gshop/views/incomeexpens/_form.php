<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\select2\Select2;
use kartik\date\DatePicker;
/* @var $this yii\web\View */
/* @var $model app\models\IncomeExpens */
/* @var $form yii\widgets\ActiveForm */
$model->date = $model->date ? $model->date : date('d-m-Y');
?>

<div class="income-expens-form">

    <?php $form = ActiveForm::begin(['action'=>'/incomeexpens/create']); ?>
<div class="row">
	<div class="col-md-3">
        <?=
                $form->field($model, 'type')->widget(Select2::classname(), [
                    'data' =>['Income'=>'Income','Expenses'=>'Expenses'],
                    'language' => 'en',
                    'options' => ['placeholder' => 'Select...'],
                    'pluginOptions' => [
                        'allowClear' => FALSE                        
                    ],
                   
                ])->label('Which type');
                ?>
    
</div>
<div class="col-md-9">
    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>
    </div>
    </div>
<div class="row">
	<div class="col-md-4">
    <?= $form->field($model, 'amount')->textInput() ?>
    </div>
<div class="col-md-4">
     <?= $form->field($model, 'date')->widget(
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
    <div class="col-md-4 form-group" style="margin-top: 25px;">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>
</div>
    <?php ActiveForm::end(); ?>

</div>

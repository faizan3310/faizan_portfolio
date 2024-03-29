<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\IncomeExpens */

$this->title = 'Update Income Expens: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Income Expens', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="income-expens-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>

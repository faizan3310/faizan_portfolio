<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\IncomeExpens */

$this->title = 'Create Income Expens';
$this->params['breadcrumbs'][] = ['label' => 'Income Expens', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="income-expens-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>

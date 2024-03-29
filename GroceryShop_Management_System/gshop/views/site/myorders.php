<?php

use yii\helpers\Html;
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

<div class="coutheading">
<h1 style="color: #222;
  font-size: 4rem;">My Orders</h1>
  <p style="font-size: 20px;">You can also track your existing order</p>

</div>

<section>
  <div style="padding: 20px; font-size: 20px;">
      <?= Alert::widget() ?>
  </div>
	<h1 class="title"> Order <span>History</span> </h1>
	
	 <table class="table table-responsive table-bordered" width="100%" style="font-size: 18px;">
               <tr>
                   <th>Sr No.</th>
                   <th>Order Id</th>
                   <th>Order Date</th>
                   <th>Bill Amount</th>
                   <th>Status</th>
                   <th>Action</th>
               </tr>
               <?php foreach($myorder as $key=>$val){ 
                $id = $val->id;
                ?>
                 <tr>
                     <td width="10%"><?= $key+1 ?></td>
                     <td width="20%"><?= $val->invoice_no ?></td>
                     <td width="30%"><?= date('d M Y',strtotime($val->invoice_date)) ?></td>
                     <td width="10%"><?= $val->net_amt ?></td>
                     <td width="30%"><?= $val->invoice_status ?></td>
                     <td width="20%"><a href="/site/orderdetails?s_id=<?= $id ?>">View</a></td>
                 </tr>
               <?php } ?>
              
               
           </table>
</section>
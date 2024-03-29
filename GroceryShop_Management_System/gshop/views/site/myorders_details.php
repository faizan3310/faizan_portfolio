<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Product */
/* @var $form yii\widgets\ActiveForm */
?>


<div class="coutheading">
<h1 style="color: #222;
  font-size: 4rem;">My Orders Details</h1>
  <p style="font-size: 20px;">You can also track your existing order</p>

</div>

<section>
 
	<h1 class="title"> Order <span>Details</span> 
    <a href="/site/myorder">Go Back</a>
  </h1>	
	 <table class="table table-responsive table-bordered" width="100%" style="font-size: 18px;">
               <tr>                  
                   <th>Order Id</th>
                   <th>Order Date</th>
                   <th>Sub Total</th>
                   <th>Delivery Charges</th>
                   <th>Bill Amount</th>
                   <th>Status</th>
                  
               </tr>
              
                 <tr>                     
                     <td width="20%"><?= $myorder->invoice_no ?></td>
                     <td width="30%"><?= date('d M Y',strtotime($myorder->invoice_date)) ?></td>
                      <td width="10%"><?= $myorder->total_bill ?></td>
                       <td width="10%"><?= $myorder->delivery_charge ?></td>
                     <td width="10%"><?= $myorder->net_amt ?></td>
                     <td width="30%"><?= $myorder->invoice_status ?></td>
                    
                 </tr>
                         
           </table>
           <table class="table table-responsive table-bordered" width="100%" style="font-size: 18px;">
               <tr>
                   <th>Sr No.</th>
                   <th>Product</th>
                   <th>Qty</th>
                   <th>Rate</th>
                   <th>Amount</th>
                  
               </tr>
               <?php foreach($detail as $key=>$val){ 
              
                ?>
                 <tr>
                     <td width="10%"><?= $key+1 ?></td>
                     <td width="80%"><?= $val->product->name.'-'.$val->product->type ?></td>
                     <td width="10%"><?= $val->qty ?></td>
                     <td width="10%"><?= $val->rate ?></td>
                     <td width="30%"><?= $val->amount ?></td>                    
                 </tr>
               <?php } ?>              
           </table>
</section>
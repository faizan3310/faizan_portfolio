
<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
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
  font-size: 4rem;">Checkout Page</h1>
  <p style="font-size: 20px;">Complete the process & Buy</p>

</div>

<section class="register">
	<div style="padding: 20px; font-size: 20px;">
		  <?= Alert::widget() ?>
	</div>
	 <?php $form = ActiveForm::begin(); ?>
  <h1 class="title"> Customer <span>Details</span> 
  	<a href="/site/category">Add More Items</a>
  </h1>
   <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt">Customer Name</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<label class="flt"><b>
	 			<?= Yii::$app->user->id ? (Yii::$app->user->identity->first_name.' '.Yii::$app->user->identity->last_name) : 'NA' ?></b>
	 		</label>
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt">Contact Number</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<label class="flt"><b>
	 		<?= Yii::$app->user->id ? Yii::$app->user->identity->mobile : 'NA' ?>
	 		</b></label>
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt">Delivery Address</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<input type="text" name="address" placeholder="Please enter the full address of delivery" class="form-control" required="true">
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt">Payment Method</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<label class="flt"><b>
	 		COD (cash On Delivery)
	 	</b></label>
	 	</div>
	 </div>
 <h1 class="title"> Items <span>Details</span> </h1>
   <div class="row" style="font-size: 20px; text-align: center;">
	  	<div class="col-md-8">Product description</div>
	  	<div class="col-md-2">Total Amount</div>
	  	<div class="col-md-2">Action</div>
	  </div>
<hr>

<!-- add foreach loop of cartuser -->
<?php  
$total_amt = $final_amt = 0;
 foreach($cartproduct as $val){  
	$id = $val->id;
	?>
	  <div class="row">
	  	<div class="col-md-8">
	  		<div class="row">
	  			<div class="col-lg-5">
	  				 <?php $pi = $val->product->file_path ? $val->product->file_path : 'image/a1.jpg' ?>
		  		 <img src="/<?= $pi ?>" alt="" width="100px;" height="100px;">
		  	    </div>
		  	    <div class="col-lg-7" style="font-size: 18px;">
		  	    	<?= $val->product->name ?> <br> Qty: <b>  <?= $val->qty ?> </b> <a href="/site/manageorderitem?uc_id=<?= $id ?>&action=p">+</a> <a href="/site/manageorderitem?uc_id=<?= $id ?>&action=n">-</a> 
		  	    	<br> Rate: <b>  <?= $val->rate ?>/- </b> Per <?= $val->product->unit_msr ?>
		  	    </div>
		  		
		  	</div>
	  	</div>
	  	<div class="col-md-2" style="font-size: 20px; text-align: right;">
	  		<?= $val->amount ?>
	  	</div>	 
	  	<div class="col-md-2" style="text-align: center;">
	  		<a href="/site/manageorderitem?uc_id=<?= $id ?>&action=d" class="btn btn-danger"><i class="fa fa-trash"></i></a>
	  	</div> 	
	 </div>
	 <hr>
	<?php
		$total_amt = $val->amount+$total_amt;

	 } ?>
	  	<!-- End loop here -->	
	 

	 <h1 class="title"> Order <span>Details</span> </h1>
	 <div class="row">
		 <div class="col-sm-3" style="text-align: right;">
		 		<label class="flt">Total Order Amount</label>
		 	</div>
	 	<div class="col-sm-9">
	 		<label class="flt"><b>
	 			<?= $total_amt ?>
	 			<input type="hidden" name="total_bill" value="<?= $total_amt?>">
	 		</b></label>
	 	</div>
	 </div>
	  <div class="row">
		 <div class="col-sm-3" style="text-align: right;">
		 		<label class="flt">Delivery Charges</label>
		 	</div>
	 	<div class="col-sm-9">
	 		<label class="flt"><b>
	 			<?php if($total_amt>=500){
	 				 $d_amt = 0;
	 			}else{
	 				$d_amt=  30; 
	 				} 

echo $d_amt;
	 				?>
	 		</b></label>
	 	</div>
	 </div>
	  <div class="row">
		 <div class="col-sm-3" style="text-align: right;">
		 		<label class="flt">Final Bill Amount</label>
		 	</div>
	 	<div class="col-sm-9">
	 		<label class="flt"><b>
	 			<?= $total_amt+$d_amt ?>
	 		</b></label>
	 	</div>
	 </div>
	 <br>
	 <span style="font-size: 14px; color: red;">Note:- Free delivery on order of 500/- Rs or above</span>
		
		 <div class="row">
		 	<div class="col-sm-12" style="text-align: center;">
			    <div class="form-group">
			    	<input type="checkbox" name="tc" required="">
			         <span style="font-size: 15px; margin-top: -5px;">Terms & Condition</span>
			    </div>
			</div>
			<div class="col-sm-12" style="text-align: center;">
			    <div class="form-group">
			     <button class="btn btn-warning">
			     	<span style="font-size: 20px;">Checkout</span>
			     </button>
			    </div>
			</div>
		</div>
  <?php ActiveForm::end(); ?>
</section>
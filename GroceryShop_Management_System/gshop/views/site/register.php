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
<div class="heading">
<h1>Create Your Account</h1>
   
</div>
<section class="register">
	<div style="border: 1px solid black; padding: 20px;">
	<h1>User Registration Form</h1><hr>
	 <?php $form = ActiveForm::begin(); ?>
	  <?= Alert::widget() ?>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt" >First Name</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<input type="text" name="fn" class="form-control" required="true">
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt" >Last Name</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<input type="text" name="ln" class="form-control" required="true">
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt" >Email ID</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<input type="email" name="email" class="form-control" required="true">
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt" >Mobile No.</label>
	 	</div>
	 	<div class="col-sm-9">
	 		<input type="number" name="mobile" class="form-control" required="true">
	 	</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt" >Password</label>
	 	</div>
	 	<div class="col-sm-5">
	 		<input type="password" autocomplete="false" name="mainpass" id="mainpass" class="form-control" required="true">
	 		
	 	</div>
	 	<div class="col-sm-4">
		 	<input type="checkbox" onclick="myFunction()">
		 	<span style="font-size: 12px; margin-top: -5px;">Show Password</span>
		</div>
	 </div>
	 <div class="row">
	 	<div class="col-sm-3" style="text-align: right;">
	 		<label class="flt" >Confirm Password</label>
	 	</div>
	 	<div class="col-sm-5">
	 		<input type="password" name="cpassword" id="cpassword" class="form-control" required="true">	 		
	 	</div>
	 	<div class="col-sm-4">
		 	<input type="checkbox" onclick="myFunction2()">
		 	<span style="font-size: 12px; margin-top: -5px;">Show Confirm Password</span>
		</div>
	 </div>
	 <hr>
	  <div class="row">
	  	<div class="col-sm-3" style="text-align: right;">
	 		
	 	</div>
	 	<div class="col-sm-9">
	 		<input type="checkbox" name="tc" required="">
			         <span style="font-size: 15px; margin-top: -5px;">A Terms and Conditions agreement (T&Cs) is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access our website</span>
	 	</div>
	 	
	 	
	 </div>
	 
      <hr>
 <div class="row">
	 	<div class="col-sm-12" style="text-align: center;">
    <div class="form-group">
     <button class="btn btn-warning">
     	<span style="font-size: 20px;">Submit</span>
     </button>
    </div>
</div>
</div>

    <?php ActiveForm::end(); ?>
	</div>
</section>

<?php $this->registerJs('$("#mainpass, #cpassword").blur(function(){
	checkpass();
})') ?>
<script type="text/javascript">
	function checkpass(){
		var mainpass = $("#mainpass").val();
		if(mainpass){
			var cpassword = $("#cpassword").val();
			if(cpassword){
				if(mainpass==cpassword){
					return true;
				}else{
					$("#cpassword").val("");
					alert('Password does not match');
				}
			}else{

			}
		}else{
			alert('');
		}
	}

	function myFunction() {
	  var x = document.getElementById("mainpass");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	}
	function myFunction2() {
	  var x = document.getElementById("cpassword");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	}
</script>
<?php $records = \app\models\IncomeExpens::gettodaysTotal();
 ?>
 <span class="text-warning">For more records go to report
<a href="/incomeexpens/bdr">Click Here</a>
 </span>
 <hr style="margin-top: -1px;">
<div class="row">
	<div class="col-md-6">
		<div class="panel panel-success">
			<strong class="text-success" style="padding: 5px;">Today Incomes</strong>
			<div class="panel-body">
				<span style="color: green; font-size: 18px;">
					<?= $records['in'] ?>
				</span>
			</div>
		</div>
	</div>
	<div class="col-md-6">
		<div class="panel panel-danger">
			<strong class="text-danger" style="padding: 5px;">Today Expenses</strong>
			<div class="panel-body">
				<span style="color: red; font-size: 18px;">
					<?= $records['exp'] ?>
				</span>
			</div>
		</div>
	</div>
	<div style="font-size: 18px; text-align: center;">
		Business Today : <?php $total = $records['in']-$records['exp'] ;

if($total>0){
  echo '<span style="color:green;">'.$total.'</span>';
}else{
	echo '<span style="color:red;">'.$total.'</span>';
}
		?>

	</div>
</div>
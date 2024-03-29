<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\grid\GridView;
$this->title = 'G-Shop | Dashboard';
?>
<div class="row">
	<!-- <div class="col-md-7">
		  <div class="panel panel-default">
			<div class="panel-heading">
				Today's Income & Expenses
			</div>
			<div class="panel-body">
				<1?= $this->render('/incomeexpens/_form',['model'=>$model]) ?>
				<1?= $this->render('/incomeexpens/today_summary') ?>
			</div>
		</div>
	</div> -->

	
    <div class="col-md-8">
       <div class="row">
           <div class="col-md-4">
               <div class="panel panel-danger">
                
                   <div class="panel-heading">
                       Pending Orders
                   </div>
                   <a href="/default/dashboard?status=pending">
                   <div class="panel-body">
                       <span style="font-size: 20px;" class="text-danger"><?= $pending['c'] ?></span>
                   </div>
                   </a> 
                </div>
           </div>
           <div class="col-md-4">
               <div class="panel panel-warning">
               
                   <div class="panel-heading">
                       In Process
                   </div>
                   <a href="/default/dashboard?status=process">
                   <div class="panel-body">
                       <span style="font-size: 20px;" class="text-warning"><?= $process['c'] ?></span>
                   </div>
                   </a> 
                </div>
            </div>
           <div class="col-md-4">
               <div class="panel panel-info">
              
                   <div class="panel-heading">
                       Order Delivered
                   </div>
                   <a href="/default/dashboard?status=delivered">
                   <div class="panel-body">
                       <span style="font-size: 20px;" class="text-info"><?= $delivered['c'] ?></span>
                   </div>
                   </a> 
                </div>
           </div>
           <!-- <div class="col-md-3">
               <div class="panel panel-success">
                   <div class="panel-heading">
                       Ordered Completed
                   </div>
                   <div class="panel-body">
                       <span style="font-size: 20px;" class="text-success"><1?= $completed['c'] ?></span>
                   </div>
                </div>
           </div> -->
       </div>
       <div class="row">
       <div class="col-md-12">
        <span class="text-info"><b>Note</b> :- Below table update upon order status. And only Pending, Process & Delivered Orders are shown</span>
           <table class="table table-responsive table-bordered">
               <tr>
                   <th>Sr No.</th>
                   <th>Order Details</th>
                   <th>Cutomer Details</th>
                   <th>Bill Amount</th>
                   <th>Status</th>
                   <th>Action</th>
               </tr>
               <?php foreach ($ppd_sale  as $key => $value) { ?>
                  <tr>
                   <td><?= $key+1 ?></td>
                   <td>ID: <b><?= $value->invoice_no ?></b> <br> Date: <?= date('d M Y',strtotime($value->invoice_date)) ?></td>
                   <td><b><?= $value->user->first_name.' '.$value->user->last_name ?> </b><br><i class="glyphicon glyphicon-map-marker"></i> <?= $value->address ?> <i class="glyphicon glyphicon-phone"></i> <?= $value->user->mobile ?></td>
                   <td><b><?= $value->net_amt ?></b> /-</td>
                   <?php if($value->invoice_status=='pending'){
                      $label_class='danger';
                      $link_label = 'Take Order';  
                      $url = '/sale/saledetail?s_id='.$value->id;                     
                   }else{
                      if($value->invoice_status=='process'){
                        $label_class='warning';
                        $link_label = 'Deliver Order';
                        $url = '/sale/saledetail?s_id='.$value->id; 
                      }else{
                        if($value->invoice_status=='delivered'){
                            $label_class='info';
                            $link_label = 'Confirm Payment & Complete';
                            $url = '/sale/saledetail?s_id='.$value->id; 
                        }else{
                            $label_class='default';
                            $link_label = 'Completed';
                        }
                      }
                   } ?>
                   <td><span class="label label-<?= $label_class ?>"><?= $value->invoice_status ?></span></td>
                   <td><a href="<?= $url ?>"><?= $link_label ?></a></td>
               </tr>
             <?php  } ?>
             
               
           </table>
       </div>
       </div>
    </div>

    <div class="col-md-4">
        <div style="border: 1px solid #ccc; padding: 10px;">
        <h3 style="text-align: center;">Shopkeeper Detail's</h3>
        <?= DetailView::widget([
        'model' => $company,
        'attributes' => [
            'name',
            'owner',
            'address',
            'contact',

           
        ],
    ]) ?>
     <div class="panel panel-default">
       <div class="panel-heading">
           Total Products In Store
       </div>
       <div class="panel-body">
           <span style="font-size: 20px;" class="text-default"><?= $totalproduct['c'] ?></span>
       </div>
    </div>
  
    </div>
</div>
	
</div>

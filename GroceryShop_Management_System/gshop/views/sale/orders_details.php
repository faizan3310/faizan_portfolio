<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Sale */

$this->title = 'Order Details';
$this->params['breadcrumbs'][] = ['label' => 'Sales', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="sale-view">

    <h3><?= Html::encode($this->title) ?></h3>


    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
         
            'invoice_no',
            'invoice_date',
             ['label'=>'User Details','format'=>'raw','value'=>function($data){
                return $data->user->first_name.' '.$data->user->last_name.' <br> '.$data->user->mobile;
            }],
           
           'address',
           'invoice_status'
           
        ],
    ]) ?>

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
                     <td width="30%" style="text-align: right;"><?= $val->amount ?></td>                    
                 </tr>
               <?php } ?> 
               <tr style="text-align: right;">
                   <td colspan="4">Total Bill</td>
                   <td><?= $model->total_bill ?></td>
               </tr>    
                 <tr style="text-align: right;">
                   <td colspan="4">Delivery Charge</td>
                   <td><?= $model->delivery_charge ?></td>
               </tr>    
                 <tr style="text-align: right;">
                   <td colspan="4">Final Bill Amount</td>
                   <td><?= $model->net_amt ?></td>
               </tr>    
    
           </table>

           <?php 
           $note =NULL;
           if($model->invoice_status=='pending'){
                      $label_class='danger';
                      $link_label = 'Yes! I Confirm To Take Order';                                         
                   }else{
                      if($model->invoice_status=='process'){
                        $label_class='warning';
                        $link_label = 'Confirm & Deliver The Order';
                        $note = 'Before delivering the order cross check all items and bill';
                      }else{
                        if($model->invoice_status=='delivered'){
                            $label_class='info';
                            $link_label = 'Confirm Payment & Complete This Order';
                            $note = 'Before completing the order confirm payment you get with final bill amount';
                        }else{
                            $label_class='default';
                            $link_label = 'Completed';
                        }
                      }
                   } ?>
                   <?php if($note){?>
                <div style="color: red;">
                    <b>Note: </b><?=  $note ?>   
                </div>  
                <?php } ?>

          <?php if($model->invoice_status!='completed'){?>
            <div style="text-align: center;">
                <a href="/sale/orederstatuschange?s_id=<?= $model->id ?>" class="btn btn-<?= $label_class ?> col-xs-12"><?= $link_label ?></a>        
             </div>
         <?php } ?>
</div>

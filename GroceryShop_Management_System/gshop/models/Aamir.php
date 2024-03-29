<?php

namespace app\models;

use yii\helpers\ArrayHelper;

class Aamir {

   
    public static function alltax() {
        return [5 => '5% GST', 12 => '12% GST', 18 => '18% GST', 28 => '28% GST'];
    }
    public static function deelstatus(){
         return [1 => 'Current', 2 => 'Dhara'];
    }
public static function billstatus(){
         return [Status::UNPAID => 'UNPAID',  Status::PARTIAL_PAID=>'PARTIAL PAID', Status::PAID => 'PAID'];
    }
    public static function show() {
        $model = '<div class = "modal fade" id = "myModal"  styles="overflow:hidden" role = "dialog" aria-labelledby = "myModalLabel" aria-hidden = "true">
        <div class = "modal-dialog">
            <div class = "modal-content">
                <div class = "modal-header">
                    <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;
                        </span></button>
                    <h4 class = "modal-title" id = "myModalLabel"></h4>
                </div>
                <div id = "modal-body-content">
                    <h4></h4>
                </div>
                <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
     
      </div>
            </div>
        </div>
    </div>';

        return $model;
    }

    public static function datediffrence($start_date, $end_date, $format) {
        $start = date_create($start_date);
        $end = date_create($end_date);
        $diff = date_diff($start, $end);
        return $diff->format($format) + 1;
    }
     public static function moneyFormatIndia($number){
        if($number<0){
            $number=abs($number);
            $explrestunits = "" ;
    $decimal=substr($number,-3);
    $num=substr($number,0,-3);
    if(strlen($num)>3){
        $lastthree = substr($num, strlen($num)-3, strlen($num));
        $restunits = substr($num, 0, strlen($num)-3); // extracts the last three digits
        $restunits = (strlen($restunits)%2 == 1)?"0".$restunits:$restunits; // explodes the remaining digits in 2's formats, adds a zero in the beginning to maintain the 2's grouping.
        $expunit = str_split($restunits, 2);
        for($i=0; $i<sizeof($expunit); $i++){
            // creates each of the 2's group and adds a comma to the end
            if($i==0)
            {
                $explrestunits .= (int)$expunit[$i].","; // if is first value , convert into integer
            }else{
                $explrestunits .= $expunit[$i].",";
            }
        }
        $thecash = $explrestunits.$lastthree;
    } else {
        $thecash = $num;
    }
    return "-".$thecash.$decimal.' &#8377;'; // writes the final format where $currency is the currency symbol.
        }
    else{
        $explrestunits = "" ;
    $decimal=substr($number,-3);
    $num=substr($number,0,-3);
    if(strlen($num)>3){
        $lastthree = substr($num, strlen($num)-3, strlen($num));
        $restunits = substr($num, 0, strlen($num)-3); // extracts the last three digits
        $restunits = (strlen($restunits)%2 == 1)?"0".$restunits:$restunits; // explodes the remaining digits in 2's formats, adds a zero in the beginning to maintain the 2's grouping.
        $expunit = str_split($restunits, 2);
        for($i=0; $i<sizeof($expunit); $i++){
            // creates each of the 2's group and adds a comma to the end
            if($i==0)
            {
                $explrestunits .= (int)$expunit[$i].","; // if is first value , convert into integer
            }else{
                $explrestunits .= $expunit[$i].",";
            }
        }
        $thecash = $explrestunits.$lastthree;
    } else {
        $thecash = $num;
    }
    return $thecash.$decimal.' <i class="fa fa-rupee"></i>'; // writes the final format where $currency is the currency symbol.
    }
}

 public static function getallcity(){
         $items=  ArrayHelper::map(Customer::find()->all(),'city',function($data){
           return $data->city;
       });
       return $items;
    }
    
    public static function paymentBy(){
          return ['Cash' => 'Cash', 'Cheque' => 'Cheque','RTGS'=>'RTGS','Net Banking'=>'Net Banking'];
    }
    
    public static function statuslabel($s){
        $status_label = NULL;
        switch ($s){
            case Status::PAID :
                $status_label = '<span class="label label-success">PAID</span>' ;  
                break;
            case Status::PARTIAL_PAID :
                $status_label = '<span class="label label-warning">PARTIAL PAID</span>' ;
                break;
            case Status::UNPAID :
                $status_label = '<span class="label label-danger">UNPAID</span>' ;
                break;
        }
        return $status_label;
    }
    
    public static  function getIndianCurrency($number)
{
    $decimal = round($number - ($no = floor($number)), 2) * 100;
    $hundred = null;
    $digits_length = strlen($no);
    $i = 0;
    $str = array();
    $words = array(0 => '', 1 => 'one', 2 => 'two',
        3 => 'three', 4 => 'four', 5 => 'five', 6 => 'six',
        7 => 'seven', 8 => 'eight', 9 => 'nine',
        10 => 'ten', 11 => 'eleven', 12 => 'twelve',
        13 => 'thirteen', 14 => 'fourteen', 15 => 'fifteen',
        16 => 'sixteen', 17 => 'seventeen', 18 => 'eighteen',
        19 => 'nineteen', 20 => 'twenty', 30 => 'thirty',
        40 => 'forty', 50 => 'fifty', 60 => 'sixty',
        70 => 'seventy', 80 => 'eighty', 90 => 'ninety');
    $digits = array('', 'hundred','thousand','lakh', 'crore');
    while( $i < $digits_length ) {
        $divider = ($i == 2) ? 10 : 100;
        $number = floor($no % $divider);
        $no = floor($no / $divider);
        $i += $divider == 10 ? 1 : 2;
        if ($number) {
            $plural = (($counter = count($str)) && $number > 9) ? 's' : null;
            $hundred = ($counter == 1 && $str[0]) ? ' and ' : null;
            $str [] = ($number < 21) ? $words[$number].' '. $digits[$counter]. $plural.' '.$hundred:$words[floor($number / 10) * 10].' '.$words[$number % 10]. ' '.$digits[$counter].$plural.' '.$hundred;
        } else $str[] = null;
    }
    $Rupees = implode('', array_reverse($str));
    $paise = ($decimal) ? "." . ($words[$decimal / 10] . " " . $words[$decimal % 10]) . ' Paise' : '';
    return ($Rupees ? $Rupees . 'Rupees Only' : '')  ;
}

}

?>

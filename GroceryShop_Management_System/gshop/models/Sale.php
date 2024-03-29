<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "sale".
 *
 * @property int $id
 * @property string|null $invoice_no
 * @property string|null $invoice_date
 * @property int|null $user_id
 * @property float|null $total_bill
 * @property float|null $delivery_charge
 * @property float|null $net_amt
 * @property string|null $invoice_status pending, process, delivered, completed
 *
 * @property Users $user
 */
class Sale extends \yii\db\ActiveRecord
{
    public $from_date;
    public $to_date;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sale';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['invoice_date','address','from_date','to_date'], 'safe'],
            [['user_id'], 'integer'],
            [['total_bill', 'delivery_charge', 'net_amt'], 'number'],
            [['invoice_no', 'invoice_status'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'invoice_no' => 'Order No',
            'invoice_date' => 'Order Date',
            'user_id' => 'User ID',
            'total_bill' => 'Total Bill',
            'delivery_charge' => 'Delivery Charge',
            'net_amt' => 'Net Amt',
            'invoice_status' => 'Order Status',
        ];
    }

     public static function getinvoceno(){
         $model =  Yii::$app->db->createCommand('SELECT IFNULL (max(id),0)+1 as max FROM sale');
        $no = $model->queryScalar();
        return date('dmy').$no;
    }

     /**
     * Gets query for [[User]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(Users::className(), ['id' => 'user_id']);
    }

     public function sale_btw_date(){
     
         $query =   self::find()->where(['between', 'invoice_date', date('Y-m-d', strtotime($this->from_date)),  date('Y-m-d', strtotime($this->to_date))])->andWhere(['invoice_status'=>'completed']);
     
       return $dataProvider = new \yii\data\ActiveDataProvider([
            'query' => $query,
        ]);
    }
}

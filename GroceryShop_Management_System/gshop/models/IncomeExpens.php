<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "income_expens".
 *
 * @property int $id
 * @property string|null $type
 * @property string|null $description
 * @property float|null $amount
 * @property string|null $date
 */
class IncomeExpens extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'income_expens';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['amount'], 'number'],
            [['date'], 'safe'],
            [['type'], 'string', 'max' => 50],
            [['description'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'type' => 'Type',
            'description' => 'Description',
            'amount' => 'Amount',
            'date' => 'Date',
        ];
    }
      /**
     * 
     * @return type Date format Db save and view
     */
     public function beforeValidate() {
        $this->date =  date("Y-m-d",  strtotime($this->date));      
        return parent::beforeValidate();
    }

    public function afterFind() {
        $this->date  =  date('d-m-Y', strtotime($this->date));        
        return parent::afterFind();
    }

    public static function gettodaysTotal(){
        $in = Yii::$app->db->createCommand("SELECT sum(amount) as amt from income_expens where type = 'Income' AND income_expens.date='".date('Y-m-d')."'")->queryOne();
         $exp = Yii::$app->db->createCommand("SELECT sum(amount) as amt from income_expens where type = 'Expenses' AND income_expens.date='".date('Y-m-d')."'")->queryOne();

         return ['in'=>$in['amt'],'exp'=>$exp['amt']];
    }
}

<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;
/**
 * This is the model class for table "state".
 *
 * @property int $id
 * @property string|null $state
 * @property int|null $tin_no
 * @property string|null $code
 *
 * @property BuyersParty[] $buyersParties
 * @property PurchaseParty[] $purchaseParties
 */
class State extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'state';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['tin_no'], 'integer'],
            [['state'], 'string', 'max' => 50],
            [['code'], 'string', 'max' => 5],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'state' => 'State',
            'tin_no' => 'Tin No',
            'code' => 'Code',
        ];
    }

    /**
     * Gets query for [[BuyersParties]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getBuyersParties()
    {
        return $this->hasMany(BuyersParty::className(), ['state_id' => 'id']);
    }

    /**
     * Gets query for [[PurchaseParties]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getPurchaseParties()
    {
        return $this->hasMany(PurchaseParty::className(), ['state_id' => 'id']);
    }

    
     public static function getallstate(){
         $items=  ArrayHelper::map(self::find()->all(),'id',function($data){
           return $data->state.' - '.$data->tin_no;
       });
       return $items;
    }
}

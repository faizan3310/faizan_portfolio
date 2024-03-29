<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "sale_detail".
 *
 * @property int $id
 * @property int|null $s_id
 * @property int|null $pro_id
 * @property int|null $qty
 * @property float|null $rate
 * @property float|null $amount
 *
  * @property Product $product
 * @property Sale $sale
 */
class SaleDetail extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sale_detail';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['s_id', 'pro_id', 'qty'], 'integer'],
            [['rate', 'amount'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            's_id' => 'S ID',
            'pro_id' => 'Pro ID',
            'qty' => 'Qty',
            'rate' => 'Rate',
            'amount' => 'Amount',
        ];
    }

     /**
     * Gets query for [[Product]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProduct()
    {
        return $this->hasOne(Product::className(), ['id' => 'pro_id']);
    }

    /**
     * Gets query for [[User]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getSale()
    {
        return $this->hasOne(Sale::className(), ['id' => 's_id']);
    }
}

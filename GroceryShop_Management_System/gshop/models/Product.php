<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product".
 *
 * @property int $id
 * @property string|null $type
 * @property string|null $name
 * @property string|null $unit_msr
 * @property float|null $rate
 */
class Product extends \yii\db\ActiveRecord
{
    public $update_file_path;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'product';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['type','name','rate','unit_msr'],'required'],
            [['rate'], 'number'],
            [['type', 'unit_msr'], 'string', 'max' => 50],
            [['name'], 'string', 'max' => 100],
            [['file_path','update_file_path'],'safe']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'Product Code',
            'type' => 'Category',
            'name' => 'Product Name',
            'unit_msr' => 'Unit of Measure',
            'rate' => 'Rate',
            'file_path' => 'Upload New Product Image',
            'update_file_path'=>'Update New Product Image',
        ];
    }
}

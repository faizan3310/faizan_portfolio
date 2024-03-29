<?php

namespace app\controllers;

use Yii;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\controllers\BackendController;
use app\models\Users;
use yii\filters\AccessControl;
use app\components\AccessRule;
use app\models\Sale;

class DefaultController extends BackendController
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                 'ruleConfig'=>[
                    'class'=> AccessRule::className()
                ],
                'only' => ['dashboard'],
                'rules' => [
                    [
                        'actions' => ['dashboard'],
                        'allow' => true,
                         'roles' => [Users::ROLE_ADMIN],
                    ],
                ],
            ],
            
        ];
    }

   

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionDashboard()
    {
        
         if(isset($_GET['status'])){
            $st_con = "AND invoice_status=".$_GET['status'];
            $ppd_sale = Sale::find()->where('invoice_status IN ("'.$_GET['status'].'")')->all();
        }else{
            $ppd_sale = Sale::find()->where('invoice_status IN ("pending","process","delivered")')->all();
        }

        $company = \app\models\Company::findOne(1);
       $pending =  Yii::$app->db->createCommand("SELECT COUNT(id) as c FROM sale WHERE invoice_status='pending' ")->queryOne();
       $process =  Yii::$app->db->createCommand("SELECT COUNT(id) as c FROM sale WHERE invoice_status='process' ")->queryOne();
       $delivered =  Yii::$app->db->createCommand("SELECT COUNT(id) as c FROM sale WHERE invoice_status='delivered' ")->queryOne();
       $completed =  Yii::$app->db->createCommand("SELECT COUNT(id) as c FROM sale WHERE invoice_status='completed' ")->queryOne();

        $totalproduct =  Yii::$app->db->createCommand("SELECT COUNT(id) as c FROM product")->queryOne();

       

        

        return $this->render('dashboard',['company'=>$company,'pending'=>$pending,'process'=>$process,'delivered'=>$delivered,'completed'=>$completed,'totalproduct'=>$totalproduct,'ppd_sale'=>$ppd_sale ]);
    }
    public function actionCompUpdate($id){
        $model = \app\models\Company::findOne($id);
        if($model->load(Yii::$app->request->post())){
            $model->save();
            return $this->redirect('dashboard');
             }
         return $this->render('com_update',['model'=>$model]);
       
    }
}

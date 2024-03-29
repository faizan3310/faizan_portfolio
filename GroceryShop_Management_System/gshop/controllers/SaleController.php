<?php

namespace app\controllers;

use Yii;
use app\models\Sale;
use yii\data\ActiveDataProvider;
use app\controllers\BackendController;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use app\models\SaleDetail;

/**
 * SaleController implements the CRUD actions for Sale model.
 */
class SaleController extends BackendController
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Sale models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => Sale::find()->orderBy('id','desc'),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Sale model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);
         $detail = SaleDetail::find()->where(['s_id'=>$id])->all();
          return $this->render('orders_details',['model'=>$model,'detail'=>$detail]);

       
    }

    /**
     * Creates a new Sale model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Sale();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['orders_details', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Sale model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['orders_details', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Sale model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Sale model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Sale the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Sale::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionSaledetail($s_id){
         $model = $this->findModel($s_id);
         $detail = SaleDetail::find()->where(['s_id'=>$s_id])->all();
          return $this->render('orders_details',['model'=>$model,'detail'=>$detail]);
    }

     public function actionOrederstatuschange($s_id){
         $model = $this->findModel($s_id);
         if($model->invoice_status=='pending'){
             $model->invoice_status = 'process';                                         
           }else{
              if($model->invoice_status=='process'){
               $model->invoice_status = 'delivered';
              }else{
                if($model->invoice_status=='delivered'){
                   $model->invoice_status = 'completed';
                }else{
                   $model->invoice_status = 'completed';
                }
              }
           }
           $model->save();
         
         return $this->redirect('/default/dashboard');
    }

public function actionReport(){
      $model = new \app\models\Sale;
          if (isset($_GET['Sale'])) {
            $model->attributes = $_GET['Sale'];
        } else {
            $model->from_date = date('d-m-Y');
            $model->to_date = date('d-m-Y');
        }
        return $this->render('report',['model'=>$model]);
}
    
}

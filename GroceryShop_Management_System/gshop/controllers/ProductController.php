<?php

namespace app\controllers;

use Yii;
use app\models\Product;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use app\controllers\BackendController;
/**
 * ProductController implements the CRUD actions for Product model.
 */
class ProductController extends BackendController
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
     * Lists all Product models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => Product::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Product model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Product model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Product();

        if ($model->load(Yii::$app->request->post())) {

             $image = \yii\web\UploadedFile::getInstance($model, 'file_path');
              if (!is_null($image) && !$image->hasError) {
                     if (!is_dir('uploads')) {
                                     \yii\helpers\FileHelper::createDirectory('uploads');
                             }
                     if (!is_dir('uploads/products')) {
                             \yii\helpers\FileHelper::createDirectory('uploads/products');
                     }
                    
                        $dir =  'uploads'.DIRECTORY_SEPARATOR.'products'.DIRECTORY_SEPARATOR.$model->name.'-'.$model->type;
                         if (is_dir($dir)) {
                             $objects = scandir($dir);
                             foreach ($objects as $object) {
                               if ($object != "." && $object != "..") {
                                 if (filetype($dir."/".$object) == "dir"){
                                    rrmdir($dir."/".$object);
                                 }else{ 
                                    unlink($dir."/".$object);
                                 }
                               }
                             }
                             reset($objects);
                             rmdir($dir);
                          }
                    if (!is_dir('uploads/products/'.$model->name.'-'.$model->type)) {                        
                         mkdir($dir,755,true);
                     }

                

                        Yii::$app->params['uploadPath'] = Yii::$app->basePath;
                        $ext = (explode(".", $image->name));
                        $path = 'uploads'.DIRECTORY_SEPARATOR.'products'.DIRECTORY_SEPARATOR.$model->name.'-'.$model->type.DIRECTORY_SEPARATOR.'profile.'.$image->extension;                   
                         $image->saveAs($path);
                         $model->file_path = $path;
                        
                    }
            $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Product model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post())) {
            
            $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionUpimage($id){
        $model = $this->findModel($id);
         if ($model->load(Yii::$app->request->post())) {
          $image = \yii\web\UploadedFile::getInstance($model, 'update_file_path');
              if (!is_null($image) && !$image->hasError) {
                     if (!is_dir('uploads')) {
                                     \yii\helpers\FileHelper::createDirectory('uploads');
                             }
                     if (!is_dir('uploads/products')) {
                             \yii\helpers\FileHelper::createDirectory('uploads/products');
                     }
                    
                        $dir =  'uploads'.DIRECTORY_SEPARATOR.'products'.DIRECTORY_SEPARATOR.$model->name.'-'.$model->type;
                         if (is_dir($dir)) {
                             $objects = scandir($dir);
                             foreach ($objects as $object) {
                               if ($object != "." && $object != "..") {
                                 if (filetype($dir."/".$object) == "dir"){
                                    rrmdir($dir."/".$object);
                                 }else{ 
                                    unlink($dir."/".$object);
                                 }
                               }
                             }
                             reset($objects);
                             rmdir($dir);
                          }
                    if (!is_dir('uploads/products/'.$model->name.'-'.$model->type)) {                        
                         mkdir($dir,755,true);
                     }


                

                        Yii::$app->params['uploadPath'] = Yii::$app->basePath;
                        $ext = (explode(".", $image->name));
                        $path = 'uploads'.DIRECTORY_SEPARATOR.'products'.DIRECTORY_SEPARATOR.$model->name.'-'.$model->type.DIRECTORY_SEPARATOR.'profile.'.$image->extension;                   
                         $image->saveAs($path);
                         $model->file_path = $path;
                        
                    }
                    $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
                }

                 return $this->render('update_image', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Product model.
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
     * Finds the Product model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Product the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Product::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}

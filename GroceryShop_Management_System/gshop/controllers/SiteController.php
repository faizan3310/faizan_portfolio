<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\UserCart;
use app\models\Product;
use app\models\Sale;
use app\models\SaleDetail;

class SiteController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout','Checkout'],
                'rules' => [
                    [
                        'actions' => ['logout','checkout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
              return $this->render('index',[
           
    ]);
    }

    /**
     * Login action.
     *
     * @return Response|string
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
          Yii::$app->session->set('user',['name'=>(Yii::$app->user->identity->first_name.' '.Yii::$app->user->identity->last_name),'id'=>Yii::$app->user->id]);

            if(Yii::$app->user->identity->role==1){
                 return $this->redirect('/default/dashboard');
            }else{
               // return $this->goBack();
                return $this->redirect('/');
            }            
        }

        $model->password = '';
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    public function actionRegister(){
      if(isset($_POST['email'])){
          $user = \app\models\Users::find()->where(['username'=>$_POST['email']])->one();
          if($user){
            Yii::$app->session->setFlash('error','Username already taken');
            return $this->redirect(Yii::$app->request->referrer);
          }else{
            $model = new \app\models\Users;
            $model->username = $_POST['email'];
            $model->role=2;
            $model->first_name = $_POST['fn'];
            $model->last_name = $_POST['ln'];
            $model->email = $_POST['email'];
            $model->mobile = $_POST['mobile'];
            $model->password_hash = Yii::$app->security->generatePasswordHash($_POST['mainpass']);
            $model->created_on = date('Y-m-d H:i:s');
            $model->save(false);
            Yii::$app->session->setFlash('success','Your account has been successfully created now plz login');
                 return $this->redirect('thankyou');
          }
      }
      return $this->render('register');
    }

    public function actionThankyou(){
      return $this->render('thankyou');
    }

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {

        Yii::$app->user->logout();
        
       
       return $this->redirect('index');
        
        
    }

    public function actionAlogout(){
      
       Yii::$app->session->remove('user');
   
        return $this->redirect('index');
    }

    /**
     * Displays contact page.
     *
     * @return Response|string
     */
    public function actionContact()
    {
       
        return $this->render('contact');
    }

    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    public function actionCategory()
    {
        if(isset($_GET['category_id'])){
          $category = $_GET['category_id'];
          $c_sql = " WHERE type='".$category."'";
        }else{
          $c_sql = '';
        }
        $product = Yii::$app->db->createCommand("SELECT * FROM product $c_sql ")->queryAll();
        return $this->render('category',['product'=>$product]);
    }

     public function actionReview()
    {
        return $this->render('review');
    }

     public function actionBlog()
    {
        return $this->render('blog');
    }

    public function actionCheckout(){
      if(Yii::$app->user->id){
        $cartproduct = UserCart::find()->where(['user_id'=>Yii::$app->user->id])->all();
        if(isset($_POST['address']) && isset($_POST['tc']) && isset($_POST['total_bill'])){
          if($_POST['total_bill']>0){

          
          $model = new Sale;
          $model->address = $_POST['address'];
          $model->invoice_no = Sale::getinvoceno();
          $model->invoice_date = date('Y-m-d');
          $model->user_id = Yii::$app->user->id;
          $model->total_bill = $_POST['total_bill'];
          if($model->total_bill>=500){
             $d_amt = 0;
          }else{
            $d_amt=  30; 
            } 
            $model->delivery_charge = $d_amt;
          $model->net_amt = $model->total_bill+$model->delivery_charge;
          $model->invoice_status = 'pending';
          $model->save();
          foreach ($cartproduct as $key => $value) {
            $detail = new SaleDetail;
            $detail->s_id = $model->id;
            $detail->pro_id = $value->product_id;
            $detail->qty = $value->qty;
            $detail->rate = $value->rate;
            $detail->amount = $value->amount;
            $detail->save();
          }

          Yii::$app->db->createCommand("DELETE FROM user_cart WHERE user_id = ".$model->user_id)->execute();
           Yii::$app->session->setFlash('success','Your order has been successfully submitted. Please see My Order History for order tracking');
          return $this->redirect('/site/myorder');

          }else{
            Yii::$app->session->setFlash('error','Sorry your cart is empty please buy minimum one item for checkout');
            return $this->redirect(Yii::$app->request->referrer);
          }
        }
        return $this->render('checkout',['cartproduct'=>$cartproduct]);
      }else{
        //return $this->redirect(Yii::$app->request->referrer);
         return $this->redirect('/site/register');
      }
      
    }

    public function actionMyorder(){
      if(Yii::$app->user->id){
        $myorder = Sale::find()->where(['user_id'=>Yii::$app->user->id])->all();
        return $this->render('myorders',['myorder'=>$myorder]);
      }else{
        return $this->redirect('/site/register');
      }
    
    }

    public function actionOrderdetails($s_id){
      if(Yii::$app->user->id){
        $myorder = Sale::findOne($s_id);
        $detail = SaleDetail::find()->where(['s_id'=>$s_id])->all();
        return $this->render('myorders_details',['myorder'=>$myorder,'detail'=>$detail]);
      }else{
        return $this->redirect('/site/register');
      }
    
    }

    

     public function actionAdditemtocart($p_id){
      if(Yii::$app->user->id){
          $model = new UserCart;
          $pd = Product::findOne($p_id);
          $model->user_id = Yii::$app->user->id;
          $model->product_id = $p_id;
          $model->qty = 1;
          $model->rate = $pd->rate;
          $model->amount = $model->rate;
          $model->save();
          return $this->redirect(Yii::$app->request->referrer);
      }else{
        return $this->redirect('/site/register');
      }    
    }

    public function actionManageorderitem($uc_id, $action){
      $model = UserCart::findOne($uc_id);
      $old_qty = $model->qty;
      $delete_item = false;
      if($action=='p'){
        $model->qty = $old_qty+1;
      }else{
        if($action=='n'){
          $model->qty = $old_qty-1;
          if($model->qty<=0){
            $delete_item = true;
          }
        }else{
          $delete_item = true;
        }
      }

      if($delete_item==true){
       $model->delete();
      }else{
        $model->amount = $model->qty*$model->rate;
        $model->save();
      }
      return $this->redirect(Yii::$app->request->referrer);
      
    }
    

  

   

   

    /*public function actionFblogin(){
        $fb = new \Facebook\Facebook([
  'app_id' => '323119102143933',
  'app_secret' => '1951e27eaa0a8d03dac9476af716f9dd',
  'default_graph_version' => 'v2.10',
  ]);

$helper = $fb->getRedirectLoginHelper();
$loginUrl = $helper->getLoginUrl('http://localhost/site/login');
$acctoken = $helper->getAccessToken();
 Yii::$app->session->set('access_token',$acctoken);

 $response = $fb->get('/me',Yii::$app->session->get('access_token'));
  $me = $response->getGraphUser();
Yii::$app->session->set('user',$me);

return $this->redirect('index');
    }*/
}

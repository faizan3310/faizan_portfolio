<?php

namespace app\models;
use Yii;

class Users extends \yii\db\ActiveRecord implements \yii\web\IdentityInterface
{
   const ROLE_MANAGER = 2;
    const ROLE_ADMIN = 1;
   
   
    public $accessToken;

   public static function tableName() {
        return 'users';
    }

     /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['username', 'password_hash', 'email', 'role', 'is_active'], 'required'],
            [['role', 'is_active'], 'integer'],
            [['username', 'password_hash', 'email', 'auth_key',  'password_reset_token'], 'string', 'max' => 255],
        ];
    }

 public function getAuthKey() {
        return $this->auth_key;
    }

    public function getId() {
        return $this->getPrimaryKey();
    }

    public function validateAuthKey($authKey) {
        return $this->getAuthKey()==$authKey;
    }

    public static function findIdentity($id) {
        return static::findOne($id);
    }

    public static function findIdentityByAccessToken($token, $type = null) {
        return static::findOne(['token'=>$token]);
    }
 public static function findByUsername($username){
        return static::findOne(['username'=>$username]);
    }
    public  function validatePassword($password){
       if (Yii::$app->security->validatePassword($password,$this->password_hash)){ // in this line will you edit $password as md5 or password hash now is this simple text 
            return true;
        }
        else {
            return false;
        }
    }

    public static function isUserAdmin($username)
{
      if (static::findOne(['username' => $username, 'role' => self::ROLE_ADMIN])){
 
             return true;
      } else {
 
             return false;
      }
 
}
public function setPassword($password){
    $this->password=Yii::$app->security->generatePasswordHash($password);
}
public function generatePasswordHash($string){
    return Yii::$app->security->generatePasswordHash($string);
}

}

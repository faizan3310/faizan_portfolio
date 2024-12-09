import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainContainer from './components/main/main';
import MainSub from './components/main/main1';
import JsxIteration from './components/utility/jsxIteration';
import JSXcondition from './components/utility/jsxCondition';
import JSXIterationCondition from './components/utility/jsxIterationCondition';
import StudentDetails from './components/utility/passingParamsToComponents';
import HandleEvents from './components/utility/handlingEvents';
import UseStateComp from './components/utility/useStateHookDemo';
import SetState from './components/utility/setStateComp';
import TwoWayDataBinding from './components/utility/twoWayDataBinding';
import StudentDetailsBinding from './components/utility/twoWayDataBindingStudentDetails';
import FormComponents from './components/utility/twoWayDataBinding_form';
import FetchData from './components/utility/fetchMethod';
import UseEffectWithDependency from './components/utility/useEffect_withDependency';
import Main_Container from './components_shopping/mainComponents';
import MainSContainer from './components_shopping/mainComponents';
import KeyboardEventsDataValidation from './components/utility/keyBoardEvent';
import ClipBoardEvent from './components/utility/clipBoardEvent';
import DebouncingTimeout from './components/utility/debouncing_Timeout';
import UseRefDOM from './components/utility/useRefDOM';
import { ProductSlider } from './components/utility/productSlideShow';
import FormTag from './components/utility/formTagDemo';
import FormikTag from './components/utility/formikTag';
import FormikTagValidateSchema from './components/utility/formikTag_validateSchema';
import FormikComponentsDemo from './components/utility/formikComponents';
import CustomNavBar from './componentProps/customNavBar';
import DataRender from './componentProps/dataRenderer';
import DataRenderComponent from './Conditional_Components/gridAndCardComponents';
import UsingCustomHook from './customHooks/hookUsing';
import UseCustomFetchHook from './customHooks/usingFetchHook';
import UseEffectMountandUnmount from './PredefinedHooks/useEffectDemo';
import UseEffectMountandUnmount2 from './PredefinedHooks/useEffectDemo2';
import ParentComponentPage from './PredefinedHooks/useContext/parentContextComp';
import ParentComponent from './PredefinedHooks/useContext/parentContextComp_practice';
import Parent from './PredefinedHooks/useContext/parentContextComp_2';
import ReducerDemo from './PredefinedHooks/useReducer/useReducer';
import {DemoClassComponent} from './classBasedComponents/classBasedComponentDemo';
import { DemoClassFeatures } from './classBasedComponents/classCompProps';
import { FormDemo } from './classBasedComponents/handlingForm';
import { ParentClassComp } from './classBasedComponents/lifeCycleDemo';

function App() {
  var productDetails = [
    {name: 'Laptop', price: 45000, discount: '20%', imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540', 'rating': '5/5'},
    {name: 'Mobile', price: 18000, discount: '10%', imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-491396-sm-s928bztpeub-thumb-539464044?$344_344_PNG$', 'rating': '4/5'},
    {name: 'Ipad', price: 70000, discount: "10%", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwq7TwnlBiXMNuXpZEvKuCrULjQAAaUVIwDw&s', 'rating': '5/5'},
    {name: 'Desktop', price: 55000, discount: "30%", imageUrl: 'https://images-cdn.ubuy.co.in/634cff01d1c31b753733d104-23-8-11.jpg', 'rating': '3/5'},
    {name: 'Charger', price: 1000, discount: '5%', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQeBfMyVmNCTigPjZtuMu2f5BDrnR-g_iTQ&s', 'rating': '4/5'},
  ]

  return (
    <div className="App">
        <Header></Header>
        {/* <MainContainer></MainContainer> */}
        {/* <MainSub></MainSub> */}
        {/* <JsxIteration></JsxIteration> */}
        {/* <JSXcondition></JSXcondition> */}
        
        {/* <StudentDetails></StudentDetails> */}
        {/* <JSXIterationCondition></JSXIterationCondition> */}

        {/* 15/10/24 Day-11 */}
        {/* <HandleEvents></HandleEvents> */}
        {/* <UseStateComp></UseStateComp> */}
        {/* <SetState></SetState> */}
   
        {/* 16/10/24 Day-12 */}
        {/* {
          <TwoWayDataBinding></TwoWayDataBinding>
        } */}
        {/* {
          <StudentDetailsBinding></StudentDetailsBinding>
        } */}

        {/*   17/10/24 Day-13  */}
        {/* <FormComponents></FormComponents> */}

        {/* 18/10/24 */}
        {/* <FetchData></FetchData> */}

        {/* 21/10/24 */}
        {/* <UseEffectWithDependency></UseEffectWithDependency> */}

        {/* <MainSContainer></MainSContainer> */}

        {/* 28/10/24 */}
        {/* <KeyboardEventsDataValidation></KeyboardEventsDataValidation> */}
        {/* <ClipBoardEvent></ClipBoardEvent>   */}

        {/* 29/10/24 */}
        {/* <DebouncingTimeout></DebouncingTimeout> */}
        {/* <UseRefDOM></UseRefDOM> */}
      
        {/* 30/10/24 */}
        {/* <ProductSlider></ProductSlider> */}

        {/* 02/11/24 */}
        {/* <FormTag></FormTag> */}
        {/* <FormikTag></FormikTag> */}

        {/* 04/11/24 */}
        {/* <FormikTag></FormikTag> */}
        {/* <FormikTagValidateSchema></FormikTagValidateSchema>   */}

        {/* 05/11/24 */}
          {/*
            In the previous component added Email, Password, Contact Number Validation using validationSchema of yup library 
          */}
        {/* <FormikTagValidateSchema></FormikTagValidateSchema>   */}
 
        {/* 06/11/24 */}
          {/* In the previous component instead of  onChange, onBlur added formik spread operator {...formik.getFieldProps("<fieldName>")} 
           */}
        {/* <FormikTagValidateSchema></FormikTagValidateSchema>   */}
        {/* <FormikComponentsDemo></FormikComponentsDemo> */}

        {/* 13/11/24 */}
        {/* <CustomNavBar themeColor="red" navTitle="Amazon" menuItems={["Home", "Our History", "Contact Us", "Our Clients"]} className="test" id="abc" name="firstComponent"></CustomNavBar>     

        <br></br> <br></br> <br></br>

        <CustomNavBar themeColor="blue" navTitle="Flipkart" menuItems={["Explore Products", "Our Eployees", "Contact Us", "Careers", "Address"]} className="test2" id="xyz" name="secondComponent"></CustomNavBar>     

        <br></br> <br></br> <br></br>

        <CustomNavBar themeColor="green" navTitle="Gmail" menuItems={["Inbox", "Sent", "Draft", "Span","Settings"]} className="test3" id="pqr" name="thirdComponent"></CustomNavBar> 

        <DataRender renderType="grid" fields={['Sr No','Name', 'Price', 'Discount', 'Image']} data={[{No:1 ,name:"Mobile", price:15000, discount: '10%',image: 'abc.png'}, {No:2 ,name:"Laptop", price:45000, discount: '15%',image: 'pqr.png'}, {No:3 ,name:"Charger", price:700, discount: '5%',image: 'xyz.png'}, {No:4 ,name:"Earbuds", price:5000, discount: '20%',image: 'abc.png'}]}></DataRender> */}

        {/* 15/11/24 */}
        {/* <DataRenderComponent fields={["Name","Price","Discount","Image","Rating"]} data={productDetails} renderType='grid' ></DataRenderComponent>

        <DataRenderComponent fields={["Name","Price","Discount","Image","Rating"]} data={productDetails} renderType='cards'></DataRenderComponent> */}

        {/* 18/11/24 */}
        {/* <UsingCustomHook></UsingCustomHook> */}
        {/* <UseCustomFetchHook></UseCustomFetchHook> */}

        {/* 19/11/24 */}
        {/* <UseEffectMountandUnmount></UseEffectMountandUnmount> */}
        {/* <UseEffectMountandUnmount2></UseEffectMountandUnmount2> */}

        {/* 20/11/24 */}
          {/* <ParentComponentPage></ParentComponentPage> */}
          {/* <ParentComponent></ParentComponent> */}
          {/* <Parent></Parent> */}

        {/* 22/11/24 */}
          {/* <ReducerDemo></ReducerDemo> */}

        {/* 25/11/24 */}
        {/* <DemoClassComponent></DemoClassComponent> */}

        {/* 26/11/24 */}
        {/* <DemoClassComponent></DemoClassComponent> */}

        {/* 28/11/24 */}
        {/* <DemoClassFeatures bgcolor="cyan" clr="orange" msg="Implementing Props in Class Based Comp"></DemoClassFeatures>   */}
         {/* <FormDemo></FormDemo>  */}

        {/* 29/11/24 */}
        <ParentClassComp></ParentClassComp>

        <Footer></Footer>     
    </div>
  );
}

export default App;

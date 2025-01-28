import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import utilDetails from './services';
import { useCookies} from 'react-cookie';
import { format } from "date-fns";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';

function MorePhotoDetails() {
    var userParams = useParams();
    // console.log(userParams);

    const [photoData, setPhotoData] = useState([]);
    const [userComment, setUserComment] = useState("");
    const [photoComments, setPhotoComments] = useState([]);
    const [isLikeClicked, updateIsLikeClicked] = useState('');
    const [isDislikeClicked, updateIsDislikeClicked] = useState('');
    const [cookie] = useCookies("userDetails");

    var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.getPhotoData;
    // apiUrl = http://localhost:8080/getPhotoDetails
    
    useEffect(() => {
        // 1. For getting more photo details
        axios.get(apiUrl, {params: userParams}).then((response) => {
            console.log(response);
            setPhotoData(response.data.photoDetails[0]);
        }).catch((error) => {
            console.log(error);
        })   

        // 2. To get the all the comments of current photo
        loadComments();
    }, [apiUrl]);

    function loadComments() {
        var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.getComments;
        // apiUrl = http://localhost:8080/getComments
        // console.log("userParams");
        // console.log(userParams);
        axios.get(apiUrl, {params: userParams}).then((commentResponse)=> {
            // console.log("commentResponse");
            // console.log(commentResponse);
            console.log(commentResponse.data[0][userParams.photoId]);
            setPhotoComments(commentResponse.data[0][userParams.photoId]);
        })
    }

    function handleCommentChange(event) {
        setUserComment(event.target.value);
        // console.log(event.target.value);
        // console.log(cookie);
    }

    function handleAddComment() {
        var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.addComments;
        // apiUrl: http://localhost:8080/add/newComment
        axios.post(apiUrl, {userName: cookie.userID,comment: userComment, photoID: photoData.photoId, date: new Date(), commentID: new Date().getTime()}).then((response) => {
            console.log(response);
            if(response.data.msg === 'Success'){
                setUserComment("");
                loadComments();
            }
        })
    }

    function handleLikeClick() {
        updateIsLikeClicked(true);
        updateIsDislikeClicked("");
        LikeDislikeValue({isLike: true});
        setPhotoData({...photoData, likes: (photoData.likes + 1), dislikes: (photoData.dislikes - 1)});
    }

    function unDohandleLikeClick() {
        updateIsLikeClicked("");
    }

    function handleDislikeClick() {
        updateIsDislikeClicked(true);
        updateIsLikeClicked("");
        LikeDislikeValue({isDislike: true});
        setPhotoData({...photoData, dislikes: (photoData.dislikes + 1), likes: (photoData.likes - 1)});
    }

    function unDohandleDislikeClick() {
        updateIsDislikeClicked("");
    }

    // console.log("Like -> " +isLikeClicked);
    // console.log("Dislike -> " +isDislikeClicked);

    function LikeDislikeValue(value) {
        value.photoId = userParams.photoId; //  passing current photo ID
        // console.log(value);
        var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.likeAndDislike;
        // apiUrl: http://localhost:8080/doLikeOrDislike       
        axios.get(apiUrl, {params: value}).then((response)=> {
            console.log(response);
        })
    }

    function handleDeleteComment(commentID){
        console.log(commentID);
        console.log("Delete got invoked");

        var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.deleteComment;
        // apiUrl: 'http://localhost:8080/deleteComment'
        axios.post(apiUrl, {photoID: userParams.photoId, userName: cookie.userID, commentID: commentID}).then((response)=>{

            console.log(response);
            if(response.data.msg === 'Success'){
                loadComments();
            }
        });
        // loadComments();
    }
    return(

        <moreDetailsContainer>

            <h2>Explore More photo details</h2>

            <div className='mainContainer'>
                <div>
                    <ul className='moreDetailsBlock'>
                        <li className='imageDimension'>
                            <img src={photoData.url} alt="product img" />
                        </li>
                        <li>
                            <h4>{photoData.title}</h4>
                        </li>
                        <li>Category - {photoData.category}</li>
                        <li>Description - {photoData.description}</li>
                        <li>
                            Rating - {photoData.rating}
                            <Rating name="half-rating" defaultValue={photoData.rating} precision={0.5} />
                        </li>
                        <li>
                            {isLikeClicked === true ? <ThumbUpAltIcon onClick={unDohandleLikeClick}/>: ""}
                            {isLikeClicked === '' ? <ThumbUpOffAltIcon onClick={handleLikeClick}/>: ""}
                            Likes - {photoData.likes}
                        </li>
                        <li>
                            {isDislikeClicked === '' ? <ThumbDownOffAltIcon onClick={handleDislikeClick}/>: ""}
                            {isDislikeClicked === true ? <ThumbDownAltIcon  onClick={unDohandleDislikeClick}/>: ""}
                            Dislikes - {photoData.dislikes}</li>
                        <li>
                            <textarea rows={5} cols={40} placeholder='Add your comments' maxLength={150} onChange={handleCommentChange} value={userComment}></textarea> <br/>
                            <Button onClick={handleAddComment}>Add a comment</Button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Comments</h3>
                    <ul className='commentDetailsBlock'>
                    {
                        photoComments.map((item) => {
                            // return <li><b>{item.userName} </b> - {item.comment}   {item.date} </li>
                            return <li style={{ display: "flex", gap: "15px" }}>
                                        <b>{item.userName} -</b>  
                                        <span>{item.comment}</span>
                                        {/* <span>{item.date}</span> */}
                                        <span>{format(new Date(item.date), "MMMM dd, yyyy, hh:mm a")}</span> <span onClick={() => handleDeleteComment(item.commentID)}> <DeleteIcon/> </span>
                                    </li>

                        })
                    }
                    </ul>
                </div>

            </div>

            <Link to={'/userPage'}>Back</Link>

        </moreDetailsContainer>

    )    
}
export default MorePhotoDetails;
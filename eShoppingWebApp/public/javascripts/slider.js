

$(()=>{

    axios.get('https://fakestoreapi.com/products').then(resp => {
        console.log(resp);
        $.each(resp.data ,(index,val)=>{
            if(index < 20){
                $(`<div class ="imgcontainer shadow p-2 rounded-3">
                <img src= '${val.image}' width=230 height=200 class = "mt-1 border
                border-1 p-1"/>
                <div class= "mt-2 fw-bold"> Price - ${(val.price).toLocaleString("en-IN", { style: "currency", currency: "INR" })}</div>
                `).appendTo('#slide');
            }
    })
    }).catch(err=>console.log(err)); 
    var count = 0;
    $('#right').on('click',function(){
        $("#left").show();
        if(count > 3500){
            $('#right').hide();
        }
        count = count + 254.5;
        document.getElementById("slide").style.left = `${-count}px`;
    
    })
    $('#left').on('click',function(){
    
        if(count < 300){
            $('#left').hide();    
        }
        $('#right').show();
        count = count - 254.5;   
        document.getElementById("slide").style.left = `${-count}px`;
    })

})
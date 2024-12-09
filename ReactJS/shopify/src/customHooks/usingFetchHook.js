import { useCommonFetch } from "./fetchCommonHook";

function UseCustomFetchHook () {
    var url = "https://isro.vercel.app/api/spacecrafts"
    var apiResponse = useCommonFetch(url);
    console.log(apiResponse);

    return(
        <div>
            {
                apiResponse.spacecrafts.map((Craft) => (
                    <div>{Craft.name}</div>
                ))
            }
            Hello 
        </div>
    )
}
export default UseCustomFetchHook;
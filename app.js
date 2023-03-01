"use strict";
const $search = $("#search");
const giphyAddress = "http://api.giphy.com/v1/gifs/search";
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

async function getGifGiphy(word){
  const callGiphy = await axios.get(
    `${giphyAddress}`,
    { params: { q:word, api_key: giphyApiKey } }
    );
  console.log(callGiphy, "We called giphy with this");
  const gifOne = callGiphy.data.data[0].images.original.url;
  console.log(gifOne);
  return gifOne;
}









/**getFormData: Gets search word and resets rearch input in DOM */
function getFormData (){
  const $inputVal = $search.val();
  $search.val("");
  return $inputVal;
}

/**
 * handleClick: On form submit, add img to page
 * */
async function handleClick(evt){
  evt.preventDefault();
  console.log('handleClick ran');
  const $searchVal = getFormData();
  const image = await getGifGiphy($searchVal);

  //append image
const $imageDiv = $(".img-party");
$imageDiv.append(`<img src=${image}> </img>`);


}
$("form").on("submit", handleClick);
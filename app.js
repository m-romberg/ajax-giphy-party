"use strict";
const $search = $("#search");
let $searchVal;


async function getGifGiphy(word = $searchVal){

}









/**getFormData: Gets search word and resets rearch input in DOM */
function getFormData (){
  $searchVal = $search.val();
  $search.val("");
  return $searchVal
}

/**
 * handleClick: On form submit, add img to page
 * */
function handleClick(evt){
  evt.preventDefault();
  console.log('handleClick ran');

  //append image

}
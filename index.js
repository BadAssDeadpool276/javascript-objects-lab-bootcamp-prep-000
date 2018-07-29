var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value; 
  return object;
}
function deleteFromObjectbyKey(object,key){
  newObj = Object.assign(object);
  delete newObj.key;
  return newObj;
}
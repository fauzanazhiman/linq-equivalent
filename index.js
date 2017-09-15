Array.prototype.Select = function(_FUNCTION_X){
	return this.map(_FUNCTION_X);
}

Array.prototype.Where = function(_FUNCTION_X){
	return this.filter(_FUNCTION_X);
}

Array.prototype.All = function(_FUNCTION_X){
	return this.every(_FUNCTION_X);
}

Array.prototype.Any = function(_FUNCTION_X){
	return this.every(_FUNCTION_X);
}

//Array.prototype.Aggregate = function(_FUNCTION_XY){
//	return this.reduce(_FUNCTION_XY);
//}

Array.prototype.OrderBy = function(_FUNCTION_XY){
	return this.sort(_FUNCTION_XY);
}

Array.prototype.Take = function(_TAKE_COUNT){
	return this.slice(0, _TAKE_COUNT);
}

Array.prototype.Count = function(){
	return this.length;
}

exports = true;
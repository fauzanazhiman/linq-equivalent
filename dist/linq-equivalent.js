function DefaultEqualityComparer(a, b) {
    return a === b || a.valueOf() === b.valueOf();
};
 
function DefaultSortComparer(a, b) {
    if (a === b) return 0;
    if (a == null) return -1;
    if (b == null) return 1;
    if (typeof a == "string") return a.toString().localeCompare(b.toString());
    return a.valueOf() - b.valueOf();
};
 
function DefaultPredicate() {
    return true;
};

function DefaultSelector(t) {
    return t;
}; 

Array.prototype.Select = function(selector){
	return this.map(selector);
}

Array.prototype.Where = function(selector){
	return this.filter(selector);
}

Array.prototype.All = function(selector){
	return this.every(selector);
}

Array.prototype.Any = function(selector){
	return this.some(selector);
}

Array.prototype.Aggregate = function(aggregator){
	return this.reduce(aggregator);
}

Array.prototype.OrderBy = function (selector, comparer) {
    comparer = comparer || DefaultSortComparer;
    var arr = this.slice(0);
    var fn = function (a, b) {
        return comparer(selector(a), selector(b));
    };

    arr.ThenBy = function (selector, comparer) {
        comparer = comparer || DefaultSortComparer;
        return arr.OrderBy(DefaultSelector, function (a, b) {
            var res = fn(a, b);
            return res === 0 ? comparer(selector(a), selector(b)) : res;
        });
    };

    arr.ThenByDescending = function (selector, comparer) {
        comparer = comparer || DefaultSortComparer;
        return arr.OrderBy(DefaultSelector, function (a, b) {
            var res = fn(a, b);
            return res === 0 ? -comparer(selector(a), selector(b)) : res;
        });
    };

    return arr.sort(fn);
}; 

Array.prototype.OrderByDescending = function (selector, comparer) {
    comparer = comparer || DefaultSortComparer;
    return this.OrderBy(selector, function (a, b) { return -comparer(a, b) });
}; 

Array.prototype.Take = function(c){
	return this.slice(0, c);
}

Array.prototype.Skip = function (c) {
    return this.slice(c);
}; 

Array.prototype.Count = function(){
	return this.length;
}

Array.prototype.Min = function (selector) {
    selector = selector || DefaultSelector;
    var l = this.length;
    var min = selector(this[0]);
    while (l-- > 0)
        if (selector(this[l]) < min) min = selector(this[l]);
    return min;
};  

Array.prototype.Max = function (selector) {
    selector = selector || DefaultSelector;
    var l = this.length;
    var max = selector(this[0]);
    while (l-- > 0)
        if (selector(this[l]) > max) max = selector(this[l]);
    return max;
};   

Array.prototype.FirstOrDefault = function (predicate, def) {
    var l = this.length;
    if (!predicate) return l ? this[0] : def == null ? null : def;
    for (var i = 0; i < l; i++)
        if (predicate(this[i], i, this))
            return this[i];
    return def == null ? null : def;
}; 

Array.prototype.LastOrDefault = function (predicate, def) {
    var l = this.length;
    if (!predicate) return l ? this[l - 1] : def == null ? null : def;
    while (l-- > 0)
        if (predicate(this[l], l, this))
            return this[l];
    return def == null ? null : def;
};

Array.prototype.Contains = function (o, comparer) {
    comparer = comparer || DefaultEqualityComparer;
    var l = this.length;
    while (l-- > 0)
        if (comparer(this[l], o) === true) return true;
    return false;
}; 

Array.prototype.Distinct = function (comparer) {
    var arr = [];
	comparer = comparer || DefaultEqualityComparer;
    var l = this.length;
    for (var i = 0; i < l; i++) {
        if (!arr.Contains(this[i], comparer))
            arr.push(this[i]);
    }
    return arr;
};

Array.prototype.Union = function (arr) {
    return this.concat(arr).Distinct();
};  

Array.prototype.Intersect = function (arr, comparer) {
    comparer = comparer || DefaultEqualityComparer;
    return this.Distinct(comparer).Where(function (t) {
        return arr.Contains(t, comparer);
    });
};

Array.prototype.Except = function (arr, comparer) {
    if (!(arr instanceof Array)) arr = [arr];
    comparer = comparer || DefaultEqualityComparer;
    var l = this.length;
    var res = [];
    for (var i = 0; i < l; i++) {
        var k = arr.length;
        var t = false;
        while (k-- > 0) {
            if (comparer(this[i], arr[k]) === true) {
                t = true;
                break;
            }
        }
        if (!t) res.push(this[i]);
    }
    return res;
}; 

Array.prototype.Zip = function (arr, selector) {
    return this
        .Take(Math.min(this.length, arr.length))
        .Select(function (t, i) {
            return selector(t, arr[i]);
    });
};  

Array.prototype.IndexOf = Array.prototype.indexOf || function (o, index) {
    var l = this.length;
    for (var i = Math.max(Math.min(index, l), 0) || 0; i < l; i++)
        if (this[i] === o) return i;
    return -1;
};  

Array.prototype.LastIndexOf = Array.prototype.lastIndexOf || function (o, index) {
    var l = Math.max(Math.min(index || this.length, this.length), 0);
    while (l-- > 0)
        if (this[l] === o) return l;
    return -1;
}; 

Array.prototype.Remove = function (item) {
    var i = this.IndexOf(item);
    if (i != -1)
        this.splice(i, 1);
}; 

Array.prototype.RemoveAll = function (predicate) {
    var item;
    var i = 0;
    while (item = this.FirstOrDefault(predicate)) {
        i++;
        this.Remove(item);
    }
    return i;
}; 

exports = true;
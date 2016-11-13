var objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10),
    prop7: function(){
        console.log('hi');
    }
};

var objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    },
    prop7: function(){
        console.log('hi');
    }
};



function deepEqual (objA, objB) {
    if(objA == objB) return true;

    if(objA instanceof Date && objA instanceof Date){
        if(objA.valueOf() != objB.valueOf()) return false;
    }

    if(Array.isArray(objA) && Array.isArray(objB)){
        if(objA.length != objB.length) return false;
        for(var i = 0; i < objA.length; i++){
            if(objA[i] != objB[i]){
                if(!deepEqual(objA[i], objB[i])) return false;
            }
        }
    }
    
    if(typeof objA == 'object' &&  typeof objB == 'object'){
        for(propertry in objA){
            if(!objB.hasOwnProperty(propertry)) return false;
            
            if(objB[propertry] != objA[propertry]){
                if(!deepEqual(objB[propertry], objA[propertry])) return false;
            }
        }
    }
    
    return true;
}


try{
    console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true
}catch(e){
    console.log(e.message);
}
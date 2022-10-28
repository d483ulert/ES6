
const healthObj = {
    showHealth: function() {
        console.log("오늘 운동시간:" + this.helthTime);
    },
    setHealth: function(newTime){
        this.helthTime = newTime
    }
};

const healthChildObj = {
    getAge: function(){
        return this.age;
    }
}

Object.setPrototypeOf(healthChildObj,healthObj);

const childObj = Object.setPrototypeOf({
    age: 22
}, healthObj);

childObj.setHealth("11:50");
childObj.setHealth();



console.log("childobj is ", childObj);
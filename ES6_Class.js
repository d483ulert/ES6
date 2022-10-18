

// function Health(name){
//     this.name = name;
// }

// Health.prototype.showHealth = function(){
//     console.log(this.name + "님안녕");
// }
// const h = new Health("crong");

// h.showHealth;




class Health{
    constructor(name,lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth(){
        console.log("안녕하세요."+this.name);
    }
}
const myHealth = new Health("crong");
myHealth.showHealth();
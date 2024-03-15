       function user() {
           console.log('s')
       }
       let user2 = new user
       //    console.log(user2.__proto__, user.prototype)
       //    console.log(user2.__proto__.__proto__);
       console.log(Object.prototype === user.prototype.__proto__);


       //    console.log(Object.prototype == user2.__proto__.__proto__)
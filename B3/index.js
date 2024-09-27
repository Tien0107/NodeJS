import EventEmitter from "node:events"; //evenemiiter

const eventEmitter = new EventEmitter();

// eventEmitter.on("end", () => {
//     console.log("done !");
// });
// eventEmitter.emit("end");

eventEmitter.on("end", (number, x) => {
  console.log(`done ${number} ${x} !!`);
});
eventEmitter.emit("end", 2, 3);

//callback funtion , bai hoc buoi 3
function sum(a, b, fun) {
  let c = 0;
  setTimeout(() => {
    c = a + b;
    fun(c);
  }, 0);
}
let c = sum(1, 4, function (data) {
  console.log(data);
});


function getUserID() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
    let userID = 10;
    resolve(userID);
    })
  });
}
function getPostUser(userID) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      let post = { id: 12, name: "hihi" };
      resolve(post);
    });
  });
}
function getCommentPostUser(post) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      let comment = { id: 13, name: "haha" };
      resolve(comment);
    });
  });
}

// getUserID();
// getPostUser(userID);
// getCommentPostUser(post);

let abc = new Promise((resolve, reject) => {
  setTimeout(() => {
    getUserID((data) => {
      resolve(data);
    });
  }, 0);
});
abc
  .then((data) => {
    getPostUser(data, function (post) {
      console.log("User:", data);
      console.log("Post:", post);
      return post;
    });
  })
  .then((post) => {
    getCommentPostUser(post, function (comment) {
      console.log("Comment:", comment);
    });
  });

async function xyz() {
  let uID = await getUserID();
  let posts = await getPostUser(uID);
  let cmt = await getCommentPostUser(posts);
  return cmt;
}
xyz().then((data) =>{
  console.log(data);
});

Promise.adl([getUserID(),  getPostUser(), getCommentPostUser()].then((data) => {
  console.log(data);

}) );



// const request = axios.create({
//   baseURL: 'https://api.github.com'
// })



// get user data
// request.get('/users/djrenot')
//   .then(res => res.data)
//   .then(console.log)

// get user repos
// request.get('/users/djrenot/repos')
//   .then(res => res.data)
//   .then(repos => {
//     let list = document.getElementById('list-repos')
//     // console.log(repos);
//     console.log(list);
//     for(let i=0;i<repos.length;i++){
//       // console.log(repos[i].name)
//       let list_item = document.createElement("LI");
//       list_item.innerHTML = repos[i].name;
//       list.appendChild(list_item);
//     }
//   })

// just use fetch
let fetch_repo = await fetch('https://api.github.com/users/djrenot/repos')
let repo_list = await fetch_repo.json();
// for(let i=0;i<repo_list.length;i++){
//   // console.log(repo_list[i].name)
//   let list_item = document.createElement("LI");
//   list_item.innerHTML = repo_list[i].name;
//   list.appendChild(list_item);
// }


  // scroll to top of the page
function scroll_top() {
  window.scrollTo(0, 0);
};
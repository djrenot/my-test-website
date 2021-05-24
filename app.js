const request = axios.create({
  baseURL: 'https://api.github.com'
})

// get user data
// request.get('/users/djrenot')
//   .then(res => res.data)
//   .then(console.log)

// get user repos
request.get('/users/djrenot/repos')
  .then(res => res.data)
  .then(repos => {
    let list = document.getElementById('list-repos')
    // console.log(repos);
    console.log(list);
    for(let i=0;i<repos.length;i++){
      // console.info('this is' + i)
      // console.log(repos[i].name)
      let list_item = document.createElement("LI");
      // console.log(typeof(repos[i].name));
      list_item.innerHTML = repos[i].name;
      list.appendChild(list_item);
    }
  })
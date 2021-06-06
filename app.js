// get user data
async function github_repo(){
  let fetch_repo = await fetch('https://api.github.com/users/djrenot/repos')
  let repo_list = await fetch_repo.json();
  let list = document.getElementById('list-repos')

  for(let i=0;i<repo_list.length;i++){
    // console.log(repo_list[i].name)
    let list_item = document.createElement("LI");
    list_item.innerHTML = repo_list[i].name;
    list.appendChild(list_item);
  }
}
github_repo();


// scroll to top of the page
function scroll_top() {
  window.scrollTo(0, 0);
};
// get user data
async function github_repo(){
  let fetch_repo = await fetch('https://api.github.com/users/djrenot/repos')
  let repo_list = await fetch_repo.json();
  let list = document.getElementById('list-repos');

  let repo_num = document.getElementById('repo-num');
  repo_num.innerHTML = repo_list.length;

  for(let i=0;i<repo_list.length;i++){
    // console.log(repo_list[i].name)
    let list_item = document.createElement("LI");
    list_item.innerHTML = '<a href="' + repo_list[i].html_url + '" target=_blank>' + repo_list[i].name + '</a>' ;
    list.appendChild(list_item);
  }
}
github_repo();


// scroll to top of the page
function scroll_top() {
  window.scrollTo(0, 0);
};
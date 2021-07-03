module.exports = (ulClass, userName, repoCount) => {
    const ulList = document.getElementById(ulClass);
    const apiTemplate = "https://api.github.com/users/";
    const apiUrl = `${apiTemplate}${userName}/repos`;
    console.log("hey");
    fetch(apiUrl)
        .then(response => response.json())
        .then(function (repos) {
        console.log(repos);
        if (repos.length <= 0) {
            console.log("repoli: no repos found");
        } else {
            if (repos.message === "Not Found") {
                console.log("repoli: user and repos not found");
            } else {
                repos = repos.map(item => {
                    console.log(item);
                    console.log(ulList);
                    ulList.insertAdjacentHTML("afterbegin", `<div class="repo_card">
                        <div class="repo_name">${item.name}</div>
                        <div class="repo_description">${item.description}
                        <div class="repo_details">
                            <div class="repo_star">
                                Stars: 
                                ${item.watchers}
                            </div>
                            <div class="repo_fork">
                                Forks: 
                                ${item.forks}
                            </div>
                        </div>
                    </div>`);
                })
                }
            }
        });
        
};


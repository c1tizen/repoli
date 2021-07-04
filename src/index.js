module.exports = (ulId, userName, basicStyle = true) => {
    const ulList = document.getElementById(ulId);
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
                        <a href="https://www.github.com/${userName}/${item.name}" target="_blank" class="repo_name">${item.name}</a>
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
    if (basicStyle) {
        document.head.insertAdjacentHTML("beforeend", `<style>
            .repo_card {
                padding: 10px;
                margin: 10px;
                text-align: left;
                width: 400px;
                display: flex;
                flex-direction: column;
                border: 1px solid gray;
                border-radius: 10px;
                -webkit-box-shadow: 2px 2px 7px -2px rgba(0,0,0,0.15); 
                box-shadow: 2px 2px 7px -2px rgba(0,0,0,0.15); 
            }
            .repo_name {
                font-weight: 700;
                text-decoration: none;
                color: black;
            }
            .repo_star {
                float: left;
                padding-right: 10px;
            }
        </style>`);
    }
};
//const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("username");
const resultDiv = document.getElementById("result");
const repoList = document.getElementById("repo");

//버튼은 아직 안됨
const ButtonDiv = document.getElementById("profile-button");
const popuDiv = document.getElementById("populate");
const setList = document.getElementById("setting");


usernameInput.addEventListener("keydown", async (event) => {
  if(event.key === "Enter"){

    if (username) {
      const username = usernameInput.value;
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        




///-------------------------------------------------------------------------------


        //레포 출력하는 부분
        //html_url : "https://github.com/OH-jewoong/test"
        //새로운 값이 주어지면 지우고 새로 만드는 거임!!

        const response_repo = await fetch(`https://api.github.com/users/${username}/repos`);
        const repositories = await response_repo.json();
        //console.log(repositories)

        repoList.innerHTML = "";
        repositories.forEach((repo) => {
          console.log(repo);
          const li = document.createElement("li");
          li.innerHTML = `
          <div class = "repo-blocks">
            <a href="${repo.html_url}" target="_blank" class = "hyper-repo">${repo.name}</a>
            <div class ='repo-populate'>
              <div class = "singular-box" style="background-color:#366AE6"> stars : ${repo.stargazers_count}</div>            
              <div class = "singular-box" style="background-color:#9DA6AF"> watchers: ${repo.watchers}</div>
              <div class = "singular-box" style="background-color:#17AE61"> forks: ${repo.forks}</div>
            </div>
          </div>`;
        
          repoList.appendChild(li);
        });

        //   const li = document.createElement("li");
        //   li.textContent = repo.name;
        //   //
        //   repoList.appendChild(li);
        // });          

///-------------------------------------------------------------------------------

        if (userData.message === "Not Found") {
          resultDiv.innerHTML = "User not found.";
        } else {
          resultDiv.innerHTML = `
            <img src="${userData.avatar_url}" alt="Profile Picture" class="user-picture">
            <button class = "profile-button" id="button"> 
              <a href="${userData.html_url}" target="_blank" class="website">View profile</a>
            </button>
          `;

          popuDiv.innerHTML = `
          <div class = "right-top">
            <div class = "singular-box" style="background-color:#366AE6"> public repos : ${userData.public_repos}</div>
            <div class = "singular-box" style="background-color:#9DA6AF"> public gists : ${userData.public_gists}</div>
            <div class = "singular-box" style="background-color:#17AE61"> followers : ${userData.followers}</div>
            <div class = "singular-box" style="background-color:#1C91A9"> following : ${userData.following}</div>
          </div>`;


          setList.innerHTML = 
          // <div class = "right-buttom"> 이게 원해 하려했더ㅏㄴ 코드
          //   <div class = "setting-box"> Company : ${userData.company}</div>
          //   <div class = "setting-box"> Website/blog : ${userData.blog}</div>
          //   <div class = "setting-box"> Location : ${userData.location}</div>
          //   <div class = "setting-box"> Member Since : ${userData.created_at}</div>
          // </div>
          `
          <table class = "right-buttom">
            <th>
            <tr class = "spec-block"><td>Company : ${userData.company}</td></tr>
            <tr class = "spec-block"><td>Website/blog : ${userData.blog}</td></tr>
            <tr class = "spec-block"><td>Location : ${userData.location}</td></tr>
            <tr class = "spec-block"><td>Member Since : ${userData.created_at}</td></tr>
            </th>
          </table>

          `;


          //console.log(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        resultDiv.innerHTML = "An error occurred while fetching user data.";
      }
    } else {
      resultDiv.innerHTML = "Please enter a GitHub username.";
    }    
  }

});

//fc9477d070f9456ea386e2e78d4fd39a
let newsPopulate = document.getElementById("news");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fc9477d070f9456ea386e2e78d4fd39a",
  true
);
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach((element, index) => {
      console.log(index);
      news = `<p >
    
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">${element["title"]}</button>
  </p>
  <div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapse${index}">
    <div class="card card-body" style="width: 500px;">
       ${element["description"]}
      </div>
    </div>
  </div>
              </div>`;
      console.log(news);
      newsHtml += news;
    });
    newsPopulate.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();



// Endpoints from / in Postman

// BASEURL
// https://hannestray.no/semester-project

//ADMIN
// baseUrl + /admin

//GET - TOKEN 
// base Url + /wp-json/jwt-auth/v1/token

//GET - POSTS
// baseUrl + /wp-json/wp/v2/posts/

//GET - POST + ID
// baseUrl + /wp-json/wp/v2/posts/41

//POST A NEW POST 
// baseUrl + /wp-json/wp/v2/posts
/**{
    "title": "Headline",
    "excerpt": "Intro - for front page",
    "content": "content"
    "content": "Writtene as code ---> <pre class=\"wp-block-code\"><code>&lt;p> Paragrah written as code f&lt;/p></code></pre>",
    "categories": "Categorize",
    "tags": "tags",
    "status": "publish"
} */

//PUT - EDIT POST
// baseUrl + /wp-json/wp/v2/posts/{ID}
//body JSON raw (title, excerpt, content)

//DEL - DELETE A POST
// baseUrl + /wp-json/wp/v2/posts/{ID}
// { 
// "id": 23, 
// "force": "true",
//}
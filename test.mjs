import http from 'http';
import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());

app.get('/:language', (req, res) => {
  const { language } = req.params;
  let response;
  fetch(`https://api.github.com/search/repositories?q=Q+${language}&sort=stars&order=desc`)
  .then(response => response.json())
  .then(data => {
    response = data.items.map(item => ({
      projectId: item.id,
      name: item.name,
      url: item.html_url,
      stars: item.stargazers_count,
      owner: item.owner.login,
    }));
  }).then(() => {
    res.json(response);
  })
  .catch(error => {
    console.error('Error fetching GitHub data:', error);

  });
});


const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

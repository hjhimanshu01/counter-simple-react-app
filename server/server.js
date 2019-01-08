const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// app.listen(3000, () => {
//   console.log('Server is up!');
// });
// const path = require('path');
// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname,'..','public');
// app.use(express.static(publicPath));
// app.get('*' , (req,res) => {
//   res.sendFile(path.join(publicPath, 'index.html'))
// })
const port = 3000 || process.env.PORT;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})
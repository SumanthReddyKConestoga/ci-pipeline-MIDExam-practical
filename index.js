const express = require('express');
const app = express();

// Primary route  
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Sumanth (ID: 9040660)!' });
});

// Export for CI tests  
module.exports = app;

// Only start server when invoked directly  
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => 
    console.log(`App running on port ${port}`)
  );
}

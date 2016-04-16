import express from 'express';
import exphbs from 'express-handlebars';

import routers from './routers';

const app = express();

app.engine('handlebars', exphbs({
  defaultLayout: 'default',
  layoutsDir: './views/layouts',
  partialsDir: './views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', routers.index);
app.get('/about', routers.about);
app.get('/skillset', routers.skillset);
app.get('/objectives', routers.objectives);
app.get('/contact', routers.contact);

app.listen(8000, () => console.log('Express running on port 8000'));

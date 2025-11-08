import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { createTrailbaseProvider } from "/workspaces/trail/my-admin/ra-trailbase.js";

const TRAILBASE_URL = "https://shiny-pancake-wr9q7rxpr74x25vj4-4000.app.github.dev/"
const {dataProvider} = await createTrailbaseProvider (TRAILBASE_URL);

function App () {
return(
  <Admin dataProvider={dataProvider}>
<Resource name="authors" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
<Resource name="books" list={ListGuesser} edit={EditGuesser}show={ShowGuesser}/>
<Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
</Admin>
 );
 }
 export default App;
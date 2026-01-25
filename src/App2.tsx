import { type FormEvent, useState } from "react";
import { Loader, Placeholder } from "@aws-amplify/ui-react";
import "./App.css";
import { Amplify } from "aws-amplify";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { signOut } from "aws-amplify/auth"

Amplify.configure(outputs);
const amplifyClient = generateClient<Schema>({
  authMode: "userPool",
});

function App2() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

    async function handleSignOut() {
      await signOut()
    }


  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      
      const { data, errors } = await
        amplifyClient.queries.askBedrock(
        {
          ingredients: [formData.get("ingredients")?.toString() || ""],
          mode: formData.get("mode")?.toString(),
        });

      if (!errors) {
        setResult(data?.body || "No data returned");
      } else {
        console.log(errors);
      }
    } catch (e) {
      alert(`An error occurred: ${e}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="app-container">
    
    <button type="button" onClick={handleSignOut}>
      Sign out
    </button>

      <div className="header-container">
        <h1 className="main-header">
          App2.tsx<br/>Recommend Bands similar to..
          <br />
          <span className="highlight">Band AI</span>
        </h1>
        <p className="description">
          Simply type a few music bands
        </p>
      </div>
      <form onSubmit={onSubmit} className="form-container">
        <div className="search-container">
          <label> Ingredients: <input type="text" name="ingredients" value="doves"/> </label> 
          <label> Mode: 
            <select name="mode" defaultValue="recipe"> 
              <option value="recipe">Recipe</option> 
              <option value="bands">Bands</option> 
              <option value="movies">movies</option> 
            </select> </label>
          
          <button type="submit" className="search-button">
            Generate
          </button>
        </div>
      </form>
      <div className="result-container">
        {loading ? (
          <div className="loader-container">
            <p>Loading...</p>
            <Loader size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
          </div>
        ) : (
          result && <p className="result">{result}</p>
        )}
      </div>
    </div>
  );
}
export default App2;
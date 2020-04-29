import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [account, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [selected, setSelected] = useState(false);

  function showDetails(account) {
    return <p>{account}</p>;
  }
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/accounts`)
      .then((res) => {
        console.log(res.data);
        setAccounts(res.data);
      })

      .catch((err) => `Houston we have an error: ${err}`);
  }, []);


  return (
    <div className="accounts">
      {accounts.map((account) => {
        return (
          <div
            key={account.id}
            onClick={() => {
              showDetails();
            }}
            className="account"
          >
            <p>{account.name}</p>
            <p>{account.budget}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

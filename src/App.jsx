import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import Companies from './components/Companies.jsx';

export default function App() {
  const [applications, setApplications] = useState([]);

  const handleAddCompany = (newCompany) => {
    setApplications([...applications, newCompany]);
  };

  return (
    <div>
      <Header />
      <Input onAddApplication={handleAddCompany} />
      <Companies companies={applications} />
    </div>
  );
}

import InputField from './components/InputField/InputField';
import DataTable from './components/DataTable/DataTable';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ];

  const rows = [
    { name: 'Ajay', age: 22 },
    { name: 'Ravi', age: 24 },
  ];

  return (
    <div className="p-8 space-y-6">
      <InputField
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        helperText="This is helper text"
      />

      <InputField
        label="With Error"
        value={name}
        onChange={(e) => setName(e.target.value)}
        invalid={true}
        errorMessage="Error message"
      />

      {/* Table example */}
      <DataTable data={rows} columns={columns} />
      <DataTable data={[]} columns={columns} loading={true} />
    </div>
  );
}

export default App;

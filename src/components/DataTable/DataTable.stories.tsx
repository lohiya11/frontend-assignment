import DataTable from './DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
];

const rows = [
  { name: 'Ajay', age: 22 },
  { name: 'Ravi', age: 24 },
];

export const Default = () => (
  <DataTable data={rows} columns={columns} />
);

export const Loading = () => (
  <DataTable data={[]} columns={columns} loading={true} />
);

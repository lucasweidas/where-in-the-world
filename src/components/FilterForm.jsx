import { Form } from 'react-router-dom';
import Select from './Select';

export default function FilterForm() {
  return (
    <Form className="mt-8 md:mt-12 lg:mt-0" action="/countries">
      <Select />
    </Form>
  );
}

import { FormInput } from '../components/form';

export const FORM_FIELDS = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    component: FormInput
  },
  {
    name: 'date',
    type: 'text',
    label: 'Date',
    component: FormInput
  },
  {
    name: 'quantity',
    type: 'number',
    label: 'Quantity',
    component: FormInput
  },
  {
    name: 'price',
    type: 'text',
    label: 'Price',
    component: FormInput
  },
  {
    name: 'total',
    type: 'text',
    label: 'Total',
    component: FormInput,
    readOnly: true
  },
  {
    name: 'comission',
    type: 'text',
    label: 'Comission',
    component: FormInput
  },
  {
    name: 'currentPrice',
    type: 'text',
    label: 'Current Price',
    component: FormInput
  }
];

export const FIELDS_NAMES = ['name', 'date', 'quantity', 'price', 'comission', 'currentPrice'];

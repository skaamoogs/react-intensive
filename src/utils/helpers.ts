import { FilterField } from '../api/types';

export const createSearchQuery = (params: Record<string, string>) =>
  params ? '?' + new URLSearchParams(params).toString() : '';

export const mapFilterOptions = (options: FilterField[]) => [
  { id: 'default', name: 'All' },
  ...options.map((e) => ({ id: e.name, name: e.name })),
];

export const removeEmptyFields = (obj: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => !!v));

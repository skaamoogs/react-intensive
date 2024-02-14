export const createSearchQuery = (params: Record<string, string>) =>
  params ? '?' + new URLSearchParams(params).toString() : '';

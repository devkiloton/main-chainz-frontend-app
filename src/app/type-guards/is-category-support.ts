import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import type { CategorySupport } from '../types/support/category-support';

export const isCategorySupport = (item: Article | CategorySupport): item is CategorySupport => {
  return 'icon' in item; // specific property of CategorySupport
};

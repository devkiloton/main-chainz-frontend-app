import { MatPaginatorIntl } from '@angular/material/paginator';

const rangeLabel = (page: number, pageSize: number, length: number): string => {
  const ofWord = $localize`of` as string;
  if (length === 0 || pageSize === 0) {
    return `0 ${ofWord} ${length}`;
  }

  // eslint-disable-next-line no-param-reassign
  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

  return $localize`${startIndex + 1} - ${endIndex} ${ofWord} ${length}` as string;
};

export const getPaginatorIntl = (): MatPaginatorIntl => {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = $localize`Items per page:` as string;
  paginatorIntl.nextPageLabel = $localize`Next page` as string;
  paginatorIntl.previousPageLabel = $localize`Previous page` as string;
  paginatorIntl.getRangeLabel = rangeLabel;

  return paginatorIntl;
};

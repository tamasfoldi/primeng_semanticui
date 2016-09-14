import { MultiSortMetadata } from './multi-sort-metadata';

export interface SortEvent extends MultiSortMetadata {
  multisortmeta: MultiSortMetadata[];
}
